import { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const CATEGORIES = {
  All: 'All Tech',
  Languages: 'Core Languages',
  Frontend: 'Client Side',
  Backend: 'Server & Logic',
  Databases: 'Data Storage',
};

const SKILLS = [
  { icon: `${DEVICON_CDN}/java/java-original.svg`,           name: 'Java',         type: 'Languages', level: 90, note: 'Major', color: '#f89820' },
  { icon: `${DEVICON_CDN}/python/python-original.svg`,       name: 'Python',       type: 'Languages', level: 85, color: '#3776ab' },
  { icon: `${DEVICON_CDN}/javascript/javascript-original.svg`,name: 'JavaScript',  type: 'Languages', level: 88, note: 'ES6+', color: '#f7df1e' },
  { icon: `${DEVICON_CDN}/html5/html5-original.svg`,         name: 'HTML5',        type: 'Languages', level: 95, color: '#e34f26' },
  { icon: `${DEVICON_CDN}/css3/css3-original.svg`,           name: 'CSS3',         type: 'Languages', level: 90, color: '#1572b6' },
  { icon: `${DEVICON_CDN}/react/react-original.svg`,         name: 'React.js',     type: 'Frontend',  level: 88, color: '#61dafb' },
  { icon: `${DEVICON_CDN}/tailwindcss/tailwindcss-original.svg`, name: 'Tailwind CSS', type: 'Frontend', level: 85, color: '#06b6d4' },
  { icon: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,       name: 'Node.js',      type: 'Backend',   level: 82, color: '#339933' },
  { icon: `${DEVICON_CDN}/express/express-original.svg`,     name: 'Express.js',   type: 'Backend',   level: 80, color: '#000000' },
  { icon: `${DEVICON_CDN}/django/django-plain.svg`,          name: 'Django',       type: 'Backend',   level: 78, color: '#092e20' },
  { icon: `${DEVICON_CDN}/fastapi/fastapi-original.svg`,     name: 'REST APIs',    type: 'Backend',   level: 85, color: '#05998b' },
  { icon: `${DEVICON_CDN}/mongodb/mongodb-original.svg`,     name: 'MongoDB',      type: 'Databases', level: 82, color: '#47a248' },
  { icon: `${DEVICON_CDN}/postgresql/postgresql-original.svg`,name: 'PostgreSQL',  type: 'Databases', level: 75, color: '#4169e1' },
  { icon: `${DEVICON_CDN}/mysql/mysql-original.svg`,         name: 'MySQL',        type: 'Databases', level: 75, color: '#4479a1' },
  { icon: `${DEVICON_CDN}/sqlite/sqlite-original.svg`,       name: 'SQLite',       type: 'Databases', level: 78, color: '#003b57' },
];

const TOOLS = [
  { icon: `${DEVICON_CDN}/git/git-original.svg`,             name: 'Git' },
  { icon: `${DEVICON_CDN}/github/github-original.svg`,       name: 'GitHub' },
  { icon: `${DEVICON_CDN}/vscode/vscode-original.svg`,       name: 'VS Code' },
  { icon: `${DEVICON_CDN}/firebase/firebase-original.svg`,   name: 'Firebase' },
  { icon: `${DEVICON_CDN}/postman/postman-original.svg`,     name: 'Postman' },
  { icon: `${DEVICON_CDN}/vercel/vercel-original.svg`,       name: 'Vercel' },
  { icon: `${DEVICON_CDN}/figma/figma-original.svg`,         name: 'Figma' },
  { icon: `${DEVICON_CDN}/linux/linux-original.svg`,         name: 'Linux' },
];

function SkillCard({ icon, name, level, note, color, index }) {
  const cardRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div 
      className={`skill-card-adv anim d${(index % 6) + 1}`} 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--skill-color': color }}
    >
      <div className="skill-card-glow" />
      <div className="skill-icon-box">
        <img src={icon} alt={name} loading="lazy" />
      </div>
      <div className="skill-info">
        <h3 className="skill-name-adv">{name} {note && <span>{note}</span>}</h3>
        <div className="skill-progress-wrapper">
          <div className="skill-progress-bar">
            <div 
              className={`skill-progress-fill ${animated ? 'active' : ''}`} 
              style={{ '--width': `${level}%` }}
            />
          </div>
          <span className="skill-perc">{level}%</span>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.type === active);

  return (
    <div className="skills-page-adv">
      {/* Dynamic Background Elements */}
      <div className="skills-bg-blobs">
        <div className="blob-1" />
        <div className="blob-2" />
      </div>

      <section className="skills-hero-adv">
        <div className="section-header anim">
          <p className="eyebrow">Expertise</p>
          <h1 className="display-large">Technical <em>Arsenal</em></h1>
          <div className="rule-center" />
          <p className="hero-subtext">A collection of technologies I use to bring digital visions to life, categorized by domain.</p>
        </div>

        <div className="skills-filter-nav anim d2">
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              className={`filter-pill ${active === key ? 'active' : ''}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <main className="skills-container">
        <div className="skills-masonry">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </main>

      <section className="tools-section-adv">
        <div className="section-header anim">
          <h2 className="display">Workflows & <em>Tools</em></h2>
          <div className="rule-center" />
        </div>
        <div className="tools-grid-adv anim d3">
          {TOOLS.map((tool) => (
            <div className="tool-card-adv" key={tool.name}>
              <img src={tool.icon} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}