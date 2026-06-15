import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ExternalLink, Search, ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react';
import { Laptop } from '../types';
import { laptops } from '../data/laptops';
import { getBuyLinkInfo, getSearchLinks } from '../utils/buyLinks';
import { calculateScores } from '../utils/scoring';
import { getWhoShouldBuy, getWhoShouldAvoid, getValueVerdict, getAlternatives } from '../utils/buyingGuide';

interface LaptopDetailModalProps {
  laptop: Laptop | null;
  onClose: () => void;
  onSelectAlternative?: (laptop: Laptop) => void;
}

function ScoreBar({ label, score, colorClass }: { label: string, score: number, colorClass: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[11px] font-medium">
        <span className="text-[#86868b]">{label}</span>
        <span className="text-[#f5f5f7]">{score}/100</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
}

export default function LaptopDetailModal({ laptop, onClose, onSelectAlternative }: LaptopDetailModalProps) {
  // Close modal when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!laptop) return null;

  const scores = calculateScores(laptop);
  const whoShouldBuy = getWhoShouldBuy(laptop);
  const whoShouldAvoid = getWhoShouldAvoid(laptop);
  const verdict = getValueVerdict(laptop);
  const alternatives = getAlternatives(laptop, laptops);

  return (
    <AnimatePresence>
      {laptop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#1d1d1f] rounded-3xl w-full max-w-5xl max-h-[95vh] overflow-hidden relative z-10 border border-white/[0.08] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 md:bg-white/[0.06] md:hover:bg-white/[0.12] text-[#86868b] hover:text-[#f5f5f7] rounded-full transition-all cursor-pointer backdrop-blur-md"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Left Column: Image, Specs & Actions */}
              <div className="w-full lg:w-[40%] bg-black relative flex flex-col shrink-0 lg:max-h-full overflow-y-auto">
                <div className="relative h-56 lg:h-80 shrink-0">
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

                <div className="p-6 space-y-6 flex-1 flex flex-col">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#86868b] font-medium">{laptop.brand}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] tracking-tight leading-tight mt-1">{laptop.name}</h3>
                  </div>

                  <p className="text-[13px] text-[#86868b] leading-relaxed">
                    {laptop.description}
                  </p>

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

                  <div className="mt-auto pt-6 border-t border-white/[0.06] space-y-3">
                    {laptop.hasVerifiedBuyLink ? (
                      <a
                        href={getBuyLinkInfo(laptop).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-full text-center bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-full text-[13px] font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Buy Now</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-[11px] text-[#6e6e73] text-center">No direct link available — search marketplaces:</p>
                        <div className="flex gap-2">
                          <a
                            href={getSearchLinks(laptop).amazon}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer flex-1 text-center bg-[#0071e3] hover:bg-[#0077ed] text-white py-2.5 rounded-full text-[13px] font-medium transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>Amazon</span>
                          </a>
                          <a
                            href={getSearchLinks(laptop).flipkart}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer flex-1 text-center bg-white/[0.08] hover:bg-white/[0.14] text-[#f5f5f7] py-2.5 rounded-full text-[13px] font-medium transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>Flipkart</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Buying Guide (Scrollable) */}
              <div className="w-full lg:w-[60%] p-6 md:p-8 overflow-y-auto bg-[#1d1d1f]">
                <div className="space-y-8">
                  {/* Scores Section */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 md:p-6">
                    <h4 className="text-[14px] font-semibold text-[#f5f5f7] mb-6">Recommendation Scores</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                      {/* Overall Score Circle */}
                      <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                          <motion.circle 
                            cx="50" cy="50" r="45" fill="none" 
                            stroke={scores.overall >= 80 ? '#30d158' : scores.overall >= 60 ? '#ff9f0a' : '#ff453a'} 
                            strokeWidth="8" 
                            strokeLinecap="round"
                            initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
                            animate={{ strokeDashoffset: 283 - (283 * scores.overall) / 100 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-3xl font-bold text-[#f5f5f7]">{scores.overall}</span>
                        </div>
                      </div>

                      {/* Detailed Scores */}
                      <div className="flex-1 w-full space-y-4">
                        <ScoreBar label="Student & College" score={scores.student} colorClass="bg-[#0a84ff]" />
                        <ScoreBar label="Coding & Dev" score={scores.coding} colorClass="bg-[#5e5ce6]" />
                        <ScoreBar label="Gaming" score={scores.gaming} colorClass="bg-[#ff453a]" />
                        <ScoreBar label="Creator & Editing" score={scores.creator} colorClass="bg-[#bf5af2]" />
                      </div>
                    </div>
                  </div>

                  {/* Who Should Buy / Avoid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-full bg-[#30d158]/20 flex items-center justify-center">
                          <ThumbsUp className="w-3.5 h-3.5 text-[#30d158]" />
                        </div>
                        <h4 className="text-[13px] font-semibold text-[#f5f5f7]">Who Should Buy</h4>
                      </div>
                      <ul className="space-y-3">
                        {whoShouldBuy.map((point, i) => (
                          <li key={i} className="text-[13px] text-[#86868b] flex gap-2">
                            <span className="text-[#30d158] shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-full bg-[#ff453a]/20 flex items-center justify-center">
                          <ThumbsDown className="w-3.5 h-3.5 text-[#ff453a]" />
                        </div>
                        <h4 className="text-[13px] font-semibold text-[#f5f5f7]">Who Should Avoid</h4>
                      </div>
                      <ul className="space-y-3">
                        {whoShouldAvoid.map((point, i) => (
                          <li key={i} className="text-[13px] text-[#86868b] flex gap-2">
                            <span className="text-[#ff453a] shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Strengths & Weaknesses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-semibold text-[#30d158] uppercase tracking-wider">Key Strengths</h4>
                      <ul className="space-y-2">
                        {laptop.pros.map((p, i) => (
                          <li key={i} className="text-[13px] flex items-start gap-2 text-[#86868b]">
                            <Check className="w-4 h-4 text-[#30d158] shrink-0 mt-0.5" />
                            <span className="leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-semibold text-[#ff9f0a] uppercase tracking-wider">Weaknesses</h4>
                      <ul className="space-y-2">
                        {laptop.cons.map((c, i) => (
                          <li key={i} className="text-[13px] flex items-start gap-2 text-[#86868b]">
                            <X className="w-4 h-4 text-[#ff9f0a] shrink-0 mt-0.5" />
                            <span className="leading-snug">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Value Verdict */}
                  <div className="bg-[#0071e3]/10 border border-[#0071e3]/20 rounded-2xl p-5">
                    <h4 className="text-[13px] font-semibold text-[#0071e3] mb-2">Value Verdict</h4>
                    <p className="text-[13px] text-[#f5f5f7] leading-relaxed">
                      {verdict}
                    </p>
                  </div>

                  {/* Best Alternatives */}
                  {alternatives.length > 0 && (
                    <div className="pt-4 border-t border-white/[0.06]">
                      <h4 className="text-[14px] font-semibold text-[#f5f5f7] mb-4">Best Alternatives</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {alternatives.map((alt) => (
                          <button
                            key={alt.id}
                            onClick={() => onSelectAlternative?.(alt)}
                            className="text-left bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-xl p-3 flex items-center gap-3 transition-colors cursor-pointer"
                          >
                            <div className="w-12 h-12 rounded-lg bg-black shrink-0 overflow-hidden border border-white/[0.04]">
                              <img src={alt.imageUrl} alt={alt.name} className="w-full h-full object-cover opacity-80" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-[12px] font-medium text-[#f5f5f7] truncate">{alt.name}</h5>
                              <p className="text-[11px] text-[#86868b]">₹{alt.price.toLocaleString('en-IN')}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#6e6e73]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
