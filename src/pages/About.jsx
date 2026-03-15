import '../styles/About.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const EDUCATION = [
  {
    icon: '🎓',
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'Lovely Professional University, Punjab',
    tags: ['Aug 2023 – Present', 'CGPA: 7.77'],
  },
  {
    icon: '📚',
    degree: 'Intermediate (Class XII)',
    school: 'GGVHSS Nadakkav, Kozhikode, Kerala',
    tags: ['Jun 2020 – Mar 2022', '92.7%'],
  },
  {
    icon: '🏫',
    degree: 'Matriculation (ICSE – Class X)',
    school: 'S.T Francis Higher Secondary School, Kozhikode',
    tags: ['Jun 2019 – Mar 2020', 'Percentile: 93.8'],
  },
];

const CERTS = [
  { icon: `${DEVICON}/googlecloud/googlecloud-original.svg`, name: 'Cloud Computing', issuer: 'NPTEL', date: 'Apr 2025', isImg: true },
  { icon: `${DEVICON}/python/python-original.svg`, name: 'Live Python Industrial Training', issuer: 'Code Sprint', date: 'Mar 2024', isImg: true },
  { icon: `${DEVICON}/react/react-original.svg`, name: 'React Developer Internship', issuer: 'Pinnet Info Solutions Pvt. Ltd.', date: 'Jul 2025', isImg: true },
];

const TRAITS = [
  { emoji: '💡', title: 'Problem Solver', desc: 'Breaking complex problems into elegant, efficient solutions.' },
  { emoji: '🎓', title: 'Mentor & Educator', desc: 'Teaching coding to 100+ students — I believe in lifting others as I grow.' },
  { emoji: '🤖', title: 'AI Enthusiast', desc: 'Integrating AI to make software smarter and more impactful.' },
  { emoji: '🌸', title: 'Detail Oriented', desc: 'Clean UI, clean code — I care deeply about craft at every level.' },
];

const TECH_LOGOS = [
  { src: `${DEVICON}/react/react-original.svg`, label: 'React' },
  { src: `${DEVICON}/nodejs/nodejs-original.svg`, label: 'Node.js' },
  { src: `${DEVICON}/python/python-original.svg`, label: 'Python' },
  { src: `${DEVICON}/django/django-plain.svg`, label: 'Django' },
  { src: `${DEVICON}/mongodb/mongodb-original.svg`, label: 'MongoDB' },
  { src: `${DEVICON}/javascript/javascript-original.svg`, label: 'JS' },
];

export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <div className="ahb1" /><div className="ahb2" />
        </div>

        <div className="about-hero-inner">
          {/* Photo column */}
          <div className="about-photo-col anim">
            <div className="about-photo-frame">
              <span className="about-photo-init">SK</span>
              {/* Floating tech logos */}
              <div className="about-tech-orbit">
                {TECH_LOGOS.map((t, i) => (
                  <div
                    key={t.label}
                    className="about-tech-orb"
                    style={{ '--orb-i': i, '--orb-total': TECH_LOGOS.length }}
                  >
                    <img src={t.src} alt={t.label} />
                  </div>
                ))}
              </div>
            </div>
            <div className="about-accent-pill">
              <div className="pill-item">
                <div className="pill-num">20+</div>
                <div className="pill-label">Students<br />Mentored</div>
              </div>
              <div className="pill-sep" />
              <div className="pill-item">
                <div className="pill-num">10+</div>
                <div className="pill-label">Projects<br />Shipped</div>
              </div>
              <div className="pill-sep" />
              <div className="pill-item">
                <div className="pill-num">2+</div>
                <div className="pill-label">Years<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="about-text-col">
            <p className="eyebrow anim" style={{ justifyContent: 'flex-start' }}>About Me</p>
            <h1 className="about-heading anim d1">
              Crafting code<br />with <em>intention</em>
            </h1>
            <p className="about-para anim d2">
              Hi! I'm <strong>Sanekha K K</strong> — a Computer Science student at Lovely Professional University. I'm a full-stack developer who loves turning ideas into
              real, working products.
            </p>
            <p className="about-para anim d2">
              My stack spans the <strong>MERN ecosystem</strong> and <strong>Django</strong>, with a growing
              love for <strong>AI integrations</strong>. Whether it's an intelligent helpdesk or a catalog SaaS,
              I focus on clean architecture, great UX, and shipping things that actually work.
            </p>
            <p className="about-para anim d2">
              Beyond building, I've been a <strong>coding tutor</strong> for 20+ students — teaching Python, Java,
              Scratch and more. Watching a student's eyes light up when code runs for the first time? That never gets old.
            </p>

            <div className="divider anim d3" />

            <div className="about-traits anim d3">
              {TRAITS.map(({ emoji, title, desc }) => (
                <div className="trait" key={title}>
                  <div className="trait-icon">{emoji}</div>
                  <div className="trait-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="anim d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:sanekhakkclt@gmail.com" className="btn btn-fill">✉ Get in Touch</a>
              <a href="https://www.linkedin.com/in/sanekhakk" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="edu-section">
        <div className="edu-bg" aria-hidden="true" />
        <div className="section-header anim">
          <p className="eyebrow">Academic Background</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Education &amp; <em>Qualifications</em>
          </h2>
          <div className="rule" />
        </div>
        <div className="edu-list">
          {EDUCATION.map(({ icon, degree, school, tags }, i) => (
            <div className="edu-card anim" style={{ animationDelay: `${i * 0.12}s` }} key={degree}>
              <div className="edu-ico">{icon}</div>
              <div className="edu-content">
                <div className="edu-degree">{degree}</div>
                <div className="edu-school">{school}</div>
                <div className="edu-tags">
                  {tags.map(t => <span className="edu-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="edu-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="certs-section">
        <div className="section-header anim">
          <p className="eyebrow">Credentials</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Certificates &amp; <em>Training</em>
          </h2>
          <div className="rule" />
        </div>
        <div className="certs-grid">
          {CERTS.map(({ icon, name, issuer, date, isImg }, i) => (
            <div className="cert-card anim" style={{ animationDelay: `${i * 0.1}s` }} key={name}>
              <div className="cert-ico">
                {isImg
                  ? <img src={icon} alt={name} />
                  : icon
                }
              </div>
              <div>
                <div className="cert-name">{name}</div>
                <div className="cert-issuer">{issuer}</div>
                <div className="cert-date">{date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}