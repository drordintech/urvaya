import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import logomark from '../../assets/logos/logo.png';
import wordmarkImg from '../../assets/logos/word.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlistItems } = useWishlist();

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
          <Link to="/" className="navbar-brand">
            <img src={logomark} alt="Urvaya Logomark" className="logomark-img" />
            <div className="navbar-brand-text">
              <img src={wordmarkImg} alt="Urvaya" className="wordmark-img" />
              <div className="tagline">THE ART OF HANDLOOM LIVING</div>
            </div>
          </Link>
        </div>

        {/* Right: nav links + icons */}
        <div className="navbar-right desktop-only">
          <nav className="nav-links">
            <div className="nav-item">
              <a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Collections</a>
              <div className="dropdown-menu">
                <a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Our Collection</a>
                <a href="#sarees" onClick={(e) => handleNavClick(e, 'sarees')}>Sarees</a>
                <a href="#jewellery" onClick={(e) => handleNavClick(e, 'jewellery')}>Jewellery</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#craft" onClick={(e) => handleNavClick(e, 'craft')}>Our Craft</a>
            </div>
            <div className="nav-item">
              <a href="#lookbook" onClick={(e) => handleNavClick(e, 'lookbook')}>Lookbook</a>
            </div>
            <div className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </div>
          </nav>

          <div className="nav-icons">
            {/* Search Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

            {/* Wishlist Icon with Dropdown */}
            <div className="wishlist-nav-container">
              <Link to="/wishlist" className="wishlist-icon-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlistItems.length > 0 ? "#C9A84C" : "none"} stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistItems.length > 0 && <span className="wishlist-badge">{wishlistItems.length}</span>}
              </Link>

              <div className="wishlist-dropdown">
                {wishlistItems.length === 0 ? (
                  <p className="wishlist-empty-text">Your wishlist is empty</p>
                ) : (
                  <>
                    <div className="wishlist-dropdown-items">
                      {wishlistItems.slice(0, 3).map(item => (
                        <div key={item.id} className="wishlist-dropdown-item">
                          <img src={item.image} alt={item.name} />
                          <div className="wishlist-dropdown-info">
                            <span>{item.name}</span>
                            <span className="price">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {wishlistItems.length > 3 && (
                      <p className="wishlist-more-text">+{wishlistItems.length - 3} more items</p>
                    )}
                    <Link to="/wishlist" className="wishlist-view-all">View Full Wishlist</Link>
                  </>
                )}
              </div>
            </div>
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
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); if (location.pathname !== '/') navigate('/'); }}>Home</a>
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
