import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Lotus Logo Placeholder SVG */}
          <Link to="/">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="lotus-logo">
              <path d="M50 10 C30 40, 10 50, 50 90 C90 50, 70 40, 50 10 Z" stroke="#C9A84C" strokeWidth="2"/>
              <path d="M50 20 C40 45, 30 50, 50 80 C70 50, 60 45, 50 20 Z" stroke="#C9A84C" strokeWidth="2"/>
              <circle cx="50" cy="50" r="5" fill="#C9A84C" />
            </svg>
          </Link>
          <div className="navbar-brand-text">
            <Link to="/" className="wordmark">Urvaya</Link>
            <div className="tagline">THE ART OF HANLOOM LIVING</div>
          </div>
        </div>

        <div className="navbar-right desktop-only">
          <nav className="nav-links">
            <a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Collections</a>
            <a href="#sarees" onClick={(e) => handleNavClick(e, 'sarees')}>Sarees</a>
            <a href="#jewellery" onClick={(e) => handleNavClick(e, 'jewellery')}>Jewellery</a>
            <a href="#craft" onClick={(e) => handleNavClick(e, 'craft')}>Our Craft</a>
            <a href="#lookbook" onClick={(e) => handleNavClick(e, 'lookbook')}>Lookbook</a>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <div className="nav-icons">
            {/* Search Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            {/* Wishlist Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            {/* Cart Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
        </div>

        <div className="navbar-mobile mobile-only">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hamburger-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); setMobileMenuOpen(false); if(location.pathname !== '/') navigate('/'); }}>Home</a>
          <a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Collections</a>
          <a href="#sarees" onClick={(e) => handleNavClick(e, 'sarees')}>Sarees</a>
          <a href="#jewellery" onClick={(e) => handleNavClick(e, 'jewellery')}>Jewellery</a>
          <a href="#craft" onClick={(e) => handleNavClick(e, 'craft')}>Our Craft</a>
          <a href="#lookbook" onClick={(e) => handleNavClick(e, 'lookbook')}>Lookbook</a>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
