import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import '../styles/About.css';

const CV_URL = '/Sanekha_KK_Resume.pdf'; 

// Core technologies orbiting your initials
const TECH_ORBITAL = [
  { name: 'React', color: '#61dafb', x: '15%', y: '10%' },
  { name: 'Node.js', color: '#339933', x: '80%', y: '15%' },
  { name: 'Django', color: '#092e20', x: '10%', y: '70%' },
  { name: 'MongoDB', color: '#47a248', x: '75%', y: '75%' },
  { name: 'Tutor', color: '#be3d62', x: '45%', y: '85%' },
];

const MILESTONES = [
  {
    year: '2023 – Present',
    bgYear: '23',
    title: 'B.Tech in Computer Science',
    org: 'Lovely Professional University',
    desc: 'Specializing in Full-Stack systems, AI integration, and Scalable Architecture. Building the bridge between complex backend logic and seamless frontend experiences.',
    metric: 'CGPA: 7.77',
    icon: '🚀'
  },
  {
    year: '2020 – 2022',
    bgYear: '20',
    title: 'Intermediate (XII)',
    org: 'GGVHSS Nadakkav',
    desc: 'Specialized in Computer Science with a 92.7% score, building a rigorous foundation in core algorithms, mathematics, and logical problem-solving.',
    metric: 'Score: 92.7%',
    icon: '📈'
  }
];

const HOBBIES = [
  {
    title: 'Startup Ideas',
    desc: 'Exploring real-world problems and shaping them into SaaS ideas, focusing on scalability, usability, and meaningful impact.',
    icon: '💡',
    img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'UI Experiments',
    desc: 'Designing clean, aesthetic interfaces and experimenting with layouts, interactions, and visual styles to create intuitive user experiences.',
    icon: '✨',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Tech Mentoring',
    desc: 'Teaching coding to 20+ students because explaining code is the absolute best way to master it.',
    icon: '💻',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop'
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for different depths
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="about-page-unique" ref={containerRef}>
      {/* Background Kinetic Typography for unique branding */}
      <motion.div style={{ y: y1 }} className="kinetic-bg-about">
        CREATIVE FULL-STACK MENTOR
      </motion.div>

      {/* Hero Section: Storytelling Layout */}
      <section className="about-hero-unique">
        <div className="hero-content-left anim">
          <p className="eyebrow">The Developer Behind the Screen</p>
          <h1 className="hero-title-unique">Building <em>Digital</em> Architecture</h1>
          
          <div className="hero-bio-container">
            <p className="hero-description-unique">
              I am <strong>Sanekha K K</strong>.I enjoy building things that actually work — not just writing code, but creating complete web applications from idea to execution.
              I have dedicated myself to mastering the MERN stack 
              and Django to solve real-world problems with high-performance logic.
            </p>
            <p className="hero-description-unique">
              Alongside building web applications, I spend a big part of my time <strong>teaching.</strong>
 <br></br>I enjoy breaking down complex concepts into simple ideas and helping students build confidence in tech.

Being a tutor has shaped the way I code — I focus on clarity, structure, and writing logic that’s easy to understand, not just functional.</p>
          </div>

          {/* NEW: Key Pillars to fill the space nicely */}
          <div className="hero-pillars-unique anim d2">
            <div className="hero-pillar-item">
              <span className="hero-pillar-icon">✦</span> Clean Architecture
            </div>
            <div className="hero-pillar-item">
              <span className="hero-pillar-icon">✦</span> AI-Powered Solutions
            </div>
            <div className="hero-pillar-item">
              <span className="hero-pillar-icon">✦</span> Intuitive UX
            </div>
            <div className="hero-pillar-item">
              <span className="hero-pillar-icon">✦</span> Tech Mentorship
            </div>
          </div>

          <div className="about-actions-unique anim d3">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-main">View CV</a>
            </div>
        </div>
        
        <div className="hero-visual-right anim d2">
          {/* Parallax Orbit Container */}
          <motion.div style={{ y: y2 }} className="orbit-container-about">
            
            {/* The Central "Core" - Minimalist SK */}
            <div className="central-core-about">
              <span className="core-initials-about">SK</span>
              <div className="core-pulse-about" />
            </div>

            {/* Floating Tech Orbitals */}
            {TECH_ORBITAL.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="orbit-item-about"
                style={{ 
                  left: tech.x, 
                  top: tech.y,
                  '--glow-color': tech.color 
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ENHANCED: STICKY STACKING BLUEPRINT (Academic Milestones) ─── */}
      <section className="v5-blueprint-section">
        <div className="v5-blueprint-container">
          
          {/* Pinned Left Side */}
          <div className="v5-sticky-left anim">
            <h2 className="v5-section-title">The <br/><em>Blueprint</em></h2>
            <p className="v5-section-desc">The academic milestones that shaped my technical foundation, forged my logic, and built my engineering mindset.</p>
            <div className="v5-scroll-indicator">
              <div className="v5-scroll-dot" />
              <span>Scroll to unfold</span>
            </div>
          </div>

          {/* Scrolling & Stacking Right Side */}
          <div className="v5-scroll-right-stacked anim d2">
            {MILESTONES.map((m, i) => (
              <div 
                key={i} 
                className="v5-stacked-card"
                style={{ top: `calc(120px + ${i * 20}px)`, zIndex: i + 1 }}
              >
                {/* Giant watermark number in background */}
                <div className="v5-stacked-watermark">{m.bgYear}</div>
                
                <div className="v5-stacked-content">
                  <div className="v5-milestone-header">
                    <span className="v5-year-badge">{m.year}</span>
                    <span className="v5-metric">{m.metric}</span>
                  </div>
                  
                  <div className="v5-stacked-main">
                    <div className="v5-stacked-icon">{m.icon}</div>
                    <div>
                      <h3>{m.title}</h3>
                      <h4 className="v5-org">{m.org}</h4>
                    </div>
                  </div>
                  
                  <p className="v5-stacked-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ─── 3D Flip Card Fan (Hobbies) ─── */}
      <section className="hobbies-section-unique">
        <div className="section-header text-center anim">
          <p className="eyebrow">Beyond the IDE</p>
          <h2 className="display-mid-unique">Digital <em>Alter-Egos</em></h2>
          <p className="hobbies-sub-unique">Things I love beyond development</p>
        </div>

        <div className="hobbies-fan-spread anim d2">
          {HOBBIES.map((h, i) => (
            <div key={i} className="hobby-fan-card">
              <div className="hobby-flip-inner">
                
                {/* Front Face */}
                <div className="hobby-flip-front">
                  <div className="hobby-flip-overlay"></div>
                  <div className="hobby-flip-front-content">
                    <div className="hobby-flip-icon">{h.icon}</div>
                    <h3>{h.title}</h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="hobby-flip-back">
                  <h3>{h.title}</h3>
                  <div className="hobby-flip-divider" />
                  <p>{h.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Advanced Glowing CTA ─── */}
      <section className="about-footer-cta-unique anim">
        <div className="cta-glow-wrapper">
          <div className="cta-unique-card">
            <h2>Ready to start a <em>conversation?</em></h2>
            <p>Whether it is a project inquiry or just a tech chat, my inbox is always open.</p>
            <a href="mailto:sanekhakkclt@gmail.com" className="btn-main">Let's Connect</a>
          </div>
        </div>
      </section>
    </div>
  );
}