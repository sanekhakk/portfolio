import { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const CATEGORY_META = {
  Languages: { color: '#be3d62', bg: 'var(--rose-50)' },
  Frontend:  { color: '#2e7abf', bg: '#edf4fc' },
  Backend:   { color: '#3a6e50', bg: '#edf5f0' },
  Databases: { color: '#7a5020', bg: '#faf2e8' },
};

const SKILLS = [
  { icon: `${CDN}/java/java-original.svg`,             name: 'Java',        type: 'Languages', level: 90, note: 'Major',  color: '#f89820' },
  { icon: `${CDN}/python/python-original.svg`,         name: 'Python',      type: 'Languages', level: 85,                 color: '#3776ab' },
  { icon: `${CDN}/javascript/javascript-original.svg`, name: 'JavaScript',  type: 'Languages', level: 88, note: 'ES6+',   color: '#f0c400' },
  { icon: `${CDN}/html5/html5-original.svg`,           name: 'HTML5',       type: 'Languages', level: 95,                 color: '#e34f26' },
  { icon: `${CDN}/css3/css3-original.svg`,             name: 'CSS3',        type: 'Languages', level: 90,                 color: '#1572b6' },
  { icon: `${CDN}/react/react-original.svg`,           name: 'React.js',    type: 'Frontend',  level: 88,                 color: '#61dafb' },
  { icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, name: 'Tailwind', type: 'Frontend',  level: 85,                 color: '#06b6d4' },
  { icon: `${CDN}/nodejs/nodejs-original.svg`,         name: 'Node.js',     type: 'Backend',   level: 82,                 color: '#339933' },
  { icon: `${CDN}/express/express-original.svg`,       name: 'Express.js',  type: 'Backend',   level: 80,                 color: '#888888' },
  { icon: `${CDN}/django/django-plain.svg`,            name: 'Django',      type: 'Backend',   level: 78,                 color: '#44b78b' },
  { icon: `${CDN}/fastapi/fastapi-original.svg`,       name: 'REST APIs',   type: 'Backend',   level: 85,                 color: '#05998b' },
  { icon: `${CDN}/mongodb/mongodb-original.svg`,       name: 'MongoDB',     type: 'Databases', level: 82,                 color: '#47a248' },
  { icon: `${CDN}/postgresql/postgresql-original.svg`, name: 'PostgreSQL',  type: 'Databases', level: 75,                 color: '#4169e1' },
  { icon: `${CDN}/mysql/mysql-original.svg`,           name: 'MySQL',       type: 'Databases', level: 75,                 color: '#4479a1' },
  { icon: `${CDN}/sqlite/sqlite-original.svg`,         name: 'SQLite',      type: 'Databases', level: 78,                 color: '#5b9bd5' },
];

const TOOLS = [
  { icon: `${CDN}/git/git-original.svg`,       name: 'Git' },
  { icon: `${CDN}/github/github-original.svg`, name: 'GitHub' },
  { icon: `${CDN}/vscode/vscode-original.svg`, name: 'VS Code' },
  { icon: `${CDN}/firebase/firebase-original.svg`, name: 'Firebase' },
  { icon: `${CDN}/postman/postman-original.svg`,   name: 'Postman' },
  { icon: `${CDN}/vercel/vercel-original.svg`,     name: 'Vercel' },
  { icon: `${CDN}/figma/figma-original.svg`,       name: 'Figma' },
  { icon: `${CDN}/linux/linux-original.svg`,       name: 'Linux' },
];

// circumference = 2π × 30 = 188.5
const CIRC = 188.5;

function SkillCard({ icon, name, level, note, color }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  const dashOffset = CIRC - (level / 100) * CIRC;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-icon-card" ref={ref}>
      <div className="skill-ring-wrap">
        <svg className="skill-ring-svg" viewBox="0 0 72 72">
          <circle className="skill-ring-track" cx="36" cy="36" r="30" />
          <circle
            className={`skill-ring-fill ${animated ? 'animated' : ''}`}
            cx="36" cy="36" r="30"
            stroke={color}
            style={{ '--dash-offset': `${dashOffset}` }}
          />
        </svg>
        <div className="skill-ring-inner">
          <img src={icon} alt={name} loading="lazy" />
        </div>
      </div>
      <span className="skill-card-name">{name}</span>
      {note && <span className="skill-card-note">{note}</span>}
      <span className="skill-card-perc">{level}%</span>
    </div>
  );
}

export default function Skills() {
  const grouped = {};
  SKILLS.forEach(s => {
    if (!grouped[s.type]) grouped[s.type] = [];
    grouped[s.type].push(s);
  });

  return (
    <div className="skills-page">

      {/* ── Banner ── */}
      <section className="skills-banner">
        <div className="section-header anim">
          <p className="eyebrow">Expertise</p>
          <h1 className="display">Technical <em>Arsenal</em></h1>
          <div className="rule" />
          <p>Technologies I command — grouped by domain, each with a proficiency ring.</p>
        </div>
        <div className="skills-count-strip anim d3">
          <span className="scs-num">{SKILLS.length}</span>
          <span className="scs-label">Skills</span>
          <span className="scs-sep" />
          <span className="scs-num">{TOOLS.length}</span>
          <span className="scs-label">Tools</span>
          <span className="scs-sep" />
          <span className="scs-num">{Object.keys(grouped).length}</span>
          <span className="scs-label">Domains</span>
        </div>
      </section>

      {/* ── Skill Categories ── */}
      <div className="skills-body">
        {Object.entries(grouped).map(([cat, skills], ci) => {
          const meta = CATEGORY_META[cat] || { color: 'var(--rose-500)', bg: 'var(--rose-50)' };
          return (
            <div key={cat} className={`skills-category-block anim d${ci + 1}`}>
              <div className="scb-header">
                <div className="scb-pill">
                  <span className="scb-pill-dot" style={{ background: meta.color }} />
                  <span className="scb-pill-label">{cat}</span>
                </div>
                <div className="scb-line" />
                <span className="scb-count">{skills.length} technologies</span>
              </div>
              <div className="skills-icon-grid">
                {skills.map(s => <SkillCard key={s.name} {...s} />)}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tools ── */}
      <section className="skills-tools-section">
        <div className="section-header anim">
          <h2 className="display">Workflows &amp; <em>Tools</em></h2>
          <div className="rule-center" />
        </div>
        <div className="tools-marquee-wrap anim d2">
          <div className="tools-marquee-track">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <div className="tool-icon-card" key={i}>
                <img src={tool.icon} alt={tool.name} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}