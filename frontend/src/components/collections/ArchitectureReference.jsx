import React, { useEffect, useRef } from 'react';
import './CollectionSections.css';

const ArchitectureReference = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="architecture-reference">
      <div 
        className="architecture-bg"
        style={{ backgroundImage: data.architectureBgImage ? `url(${data.architectureBgImage})` : undefined }}
      >
        {/* We use the first image as the giant blurred background or just grain */}
        <div className="arch-grain-overlay"></div>
      </div>

      <div className="architecture-container fade-up-element" ref={containerRef}>
        <div className="arch-text-col">
          <div className="section-eyebrow" style={{ color: data.accentColor }}>
            ARCHITECTURAL HERITAGE
          </div>
          <h2 className="arch-heading">{data.architectureHeading}</h2>
          <p className="arch-body">{data.architectureBody}</p>
        </div>

        <div className="arch-images-col">
          <div className="fan-deck">
            {data.architectureImages.map((img, idx) => (
              <div className="fan-card" key={idx} style={{ '--card-idx': idx }}>
                <img src={img} alt="Architecture reference" />
                <div className="fan-caption">REFERENCE {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureReference;
