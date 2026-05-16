import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Heart, Globe, ShieldCheck, 
  Zap, Send, MessageSquare 
} from 'lucide-react';
import '../styles/Footer.css';
// Importa ifoto hano
import LogoImg from '../assets/logo.jPG'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-main-container">
        <div className="footer-grid">
          
          {/* Brand Identity - Twashyizemo Logo.jpeg */}
          <div className="footer-column brand-col">
            <Link to="/" className="f-logo">
              <div className="f-logo-img">
                <img src={LogoImg} alt="IntambweFlow Logo" />
              </div>
              <span className="f-logo-text">Intambwe<span>Flow</span></span>
            </Link>
            <p className="f-description">
              Elevate your productivity with our secure, local-first dashboard. 
              Master tasks, manage finances, and archive knowledge with precision.
            </p>
            <div className="f-trust-badges">
              <div className="trust-item">
                <ShieldCheck size={16} /> <span>100% Local Data Control</span>
              </div>
              <div className="trust-item">
                <Zap size={16} /> <span>High Performance Engine</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-column">
            <h4 className="f-title">Navigation</h4>
            <ul className="f-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/tasks">Task Manager</Link></li>
              <li><Link to="/finance">Finance Hub</Link></li>
              <li><Link to="/learning">Learning Vault</Link></li>
              <li><Link to="/report">Weekly Audit</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="footer-column">
            <h4 className="f-title">Get in Touch</h4>
            <ul className="f-contact-list">
              <li>
                <Mail size={18} className="c-icon" />
                <span>mission@intambwe.rw</span>
              </li>
              <li>
                <MapPin size={18} className="c-icon" />
                <span>Kigali, Rwanda</span>
              </li>
              <li>
                <Globe size={18} className="c-icon" />
                <span>www.intambweflow.rw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column newsletter-col">
            <h4 className="f-title">Newsletter</h4>
            <p className="f-sub-text">Join the 1% tracking their daily growth.</p>
            <form className="f-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="agent@email.com" required />
              <button type="submit" aria-label="Subscribe">
                <Send size={18} />
              </button>
            </form>
            <div className="f-status-online">
              <div className="pulse-dot"></div>
              <span>System Operational</span>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-bar">
          <div className="f-bottom-left">
            <p>© {currentYear} IntambweFlow. Built with <Heart size={14} className="heart-pulse" /> in Rwanda.</p>
          </div>
          <div className="f-bottom-right">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
