
import "./textroll.css";

const TextRoll = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={`textroll ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="textroll-char" aria-hidden="true">
          <span className="textroll-face" style={{ transitionDelay: `${i * 0.03}s` }}>
            {ch === " " ? "\u00A0" : ch}
          </span>
          <span
            className="textroll-face textroll-face--under"
            style={{ transitionDelay: `${i * 0.03}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
};

export default TextRoll;