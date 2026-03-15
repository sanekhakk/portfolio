import { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

// Using devicons (CDN) for official logos
const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const CATEGORIES = {
  All: null,
  Languages: 'Languages',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Databases: 'Databases',
};

const SKILLS = [
  { icon: `${DEVICON_CDN}/java/java-original.svg`,           name: 'Java',         type: 'Languages', level: 90, note: 'Major' },
  { icon: `${DEVICON_CDN}/python/python-original.svg`,       name: 'Python',       type: 'Languages', level: 85 },
  { icon: `${DEVICON_CDN}/javascript/javascript-original.svg`,name: 'JavaScript',  type: 'Languages', level: 88, note: 'ES6+' },
  { icon: `${DEVICON_CDN}/html5/html5-original.svg`,         name: 'HTML5',        type: 'Languages', level: 95 },
  { icon: `${DEVICON_CDN}/css3/css3-original.svg`,           name: 'CSS3',         type: 'Languages', level: 90 },
  { icon: `${DEVICON_CDN}/react/react-original.svg`,         name: 'React.js',     type: 'Frontend',  level: 88 },
  { icon: `${DEVICON_CDN}/tailwindcss/tailwindcss-original.svg`, name: 'Tailwind CSS', type: 'Frontend', level: 85 },
  { icon: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,       name: 'Node.js',      type: 'Backend',   level: 82 },
  { icon: `${DEVICON_CDN}/express/express-original.svg`,     name: 'Express.js',   type: 'Backend',   level: 80 },
  { icon: `${DEVICON_CDN}/django/django-plain.svg`,          name: 'Django',       type: 'Backend',   level: 78 },
  { icon: `${DEVICON_CDN}/fastapi/fastapi-original.svg`,     name: 'REST APIs',    type: 'Backend',   level: 85 },
  { icon: `${DEVICON_CDN}/mongodb/mongodb-original.svg`,     name: 'MongoDB',      type: 'Databases', level: 82 },
  { icon: `${DEVICON_CDN}/postgresql/postgresql-original.svg`,name: 'PostgreSQL',  type: 'Databases', level: 75 },
  { icon: `${DEVICON_CDN}/mysql/mysql-original.svg`,         name: 'MySQL',        type: 'Databases', level: 75 },
  { icon: `${DEVICON_CDN}/sqlite/sqlite-original.svg`,       name: 'SQLite',       type: 'Databases', level: 78 },
];

const TOOLS = [
  { icon: `${DEVICON_CDN}/git/git-original.svg`,             name: 'Git' },
  { icon: `${DEVICON_CDN}/github/github-original.svg`,       name: 'GitHub' },
  { icon: `${DEVICON_CDN}/vscode/vscode-original.svg`,       name: 'VS Code' },
  { icon: `${DEVICON_CDN}/firebase/firebase-original.svg`,   name: 'Firebase' },
  { icon: `${DEVICON_CDN}/postman/postman-original.svg`,     name: 'Postman' },
  { icon: `${DEVICON_CDN}/cloudinary/cloudinary-original.svg`, name: 'Cloudinary' },
  { icon: `${DEVICON_CDN}/vercel/vercel-original.svg`,       name: 'Vercel' },
  { icon: `${DEVICON_CDN}/npm/npm-original-wordmark.svg`,    name: 'npm' },
  { icon: `${DEVICON_CDN}/figma/figma-original.svg`,         name: 'Figma' },
  { icon: `${DEVICON_CDN}/linux/linux-original.svg`,         name: 'Linux' },
];

function SkillCard({ icon, name, level, note }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-icon-wrap">
        <img src={icon} alt={name} className="skill-icon-img" loading="lazy" />
      </div>
      <div className="skill-name">
        {name}
        {note && <span className="skill-note">· {note}</span>}
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill${animated ? ' animated' : ''}`}
          style={{ '--level': `${level}%` }}
        />
      </div>
      <span className="skill-level-text">{level}%</span>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? SKILLS : SKILLS.filter(s => s.type === active);

  const grouped = ['Languages', 'Frontend', 'Backend', 'Databases'].reduce((acc, cat) => {
    const items = visible.filter(s => s.type === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div className="skills-page">

      {/* Banner */}
      <section className="skills-banner">
        <div className="skills-banner-bg" aria-hidden="true">
          <div className="skills-bb1" /><div className="skills-bb2" />
        </div>
        <div className="section-header anim">
          <p className="eyebrow">What I know</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)' }}>
            Skills &amp; <em>Expertise</em>
          </h1>
          <div className="rule" />
          <p>From frontend finesse to backend logic — here's the tech I bring to every project.</p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="skills-tabs">
        {Object.keys(CATEGORIES).map(cat => (
          <button
            key={cat}
            className={active === cat ? 'skill-tab-btn active' : 'skill-tab-btn'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="skills-body">
        {Object.entries(grouped).map(([cat, items]) => (
          <div className="skill-category-block" key={cat}>
            <div className="cat-header">
              <p className="cat-eyebrow">{cat}</p>
              <span className="cat-count">{items.length} skills</span>
            </div>
            <div className="skills-grid">
              {items.map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools cloud */}
      <section className="tools-cloud">
        <div className="tools-cloud-bg" aria-hidden="true" />
        <div className="section-header anim">
          <p className="eyebrow">Platforms &amp; Tools</p>
          <h2 className="display" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)' }}>
            My <em>toolbox</em>
          </h2>
          <div className="rule" />
        </div>
        <div className="tools-wrap">
          {TOOLS.map(({ icon, name }) => (
            <span className="tool-chip" key={name}>
              <img src={icon} alt={name} className="tool-chip-ico" loading="lazy" />
              {name}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}