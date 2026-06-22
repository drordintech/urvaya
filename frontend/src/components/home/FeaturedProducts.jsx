import { useEffect, useRef } from 'react';
import './FeaturedProducts.css';

import ivoryGoldImg from '../../assets/product features/classic ivory and gold.png';
import crimsonSilkImg from '../../assets/product features/crimsson silk.png';
import mustardYellowImg from '../../assets/product features/mustard yellow handloom.png';
import pastelMintImg from '../../assets/product features/pastel mint organza.png';
import royalBlueImg from '../../assets/product features/royal blue brocade.png';

const products = [
  { name: 'Classic Ivory & Gold', type: 'HANDLOOM', price: '₹28,500', originalPrice: '₹34,000', image: ivoryGoldImg },
  { name: 'Crimson Silk Saree', type: 'SILK', price: '₹42,000', originalPrice: '₹48,000', image: crimsonSilkImg },
  { name: 'Mustard Yellow Handloom', type: 'HANDLOOM', price: '₹22,000', originalPrice: '₹28,000', image: mustardYellowImg },
  { name: 'Pastel Mint Organza', type: 'ORGANZA', price: '₹35,000', originalPrice: '₹42,000', image: pastelMintImg },
  { name: 'Royal Blue Brocade', type: 'BROCADE', price: '₹55,000', originalPrice: '₹65,000', image: royalBlueImg }
];

const FeaturedProducts = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const el = sectionRef.current.querySelector('.reveal-on-scroll');
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="featured-section" id="sarees" ref={sectionRef}>
      <div className="featured-header reveal-on-scroll">
        <h2 className="text-section-title" style={{color: 'var(--color-ivory)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '56px', fontWeight: '300'}}>Curated for You</h2>
      </div>

      <div className="products-scroll-container">
        <div className="products-scroll-track">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                 <img src={product.image} alt={product.name} />
                 <button className="wishlist-btn">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 </button>
                 <div className="add-to-cart-bar">ADD TO CART</div>
              </div>
              <div className="product-info">
                 <span className="product-type">{product.type}</span>
                 <h4 className="product-name">{product.name}</h4>
                 <div className="product-price-row">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
