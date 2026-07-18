/**
 * whoami — résumé-grounded chat modal (terminal concept, matches the hero)
 */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import TextRoll from "../common/TextRoll";
import type { WhoamiMode } from "./WhoamiProvider";
import "./styles.css";

const WORKER_URL = "https://whoami.uvyuva.workers.dev";
const CV_URL = "/cv.pdf";
const EASE = [0.22, 1, 0.36, 1] as const;

const BOOT: Record<WhoamiMode, string> = {
  recruiter: "booting whoami · mode: recruiter · source: resume ✓",
  casual: "booting whoami · mode: casual · source: resume ✓",
};
const GREETING: Record<WhoamiMode, string> = {
  recruiter: "Ask me anything about Yuvaraj's work — I answer only from his resume.",
  casual: "hey 👋 I'm whoami — If you are Yuvaraj's friend reply with your complete name,surprise ahead😉.",
};
const CHIPS = ["AWS experience", "Standout project", "GenAI work", "Tech stack"];
const CHIP_Q: Record<string, string> = {
  "AWS experience": "What is Yuvaraj's AWS experience?",
  "Standout project": "What is his standout project?",
  "GenAI work": "What generative AI work has he done?",
  "Tech stack": "What is his tech stack?",
};

type Msg = { id: number; kind: "boot" | "intro" | "user" | "bot"; text: string };

type Props = { open: boolean; mode: WhoamiMode; onClose: () => void };

const Whoami = ({ open, mode, onClose }: Props) => {
  const reduce = useReducedMotion();
  const lenis = useLenis();
  const vipKey = new URLSearchParams(window.location.search).get("k") || "";
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [typingId, setTypingId] = useState<number | null>(null);

  const idRef = useRef(0);
  const cancelRef = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const addMessage = (kind: Msg["kind"], text = "") => {
    const id = ++idRef.current;
    setMessages((m) => [...m, { id, kind, text }]);
    return id;
  };

  const typeInto = (id: number, full: string, speed: number) =>
    new Promise<void>((resolve) => {
      setTypingId(id);
      if (reduce) {
        setMessages((m) => m.map((x) => (x.id === id ? { ...x, text: full } : x)));
        setTypingId(null);
        return resolve();
      }
      let i = 0;
      const tick = () => {
        if (cancelRef.current) {
          setTypingId(null);
          return resolve();
        }
        i += 1;
        setMessages((m) => m.map((x) => (x.id === id ? { ...x, text: full.slice(0, i) } : x)));
        if (i < full.length) {
          timers.current.push(setTimeout(tick, speed));
        } else {
          setTypingId(null);
          resolve();
        }
      };
      timers.current.push(setTimeout(tick, speed));
    });

  // boot sequence on open
  useEffect(() => {
    if (!open) return;
    cancelRef.current = false;
    clearTimers();
    idRef.current = 0;
    setMessages([]);
    setInput("");
    setReady(false);
    setBusy(true);

    (async () => {
      const bootId = addMessage("boot");
      await typeInto(bootId, BOOT[mode], 16);
      const introId = addMessage("intro");
      let greetingText = GREETING[mode];
      if (mode === "casual" && vipKey) {
        try {
          const res = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mode, vipKey, greet: true }),
          });
          const data = await res.json();
          if (data.reply) greetingText = data.reply;
        } catch {
          /* keep default greeting */
        }
      }
      await typeInto(introId, greetingText, 14);
      if (!cancelRef.current) {
        setReady(true);
        setBusy(false);
        inputRef.current?.focus();
      }
    })();

    return () => {
      cancelRef.current = true;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mode]);

  // lock background scroll (Lenis)
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  // Esc to close + focus restore
  useEffect(() => {
    if (open) {
      prevFocus.current = document.activeElement as HTMLElement;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
    prevFocus.current?.focus?.();
  }, [open, onClose]);

  // autoscroll
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;
    setInput("");
    addMessage("user", text);
    setBusy(true);

    const history = [
      ...messages
        .filter((m) => m.kind === "user" || m.kind === "bot")
        .map((m) => ({ role: m.kind === "user" ? "user" : "assistant", content: m.text })),
      { role: "user", content: text },
    ];

    const botId = addMessage("bot");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, vipKey, messages: history }),
      });
      const data = await res.json();
      await typeInto(botId, data.reply || "…", 10);
    } catch {
      setMessages((m) =>
        m.map((x) =>
          x.id === botId ? { ...x, text: "whoami is briefly unavailable(Model exhausted) — please try again." } : x
        )
      );
    } finally {
      if (!cancelRef.current) {
        setBusy(false);
        inputRef.current?.focus();
      }
    }
  };

  const onTrapKey = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled])'
    );
    if (!nodes || !nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const started = messages.some((m) => m.kind === "user");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="wa-backdrop"
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="wa-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="whoami — resume assistant"
            onKeyDown={onTrapKey}
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <span className="wa-grain" aria-hidden="true" />

            <div className="wa-head">
              <span className="wa-title">
                <span className="wa-brand">whoami</span>
                <span className="wa-mode"> · {mode}</span>
              </span>
              <button className="wa-close" onClick={onClose} aria-label="Close whoami">
                ✕
              </button>
            </div>

            <div className="wa-body" ref={listRef} aria-live="polite">
              {messages.map((m) => {
                const caret = typingId === m.id ? <span className="wa-caret">▍</span> : null;
                if (m.kind === "boot")
                  return (
                    <div key={m.id} className="wa-msg wa-boot">
                      {"> "}
                      {m.text}
                      {caret}
                    </div>
                  );
                const role = m.kind === "user" ? "you › " : "whoami › ";
                return (
                  <div key={m.id} className={`wa-msg ${m.kind === "user" ? "wa-user" : "wa-bot"}`}>
                    <span className="wa-role">{role}</span>
                    <span className="wa-text">
                      {m.text}
                      {caret}
                    </span>
                  </div>
                );
              })}

              {ready && !started && (
                <div className="wa-chips">
                  {CHIPS.map((c) => (
                    <button key={c} type="button" className="wa-chip" onClick={() => send(CHIP_Q[c])}>
                      <TextRoll text={c} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="wa-foot">
              <form
                className="wa-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
              >
                <span className="wa-prompt">{">"}</span>
                <input
                  ref={inputRef}
                  className="wa-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={busy ? "whoami is typing…" : "ask something…"}
                  maxLength={500}
                  disabled={busy}
                  aria-label="Ask whoami a question"
                />
                <button type="submit" className="wa-send" disabled={busy || !input.trim()}>
                  <TextRoll text="send ▸" />
                </button>
              </form>
              <div className="wa-note">
                <span>Grounded on resume · AI can error But not My Work</span>
                {mode === "recruiter" && (
                  <a className="wa-pdf" href={CV_URL} target="_blank" rel="noreferrer">
                    download the PDF ↓
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Whoami;