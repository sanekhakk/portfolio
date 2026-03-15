import '../styles/Certifications.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const CERTIFICATIONS = [
  {
    icon: `${DEVICON}/googlecloud/googlecloud-original.svg`,
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Apr 2025',
    category: 'Cloud',
    color: 'blue',
    desc: 'Completed NPTEL certification covering cloud infrastructure, deployment models, and cloud service management.',
    credential: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730121004250034.pdf',
  },
  {
    icon: `${DEVICON}/python/python-original.svg`,
    name: 'Live Python Industrial Training',
    issuer: 'Code Sprint',
    date: 'Mar 2024',
    category: 'Programming',
    color: 'yellow',
    desc: 'Hands-on industrial training in Python covering core programming, data structures, OOP and real-world projects.',
    credential: 'https://certify.codesprint.in/verify/75M4C9GR',
  },
  {
    icon: `${DEVICON}/react/react-original.svg`,
    name: 'React Developer Internship',
    issuer: 'Pinnet Info Solutions Pvt. Ltd.',
    date: 'Jul 2025',
    category: 'Frontend',
    color: 'cyan',
    desc: 'Awarded upon successful completion of a React.js internship, building production-grade components and integrating REST APIs.',
    credential: 'https://drive.google.com/file/d/1z_kOTWo8IPe8O0ti8vwEdItWAmXWv6ks/view',
  },
];

const TRAINING = [
  {
    icon: '🏅',
    name: 'Full Stack with Django & AI Agents',
    issuer: 'W3 Grads',
    period: 'Jun 2025 – Jul 2025',
    category: 'Full Stack',
    color: 'gold',
    desc: 'Industry-focused full-stack training covering Django, Python, HTML, CSS, JavaScript, SQL, and AI Agents. Delivered 2 full-stack application projects integrating AI-driven features.',
    tags: ['Django', 'Python', 'AI Agents', 'Full Stack', 'SQL'],
    credential: 'https://drive.google.com/file/d/1z_kOTWo8IPe8O0ti8vwEdItWAmXWv6ks/view',
  },
];

const STATS = [
  { value: '3', label: 'Certifications' },
  { value: '1', label: 'Training Program' },
  { value: '4', label: 'Total Credentials' },
];

export default function Certifications() {
  return (
    <div className="certs-page">

      {/* Banner */}
      <section className="certs-banner">
        <div className="certs-banner-bg" aria-hidden="true">
          <div className="cbb1" /><div className="cbb2" />
        </div>
        <div className="section-header anim">
          <p className="eyebrow">Credentials</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}>
            Certifications &amp; <em>Training</em>
          </h1>
          <div className="rule" />
          <p>Industry-recognized credentials and training programs that sharpen my craft.</p>
        </div>

        {/* Stats strip */}
        <div className="certs-stats anim d3">
          {STATS.map((s, i) => (
            <div className="certs-stat" key={i}>
              <span className="certs-stat-n">{s.value}</span>
              <span className="certs-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications grid */}
      <section className="certs-main-section">
        <div className="section-header anim">
          <p className="eyebrow">Certificates</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Earned <em>Credentials</em>
          </h2>
          <div className="rule" />
        </div>

        <div className="certs-main-grid">
          {CERTIFICATIONS.map((c, i) => (
            <div
              className={`cert-main-card cert-main-card--${c.color} anim`}
              style={{ animationDelay: `${i * 0.12}s` }}
              key={i}
            >
              <div className="cmc-glow" aria-hidden="true" />
              <div className="cmc-top-band" />
              <div className="cmc-body">
                <div className="cmc-header">
                  <div className="cmc-icon-wrap">
                    <img src={c.icon} alt={c.name} />
                  </div>
                  <span className={`cmc-category cmc-category--${c.color}`}>{c.category}</span>
                </div>
                <h3 className="cmc-name">{c.name}</h3>
                <p className="cmc-desc">{c.desc}</p>
                <div className="cmc-footer">
                  <div className="cmc-meta">
                    <span className="cmc-issuer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                      </svg>
                      {c.issuer}
                    </span>
                    <span className="cmc-date">{c.date}</span>
                  </div>
                  <a href={c.credential} className="cmc-btn" target="_blank" rel="noopener noreferrer">
                    View Credential
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 3H3a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9M10 1h5m0 0v5m0-5L8 8"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training / Achievements */}
      <section className="training-section">
        <div className="training-bg" aria-hidden="true" />
        <div className="section-header anim">
          <p className="eyebrow">Training Programs</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Industry <em>Training</em>
          </h2>
          <div className="rule" />
        </div>

        <div className="training-grid">
          {TRAINING.map((t, i) => (
            <div className="training-card anim d2" key={i}>
              <div className="tc-glow" aria-hidden="true" />
              <div className="tc-left">
                <div className="tc-icon">{t.icon}</div>
                <div className="tc-category">{t.category}</div>
              </div>
              <div className="tc-right">
                <div className="tc-issuer-row">
                  <span className="tc-issuer">{t.issuer}</span>
                  <span className="tc-period">{t.period}</span>
                </div>
                
                <h3 className="tc-name">{t.name}</h3>
                <p className="tc-desc">{t.desc}</p>
                <div className="tc-tags">
                  {t.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}
                </div>
                <div className="tc-footer">
                  <a href={t.credential} className="tc-btn " target="_blank" rel="noopener noreferrer">
                    View Credential
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 3H3a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9M10 1h5m0 0v5m0-5L8 8"/>
                    </svg>
                  </a>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}