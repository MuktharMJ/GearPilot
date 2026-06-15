import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ExternalLink } from 'lucide-react';
import { Laptop } from '../types';

interface LaptopDetailModalProps {
  laptop: Laptop | null;
  onClose: () => void;
}

export default function LaptopDetailModal({ laptop, onClose }: LaptopDetailModalProps) {
  return (
    <AnimatePresence>
      {laptop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Spec modal popup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-zinc-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-zinc-800 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="p-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side preview */}
              <div className="bg-zinc-950 relative h-48 md:h-full min-h-[220px] border-r border-zinc-800">
                <img
                  src={laptop.imageUrl}
                  alt={laptop.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-zinc-950/90 border border-zinc-800 px-4 py-2 rounded-xl text-sky-400 text-lg font-bold">
                  ₹{laptop.price.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Right side specifications sheet */}
              <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#38bdf8] font-bold">{laptop.brand}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mt-1">{laptop.name}</h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {laptop.description}
                </p>

                {/* Core specifications detail matrix */}
                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Specifications Matrix</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                      <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Processor (CPU)</span>
                      <p className="font-semibold text-zinc-300 truncate">{laptop.specs.cpu}</p>
                    </div>
                    <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                      <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Graphics GPU</span>
                      <p className="font-semibold text-[#818cf8] truncate">{laptop.specs.gpu}</p>
                    </div>
                    <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                      <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Memory (RAM)</span>
                      <p className="font-semibold text-zinc-300 truncate">{laptop.specs.ram}</p>
                    </div>
                    <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                      <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Storage</span>
                      <p className="font-semibold text-zinc-300 truncate">{laptop.specs.storage}</p>
                    </div>
                    <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80 col-span-2">
                      <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Screen & Display</span>
                      <p className="font-semibold text-zinc-200 truncate">{laptop.specs.display}</p>
                    </div>
                  </div>
                </div>

                {/* Pros and Cons (Framer friendly layout) */}
                <div className="grid grid-cols-1 gap-4 pt-1 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Pros (What we love)</h4>
                    <ul className="space-y-1">
                      {laptop.pros.map((p, i) => (
                        <li key={i} className="text-xs flex items-start gap-2 text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5 border-t border-zinc-850 pt-4">
                    <h4 className="text-[10px] font-bold text-amber-500/80 uppercase tracking-wider">Compromises to keep in mind</h4>
                    <ul className="space-y-1">
                      {laptop.cons.map((c, i) => (
                        <li key={i} className="text-xs flex items-start gap-1.5 text-zinc-400">
                          <span className="text-amber-500/80 shrink-0 font-bold text-sm inline-block">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-zinc-800 flex gap-3">
                  <a
                    href={laptop.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex-1 text-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white py-3 rounded-xl text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15"
                  >
                    <span>Check Retail Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={onClose}
                    className="cursor-pointer px-5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-all"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
