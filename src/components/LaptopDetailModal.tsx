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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#1d1d1f] rounded-3xl w-full max-w-2xl overflow-hidden relative z-10 border border-white/[0.08] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/[0.06] hover:bg-white/[0.12] text-[#86868b] hover:text-[#f5f5f7] rounded-full transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="bg-black relative h-48 md:h-full min-h-[220px]">
                <img
                  src={laptop.imageUrl}
                  alt={laptop.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[#f5f5f7] text-lg font-semibold">
                  ₹{laptop.price.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 space-y-5 max-h-[85vh] overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#86868b] font-medium">{laptop.brand}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] tracking-tight leading-tight mt-1">{laptop.name}</h3>
                </div>

                <p className="text-[13px] text-[#86868b] leading-relaxed">
                  {laptop.description}
                </p>

                {/* Specs */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-semibold text-[#f5f5f7] uppercase tracking-wider">Specifications</h4>
                  <div className="grid grid-cols-2 gap-2.5 text-[13px]">
                    {[
                      { label: 'Processor', value: laptop.specs.cpu },
                      { label: 'Graphics', value: laptop.specs.gpu },
                      { label: 'Memory', value: laptop.specs.ram },
                      { label: 'Storage', value: laptop.specs.storage },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/[0.04] p-3 rounded-xl">
                        <span className="text-[10px] text-[#6e6e73] block mb-0.5">{label}</span>
                        <p className="font-medium text-[#f5f5f7] truncate">{value}</p>
                      </div>
                    ))}
                    <div className="bg-white/[0.04] p-3 rounded-xl col-span-2">
                      <span className="text-[10px] text-[#6e6e73] block mb-0.5">Display</span>
                      <p className="font-medium text-[#f5f5f7] truncate">{laptop.specs.display}</p>
                    </div>
                  </div>
                </div>

                {/* Pros */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-semibold text-[#30d158] uppercase tracking-wider">What we love</h4>
                  <ul className="space-y-1.5">
                    {laptop.pros.map((p, i) => (
                      <li key={i} className="text-[13px] flex items-start gap-2 text-[#86868b]">
                        <Check className="w-3.5 h-3.5 text-[#30d158] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  <h4 className="text-[11px] font-semibold text-[#ff9f0a] uppercase tracking-wider">Keep in mind</h4>
                  <ul className="space-y-1.5">
                    {laptop.cons.map((c, i) => (
                      <li key={i} className="text-[13px] flex items-start gap-2 text-[#86868b]">
                        <span className="text-[#ff9f0a] shrink-0 font-bold text-sm">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/[0.06] flex gap-3">
                  <a
                    href={laptop.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex-1 text-center bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-full text-[13px] font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Buy Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={onClose}
                    className="cursor-pointer px-5 bg-white/[0.06] hover:bg-white/[0.1] text-[#f5f5f7] rounded-full text-[13px] font-medium transition-all"
                  >
                    Close
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
