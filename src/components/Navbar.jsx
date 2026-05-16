import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { LayoutDashboard, CheckSquare, Wallet, BookOpen, BarChart3, Home, Menu, X, ChevronRight } from 'lucide-react'; 
import '../styles/Navbar.css'; 
import LogoImg from '../assets/logo.jpG'; 

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const location = useLocation(); 

  useEffect(() => { 
    const handleScroll = () => setScrolled(window.scrollY > 20); 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  const isActive = (path) => location.pathname === path; 

  return ( 
    <nav className={`nav-root ${scrolled ? 'nav-scrolled' : ''}`}> 
      <div className="nav-main-container"> 
        {/* Logo Section */} 
        <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}> 
          <div className="brand-logo-img"> 
            <img src={LogoImg} alt="IntambweFlow Logo" /> 
          </div> 
          <span className="brand-name-text">Intambwe<span>Flow</span></span> 
        </Link> 

        {/* Desktop Links */} 
        <div className="nav-desktop-links"> 
          <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link> 
          <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link> 
          <Link to="/tasks" className={`nav-item ${isActive('/tasks') ? 'active' : ''}`}>Tasks</Link> 
          <Link to="/finance" className={`nav-item ${isActive('/finance') ? 'active' : ''}`}>Finance</Link> 
          <Link to="/learning" className={`nav-item ${isActive('/learning') ? 'active' : ''}`}>Learning</Link> 
          <Link to="/report" className={`nav-item report-link ${isActive('/report') ? 'active' : ''}`}> 
            <BarChart3 size={18} /> Weekly Report 
          </Link> 
        </div> 

        {/* Mobile Hamburger Button */}
        <button className="nav-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation"> 
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />} 
        </button> 
      </div> 

      {/* Mobile Menu Overlay */} 
      <div className={`nav-mobile-overlay ${isMenuOpen ? 'show' : ''}`}> 
        <div className="mobile-menu-box"> 
          <div className="mobile-menu-header">
            <div className="mobile-logo-display"> 
              <img src={LogoImg} alt="Logo" /> 
            </div> 
            <button className="mobile-inner-close" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <p className="mobile-label">System Navigation</p> 
          
          <div className="mobile-links-grid"> 
            <Link to="/" className={`m-link ${isActive('/') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper"><Home size={20} /></div> 
              <span>Home</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
            <Link to="/dashboard" className={`m-link ${isActive('/dashboard') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper"><LayoutDashboard size={20} /></div> 
              <span>Dashboard</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
            <Link to="/tasks" className={`m-link ${isActive('/tasks') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper"><CheckSquare size={20} /></div> 
              <span>Tasks</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
            <Link to="/finance" className={`m-link ${isActive('/finance') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper"><Wallet size={20} /></div> 
              <span>Finance</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
            <Link to="/learning" className={`m-link ${isActive('/learning') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper"><BookOpen size={20} /></div> 
              <span>Learning Vault</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
            <Link to="/report" className={`m-link highlight-report ${isActive('/report') ? 'm-active' : ''}`} onClick={() => setIsMenuOpen(false)}> 
              <div className="m-icon-wrapper report-icon"><BarChart3 size={20} /></div> 
              <span>Weekly Audit</span> 
              <ChevronRight size={16} className="m-arrow" /> 
            </Link> 
          </div> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;
