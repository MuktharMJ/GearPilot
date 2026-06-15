import { motion, AnimatePresence } from 'motion/react';
import { X, Scale, ArrowRight } from 'lucide-react';
import { Laptop } from '../types';

interface CompareTrayProps {
  compareList: Laptop[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onCompare: () => void;
}

export default function CompareTray({ compareList, onRemove, onClear, onCompare }: CompareTrayProps) {
  if (compareList.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xl bg-[#1d1d1f]/95 border border-white/[0.1] rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-2xl backdrop-saturate-150"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center">
            <Scale className="w-4 h-4 text-[#86868b]" />
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-[#f5f5f7]">Compare</h4>
            <p className="text-[10px] text-[#6e6e73]">{compareList.length} of 3 selected</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-1 overflow-x-auto pb-1 md:pb-0">
          {compareList.map(laptop => (
            <div key={laptop.id} className="relative flex-shrink-0 w-14 h-10 bg-black rounded-lg overflow-hidden border border-white/[0.08]">
              <img src={laptop.imageUrl} alt={laptop.name} className="w-full h-full object-cover opacity-70" />
              <button
                onClick={() => onRemove(laptop.id)}
                className="absolute top-0 right-0 bg-red-500/80 text-white rounded-bl-lg p-0.5 hover:bg-red-500 transition-colors cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>
          ))}
          {compareList.length < 3 && (
            <div className="flex-shrink-0 w-14 h-10 border border-dashed border-white/[0.12] rounded-lg flex items-center justify-center text-[#6e6e73] text-xs">
              +
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button onClick={onClear} className="text-[12px] text-[#86868b] hover:text-[#f5f5f7] px-3 py-2 cursor-pointer transition-colors">Clear</button>
          <button
            onClick={onCompare}
            disabled={compareList.length < 2}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-[#0071e3] disabled:bg-white/[0.06] disabled:text-[#6e6e73] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-[12px] font-medium cursor-pointer transition-all"
          >
            Compare <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
