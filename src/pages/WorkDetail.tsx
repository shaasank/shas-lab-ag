import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { works } from "@/lib/data";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface ExtendedWork {
  client?: string;
  year?: string;
  problem?: string;
  what_i_did?: string;
  outcome?: string;
  category?: string;
}

const WorkDetail = () => {
  const { id } = useParams();
  const work = works.find((w) => w.id === id) as typeof works[0] & ExtendedWork;

  if (!work) {
    return (
      <Layout>
        <section className="page-container py-24 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Work not found</h1>
          <Link to="/works" className="text-muted-foreground hover:text-white transition-colors">
            ← Back to works
          </Link>
        </section>
      </Layout>
    );
  }

  const client = work.client || "Confidential";
  const year = work.year || "2026";
  const category = work.category || "PRODUCT";
  const problem = work.problem || "The client needed a scalable solution to address their growing user base without compromising the existing brand language.";
  const whatIDid = work.what_i_did || "I led the end-to-end development, establishing the core architecture, integrating AI capabilities, and designing a cohesive set of visual assets.";
  const result = work.outcome || "Successfully launched the product resulting in significant engagement and efficiency improvements.";

  return (
    <Layout>
      <section className="page-container py-24 text-white">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 animate-fade-in uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to works
        </Link>

        {/* Case Study Header */}
        <div className="max-w-4xl mb-16 animate-fade-in-delay-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {work.title}
          </h1>
          
          <div className="border-y border-white/20 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Client</p>
              <p className="text-sm font-medium">{client}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Year</p>
              <p className="text-sm font-medium">{year}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Category</p>
              <p className="text-sm font-medium uppercase">{category}</p>
            </div>
          </div>
        </div>

        {/* Case Study Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-20 animate-fade-in-delay-2">
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xs text-white/50 uppercase tracking-widest mb-4">The Problem</h3>
              <p className="text-base leading-relaxed text-white/90">
                {problem}
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xs text-white/50 uppercase tracking-widest mb-4">What I Did</h3>
              <p className="text-base leading-relaxed text-white/90 whitespace-pre-line">
                {whatIDid}
              </p>
            </div>

            <div>
              <h3 className="text-xs text-green-400 uppercase tracking-widest mb-4">The Result</h3>
              <p className="text-xl font-medium leading-relaxed text-white">
                {result}
              </p>
            </div>

            {/* Technologies */}
            {work.tech && work.tech.length > 0 && (
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xs text-white/50 uppercase tracking-widest mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(work.github || work.live) && (
              <div className="flex gap-6 pt-8 border-t border-white/10">
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {work.live && (
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="animate-fade-in-delay-3 w-full">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-auto object-cover border border-white/10"
          />
        </div>

      </section>
    </Layout>
  );
};

export default WorkDetail;
