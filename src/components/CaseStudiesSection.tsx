import { useRef, useEffect, useState } from 'react';
import { caseStudies } from '@/lib/data';
import { Link } from 'react-router-dom';

const industryBadgeClass: Record<string, string> = {
  AgriTech: 'badge-agritech',
  'D2C / Content': 'badge-d2c',
  'Climate Tech': 'badge-climate',
};

const CaseStudiesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="case-studies" className="relative z-10 bg-background">
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">Client Work</p>
          <h2 className="section-title-lg">How We've Shipped AI</h2>
          <p className="section-subtitle max-w-lg">Real products. Real outcomes. Real timelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className={`agency-card flex flex-col overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              {/* Hero image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cs.heroImage}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-semibold text-white leading-snug">{cs.title}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{cs.company} · {cs.timeline}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Problem */}
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">The Challenge</p>
                <p className="text-sm text-white/60 leading-relaxed mb-5 line-clamp-3">
                  "{cs.problem}"
                </p>

                {/* Results */}
                <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Key Results</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {cs.results.slice(0, 3).map((r, j) => (
                    <li key={j} className="check-item text-xs">
                      <span className="check-icon text-xs">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Testimonial snippet */}
                <blockquote className="text-xs italic text-white/35 border-l-2 border-white/10 pl-3 mb-5 leading-relaxed line-clamp-2">
                  "{cs.testimonialQuote}"
                </blockquote>

                <Link
                  to={`/case-studies/${cs.id}`}
                  className="btn-outline text-xs w-full text-center py-2.5 mt-auto"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
