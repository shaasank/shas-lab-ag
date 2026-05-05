import { useScrollProgress } from '@/hooks/useScrollProgress';
import Parallax from './Parallax';

const HeroSection = () => {
  const scrollProgress = useScrollProgress();
  const blurAmount = scrollProgress * 16;
  const opacity = 1 - scrollProgress * 0.5;
  const scale = 1 - scrollProgress * 0.15;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 relative sticky top-0 overflow-hidden"
      style={{
        transform: `scale(${scale})`,
        filter: `blur(${blurAmount}px)`,
        opacity,
        transition: 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out',
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Blue glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      <Parallax offset={80} className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto pt-20 md:pt-0">
          <div className="text-center relative z-20 w-full flex flex-col items-center px-4 md:px-0">

            {/* Main headline */}
            <h1 className="animate-fade-in text-white font-bold leading-[1.0] tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}
            >
              AI Product Strategy
              <br />
              <span style={{ color: 'var(--color-info)' }}>+ Rapid Prototyping</span>
              <br />
              For Founders.
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-delay-1 text-lg md:text-xl text-white/60 font-light mb-3 max-w-xl mx-auto">
              We ship AI-powered products in 8 weeks, not 8 months.
            </p>

            {/* Secondary text */}
            <p className="animate-fade-in-delay-1 text-sm text-white/35 mb-10 max-w-md mx-auto leading-relaxed">
              For founders at the intersection of ambition and technical uncertainty.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2 w-full max-w-sm sm:max-w-none mx-auto mb-16">
              <a
                href="https://calendly.com/shas-lab"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                className="btn-primary w-full sm:w-auto text-sm"
              >
                Get AI Strategy Audit →
              </a>
              <button
                id="hero-cta-secondary"
                onClick={() => scrollTo('case-studies')}
                className="btn-outline w-full sm:w-auto text-sm"
              >
                View Case Studies →
              </button>
            </div>

            {/* Social proof quote */}
            <div className="max-w-md mx-auto border-t border-white/8 pt-8 animate-fade-in-delay-3 px-4 w-full">
              <p className="text-sm italic text-white/50 mb-2 text-balance leading-relaxed">
                "SHAS LAB de-risked our entire product strategy. We went from zero ML
                capability to production in 12 weeks."
              </p>
              <p className="text-[11px] text-white/30 uppercase tracking-widest">
                — Founder & CEO, Series A AgriTech
              </p>
            </div>

          </div>
        </div>
      </Parallax>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-30 z-30 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest mb-2 text-white">SCROLL</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="text-white">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
