import { useRef, useEffect, useState } from 'react';
import '../styles/Experience.css';

const EXPERIENCE = [
  {
    period: 'Jun 2025 – Jul 2025',
    year: '2025',
    company: 'Pinnet Info Solutions Pvt. Ltd.',
    role: 'React Developer Intern',
    type: 'internship',
    color: 'rose',
    bullets: [
      'Engineered 10+ reusable React.js UI components using modular architecture, reducing code redundancy by 30% and cutting new feature implementation time by 25%.',
      'Integrated 5+ REST APIs with async data handling and state management, boosting real-time rendering by 30% and resolving 15+ UI defects.',
      'Collaborated in a 4–6 member agile team, delivering reliable and aligned UI across sprints.',
    ],
    stack: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'REST APIs'],
    cert: true,
    metrics: [
      { value: '30%', label: 'Less Redundancy' },
      { value: '10+', label: 'Components Built' },
      { value: '15+', label: 'Bugs Resolved' },
    ],
  },
  {
    period: 'Dec 2025 – Present',
    year: '2025',
    company: 'BrightChamps',
    role: 'Coding Tutor (Contract)',
    type: 'contract',
    color: 'sky',
    bullets: [
      'Onboarded as a contract coding tutor on the BrightChamps platform, delivering live 1-on-1 coding sessions to students across age groups globally.',
      'Teaching programming concepts, problem-solving skills, and project-based learning aligned with BrightChamps curriculum standards.',
      'Consistently maintaining high session quality and student engagement on a professional EdTech platform.',
    ],
    stack: ['Python', 'Scratch', 'JavaScript', 'HTML', 'CSS'],
    metrics: [
      { value: 'Dec 2025', label: 'Joined' },
      { value: 'EdTech', label: 'Industry' },
      { value: 'Global', label: 'Student Reach' },
    ],
  },
  {
    period: 'Jul 2024 – Present',
    year: '2024',
    company: 'Freelance / Self-Employed',
    role: 'Online Computer Science Tutor',
    type: 'freelance',
    color: 'sage',
    bullets: [
      'Conducted 100+ one-on-one online sessions helping students (Classes 7–12) excel in Computer Science, Computer Applications, and Informatics Practices.',
      'Guided students with personalized academic support, improving conceptual understanding and exam performance..',
      'Designed structured learning plans and practice exercises aligned with school curricula and practical programming fundamentals.',
    ],
    stack: ['Python', 'Java','C++' , 'SQL', 'HTML', 'CSS', 'JavaScript' ],
    metrics: [
      { value: '100+', label: 'Sessions Held' },
      { value: '20+', label: 'Recurring Students' },
      { value: '1:1', label: 'Personal Mentoring' },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: '🏅',
    color: 'gold',
    title: 'Full Stack with Django & AI Agents',
    org: 'W3 Grads',
    period: 'Jun 2025 – Jul 2025',
    desc: 'Completed an industry-focused full-stack training program covering Django, Python, HTML, CSS, JavaScript, SQL, and AI Agents. Delivered 2 full-stack application projects integrating AI-driven features and end-to-end workflows.',
    tags: ['Django', 'Python', 'AI Agents', 'Full Stack'],
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`exp-card exp-card--${exp.color} ${inView ? 'exp-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Card header */}
      <div className="exp-card-header">
        <div className="exp-card-meta">
          <span className={`exp-type-badge exp-type-badge--${exp.type}`}>
            {exp.type === 'internship' ? '🏢 Internship' : exp.type === 'contract' ? '🤝 Contract' : '💼 Freelance'}
          </span>
          <span className="exp-period">{exp.period}</span>
        </div>
        {exp.cert && (
          <div className="exp-cert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Certified
          </div>
        )}
      </div>

      {/* Company + role */}
      <div className="exp-company-wrap">
        <div className={`exp-company-dot exp-company-dot--${exp.color}`} />
        <div>
          <p className="exp-company-name">{exp.company}</p>
          <h3 className="exp-role">{exp.role}</h3>
        </div>
      </div>

      {/* Metrics row */}
      <div className="exp-metrics">
        {exp.metrics.map((m, i) => (
          <div className="exp-metric" key={i}>
            <span className="exp-metric-value">{m.value}</span>
            <span className="exp-metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <ul className="exp-bullets">
        {exp.bullets.map((b, j) => (
          <li className="exp-bullet" key={j}>
            <span className={`exp-bullet-dot exp-bullet-dot--${exp.color}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="exp-stack">
        {exp.stack.map(s => <span className="chip" key={s}>{s}</span>)}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="exp-page">

      {/* Banner */}
      <section className="exp-banner">
        <div className="exp-banner-bg" aria-hidden="true">
          <div className="ebb1" /><div className="ebb2" /><div className="ebb3" />
        </div>
        <div className="section-header anim">
          <p className="eyebrow">Where I've been</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}>
            Experience &amp; <em>Journey</em>
          </h1>
          <div className="rule" />
          <p>From internships to freelance — building real products and nurturing the next generation of coders.</p>
        </div>

        {/* Quick stats strip */}
        <div className="exp-stats anim d3">
          <div className="exp-stat">
            <span className="exp-stat-n">2+</span>
            <span className="exp-stat-l">Years Active</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-n">100+</span>
            <span className="exp-stat-l">Students Taught</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-n">3</span>
            <span className="exp-stat-l">Roles Held</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-n">1</span>
            <span className="exp-stat-l">Certificate</span>
          </div>
        </div>
      </section>

      {/* Experience cards */}
      <section className="exp-cards-section">
        <div className="section-header anim">
          <p className="eyebrow">Timeline</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Work <em>History</em>
          </h2>
          <div className="rule" />
        </div>

        {/* Vertical timeline connector */}
        <div className="exp-timeline-wrap">
          <div className="exp-timeline-line" aria-hidden="true" />
          <div className="exp-cards-list">
            {EXPERIENCE.map((exp, i) => (
              <div className="exp-timeline-item" key={i}>
                <div className={`exp-timeline-node exp-timeline-node--${exp.color}`}>
                  <span className="exp-node-year">{exp.year}</span>
                </div>
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="achievements-bg" aria-hidden="true" />
        <div className="section-header anim">
          <p className="eyebrow">Achievements</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Training &amp; <em>Recognition</em>
          </h2>
          <div className="rule" />
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achieve-card anim d2" key={i}>
              <div className="achieve-glow" aria-hidden="true" />
              <div className="achieve-header">
                <div className="achieve-icon">{a.icon}</div>
                <div className="achieve-org-block">
                  <span className="achieve-org">{a.org}</span>
                  <span className="achieve-period">{a.period}</span>
                </div>
              </div>
              <h3 className="achieve-title">{a.title}</h3>
              <p className="achieve-desc">{a.desc}</p>
              <div className="achieve-tags">
                {a.tags.map(t => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}