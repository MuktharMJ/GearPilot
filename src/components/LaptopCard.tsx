import { motion } from 'motion/react';
import { Battery, Check, ArrowRight } from 'lucide-react';
import { Laptop } from '../types';

interface LaptopCardProps {
  key?: string | number;
  laptop: Laptop;
  onSelect: (laptop: Laptop) => void;
  isCompared?: boolean;
  onCompare?: (laptop: Laptop) => void;
}

export default function LaptopCard({ laptop, onSelect, isCompared, onCompare }: LaptopCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-zinc-900/20 hover:bg-zinc-900/40 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-sky-500/5"
    >
      <div>
        {/* Laptop Card Image with clean currency banner */}
        <div className="relative h-48 bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 group-hover:scale-102 group-hover:opacity-90 transition-all duration-500 pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-zinc-950/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full border border-zinc-800 backdrop-blur-md">
            ₹{laptop.price.toLocaleString('en-IN')}
          </div>

          {/* Compare Checkbox */}
          {onCompare && (
            <div className="absolute top-4 left-4 z-10">
              <label className="flex items-center gap-2 cursor-pointer group/compare bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-2 py-1.5 rounded-lg hover:border-sky-500/50 transition-colors">
                <input
                  type="checkbox"
                  checked={isCompared}
                  onChange={(e) => {
                    e.stopPropagation();
                    onCompare(laptop);
                  }}
                  className="w-3.5 h-3.5 rounded bg-zinc-900 border-zinc-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-zinc-950 cursor-pointer"
                />
                <span className="text-[10px] font-semibold text-zinc-300 uppercase tracking-wider group-hover/compare:text-white transition-colors">
                  {isCompared ? 'Added' : 'Compare'}
                </span>
              </label>
            </div>
          )}
          
          
          {/* Use Case Tags on Image */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[85%]">
            {laptop.useCases.map((uc) => (
              <span 
                key={uc} 
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md border ${
                  uc === 'coding' ? 'bg-sky-500/20 text-sky-300 border-sky-400/20' :
                  uc === 'gaming' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/20' :
                  uc === 'editing' ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' :
                  'bg-emerald-500/20 text-emerald-300 border-emerald-400/20'
                }`}
              >
                {uc === 'coding' ? 'Coding' : uc === 'gaming' ? 'Gaming' : uc === 'editing' ? 'Editing & CAD' : 'College Study'}
              </span>
            ))}
          </div>
        </div>

        {/* Text details */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-sky-400 uppercase">{laptop.brand}</span>
            <h4 className="font-bold text-white text-base mt-0.5 leading-tight group-hover:text-sky-400 transition-colors line-clamp-1">{laptop.name}</h4>
          </div>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {laptop.description}
          </p>

          {/* Beautifully Structured Spec Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/85 text-xs text-zinc-300">
            <div className="flex flex-col min-w-0">
              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Processor</span>
              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.cpu.split('(')[0].trim()}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Graphics</span>
              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.gpu}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">RAM / Memory</span>
              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.ram}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Battery & Weight</span>
              <span className="font-semibold text-zinc-200 truncate flex items-center gap-1">
                <Battery className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{laptop.batteryLife} hr • {(laptop.weight / 2.2).toFixed(2)} kg</span>
              </span>
            </div>
          </div>

          {/* Dynamic benefits check */}
          <div className="space-y-1.5 pt-1">
            <h5 className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Quick Highlights</h5>
            <ul className="space-y-1">
              {laptop.pros.slice(0, 2).map((pro, index) => (
                <li key={index} className="text-xs flex items-center gap-2 text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="px-6 pb-6">
        <button
          onClick={() => onSelect(laptop)}
          className="cursor-pointer w-full text-center bg-zinc-950 border border-zinc-800/80 hover:border-sky-500/50 hover:bg-zinc-900 text-zinc-300 hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
        >
          <span>Explore Specs & Pros</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
