import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

export default function Contact() {
  const [time, setTime] = useState('');
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  
  // State for our conversational form inputs
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    email: '',
    details: ''
  });

  // Live Time Clock (India Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Format the message into a readable layout for your email inbox
    const emailMessage = `
      New Portfolio Inquiry:
      ----------------------
      Name: ${formData.name}
      Company: ${formData.company || 'Not provided'}
      Project Needs: ${formData.project}
      Email: ${formData.email}
      
      Additional Details:
      ${formData.details || 'No additional details provided.'}
    `;

    try {
      // Send the email using Web3Forms (Free, no backend required)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "305c186e-322d-41bb-b314-6b432b73c56c", // <--- PASTE YOUR KEY HERE
          subject: `New Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: emailMessage,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormState('success');
        
        // Reset form and UI after 5 seconds
        setTimeout(() => {
          setFormState('idle');
          setFormData({ name: '', company: '', project: '', email: '', details: '' });
        }, 5000);
      } else {
        alert("Something went wrong. Please try again later.");
        setFormState('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
      setFormState('idle');
    }
  };

  return (
    <div className="contact-v6-wrapper">
      {/* Ambient Animated Background */}
      <div className="v6-ambient-bg" aria-hidden="true">
        <div className="v6-orb v6-orb-1"></div>
        <div className="v6-orb v6-orb-2"></div>
      </div>

      <div className="v6-contact-container">
        
        {/* ─── LEFT COLUMN: Info & Presence ─── */}
        <motion.div 
          className="v6-info-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="v6-eyebrow">Initiate Protocol</p>
          <h1 className="v6-heading">
            Let's build something <br />
            <em>extraordinary.</em>
          </h1>

          <div className="v6-presence-grid">
            <div className="v6-presence-item">
              <span className="v6-label">Direct Line</span>
              <a href="tel:+919876543210" className="v6-link-large">+91 7012560585</a>
            </div>
            
            <div className="v6-presence-item">
              <span className="v6-label">Digital Inbox</span>
              <a href="mailto:sanekhakkclt@gmail.com" className="v6-link-large">sanekhakkclt@gmail.com</a>
            </div>

            <div className="v6-presence-item">
              <span className="v6-label">Online Presence</span>
              <div className="v6-social-links">
                <a href="https://linkedin.com/in/sanekhakk" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="https://github.com/sanekhakk" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>

          <div className="v6-status-block">
            <div className="v6-live-time">
              <span className="v6-time-label">Local Time (IST)</span>
              <span className="v6-time-value">{time}</span>
            </div>
            <div className="v6-availability">
              <div className="v6-pulse-dot"></div>
              <span>Accepting new opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT COLUMN: Conversational Form ─── */}
        <motion.div 
          className="v6-form-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="v6-glass-form-card">
            {formState === 'success' ? (
              <motion.div 
                className="v6-success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="v6-success-icon">✓</div>
                <h3>Message Transmitted</h3>
                <p>Thank you. I've received your data and will reply shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="v6-conversational-form">
                <p className="v6-form-sentence">
                  Hello Sanekha, my name is 
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} 
                    placeholder="Your Name" required className="v6-inline-input" 
                  /> 
                  and I represent 
                  <input 
                    type="text" name="company" value={formData.company} onChange={handleChange} 
                    placeholder="Company (Optional)" className="v6-inline-input" 
                  />.
                  <br /><br />
                  I'm looking for a developer to help with 
                  <input 
                    type="text" name="project" value={formData.project} onChange={handleChange} 
                    placeholder="a project / freelance work" required className="v6-inline-input v6-input-long" 
                  />.
                  <br /><br />
                  You can reach me back at 
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} 
                    placeholder="Email Address" required className="v6-inline-input" 
                  />.
                  <br /><br />
                  Here are some extra details:
                  <textarea 
                    name="details" value={formData.details} onChange={handleChange} 
                    placeholder="Write a brief message..." className="v6-inline-textarea"
                  ></textarea>
                </p>

                <div className="v6-form-footer">
                  <button type="submit" className="v6-submit-btn" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Transmitting...' : 'Send Transmission'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}