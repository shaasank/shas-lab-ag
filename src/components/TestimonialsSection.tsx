import { useRef, useEffect, useState } from 'react';
import { testimonials } from '@/lib/data';

const tagColors: Record<string, string> = {
  AgriTech: 'badge-agritech',
  'AI/ML Startup': 'badge-ai',
  'SaaS / B2B': 'badge-saas',
};

const TestimonialsSection = () => {
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
          <p className="section-heading">Social Proof</p>
          <h2 className="section-title-lg">What Founders Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`agency-card p-8 flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Quote mark */}
              <div className="text-4xl leading-none text-white/10 mb-4 font-serif select-none">"</div>

              <blockquote className="text-sm text-white/70 leading-relaxed italic mb-6 flex-1">
                {t.quote}
              </blockquote>

              <div className="border-t border-white/6 pt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-white/35 mt-0.5">{t.role}</p>
                </div>
                <span className={`agency-badge shrink-0 ${tagColors[t.companyType] ?? 'badge-ai'}`}>
                  {t.companyType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
