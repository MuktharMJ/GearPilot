import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Code, Gamepad2, Video, BookOpen, ChevronRight, Battery, Cpu, Layers, Laptop as LaptopIcon } from 'lucide-react';
import { UseCaseType } from '../types';

export interface QuizAnswers {
  stream: UseCaseType | 'general';
  budget: number;
  priority: 'battery' | 'performance' | 'screen' | 'any';
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (answers: QuizAnswers) => void;
}

export default function QuizModal({ isOpen, onClose, onApply }: QuizModalProps) {
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    stream: 'general',
    budget: 80000,
    priority: 'any'
  });

  const handleApply = () => {
    onApply(quizAnswers);
    setQuizStep(1);
    onClose();
  };

  const handleClose = () => {
    setQuizStep(1);
    onClose();
  };

  const optionClass = (active: boolean) =>
    `cursor-pointer text-left p-4 rounded-2xl border text-[13px] font-medium flex items-center gap-3 transition-all ${
      active
        ? 'glass-tag border-white/[0.2] text-[#f5f5f7] shadow-[0_0_20px_rgba(0,113,227,0.1)]'
        : 'bg-white/[0.02] border-white/[0.06] text-[#86868b] hover:glass-tag hover:border-white/[0.12] hover:text-[#f5f5f7]'
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-modal rounded-3xl w-full max-w-lg p-6 sm:p-8 relative z-10 text-[#f5f5f7]"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.12] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#0071e3]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#0071e3]">Matchmaker</span>
            </div>
            <p className="text-[10px] text-[#6e6e73] mb-6">Step {quizStep} of 3</p>

            <h3 className="text-xl font-semibold text-[#f5f5f7] mb-6">
              {quizStep === 1 && 'What do you need it for?'}
              {quizStep === 2 && "What's your budget?"}
              {quizStep === 3 && 'What matters most?'}
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {quizStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'coding' })}
                      className={optionClass(quizAnswers.stream === 'coding')}
                    >
                      <Code className="w-5 h-5 text-[#86868b] shrink-0" />
                      <div>
                        <p>Computer Science & Coding</p>
                        <p className="text-[11px] text-[#6e6e73] font-normal mt-0.5">Docker, VS Code, runtime loops</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'gaming' })}
                      className={optionClass(quizAnswers.stream === 'gaming')}
                    >
                      <Gamepad2 className="w-5 h-5 text-[#86868b] shrink-0" />
                      <div>
                        <p>Engineering — CAD & Gaming</p>
                        <p className="text-[11px] text-[#6e6e73] font-normal mt-0.5">3D rendering, high graphic processing</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'editing' })}
                      className={optionClass(quizAnswers.stream === 'editing')}
                    >
                      <Video className="w-5 h-5 text-[#86868b] shrink-0" />
                      <div>
                        <p>Design, Film & Creative Arts</p>
                        <p className="text-[11px] text-[#6e6e73] font-normal mt-0.5">4K panels, color accuracy, edit pipelines</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'general' })}
                      className={optionClass(quizAnswers.stream === 'general')}
                    >
                      <BookOpen className="w-5 h-5 text-[#86868b] shrink-0" />
                      <div>
                        <p>Everyday Study & Business</p>
                        <p className="text-[11px] text-[#6e6e73] font-normal mt-0.5">Excel, PDFs, assignments, travel</p>
                      </div>
                    </button>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06] flex justify-end">
                    <button
                      type="button"
                      onClick={() => setQuizStep(2)}
                      className="active:scale-95 cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2.5 rounded-full font-medium text-[13px] flex items-center gap-1 transition-all"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Budget — Under ₹45,000', value: 45000 },
                      { label: 'Mid-Range — Under ₹65,000', value: 65000 },
                      { label: 'Performance — Under ₹90,000', value: 90000 },
                      { label: 'Premium — No Limit', value: 250000 },
                    ].map(({ label, value }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, budget: value })}
                        className={`cursor-pointer text-left p-3.5 rounded-2xl border text-[13px] font-medium transition-all ${
                          quizAnswers.budget === value
                            ? 'bg-white/[0.08] border-white/[0.2] text-[#f5f5f7]'
                            : 'bg-white/[0.02] border-white/[0.06] text-[#86868b] hover:border-white/[0.12] hover:text-[#f5f5f7]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex justify-between">
                    <button
                      type="button"
                      onClick={() => setQuizStep(1)}
                      className="cursor-pointer text-[#86868b] hover:text-[#f5f5f7] px-4 py-2.5 rounded-full text-[13px] font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizStep(3)}
                      className="active:scale-95 cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2.5 rounded-full font-medium text-[13px] flex items-center gap-1 transition-all"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'battery' as const, icon: Battery, label: 'All-Day Battery', color: 'text-[#86868b]' },
                      { key: 'performance' as const, icon: Cpu, label: 'Raw Performance', color: 'text-[#86868b]' },
                      { key: 'screen' as const, icon: Layers, label: 'OLED Display', color: 'text-[#86868b]' },
                      { key: 'any' as const, icon: LaptopIcon, label: 'Balanced', color: 'text-[#86868b]' },
                    ].map(({ key, icon: Icon, label }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, priority: key })}
                        className={`cursor-pointer p-4 rounded-2xl border text-[13px] font-medium transition-all text-center flex flex-col items-center justify-center gap-2 ${
                          quizAnswers.priority === key
                            ? 'bg-white/[0.08] border-white/[0.2] text-[#f5f5f7]'
                            : 'bg-white/[0.02] border-white/[0.06] text-[#6e6e73] hover:border-white/[0.12] hover:text-[#f5f5f7]'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-[#86868b]" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex justify-between">
                    <button
                      type="button"
                      onClick={() => setQuizStep(2)}
                      className="cursor-pointer text-[#86868b] hover:text-[#f5f5f7] px-4 py-2.5 rounded-full text-[13px] font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleApply}
                      className="active:scale-95 cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full font-semibold text-[13px] transition-all"
                    >
                      Find Best Matches
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
