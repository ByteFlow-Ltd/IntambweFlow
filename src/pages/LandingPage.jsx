import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, BookOpen, Wallet, Shield, BarChart3, Zap } from 'lucide-react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">All-in-One Productivity Tool</span>
          <h1>Master Your Day, One <span className="highlight">Step</span> at a Time.</h1>
          <p className="hero-description">
            The ultimate companion for high-achievers. Track your tasks, manage your finances, 
            and document your learning journey—all in one secure, local dashboard.
          </p>
          <div className="hero-btns">
            <Link to="/dashboard" className="cta-button primary">
              Launch App Free <ArrowRight size={20} />
            </Link>
            <a href="#features" className="cta-button secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <BarChart3 size={32} className="stat-icon" />
            <div>
              <strong>100% Private</strong>
              <span>Local Storage Data</span>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Everything you need to <span className="highlight">level up</span></h2>
          <p>We combined the three pillars of personal growth into a single flow.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon-box">
              <CheckCircle size={28} />
            </div>
            <h3>Smart Task Tracking</h3>
            <p>Organize your daily to-dos and watch your productivity percentage grow in real-time.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <Wallet size={28} />
            </div>
            <h3>Expense Manager</h3>
            <p>Keep a clear eye on your cash flow. Balance your income and expenses effortlessly.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <BookOpen size={28} />
            </div>
            <h3>Knowledge Log</h3>
            <p>Never lose a lesson. Document daily insights to build your personal knowledge base.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <TrendingUp size={28} />
            </div>
            <h3>Weekly Analytics</h3>
            <p>Detailed performance reports to help you identify patterns and optimize your habits.</p>
          </div>
        </div>
      </section>

      {/* How it Works / Trust Section */}
      <section className="how-it-works">
        <div className="info-grid">
          <div className="info-text">
            <h2>Your Data, Your <span className="highlight">Control.</span></h2>
            <div className="info-item">
              <Shield className="info-icon" />
              <div>
                <h4>No Cloud, No Risks</h4>
                <p>IntambweFlow saves all your data directly in your browser's LocalStorage. Privacy is built-in by default.</p>
              </div>
            </div>
            <div className="info-item">
              <Zap className="info-icon" />
              <div>
                <h4>Blazing Fast</h4>
                <p>No waiting for server responses. Add tasks and track expenses instantly with zero lag.</p>
              </div>
            </div>
          </div>
          <div className="info-image">
            <div className="placeholder-app-ui">
              <div className="ui-header">Dashboard Preview</div>
              <div className="ui-row">Progress: <span className="ui-highlight">75%</span></div>
              <div className="ui-row">Balance: <span className="ui-highlight">$2,400</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="final-cta">
        <h2>Ready to transform your routine?</h2>
        <p>Join others using IntambweFlow to organize their daily life.</p>
        <Link to="/dashboard" className="cta-button primary large">
          Start Your Journey Now
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
