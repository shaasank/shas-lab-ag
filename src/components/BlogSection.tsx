import { useRef, useEffect, useState } from 'react';
import { blogPosts } from '@/lib/data';

const BlogSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-background">
      <div className="page-container py-24">
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-heading">Insights</p>
          <h2 className="section-title-lg">Latest from Our Blog</h2>
          <p className="section-subtitle max-w-lg">
            AI shipping strategies, technical deep dives, founder interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, i) => (
            <a
              key={post.id}
              href={post.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`agency-card flex flex-col overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Gradient hero instead of image */}
              <div
                className="h-44 flex items-end p-5"
                style={{
                  background: `linear-gradient(135deg, ${post.categoryColor}22 0%, ${post.categoryColor}08 100%)`,
                  borderBottom: `1px solid ${post.categoryColor}20`,
                }}
              >
                <span
                  className="agency-badge"
                  style={{ background: `${post.categoryColor}20`, color: post.categoryColor }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-white/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-white/25">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="mt-4 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors flex items-center gap-1">
                  Read Article
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
