import { useRef, useEffect, useState } from 'react';
import { processSteps } from '@/lib/data';

const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-background">
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">How We Work</p>
          <h2 className="section-title-lg">The SHAS Lab Approach</h2>
          <p className="section-subtitle max-w-lg">
            Three steps from concept to production. Eight weeks total.
          </p>
        </div>

        {/* Timeline connector — desktop only */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-white/8 z-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`agency-card p-6 relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-white/6 leading-none mb-4 select-none">
                {step.number}
              </div>

              <div className="text-2xl mb-3">{step.icon}</div>

              <p className="text-[10px] uppercase tracking-[0.14em] text-white/30 mb-1">{step.duration}</p>
              <h3 className="text-base font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-5">{step.body}</p>

              {/* Deliverables */}
              <div className="border-t border-white/6 pt-4 space-y-2">
                {step.deliverables.map((d, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs text-white/40">
                    <span className="text-[var(--color-success)] mt-0.5">•</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
