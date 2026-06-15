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
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="bg-sky-500/10 p-2 rounded-lg">
            <Scale className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Compare Models</h4>
            <p className="text-[10px] text-zinc-400">{compareList.length} of 3 selected</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-1 overflow-x-auto pb-1 md:pb-0">
          {compareList.map(laptop => (
            <div key={laptop.id} className="relative flex-shrink-0 w-16 h-12 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
              <img src={laptop.imageUrl} alt={laptop.name} className="w-full h-full object-cover opacity-80" />
              <button
                onClick={() => onRemove(laptop.id)}
                className="absolute top-0 right-0 bg-red-500/80 text-white rounded-bl-lg p-0.5 hover:bg-red-500 transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {compareList.length < 3 && (
            <div className="flex-shrink-0 w-16 h-12 border border-dashed border-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 text-xs font-medium">
              +
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button onClick={onClear} className="text-xs text-zinc-400 hover:text-white px-3 py-2 cursor-pointer">Clear</button>
          <button
            onClick={onCompare}
            disabled={compareList.length < 2}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 disabled:from-zinc-700 disabled:to-zinc-800 disabled:text-zinc-500 hover:from-sky-400 hover:to-indigo-400 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md cursor-pointer transition-all"
          >
            Compare Specs <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
