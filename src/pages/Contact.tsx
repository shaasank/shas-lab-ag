import Layout from "@/components/Layout";
import { siteContent } from "@/lib/data";

const Contact = () => {
  return (
    <Layout>
      <section className="page-container py-24 max-w-5xl mx-auto">
        <div className="space-y-8 mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
            {siteContent.contact_headline}
          </h1>

          <div className="space-y-2 text-xl text-muted-foreground max-w-2xl">
            <p>{siteContent.contact_tagline_1}</p>
            <p>{siteContent.contact_tagline_2}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16 lg:gap-24 animate-fade-in-delay-1">
          {/* Left Column: Form & Booking */}
          <div className="space-y-12">
            
            {/* Booking Link */}
            <div className="p-8 border border-white/10 bg-white/5 space-y-4 rounded-sm">
              <h3 className="text-lg font-medium text-white">Prefer to talk it out?</h3>
              <p className="text-sm text-white/60 mb-6">Skip the form and jump straight on a call to discuss your project.</p>
              <a 
                href="https://cal.com/shashank-1341-zs4nlh/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto px-8 py-3 bg-white text-black text-center text-sm uppercase tracking-widest font-semibold hover:bg-white/90 transition-colors"
              >
                BOOK A 30-MIN CALL →
              </a>
            </div>

            {/* divider */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-xs text-white/40 uppercase tracking-widest">OR SEND A MESSAGE</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-white/60">What do you need?</label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["AI Tool", "Brand", "Content", "Product", "Other"].map(item => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="need" value={item} className="peer appearance-none w-4 h-4 border border-white/40 rounded-full checked:border-white transition-colors" />
                        <div className="w-2 h-2 rounded-full bg-white absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-xs uppercase tracking-widest text-white/60">Tell me about your project</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none mb-4" placeholder="Timeline, budget, goals..." required></textarea>
              </div>

              <button type="button" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm w-full sm:w-auto">
                SEND MESSAGE →
              </button>
            </form>
          </div>

          {/* Right Column: Info blocks */}
          <div className="space-y-12">
            
            {/* Availability */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest block mb-2">Availability</span>
                <p className="text-sm font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Open to new projects
                </p>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest block mb-2">Response Time</span>
                <p className="text-sm text-white/90">Usually within 24 hours</p>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest block mb-2">Timezone</span>
                <p className="text-sm text-white/90">IST (UTC+5:30)</p>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest block mb-2">Direct Contact</span>
                <a href={`mailto:${siteContent.contact_email}`} className="text-sm text-white hover:text-white/70 block transition-colors">{siteContent.contact_email}</a>
                <a href={`tel:${siteContent.contact_phone.replace(/\s/g, '')}`} className="text-sm text-white hover:text-white/70 block transition-colors mt-1">{siteContent.contact_phone}</a>
              </div>
            </div>

            {/* What happens next */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-white mb-6">What happens next</h3>
              <ul className="space-y-4">
                {[
                  "You fill out the form or book a call",
                  "I review your project and respond within 24 hours",
                  "We align on scope, timeline, and budget",
                  "We build something great"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-xs text-white/40 mt-0.5">0{i + 1}</span>
                    <span className="text-sm text-white/90 leading-tight">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
