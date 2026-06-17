import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';
import { Laptop } from '../types';

interface LaptopCardProps {
  key?: string | number;
  laptop: Laptop;
  onSelect: (laptop: Laptop) => void;
  isCompared?: boolean;
  onCompare?: (laptop: Laptop) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function LaptopCard({ laptop, onSelect, isCompared, onCompare, isFavorite, onToggleFavorite }: LaptopCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white/[0.02] hover:bg-white/[0.04] rounded-3xl border border-white/[0.04] hover:border-white/[0.08] overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6)] flex flex-col justify-between group"
    >
      <div>
        {/* Image */}
        <div className="relative h-52 bg-[#0a0a0a] overflow-hidden">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
          />
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {onToggleFavorite && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(laptop.id);
                }}
                className="cursor-pointer p-1.5 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-colors"
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isFavorite ? 'fill-[#ff3b30] text-[#ff3b30]' : 'text-white/80'
                  }`}
                />
              </button>
            )}
            <div className="bg-black/70 text-[#f5f5f7] font-semibold text-[12px] px-3 py-1 rounded-full backdrop-blur-md">
              ₹{laptop.price.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Compare */}
          {onCompare && (
            <div className="absolute top-3 left-3 z-10">
              <label className="flex items-center gap-1.5 cursor-pointer bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full hover:bg-black/80 transition-colors">
                <input
                  type="checkbox"
                  checked={isCompared}
                  onChange={(e) => {
                    e.stopPropagation();
                    onCompare(laptop);
                  }}
                  className="w-3 h-3 rounded bg-transparent border-white/30 text-[#0071e3] focus:ring-[#0071e3] cursor-pointer"
                />
                <span className="text-[10px] font-medium text-white/80">
                  {isCompared ? 'Added' : 'Compare'}
                </span>
              </label>
            </div>
          )}

          {/* Use case tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {laptop.useCases.map((uc) => (
              <span
                key={uc}
                className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/80 backdrop-blur-md shadow-sm"
              >
                {uc === 'coding' ? 'Coding' : uc === 'gaming' ? 'Gaming' : uc === 'editing' ? 'Creative' : 'Study'}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div>
            <span className="text-[10px] font-medium tracking-wider text-[#86868b] uppercase">{laptop.brand}</span>
            <h4 className="font-semibold text-[#f5f5f7] text-[15px] mt-0.5 leading-snug line-clamp-1">{laptop.name}</h4>
          </div>

          <p className="text-[12px] text-[#86868b] line-clamp-2 leading-relaxed">
            {laptop.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 text-[12px]">
            <div>
              <span className="text-[#6e6e73] text-[10px] block mb-0.5">Processor</span>
              <span className="text-[#f5f5f7] font-medium truncate block">{laptop.specs.cpu.split('(')[0].trim()}</span>
            </div>
            <div>
              <span className="text-[#6e6e73] text-[10px] block mb-0.5">Graphics</span>
              <span className="text-[#f5f5f7] font-medium truncate block">{laptop.specs.gpu}</span>
            </div>
            <div>
              <span className="text-[#6e6e73] text-[10px] block mb-0.5">Memory</span>
              <span className="text-[#f5f5f7] font-medium truncate block">{laptop.specs.ram}</span>
            </div>
            <div>
              <span className="text-[#6e6e73] text-[10px] block mb-0.5">Battery</span>
              <span className="text-[#f5f5f7] font-medium truncate block">{laptop.batteryLife} hr · {(laptop.weight / 2.2).toFixed(1)} kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button
          onClick={() => onSelect(laptop)}
          className="active:scale-95 cursor-pointer w-full flex items-center justify-center gap-1.5 text-[#0071e3] hover:text-[#0077ed] text-[13px] font-medium py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.05] transition-all"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
