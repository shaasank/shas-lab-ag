const brands = ['SVASTHA', 'STONKZZ', 'LUXELOOM', 'COSMA ACADEMY', 'TENSKETCH'];

const BrandsSection = () => {
  return (
    <div className="relative z-10 bg-background border-b border-white/5 py-10">
      <div className="page-container">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6 font-medium">
          Brands & teams we've worked with
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((b) => (
            <span
              key={b}
              className="text-sm md:text-xl font-bold uppercase tracking-widest text-white/90 hover:text-white transition-all duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
