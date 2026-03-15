import '../styles/Projects.css';

// ─────────────────────────────────────────────────────────────────
//  ALL PROJECTS — add new ones at the bottom of this array.
//  Every project gets the full detailed treatment automatically.
// ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: 'Smart Help AI',
    tagline: 'Smart Helpdesk Ticketing Solution for IT Services',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack · AI',
    featured: true,
    desc: 'An AI-powered helpdesk platform that automatically analyzes, categorizes, and routes incoming IT support tickets using Gemini 2.0 Flash — dramatically reducing manual triage time.',
    highlights: [
      'Dual-portal system with user dashboard and secure admin console for structured workflow management.',
      'Automated PATCH-based escalation workflows reduced unresolved tickets by 40% and admin effort by 50%.',
      'JWT-based RBAC and OTP email verification via EmailJS securing 100% of authenticated sessions.',
      'Seamlessly integrates Gemini 2.0 AI and OpenRouter for smart categorization and routing.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini 2.0 AI', 'JWT', 'Tailwind CSS', 'REST API'],
    live: 'https://smart-helpdesk-ticketing-solution-f.vercel.app/',
    github: 'https://github.com/sanekhakk/Smart-Helpdesk-Ticketing-Solution-for-IT-Services',
    accent: 'rose',
    stats: [
      { value: '40%', label: 'Fewer Unresolved Tickets' },
      { value: '50%', label: 'Less Admin Effort' },
      { value: '100%', label: 'Secure Sessions' },
    ],
  },
  {
    name: 'Katlo',
    tagline: 'Business Catalog Generator SaaS',
    period: 'Jun 2025 – Jul 2025',
    type: 'SaaS · Full Stack',
    featured: true,
    desc: 'A Django-based SaaS platform that enables small businesses to auto-generate WhatsApp-compatible product catalogs with sharable URLs and dynamic QR codes for seamless digital distribution.',
    highlights: [
      'Reduced catalog creation time by 80% by eliminating manual formatting and streamlining distribution.',
      'Scalable business dashboard with full CRUD, secure image upload, and instant public catalog publishing.',
      '"Chat on WhatsApp" CTA with direct deep-link routing — reduced product update time by 70% and boosted direct leads.',
      'Dynamic QR code generation for every catalog, enabling offline-to-online customer discovery.',
    ],
    stack: ['Django', 'Python', 'Tailwind CSS', 'HTML5', 'SQLite', 'Pillow', 'QRCode Library'],
    live: 'https://katlo-business-catalog-generator.onrender.com/',
    github: 'https://github.com/sanekhakk/katlo-catalog-generator',
    accent: 'sage',
    stats: [
      { value: '80%', label: 'Faster Catalog Creation' },
      { value: '70%', label: 'Quicker Updates' },
      { value: 'QR', label: 'Code Generation' },
    ],
  },
  {
    name: 'Debato AI',
    tagline: 'Smart Helpdesk Ticketing Solution for IT Services',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack · AI',
    desc: 'The purpose of Debato is to provide users with a platform where they can practice and engage in debates with an AI opponent',
    highlights: [
      'AI-powered platform where users can debate with an AI opponent in a chat-style interface.',
      'Debate setup with topic categories, subtopics, difficulty levels (Easy, Medium, Hard), and customizable debate time limits.',
      'Reply time limit system for users (45–90 seconds depending on difficulty) with automatic win for AI if time expires',
      'Scoreboard and dashboard displaying AI vs User wins and debate history',
      'Guest mode allowing one free debate, with login required for further debates.',
      'User authentication via email and Google OAuth with a responsive web interface',
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'JavaScript', 'Render'],
    live: 'https://debatoai.onrender.com/',
    github: 'https://github.com/sanekhakk/DebatoAi',
    accent: 'rose',
    stats: [
      { value: '50%', label: 'Faster debate setup' },
      { value: '55%', label: 'Higher debate engagement' },
      { value: '100%', label: 'Secure authenticated sessions' },
    ],
  },

  {
    name: 'Murmr',
    tagline: 'Anonymous confession website',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack · AI',
    desc: 'Murmur is an Anonymous Confession is a web application designed to let users share confessions anonymously, ensuring privacy while promoting emotional expression in a secure and user-friendly environment',
    highlights: [
      'Anonymous platform where users can share confessions without revealing identity, with emotion-based categorization',
      'Community interaction through an upvoting system to highlight relatable or impactful confessions.',
      'Modern responsive UI with card-style confession feed for smooth browsing across devices.',
      'Multi-category reporting and moderation system to manage inappropriate content.',
      'Secure backend with Django (MVT) and deployment on Render with production-ready configuration.',
    ],
    stack: ['Python', 'Django','JavaScript','SQLite', 'Render'],
    live: 'https://murmur-ovun.onrender.com/',
    github: 'https://github.com/sanekhakk/murmur-Anonymous-Confession',
    accent: 'rose',
    stats: [
      { value: '50%', label: 'Faster debate setup' },
      { value: '55%', label: 'Higher debate engagement' },
      { value: '100%', label: 'Secure authenticated sessions' },
    ],
  },

];

