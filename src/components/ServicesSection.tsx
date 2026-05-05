import { useRef, useEffect, useState } from 'react';
import { services } from '@/lib/data';

const CALENDLY = 'https://calendly.com/shas-lab';

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="services" className="relative z-10 bg-[var(--color-surface-secondary)]">
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">Engagements</p>
          <h2 className="section-title-lg">Services</h2>
          <p className="section-subtitle max-w-lg">
            Choose the engagement that fits your timeline and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((tier, i) => (
            <div
              key={tier.id}
              className={`relative flex flex-col agency-card p-8 transition-all duration-700 ${
                tier.featured ? 'ring-1 ring-[var(--color-info)]/40' : ''
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div className="mb-6">
                  <span className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold rounded-sm border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-3xl mb-4">{tier.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{tier.title}</h3>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">{tier.description}</p>

              {/* Price block removed */}
              <div className="mb-6 pb-6 border-b border-white/6">
                <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">{tier.duration}</div>
              </div>

              {/* Includes */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.includes.map((item, j) => (
                  <li key={j} className="check-item">
                    <span className="check-icon text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
                {tier.notIncluded?.map((item, j) => (
                  <li key={`x-${j}`} className="flex items-start gap-2.5 text-sm text-white/25 leading-relaxed">
                    <span className="mt-0.5 text-xs shrink-0">✗</span>
                    <span className="line-through">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Example scope */}
              {tier.exampleScope && (
                <div className="mb-6 p-4 rounded-sm bg-white/3 border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Example scope</p>
                  {tier.exampleScope.map((s, j) => (
                    <p key={j} className="text-xs text-white/45 leading-relaxed">• {s}</p>
                  ))}
                </div>
              )}

              {/* Best for */}
              <p className="text-xs text-white/30 mb-5">
                <span className="text-white/50 font-medium">Best for: </span>{tier.bestFor}
              </p>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-2.5 text-sm font-medium tracking-wide rounded-sm transition-all duration-200 ${
                  tier.featured
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
