import { useEffect, useRef } from 'react';
import './FeatureWall.css';

import leftFlankImg from '../../assets/feature wall/left flank.png';
import rightFlankImg from '../../assets/feature wall/right flank.png';
import pillarImg from '../../assets/feature wall/carved stone pillar.png';
import diyaImg from '../../assets/feature wall/diya.jpg';
import paintingImg from '../../assets/feature wall/painting.jpg';
import bowlImg from '../../assets/feature wall/terracota bowl.jpg';
import trinketImg from '../../assets/feature wall/trinket.jpg';
import blockImg from '../../assets/feature wall/wooden printing block.png';

const artefacts = [
  pillarImg,
  diyaImg,
  paintingImg,
  bowlImg,
  trinketImg,
  blockImg
];

const FeatureWall = () => {
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
    <section className="feature-wall-section" ref={sectionRef}>
      <h2 className="text-section-title reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--color-haldi)', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '56px' }}>The Art of Hanloom</h2>
      <div className="feature-wall-layout">

        {/* Left Portrait */}
        <div className="wall-portrait reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <div className="portrait-arch">
            <img src={leftFlankImg} alt="Portrait Left" />
          </div>
        </div>

        {/* Center Niches */}
        <div className="wall-niches reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
          {artefacts.map((src, idx) => (
            <div className="niche-container" key={idx}>
              <div className="niche-arch">
                <img src={src} alt={`Artefact ${idx}`} />
                <div className="candle-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Portrait */}
        <div className="wall-portrait reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
          <div className="portrait-arch">
            <img src={rightFlankImg} alt="Portrait Right" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureWall;
