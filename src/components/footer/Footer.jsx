import "../../styles/footer.css";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo-dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Column 1: About */}
          <div className="footer-col">
            <div className="footer-brand">
              <img src={logo} alt="Mindmine Academy Logo" className="footer-logo" />
              <div className="footer-title">
                <h3>MINDMINE ACADEMY</h3>
              </div>
            </div>
            <p>
              Mindmine Academy,
              delivering UGC approved B.Voc degrees and GNM Nursing education.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="facebook">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about-us">About Institute</a></li>
              <li><a href="/">Admissions</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/">Career</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="footer-col">
            <h3>Popular Courses</h3>
            <ul>
              <li><a href="/">GNM Nursing</a></li>
              <li><a href="/">Data Science with AI</a></li>
              <li><a href="/">Multimedia & Animation & VFX</a></li>
              <li><a href="/">Software Development & Web Technology</a></li>
              <li><a href="/">B.Voc Graduation Programs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p className="footer-item">
              <MapPin className="footer-icon" />
              Mindmine Academy,<br />
              Near Ghoraghata Railway Station,<br />
              Bagnan, Howrah – 711303
            </p>
            <p className="footer-item">
              <Phone className="footer-icon" />
              <a href="tel:7595077569">7595077569</a> / <a href="tel:6289086116">6289086116</a>
            </p>
            <p className="footer-item">
              <Mail className="footer-icon" />
              <a href="mailto:info@mindmineacademy.com">
                info@mindmineacademy.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2026 Mindmine Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
