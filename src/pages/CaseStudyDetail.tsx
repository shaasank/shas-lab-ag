import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { caseStudies } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

const industryBadgeClass: Record<string, string> = {
  AgriTech: 'badge-agritech',
  'D2C / Content': 'badge-d2c',
  'Climate Tech': 'badge-climate',
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const cs = caseStudies.find((c) => c.id === id);

  if (!cs) {
    return (
      <Layout>
        <section className="page-container py-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case study not found</h1>
          <Link to="/#case-studies" className="text-white/40 hover:text-white transition-colors">
            ← Back to case studies
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="page-container py-24 text-white">
        {/* Breadcrumb */}
        <Link
          to="/#case-studies"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/30 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Case Studies
        </Link>

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <header className="max-w-4xl mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-white/25">{cs.status}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {cs.title}
          </h1>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-white/8 py-6">
            {[
              { label: 'Company', value: cs.company },
              { label: 'Timeline', value: cs.timeline },
              { label: 'Industry', value: cs.industry },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] uppercase tracking-widest text-white/25 mb-1">{m.label}</p>
                <p className="text-sm font-medium text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Hero image */}
        <div className="w-full h-64 md:h-96 overflow-hidden mb-16 animate-fade-in-delay-1">
          <img
            src={cs.heroImage}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── STATS ──────────────────────────────────────────────── */}
        <section className="mb-20 animate-fade-in-delay-1">
          <p className="section-heading">The Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.stats.map((s, i) => (
              <div key={i} className="agency-card p-6 text-center">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHALLENGE ──────────────────────────────────────────── */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 animate-fade-in-delay-2">
          <div>
            <p className="section-heading">The Challenge</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Problem We Solved</h2>
            <p className="text-base text-white/60 leading-relaxed mb-6">{cs.problem}</p>
            <p className="text-base text-white/60 leading-relaxed">{cs.solutionDetails}</p>
          </div>
          <div className="agency-card p-6 h-fit">
            <p className="text-[10px] uppercase tracking-widest text-white/25 mb-4">Constraints</p>
            <ul className="space-y-3">
              {[
                `Timeline: ${cs.timeline}`,
              ].map((c, i) => (
                <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                  <span className="text-white/20 mt-0.5">•</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── APPROACH ───────────────────────────────────────────── */}
        <section className="mb-20">
          <p className="section-heading">The Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[cs.approach.strategy, cs.approach.build, cs.approach.launch, cs.approach.postLaunch].map((phase, i) => (
              <div key={i} className="agency-card p-7">
                <div className="text-3xl font-bold text-white/5 leading-none mb-3 select-none">0{i + 1}</div>
                <h3 className="text-base font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RESULTS ────────────────────────────────────────────── */}
        <section className="mb-20">
          <p className="section-heading">Outcomes</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cs.results.map((r, i) => (
              <div key={i} className="check-item agency-card px-5 py-4">
                <span className="check-icon text-sm">✓</span>
                <span className="text-sm text-white/70">{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL ────────────────────────────────────────── */}
        <section className="mb-20">
          <p className="section-heading">Client Feedback</p>
          <div className="agency-card p-10 max-w-3xl">
            <div className="text-5xl text-white/8 font-serif leading-none mb-6 select-none">"</div>
            <blockquote className="text-lg md:text-xl text-white/70 italic leading-relaxed mb-8">
              {cs.testimonialQuote}
            </blockquote>
            <div className="border-t border-white/8 pt-6">
              <p className="text-sm font-semibold text-white">{cs.testimonialAuthor}</p>
              <p className="text-xs text-white/35 mt-1">{cs.testimonialRole}</p>
            </div>
          </div>
        </section>

        {/* ── LESSONS ────────────────────────────────────────────── */}
        <section className="mb-20">
          <p className="section-heading">Retrospective</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Key Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.lessons.map((l, i) => (
              <div key={i} className="agency-card p-7">
                <div className="w-6 h-0.5 mb-4" style={{ background: 'var(--color-info)' }} />
                <h3 className="text-base font-semibold text-white mb-3">{l.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
        <section className="border-t border-white/6 pt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Ship Your AI Product?
          </h2>
          <p className="text-white/40 mb-10 max-w-md mx-auto text-base">
            If your story looks like this — ambitious timeline, zero ML expertise, need to ship fast — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/shas-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 h-12 w-full sm:w-auto"
            >
              Book a 30-Min Strategy Call →
            </a>
            <Link
              to="/#case-studies"
              className="btn-outline px-8 h-12 w-full sm:w-auto"
            >
              Explore Other Case Studies →
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default CaseStudyDetail;
