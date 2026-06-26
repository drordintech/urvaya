import React, { useEffect, useRef } from 'react';
import './CollectionSections.css';

// Placeholder for section divider - reuse from home or define simple one here
const SectionDivider = () => (
  <div className="section-divider">
    <div className="divider-line"></div>
    <div className="divider-diamond"></div>
    <div className="divider-line"></div>
  </div>
);

const WeaverStory = ({ data }) => {
  const hexToRgba = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const bgColor = hexToRgba(data.accentColor, 0.08);

  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="weaver-story" style={{ backgroundColor: bgColor }}>
      <div className="weaver-container fade-up-element" ref={containerRef}>
        <div className="weaver-header">
          <div className="section-eyebrow" style={{ color: 'var(--color-gold-accent)' }}>
            THE WEAVERS
          </div>
          <h2 className="weaver-heading">{data.weaverHeading}</h2>
          <SectionDivider />
        </div>

        <div className="weaver-cards-row">
          {data.weavers.map((weaver, idx) => (
            <div className="weaver-card" key={idx}>
              <div className="weaver-portrait-frame">
                <div 
                  className="weaver-portrait"
                  style={{ backgroundImage: weaver.image ? `url(${weaver.image})` : undefined }}
                >
                </div>
              </div>
              <h3 className="weaver-name">{weaver.name}</h3>
              <div className="weaver-location">{weaver.location}</div>
              <div className="weaver-quote-strip">
                <span className="quote-mark">"</span>
                {weaver.quote}
                <span className="quote-mark">"</span>
              </div>
            </div>
          ))}
        </div>

        <div className="weaver-body">
          <p>{data.weaverBody}</p>
        </div>

        <div className="craft-film-strip">
          {data.craftImages && data.craftImages.map((img, idx) => (
            <div 
              className="film-frame" 
              key={idx}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaverStory;
