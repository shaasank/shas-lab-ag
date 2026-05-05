import { useRef, useEffect, useState } from 'react';

const differentiators = [
  {
    icon: '🏢',
    headline: 'Founders Who Ship',
    body: "We've been in your seat. We've pitched VCs, managed product roadmaps, made go/no-go decisions. We don't theorize — we execute.",
    stat: '8 weeks from concept to production MVP',
    statColor: 'var(--color-info)',
  },
  {
    icon: '🔗',
    headline: 'Strategy → Code → Launch',
    body: 'Most vendors specialize in one thing. We do it all. AI architecture, full-stack development, production deployment, team handoff. One vendor. One conversation.',
    stat: 'No dependencies on other agencies',
    statColor: 'var(--color-success)',
  },
  {
    icon: '⚡',
    headline: 'Built for Speed, Not Scope Creep',
    body: 'We ship in sprints. Weekly demos. Weekly feedback. No waterfall. No six-month projects. If it\'s not working, we pivot in days, not months.',
    stat: '98% on-time delivery rate',
    statColor: 'var(--color-warning)',
  },
];

const DifferentiationSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-[var(--color-surface-secondary)]">
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">Why Us</p>
          <h2 className="section-title-lg">Why Founders Choose Us</h2>
          <p className="section-subtitle max-w-lg">
            We're not another dev shop. Here's the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className={`agency-card p-8 flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-3xl mb-5">{d.icon}</div>
              <h3 className="text-base font-semibold text-white mb-3">{d.headline}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">{d.body}</p>
              <div
                className="text-sm font-semibold pt-4 border-t border-white/6"
                style={{ color: d.statColor }}
              >
                {d.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
