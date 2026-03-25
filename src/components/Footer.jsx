import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const NAV = [
  ['/skills', 'Skills'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
  ['/certifications', 'Certifications'],
  ['/about', 'About'],
];

// ── Replace with your actual CV/resume URL ──
const CV_URL = 'https://drive.google.com/file/d/12UZk9jtqPxFpATvYHSe4qXv9NR5Vcmz2/view?usp=sharing';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Sanekha K K</span>
          <p className="footer-tagline">
            Full stack developer & coding tutor. Building elegant, AI-powered web experiences.
          </p>
          {/* CV button in footer brand column */}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cv-btn"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 1v9M4 7l4 4 4-4"/>
              <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
            </svg>
            View / Download CV
          </a>
        </div>

        {/* Nav */}
        <div>
          <span className="footer-nav-label">Navigation</span>
          <nav className="footer-links">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <span className="footer-nav-label">Connect</span>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/sanekhakk" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href="https://github.com/sanekhakk" target="_blank" rel="noopener noreferrer" title="GitHub">gh</a>
            <a href="mailto:sanekhakkclt@gmail.com" title="Email">@</a>
          </div>
          <a href="mailto:sanekhakkclt@gmail.com" className="footer-email">
            sanekhakkclt@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Sanekha K K. All rights reserved.</span>
      </div>
    </footer>
  );
}