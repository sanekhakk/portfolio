import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';
import Katlo1 from "../assets/screenshots/katlo1.webp";
import Katlo2 from "../assets/screenshots/katlo2.webp";
import Katlo3 from "../assets/screenshots/katlo3.webp";
import Katlo4 from "../assets/screenshots/katlo4.webp";
import Katlo5 from "../assets/screenshots/katlo5.webp";
import Katlo6 from "../assets/screenshots/katlo6.webp";
import Katlo7 from "../assets/screenshots/katlo7.webp";
import Katlo8 from "../assets/screenshots/katlo8.webp";

import debato1 from "../assets/screenshots/debato1.webp";
import debato2 from "../assets/screenshots/debato2.webp";
import debato3 from "../assets/screenshots/debato3.webp";
import debato4 from "../assets/screenshots/debato4.webp";
import debato5 from "../assets/screenshots/debato5.webp";
import debato6 from "../assets/screenshots/debato6.webp";
import debato7 from "../assets/screenshots/debato7.webp";
import debato8 from "../assets/screenshots/debato8.webp";
import debato9 from "../assets/screenshots/debato9.webp";
import debato10 from "../assets/screenshots/debato10.webp";
import debato11 from "../assets/screenshots/debato11.webp";

import murmur1 from "../assets/screenshots/murmu1.webp";
import murmur2 from "../assets/screenshots/murmu2.webp";

import sd1 from "../assets/screenshots/smartdesk1.webp";
import sd2 from "../assets/screenshots/smartdesk2.webp";
import sd3 from "../assets/screenshots/smartdesk3.webp";
import sd4 from "../assets/screenshots/smartdesk4.webp";
import sd5 from "../assets/screenshots/smartdesk5.webp";
import sd6 from "../assets/screenshots/smartdesk6.webp";
import sd7 from "../assets/screenshots/smartdesk7.webp";
import sd8 from "../assets/screenshots/smartdesk8.webp";
import sd9 from "../assets/screenshots/smartdesk9.webp";
import sd10 from "../assets/screenshots/smartdesk10.webp";
import sd11 from "../assets/screenshots/smartdesk11.webp";
import sd12 from "../assets/screenshots/smartdesk12.webp";
import sd13 from "../assets/screenshots/smartdesk13.webp";
import sd14 from "../assets/screenshots/smartdesk14.webp";
import sd15 from "../assets/screenshots/smartdesk15.webp";
import sd16 from "../assets/screenshots/smartdesk16.webp";

const PROJECTS = [
  {
    name: 'Smart Help AI',
    tagline: 'Smart Helpdesk Ticketing Solution for IT Services',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack · AI',
    featured: true,
    desc: 'An AI-powered helpdesk platform that automatically analyzes, categorizes, and routes incoming IT support tickets using Gemini 2.0 Flash — dramatically reducing manual triage time.',
    images: [
      sd1,
      sd2,
      sd3,
      sd4,
      sd5,
      sd6,
      sd7,
      sd8,
      sd9,
      sd10,
      sd11,
      sd12,
      sd13,
      sd14,
      sd15,
      sd16
    ],
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
      { value: '40%', label: 'Efficiency' },
      { value: '50%', label: 'Admin Ease' },
      { value: '100%', label: 'Secure' },
    ],
  },
  {
    name: 'Katlo',
    tagline: 'Business Catalog Generator SaaS',
    period: 'Jun 2025 – Jul 2025',
    type: 'SaaS · Full Stack',
    featured: true,
    desc: 'A Django-based SaaS platform that enables small businesses to auto-generate WhatsApp-compatible product catalogs with sharable URLs and dynamic QR codes for seamless digital distribution.',
    images: [
      Katlo1,
      Katlo2,
      Katlo3,
      Katlo4,
      Katlo5,
      Katlo6,
      Katlo7,
      Katlo8
    ],
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
      { value: '80%', label: 'Time Saved' },
      { value: '70%', label: 'Updates' },
      { value: 'QR', label: 'Tech' },
    ],
  },
  {
    name: 'Debato AI',
    tagline: 'AI Debate Practice Platform',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack · AI',
    desc: 'The purpose of Debato is to provide users with a platform where they can practice and engage in debates with an AI opponent',
    images: [
      debato1,
      debato2,
      debato3,
      debato4,
      debato5,
      debato6,
      debato7,
      debato8,
      debato9,
      debato10,
      debato11,
    ],
    highlights: [
      'AI-powered platform where users can debate with an AI opponent in a chat-style interface.',
      'Debate setup with topic categories, subtopics, difficulty levels, and customizable time limits.',
      'Reply time limit system for users (45–90 seconds depending on difficulty) with automatic win logic.',
      'Scoreboard and dashboard displaying AI vs User wins and debate history',
    ],
    stack: ['Python', 'Django', 'DRF', 'JavaScript', 'Render'],
    live: 'https://debatoai.onrender.com/',
    github: 'https://github.com/sanekhakk/DebatoAi',
    accent: 'rose',
    stats: [
      { value: '50%', label: 'Faster Setup' },
      { value: '55%', label: 'Engagement' },
      { value: '100%', label: 'Secure' },
    ],
  },
  {
    name: 'Murmr',
    tagline: 'Anonymous Confession Website',
    period: 'Nov 2025 – Dec 2025',
    type: 'Full Stack',
    desc: 'Murmur is an web application designed to let users share confessions anonymously, ensuring privacy while promoting emotional expression in a secure environment.',
    images: [
      murmur1,
      murmur2
    ],
    highlights: [
      'Anonymous sharing without revealing identity, with emotion-based categorization.',
      'Community interaction through an upvoting system for relateable confessions.',
      'Modern responsive UI with card-style confession feed for smooth browsing.',
      'Secure backend with Django (MVT) and production-ready configuration.',
    ],
    stack: ['Python', 'Django','JavaScript','SQLite', 'Render'],
    live: 'https://murmur-ovun.onrender.com/',
    github: 'https://github.com/sanekhakk/murmur-Anonymous-Confession',
    accent: 'rose',
    stats: [
      { value: '100%', label: 'Anonymous' },
      { value: 'Cards', label: 'UI Style' },
      { value: 'MVT', label: 'Pattern' },
    ],
  },
];

