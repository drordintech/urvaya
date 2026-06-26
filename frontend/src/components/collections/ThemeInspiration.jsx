import React, { useEffect, useRef } from 'react';
import './CollectionSections.css';

const ThemeInspiration = ({ data }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="theme-inspiration">
      <div className="theme-container">
        
        <div className="theme-image-col">
          <div className="jali-frame-container slide-right-element" ref={imgRef}>
            <div className="theme-image-wrapper">
              <img src={data.themeImage} alt={`${data.name} theme inspiration`} />
              <div className="theme-image-vignette"></div>
            </div>
          </div>
        </div>

        <div className="theme-text-col fade-up-element" ref={textRef}>
          <div className="section-eyebrow" style={{ color: data.accentColor }}>
            THEME INSPIRATION
          </div>
          <h2 className="theme-heading">
            {data.themeHeading}
          </h2>
          <p className="theme-body">
            {data.themeBody}
          </p>
          <div 
            className="theme-pullquote" 
            style={{ borderLeft: `3px solid ${data.accentColor}` }}
          >
            "{data.themePullQuote}"
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThemeInspiration;
