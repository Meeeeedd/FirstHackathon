import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons
import "./PublicFooter.css"; // Importing the CSS file

function PublicFooter() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© 2024 Smart Recycling Platform</p>

        <nav aria-label="Footer navigation">
          <div className="footer-links">
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </div>
        </nav>

        <div className="footer-social" aria-label="Social media links">
          <a
            href="https://facebook.com"
            className="social-icon"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="social-icon"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="social-icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="social-icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
