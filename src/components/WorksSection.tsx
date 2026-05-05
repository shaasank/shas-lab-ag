import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import WorkCard from "./WorkCard";

import { works } from "@/lib/data";

const WorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`page-container py-24 relative z-10 bg-background transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <div className="flex items-center justify-between mb-12">
        <h2 className="section-title mb-0">Selected Works</h2>
        <Link 
          to="/works" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          See all works
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work, index) => (
          <WorkCard
            key={work.id}
            {...work}
            className={`h-[300px] md:h-[400px] ${
              index === 0 ? "animate-fade-in" : 
              index === 1 ? "animate-fade-in-delay-1" : 
              index === 2 ? "animate-fade-in-delay-2" : 
              "animate-fade-in-delay-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
