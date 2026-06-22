import { useEffect, useRef } from 'react';
import './BrandNarrative.css';
import artisanImg from '../../assets/artisans.png';

const BrandNarrative = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, { threshold: 0.3 });

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="narrative-section" id="craft">
      <div className="narrative-image-side">
        <div className="narrative-arch">
          <img src={artisanImg} alt="Artisan weaving" />
          <div className="vignette-overlay"></div>
        </div>
      </div>
      <div className="narrative-text-side">
        <div className="narrative-content" ref={textRef}>
          <span className="narrative-eyebrow">THE STORY BEHIND THE WEAVE</span>
          <h2 className="narrative-heading">Hands that carry<br/>a thousand years</h2>
          <p className="narrative-body">
            Every thread of an Urvaya heirloom tells a story of devotion. Crafted by master artisans whose lineage dates back to the royal courts, our handlooms are living artifacts. From the GI-tagged silks of Banaras to the intricate zaris of Kanchipuram, we preserve the purity of Indian craft.
          </p>
          <button className="narrative-btn hover-shimmer">Meet Our Weavers &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default BrandNarrative;
