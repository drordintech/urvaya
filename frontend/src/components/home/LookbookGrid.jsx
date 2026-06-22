import { useEffect, useRef } from 'react';
import './LookbookGrid.css';

import archFrameImg from '../../assets/lookbook/architecutra; frame .png';
import candidLuxuryImg from '../../assets/lookbook/candid luxury.png';
import detailCloseUpImg from '../../assets/lookbook/detail close up.png';
import movementImg from '../../assets/lookbook/movement.png';
import shadowPlayImg from '../../assets/lookbook/shadow play.png';
import theExitImg from '../../assets/lookbook/the exit.png';

const lookbookImages = [
  archFrameImg,
  candidLuxuryImg,
  detailCloseUpImg,
  movementImg,
  shadowPlayImg,
  theExitImg
];

const LookbookGrid = () => {
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
    <section className="lookbook-section" id="lookbook" ref={sectionRef}>
      <h2 className="lookbook-heading reveal-on-scroll">The Lookbook</h2>
      <div className="lookbook-masonry">
        {lookbookImages.map((src, idx) => (
          <div className="lookbook-item reveal-on-scroll" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }} key={idx}>
            <div className="lookbook-image">
              <img src={src} alt="Lookbook" />
              <div className="lookbook-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LookbookGrid;
