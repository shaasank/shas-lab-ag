import { useRef, useEffect, useState } from 'react';

const clients = [
  { type: 'Series A AgriTech', stat: '5,000+ active farmers' },
  { type: 'D2C Consumer Brand', stat: '10K+ daily active users' },
  { type: 'Climate Tech Startup', stat: '$2.8M ARR attributed' },
  { type: 'Content AI Platform', stat: '500K monthly requests' },
  { type: 'EdTech Company', stat: 'Series A funded' },
];

const brands = ['SVASTHA', 'STONKZZ', 'LUXELOOM', 'COSMA ACADEMY', 'TENSKETCH'];

const ClientsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-background">
      <div className="page-container py-20">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">Our Clients</p>
          <h2 className="section-title-lg text-2xl md:text-3xl">Trusted by Founders at</h2>
        </div>

        {/* Client type badges */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {clients.map((c, i) => (
            <div
              key={i}
              className="agency-card px-5 py-4 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-sm font-medium text-white mb-0.5">{c.type}</p>
              <p className="text-xs text-white/35">{c.stat}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