function MockupCarousel({ images, accent }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [index, images.length]);

  return (
    <div className={`mockup-container mockup--${accent}`}>
      <div className="mockup-header">
        <div className="mockup-dots"><span /><span /><span /></div>
        <div className="mockup-address">https://sanekha.dev/project-view</div>
      </div>

      <div className="mockup-viewport">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
            className="mockup-img"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button className="nav-btn prev" onClick={() => paginate(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="nav-btn next" onClick={() => paginate(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>

      <div className="mockup-indicators">
        {images.map((_, i) => (
          <div key={i} className={`indicator-bar ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-banner">
        <div className="projects-banner-bg" aria-hidden="true">
          <div className="pbb1" /><div className="pbb2" />
        </div>
        <div className="section-header anim">
          <p className="eyebrow">Portfolio</p>
          <h1 className="display">My <em>Projects</em></h1>
          <div className="rule" />
          <p>Full-stack applications, SaaS products, and AI tools — built with care and shipped with pride.</p>
        </div>

        <div className="projects-count-strip anim d3">
          <span className="pcs-num">{PROJECTS.length}</span>
          <span className="pcs-label">Projects</span>
          <span className="pcs-sep" />
          <span className="pcs-num">{PROJECTS.filter(p => p.featured).length}</span>
          <span className="pcs-label">Featured</span>
        </div>
      </section>

      <section className="projects-all-section">
        <div className="projects-v3-list">
          {PROJECTS.map((p, i) => (
            <article key={i} className={`project-v3-card project-card--${p.accent} anim`} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="project-v3-grid">
                <div className="project-v3-visual">
                  {p.images && p.images.length > 0 ? (
                    <MockupCarousel images={p.images} accent={p.accent} />
                  ) : (
                    <div className="empty-mockup">Preview Incoming</div>
                  )}
                </div>

                <div className="project-v3-info">
                  <div className="pc-meta">
                    <div className="pc-badges">
                      <span className={`pc-type-badge pc-type-badge--${p.accent}`}>{p.type}</span>
                      {p.featured && <span className="pc-featured-badge">★ Featured</span>}
                    </div>
                    <span className="pc-period">{p.period}</span>
                  </div>

                  <h2 className="project-v3-title">{p.name}</h2>
                  <p className="pc-tagline">{p.tagline}</p>
                  <p className="project-v3-desc">{p.desc}</p>

                  <div className="pc-stats">
                    {p.stats.map((s, j) => (
                      <div className="pc-stat" key={j}>
                        <span className="pc-stat-value">{s.value}</span>
                        <span className="pc-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="pc-highlights">
                    {p.highlights.map((h, j) => (
                      <li className="pc-hl" key={j}>
                        <span className={`pc-hl-dot pc-hl-dot--${p.accent}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="v3-stack">
                    {p.stack.map(s => <span key={s} className="chip">{s}</span>)}
                  </div>

                  <div className="v3-actions">
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="v3-btn-primary">Live Demo</a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="v3-btn-icon" title="View Source">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.297 24 12.017c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Updated GitHub CTA */}
        <div className="projects-github-cta anim">
          <div className="pgc-inner">
            <div className="pgc-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </div>
            <div className="pgc-text">
              <p className="pgc-title">See everything on GitHub</p>
              <p className="pgc-sub">More experiments, mini-projects, and open source work live here.</p>
            </div>
            <a href="https://github.com/sanekhakk" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View GitHub →</a>
          </div>
        </div>
      </section>
    </div>
  );
}