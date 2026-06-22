import { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/hero new video.mp4';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    
    // Attempt to play with sound. If blocked by browser policies, fallback to muted.
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay with sound blocked by browser. Falling back to muted autoplay.");
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-backgrounds">
        <video 
          ref={videoRef}
          className="hero-video" 
          src={heroVideo} 
          autoPlay 
          muted={isMuted}
          loop 
          playsInline
        ></video>
        <div className="video-overlay"></div>
        <div className="vignette-overlay"></div>
      </div>

      <div className="hero-content">
        <div className={`hero-eyebrow ${loaded ? 'animate-in-1' : ''}`}>
          EST. IN TRADITION
        </div>
        <h1 className={`text-hero ${loaded ? 'animate-in-2' : ''}`}>
          Woven from<br/>centuries of grace
        </h1>
        <p className={`hero-tagline ${loaded ? 'animate-in-3' : ''}`}>
          The Art of Handloom Living
        </p>
        <button className={`hero-btn hover-shimmer ${loaded ? 'animate-in-4' : ''}`}>
          Explore the Collection
        </button>
      </div>

      {/* Sound Toggle Button */}
      <button 
        className="sound-toggle-btn" 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        )}
      </button>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
      </div>

      <div className="hero-ticker">
        <div className="ticker-content">
          <span>· BANARASI SILK · KANJEEVARAM · CHANDERI · GI CERTIFIED · HANDWOVEN · ARTISAN CRAFTED </span>
          <span>· BANARASI SILK · KANJEEVARAM · CHANDERI · GI CERTIFIED · HANDWOVEN · ARTISAN CRAFTED </span>
          <span>· BANARASI SILK · KANJEEVARAM · CHANDERI · GI CERTIFIED · HANDWOVEN · ARTISAN CRAFTED </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
