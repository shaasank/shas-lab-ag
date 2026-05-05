import { useState } from "react";
import Layout from "@/components/Layout";
import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/data";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const categories = ["ALL", "AI TOOL", "BRANDING", "CONTENT", "PRODUCT"];

  const filteredWorks = selectedCategory === "ALL" 
    ? works 
    : works.filter((w) => w.category?.toUpperCase() === selectedCategory);

  return (
    <Layout>
      <section className="page-container py-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in uppercase">
          Works
        </h1>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-6 mb-12 border-b border-white/10 pb-6 animate-fade-in-delay-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-widest transition-colors pb-2 border-b-2 -mb-[26px] ${
                selectedCategory === cat 
                  ? "text-white border-white" 
                  : "text-muted-foreground border-transparent hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <WorkCard
              key={work.id}
              {...work}
              className={`h-[350px] md:h-[450px] animate-fade-in`}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Works;
