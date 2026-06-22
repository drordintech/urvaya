import { useEffect, useRef } from 'react';
import './JewellerySection.css';

import banglesImg from '../../assets/jewellery/bangles.jpg';
import jhumkasImg from '../../assets/jewellery/jhumkas.jpg';
import mangTikaImg from '../../assets/jewellery/mang tika.jpg';
import raniHaarImg from '../../assets/jewellery/rani haar.jpg';

const products = [
  { name: 'Temple Gold Jhumkas', type: 'TEMPLE', price: '₹48,000', image: jhumkasImg },
  { name: 'Polki Diamond Bangles', type: 'POLKI', price: '₹2,10,000', image: banglesImg },
  { name: 'Kundan Maang Tikka', type: 'KUNDAN', price: '₹35,000', image: mangTikaImg },
  { name: 'Antique Rani Haar', type: 'ANTIQUE', price: '₹3,50,000', image: raniHaarImg }
];

const JewellerySection = () => {
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
    <section className="jewellery-section" id="jewellery" ref={sectionRef}>
      <div className="jewellery-header reveal-on-scroll">
        <h2 className="text-section-title" style={{color: 'var(--color-rakt)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '56px', fontWeight: '300'}}>Adorn the Moment</h2>
      </div>

      <div className="jewel-scroll-container">
        <div className="jewel-scroll-track">
          {products.map((product, index) => (
            <div className="jewel-card" key={index}>
              <div className="jewel-image-wrapper">
                 <img src={product.image} alt={product.name} />
                 <div className="add-to-cart-bar">ADD TO CART</div>
              </div>
              <div className="jewel-info">
                 <span className="product-type">{product.type}</span>
                 <h4 className="product-name" style={{color: 'var(--color-rakt)'}}>{product.name}</h4>
                 <div className="product-price-row">
                    <span className="current-price" style={{color: 'var(--color-rakt)'}}>{product.price}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewellerySection;
