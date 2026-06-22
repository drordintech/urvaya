import { useEffect, useRef } from 'react';
import './CollectionsGrid.css';
import banarasiImg from '../../assets/collections/banarasi saree.png';
import kanjeevaramImg from '../../assets/collections/kanjeevaram.jpg';
import chanderiImg from '../../assets/collections/chanderi saree.png';
import paithaniImg from '../../assets/collections/paithani.png';
import tussarImg from '../../assets/collections/tussar.png';
import jamdaniImg from '../../assets/collections/jamdani.webp';

const collections = [
  { name: 'Banarasi Silk', image: banarasiImg },
  { name: 'Kanjeevaram', image: kanjeevaramImg },
  { name: 'Chanderi', image: chanderiImg },
  { name: 'Paithani', image: paithaniImg },
  { name: 'Tussar', image: tussarImg },
  { name: 'Jamdani', image: jamdaniImg }
];

const CollectionsGrid = () => {
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
      const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="collections-section" id="collections" ref={sectionRef}>
      <div className="collections-header reveal-on-scroll">
        <h2 className="text-section-title" style={{color: 'var(--color-rakt)'}}>Our Collections</h2>
        <div className="lotus-divider">
           <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 2 C40 8, 30 10, 50 18 C70 10, 60 8, 50 2 Z" stroke="#B64F1A" strokeWidth="1"/>
              <path d="M50 5 C45 10, 40 12, 50 16 C60 12, 55 10, 50 5 Z" stroke="#B64F1A" strokeWidth="1"/>
           </svg>
        </div>
      </div>
      
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div className="collection-card reveal-on-scroll" style={{ transitionDelay: `${(index % 3) * 0.1}s` }} key={index}>
            <div className="collection-arch">
              <img src={collection.image} alt={collection.name} />
              <div className="collection-overlay">
                <h3>{collection.name}</h3>
                <span className="explore-btn">Explore &rarr;</span>
              </div>
            </div>
            <div className="arch-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;
