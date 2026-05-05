import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '@/lib/data';



const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
  const brands = (siteContent.footer_brands ?? '').split('·').map((b) => b.trim());

  return (
    <footer className="relative z-10 bg-black border-t border-white/6">
      <div className="page-container pt-16 pb-8">





        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-widest text-white/20">
          <p>{siteContent.footer_copyright}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white/60 transition-colors"
          >
            <ArrowUp className="w-3 h-3" />
            BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
