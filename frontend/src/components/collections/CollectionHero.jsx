import React from 'react';
import './CollectionSections.css';

const CollectionHero = ({ data }) => {
  return (
    <section className="collection-hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
      <div className="collection-hero-overlay"></div>
      
      <div className="collection-hero-content fade-up-element is-visible">
        <div className="hero-breadcrumb">
          Collections <span className="separator">&rarr;</span> {data.name}
        </div>
        
        <div className="hero-region-eyebrow">
          {data.region}
        </div>
        
        <h1 className="hero-collection-title">
          {data.name}
        </h1>
        
        <p className="hero-tagline">
          {data.tagline}
        </p>
        
        <div className="hero-stat-pills">
          <div className="stat-pill">GI Certified &middot; Since 2009</div>
          <div className="stat-pill">{data.name.split(' ')[0]} Weavers</div>
        </div>
      </div>

      <div 
        className="collection-accent-band" 
        style={{ backgroundColor: data.accentColor }}
      ></div>
    </section>
  );
};

export default CollectionHero;
