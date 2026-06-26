import { useEffect, useRef } from 'react';
import './CollectionsGrid.css';
import banarasiImg from '../../assets/collections/banarasi saree.png';
import kanjeevaramImg from '../../assets/collections/kanjeevaram.jpg';
import lucknowiImg from '../../assets/collections/lucknowi.jpg';

const collections = [
  { name: 'Banarasi Silk', image: banarasiImg, slug: 'banarasi-silk' },
  { name: 'Kanjeevaram', image: kanjeevaramImg, slug: 'kanjeevaram' },
  { name: 'Lucknowi', image: lucknowiImg, slug: 'lucknowi' }
];

import { useNavigate } from 'react-router-dom';

const CollectionsGrid = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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
        <h2 className="text-section-title" style={{ color: 'var(--color-rakt)' }}>Our Collections</h2>
        <div className="lotus-divider">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 2 C40 8, 30 10, 50 18 C70 10, 60 8, 50 2 Z" stroke="#B64F1A" strokeWidth="1" />
            <path d="M50 5 C45 10, 40 12, 50 16 C60 12, 55 10, 50 5 Z" stroke="#B64F1A" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div
            className="collection-card reveal-on-scroll"
            style={{ transitionDelay: `${(index % 3) * 0.1}s`, cursor: 'pointer' }}
            key={index}
            onClick={() => navigate(`/collections/${collection.slug}`)}
          >
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
