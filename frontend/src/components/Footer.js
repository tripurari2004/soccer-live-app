import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Soccer. All rights reserved.</p>
        <p>
          Developed by <strong>Tripurari Kumar</strong> &nbsp;|&nbsp;{" "}
          <a href="mailto:tripurarikumar18feb@gmail.com">Email</a>
        </p>
        <div className="social-links">
          <a
            href="https://github.com/tripurari2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tripurari-kumar-439132207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:tripurarikumar18feb@gamil.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
