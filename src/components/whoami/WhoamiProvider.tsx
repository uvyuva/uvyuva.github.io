import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import Whoami from "./Whoami";

export type WhoamiMode = "recruiter" | "casual";
type Ctx = { open: (mode: WhoamiMode) => void };

const WhoamiCtx = createContext<Ctx | null>(null);

export const useWhoami = () => {
  const ctx = useContext(WhoamiCtx);
  if (!ctx) throw new Error("useWhoami must be used within WhoamiProvider");
  return ctx;
};

export const WhoamiProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<{ open: boolean; mode: WhoamiMode }>({
    open: false,
    mode: "recruiter",
  });
  const open = useCallback((mode: WhoamiMode) => setState({ open: true, mode }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  return (
    <WhoamiCtx.Provider value={{ open }}>
      {children}
      <Whoami open={state.open} mode={state.mode} onClose={close} />
    </WhoamiCtx.Provider>
  );
};