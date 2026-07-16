import "./styles.css";
import TextRoll from "../common/TextRoll";   

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">Yuvaraj</span>

        <p className="footer-meta">
          © {year} · Directed by Human😉, Built with Agents🤖.
        </p>

        <a className="footer-top" href="#top">
          <TextRoll text= "Back to top ↑" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;