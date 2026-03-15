import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const NAV = [
  ['/skills', 'Skills'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
  ['/certifications', 'Certifications'],
  ['/about', 'About'],
];

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