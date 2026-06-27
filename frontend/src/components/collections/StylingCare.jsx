import React, { useEffect, useRef } from 'react';
import './CollectionSections.css';

const StylingCare = ({ data }) => {
  const hexToRgba = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const leftBgColor = hexToRgba(data.accentColor, 0.15);

  return (
    <section className="styling-care-section">
      <div className="styling-split-container">
        
        <div className="styling-col left-col" style={{ backgroundColor: leftBgColor }}>
          <div className="section-eyebrow" style={{ color: data.accentColor }}>STYLE IT WITH</div>
          <h2 className="styling-heading">Complete the look</h2>
          
          <div className="suggestion-cards">

            <div className="suggestion-card" style={{ borderLeftColor: data.accentColor }}>
              <div className="suggestion-icon">✧</div>
              <div className="suggestion-text">
                <h4>Jewellery</h4>
                <p>Antique temple gold or uncut polki</p>
              </div>
            </div>
            <div className="suggestion-card" style={{ borderLeftColor: data.accentColor }}>
              <div className="suggestion-icon">✧</div>
              <div className="suggestion-text">
                <h4>Occasion</h4>
                <p>Evening receptions and traditional ceremonies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="styling-col right-col">
          <div className="section-eyebrow" style={{ color: 'var(--color-gold-accent)' }}>CARE GUIDE</div>
          <h2 className="styling-heading">Preserving your heirloom</h2>
          
          <ul className="care-list">
            <li>
              <span className="care-icon">◎</span> Dry clean only using reputable specialists
            </li>
            <li>
              <span className="care-icon">◎</span> Store wrapped in unbleached muslin cloth
            </li>
            <li>
              <span className="care-icon">◎</span> Avoid direct sunlight during storage
            </li>
            <li>
              <span className="care-icon">◎</span> Iron on reverse at lowest heat setting
            </li>
            <li>
              <span className="care-icon">◎</span> Air out every 3-4 months before storing again
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default StylingCare;
