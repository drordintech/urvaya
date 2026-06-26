import React, { useEffect } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, toggleWishlist } = useWishlist();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist-page">
      <div className="wishlist-header text-hero">
        <h1>Your Wishlist</h1>
        <p className="subtitle">Curated pieces you love.</p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <p>Your wishlist is currently empty.</p>
          <Link to="/" className="btn btn-primary">Explore Collections</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div key={product.id} className="wishlist-card">
              <div className="wishlist-image-container">
                <img src={product.image} alt={product.name} className="wishlist-image" />
                <button 
                  className="wishlist-remove-btn"
                  onClick={() => toggleWishlist(product)}
                  aria-label="Remove from wishlist"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#B64F1A" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>
              <div className="wishlist-info">
                <h3>{product.name}</h3>
                <p className="wishlist-collection">{product.type}</p>
                <p className="wishlist-price">{product.price}</p>
                
                <div className="wishlist-actions">
                  <button className="btn btn-outline-cart">ADD TO CART</button>
                  <button className="btn btn-buy-now">BUY NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
