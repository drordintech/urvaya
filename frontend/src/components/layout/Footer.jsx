import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="lotus-logo">
              <path d="M50 10 C30 40, 10 50, 50 90 C90 50, 70 40, 50 10 Z" stroke="#C9A84C" strokeWidth="2"/>
              <path d="M50 20 C40 45, 30 50, 50 80 C70 50, 60 45, 50 20 Z" stroke="#C9A84C" strokeWidth="2"/>
              <circle cx="50" cy="50" r="5" fill="#C9A84C" />
            </svg>
            <h2>Urvaya</h2>
          </div>
          <p className="footer-tagline">The Art of Hanloom Living</p>
          <div className="social-icons">
             {/* Instagram */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             {/* Facebook */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </div>
        </div>

        <div className="footer-col">
          <h3>Shop</h3>
          <Link to="/collections">All Sarees</Link>
          <Link to="/collections">Bridal</Link>
          <Link to="/collections">Festive</Link>
          <Link to="/collections">Jewellery</Link>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <Link to="/about">Our Craft</Link>
          <Link to="/about">The Story</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Stores</Link>
        </div>

        <div className="footer-col newsletter-col">
          <h3 className="newsletter-heading">Stories from the Loom</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="hairline-divider"></div>
        <p className="copyright">© 2026 URVAYA. ALL RIGHTS RESERVED.</p>
        <div className="payment-logos">
          {/* Text stand-ins for payment logos */}
          <span>RAZORPAY</span>
          <span>UPI</span>
          <span>VISA</span>
          <span>MASTERCARD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
