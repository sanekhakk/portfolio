import { Link } from 'react-router-dom';
import '../styles/Home.css';
import profileImg from '../assets/profile.webp';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// ── Replace with your actual CV/resume URL ──
const CV_URL = '/Sanekha_KK_Resume.pdf';

const TICKER_SKILLS = [
  'React.js','Node.js','MongoDB','Express.js','Django','Python',
  'JavaScript','Java','Tailwind CSS','PostgreSQL','Firebase','REST APIs',
  'React.js','Node.js','MongoDB','Express.js','Django','Python',
  'JavaScript','Java','Tailwind CSS','PostgreSQL','Firebase','REST APIs',
];

const PEEK_SKILLS = [
  { icon: `${DEVICON}/react/react-original.svg`,          name: 'React.js' },
  { icon: `${DEVICON}/nodejs/nodejs-original.svg`,        name: 'Node.js' },
  { icon: `${DEVICON}/mongodb/mongodb-original.svg`,      name: 'MongoDB' },
  { icon: `${DEVICON}/python/python-original.svg`,        name: 'Python' },
  { icon: `${DEVICON}/django/django-plain.svg`,           name: 'Django' },
  { icon: `${DEVICON}/java/java-original.svg`,            name: 'Java' },
  { icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, name: 'Tailwind CSS' },
  { icon: `${DEVICON}/postgresql/postgresql-original.svg`,name: 'PostgreSQL' },
  { icon: `${DEVICON}/firebase/firebase-original.svg`,    name: 'Firebase' },
  { icon: `${DEVICON}/javascript/javascript-original.svg`,name: 'JavaScript' },
];

const STATS = [
  ['2+', 'Years Experience'],
  ['10+', 'Projects Built'],
  ['50+', 'Students Taught'],
  ['7.77', 'CGPA at LPU'],
];

export default function Home() {
  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-backdrop-blob hb1" />
          <div className="hero-backdrop-blob hb2" />
          <div className="hero-backdrop-blob hb3" />
        </div>

        <div className="hero-text">
          <div className="hero-greeting anim d1">
            <span className="hero-greeting-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero-name anim d2">Sanekha K K</h1>

          <p className="hero-role anim d3">
            <strong>Full Stack Developer</strong>
            <span className="hero-role-separator" />
            Coding Tutor
          </p>

          <p className="hero-bio anim d4">
            Building elegant, <mark>AI-powered</mark> web experiences with the MERN stack
            and Django. Passionate about clean code, great UX, and helping others
            fall in love with programming.
          </p>

          <div className="hero-cta anim d5">
            <Link to="/projects" className="btn btn-fill">View Projects</Link>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cv"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1v9M4 7l4 4 4-4"/>
                <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
              </svg>
              View CV
            </a>
            <Link to="/about" className="btn btn-ghost">About Me →</Link>
          </div>

          <div className="hero-scroll-hint anim">
            <span>Scroll to explore</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v10M4 9l4 4 4-4"/>
            </svg>
          </div>
        </div>

        <div className="hero-visual anim d3">
          <div className="hero-blob-wrap">
            <div className="hero-blob" />
            <div className="hero-photo">
              <img src={profileImg} alt="Sanekha K K" />
            </div>

            {/* Official tech logo floats */}
            <div className="hero-float hf1">
              <img src={`${DEVICON}/react/react-original.svg`} alt="React" className="hero-float-logo" />
              React Developer
            </div>
            <div className="hero-float hf2">
              <span className="hero-float-icon">🏆</span>
              20+ Students Mentored
            </div>
            <div className="hero-float hf3">
              <img src={`${DEVICON}/python/python-original.svg`} alt="Python" className="hero-float-logo" />
              Python Django
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Ticker ── */}
      <div className="ticker">
        <div className="ticker-inner">
          {TICKER_SKILLS.map((s, i) => (
            <span className="tick-item" key={i}>
              <span className="tick-dot" />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="stats-row">
        {STATS.map(([n, l]) => (
          <div className="stat" key={l}>
            <div className="stat-n">{n}</div>
            <div className="stat-l">{l}</div>
          </div>
        ))}
      </div>

      {/* ── Skills Preview ── */}
      <section className="peek-skills">
        <div className="section-header anim">
          <p className="eyebrow">Tech Stack</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', marginBottom: '0.5rem' }}>
            Tools I love <em>building with</em>
          </h2>
          <div className="rule" />
        </div>

        <div className="peek-grid">
          {PEEK_SKILLS.map(({ icon, name }) => (
            <div className="peek-card" key={name}>
              <div className="peek-icon-wrap">
                <img src={icon} alt={name} className="peek-icon-img" loading="lazy" />
              </div>
              <div className="peek-name">{name}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/skills" className="btn btn-ghost">See Full Skill Set →</Link>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <div className="home-cta-strip">
        <h2 className="home-cta-heading anim">
          Let's build something<br /><em>remarkable</em> together.
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:sanekhakkclt@gmail.com" className="btn btn-fill-light">✉ Get in Touch</a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cv-light"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 1v9M4 7l4 4 4-4"/>
              <path d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
            </svg>
            View CV
          </a>
          <Link to="/projects" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,.25)', color: 'rgba(255,255,255,.8)' }}>
            View Projects →
          </Link>
        </div>
      </div>

    </div>
  );
}