const handleMouseMove = (e) => {
  const { currentTarget: t, clientX: x, clientY: y } = e;
  const r = t.getBoundingClientRect();
  t.style.setProperty('--mx', `${x - r.left}px`);
  t.style.setProperty('--my', `${y - r.top}px`);
};

const LiveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 3H3a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9M10 1h5m0 0v5m0-5L8 8"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Projects() {
  return (
    <div className="projects-page">

      {/* Banner */}
      <section className="projects-banner">
        <div className="projects-banner-bg" aria-hidden="true">
          <div className="pbb1" /><div className="pbb2" />
        </div>
        <div className="section-header anim">
          <p className="eyebrow">What I've built</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}>
            My <em>Projects</em>
          </h1>
          <div className="rule" />
          <p>Full-stack applications, SaaS products, and AI-powered tools — built with care and shipped with pride.</p>
        </div>

        {/* Project count strip */}
        <div className="projects-count-strip anim d3">
          <span className="pcs-num">{PROJECTS.length}</span>
          <span className="pcs-label">Projects &amp; counting</span>
          <span className="pcs-sep" />
          <span className="pcs-num">{PROJECTS.filter(p => p.featured).length}</span>
          <span className="pcs-label">Featured</span>
        </div>
      </section>

      {/* All Projects — full detailed cards */}
      <section className="projects-all-section">
        <div className="projects-full-grid">
          {PROJECTS.map((p, i) => (
            <article
              className={`project-card project-card--${p.accent} anim`}
              style={{ animationDelay: `${i * 0.12}s` }}
              onMouseMove={handleMouseMove}
              key={i}
            >
              {/* Mouse-track radial glow */}
              <div className="pc-glow" aria-hidden="true" />

              {/* Animated top band */}
              <div className="pc-band" />

              <div className="pc-body">

                {/* Top meta row */}
                <div className="pc-meta">
                  <div className="pc-badges">
                    <span className={`pc-type-badge pc-type-badge--${p.accent}`}>{p.type}</span>
                    {p.featured && <span className="pc-featured-badge">★ Featured</span>}
                  </div>
                  <div className="pc-links">
                    <a className="pc-link" href={p.live} target="_blank" rel="noopener noreferrer">
                      <LiveIcon /> Live
                    </a>
                    <a className="pc-link" href={p.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon /> GitHub
                    </a>
                  </div>
                </div>

                {/* Title block */}
                <div className="pc-title-block">
                  <h2 className="pc-name">{p.name}</h2>
                  <span className="pc-period">{p.period}</span>
                </div>

                <p className="pc-tagline">{p.tagline}</p>
                <p className="pc-desc">{p.desc}</p>

                {/* Stats grid */}
                {p.stats && (
                  <div className="pc-stats">
                    {p.stats.map((s, j) => (
                      <div className="pc-stat" key={j}>
                        <span className="pc-stat-value">{s.value}</span>
                        <span className="pc-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <ul className="pc-highlights">
                  {p.highlights.map((h, j) => (
                    <li className="pc-hl" key={j}>
                      <span className={`pc-hl-dot pc-hl-dot--${p.accent}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="pc-stack">
                  {p.stack.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-github-cta anim">
          <div className="pgc-inner">
            <div className="pgc-icon">
              <GithubIcon />
            </div>
            <div>
              <p className="pgc-title">See everything on GitHub</p>
              <p className="pgc-sub">More experiments, mini-projects, and open source work live here.</p>
            </div>
            <a href="https://github.com/sanekhakk" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              View GitHub →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}