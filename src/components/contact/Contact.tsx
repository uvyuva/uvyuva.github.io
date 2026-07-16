import { motion } from "framer-motion";
import "./styles.css";
import TextRoll from "../common/TextRoll";       // if you used Rule A
import RollingText from "../common/RollingText";

/* ── Edit your details here ─────────────────────────── */
const CONTACT = {
  email: "yuvaraj.work06@gmail.com",
  linkedin: "https://linkedin.com/in/yuvaraj-p-b744881aa",
  github: "https://github.com/uvyuva",
  instagram: "https://www.instagram.com/y_uva__uv",
  // Get a form ID free at formspree.io, then paste it here:
  formspreeId: "xjgnvapd",
  // Portrait you'll generate with Nano Banana, placed in /public:
  portrait: "/contact-portrait.png",
};
/* ───────────────────────────────────────────────────── */



const socials = [
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    color: "#0A66C2",
    icon: (
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 3.96 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" />
    ),
  },
  {
    label: "GitHub",
    href: CONTACT.github,
    color: "#333",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
    {
    label: "Instagram",
    href: CONTACT.instagram,
    color:
      "radial-gradient(circle at 30% 110%, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.75.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.75c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.25.07 1.6.07 4.75.07s3.5 0 4.75-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.07-1.25.07-1.6.07-4.75s0-3.5-.07-4.75c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    ),
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    color: "#EA4335",
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2 8-5.2H4l8 5.2zm0 2.3L4 9.3V18h16V9.3l-8 5.2z" />
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-top"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="contact-intro">
            <h2 className="contact-heading">
              <RollingText text="contact" /><span className="dot">.</span>
            </h2>
            <p className="contact-subtext">
              Get in touch with me via social media
              <br />
              or send me an email.
            </p>

            <div className="social-grid">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="social-item"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icon" style={{ background: s.color }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                      {s.icon}
                    </svg>
                  </span>
                  <span className="social-label">
                    <TextRoll text={s.label} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-portrait">
            <img src={CONTACT.portrait} alt="Portrait" />
          </div>
        </motion.div>

        <div className="contact-form-wrap">
          <h3 className="form-title"><RollingText text="Need Work Done. Fill It Out" /></h3>
          <form
            className="contact-form"
            action={`https://formspree.io/f/${CONTACT.formspreeId}`}
            method="POST"
          >
            <div className="form-left">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
            </div>
            <div className="form-right">
              <label className="field">
                <span>Message</span>
                <textarea name="message" rows={6} required />
              </label>
            </div>
            <button type="submit" className="form-submit">
              <TextRoll text="Get In Touch ↗" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;