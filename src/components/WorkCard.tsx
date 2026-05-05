import { Link } from "react-router-dom";
import Parallax from "./Parallax";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  outcome?: string;
  className?: string;
}

const WorkCard = ({ id, title, description, image, category = "PRODUCT", outcome, className = "" }: WorkCardProps) => {
  return (
    <Link 
      to={`/works/${id}`} 
      className={`group block aspect-[4/3] md:aspect-auto relative overflow-hidden ${className}`}
    >
      <Parallax offset={30} className="w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
          loading="lazy"
        />
      </Parallax>
      
      {/* Dark overlay sliding up */}
      <div className="absolute inset-0 bg-black/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6" />
      
      {/* Content appearing on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10">
        <div className="flex justify-between items-end">
          <div className="pr-4">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/80 line-clamp-2 mb-1">{description}</p>
            {outcome && <p className="text-xs text-green-400 mt-2 font-medium uppercase">{outcome}</p>}
          </div>
          <span className="text-[10px] border border-white/30 px-2 py-1 uppercase tracking-widest text-white shrink-0">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
