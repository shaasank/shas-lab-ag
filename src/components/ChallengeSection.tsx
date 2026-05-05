import { useRef, useEffect, useState } from 'react';

const challenges = [
  {
    icon: '🚀',
    headline: 'Your Roadmap Includes AI',
    body: 'Your competitive advantage depends on it. But you don\'t have dedicated ML engineers on staff. Hiring takes 6 months and costs $300K/year.',
    color: 'var(--color-info)',
  },
  {
    icon: '⚡',
    headline: 'You Need to Ship Fast',
    body: 'Competitors are launching AI features weekly. You can\'t afford months of R&D. You need a working MVP in 2–3 months, not 6–12.',
    color: 'var(--color-warning)',
  },
  {
    icon: '🎯',
    headline: 'Technical Risk is High',
    body: 'LLMs are new. Deployment is complex. You need partners who\'ve shipped in production — not consultants who theorize.',
    color: 'var(--color-success)',
  },
];

const ChallengeSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 bg-[var(--color-surface-secondary)]"
    >
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">The Problem</p>
          <h2 className="section-title-lg">The AI Challenge</h2>
          <p className="section-subtitle max-w-xl">
            You want to ship faster. You need AI. But you don't have an ML team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <div
              key={i}
              className={`agency-card p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-3xl mb-5">{c.icon}</div>
              <h3 className="text-base font-semibold text-white mb-3 leading-snug">{c.headline}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{c.body}</p>
              <div className="mt-6 h-0.5 w-8 rounded-full" style={{ background: c.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
