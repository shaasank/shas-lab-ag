import { useRef, useEffect, useState } from 'react';

const CALENDLY = 'https://calendly.com/shas-lab';

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section ref={ref} className="relative z-10 overflow-hidden" style={{ background: '#05080f' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)' }}
      />

      <div className="page-container py-28 relative z-10 text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading justify-center">Next Step</p>
          <h2 className="section-title-lg text-4xl md:text-5xl mb-4">
            Ready to Ship AI Faster?
          </h2>
          <p className="section-subtitle max-w-md mx-auto mb-12">
            Let's spend 30 minutes understanding your opportunity.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <a
              id="cta-book-call"
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-8 h-12 w-full sm:w-auto"
            >
              📅 Book a 30-Min Strategy Call
            </a>
            <a
              id="cta-case-studies"
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline text-sm px-8 h-12 w-full sm:w-auto"
            >
              📂 See All Case Studies
            </a>
          </div>

          <p className="text-xs text-white/25 mb-14">
            Free, no commitment. We'll discuss your AI roadmap and timeline.
          </p>

          {/* Email capture */}
          <div className="max-w-sm mx-auto border-t border-white/6 pt-10">
            <p className="text-xs text-white/30 mb-4 uppercase tracking-widest">
              Or join our newsletter for AI shipping insights
            </p>
            {subscribed ? (
              <p className="text-sm font-medium" style={{ color: 'var(--color-success)' }}>
                ✓ You're in. Watch your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 h-10 px-4 text-sm bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary px-4 h-10 text-xs shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
