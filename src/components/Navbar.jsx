import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Skills',     to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
  
];

// ── Replace this href with your actual CV/resume URL ──
const CV_URL = '/Sanekha_KK_Resume.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const prog = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      document.querySelector('.navbar')?.style.setProperty('--scroll-progress', `${prog}%`);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, []);

  const cls = ({ isActive }) => isActive ? 'active' : '';
  const close = () => setOpen(false);

  return (
    <>
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div
          className="nav-logo"
          onClick={() => { navigate('/'); close(); }}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/')}
        >
          <span className="nav-logo-mark">SK</span>
          <span className="nav-logo-text">Sanekha</span>
          <span className="nav-logo-sub">Portfolio</span>
        </div>

        <ul className="nav-links">
          {NAV.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={cls}>{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop action buttons */}
        <div className="nav-actions">
          <a
            className="nav-cv-btn"
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Download CV"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 1v9M4 7l4 4 4-4"/>
              <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
            </svg>
            <span>View CV</span>
          </a>
          <a className="nav-contact" href="mailto:sanekhakkclt@gmail.com">
            <span>Hire Me</span>
          </a>
        </div>

        <button
          className={open ? 'nav-burger open' : 'nav-burger'}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={open ? 'nav-drawer open' : 'nav-drawer'} aria-hidden={!open}>
        {NAV.map(({ label, to }) => (
          <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={close}>
            {label}
          </NavLink>
        ))}

        {/* CV button in mobile drawer */}
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-drawer-cv"
          onClick={close}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 1v9M4 7l4 4 4-4"/>
            <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
          </svg>
          View / Download CV
        </a>

        <div className="nav-drawer-socials">
          <a href="https://www.linkedin.com/in/sanekhakk" target="_blank" rel="noopener noreferrer" title="LinkedIn" onClick={close}>in</a>
          <a href="https://github.com/sanekhakk" target="_blank" rel="noopener noreferrer" title="GitHub" onClick={close}>gh</a>
          <a href="mailto:sanekhakkclt@gmail.com" title="Email" onClick={close}>@</a>
        </div>
      </div>
    </>
  );
}