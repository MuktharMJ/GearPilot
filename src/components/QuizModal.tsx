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
    // Reset internal state for next time
    setQuizStep(1);
    onClose();
  };

  const handleClose = () => {
    setQuizStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative z-10 text-[#e0e2e6] shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 text-sky-400 mb-2">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">Matchmaker Quiz</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6">Find Your Perfect Specs in 30 Seconds</h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {quizStep === 1 && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed">What describes your college branch or primary usage requirements?</p>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'coding' })}
                      className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                        quizAnswers.stream === 'coding'
                          ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Code className="w-4 h-4 text-sky-400 shrink-0" />
                      <div>
                        <p className="text-sm">Computer Science, IT, or Web Coding</p>
                        <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Docker VMs, VS Code suites, intense runtime loops.</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'gaming' })}
                      className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                        quizAnswers.stream === 'gaming'
                          ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Gamepad2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <div>
                        <p className="text-sm">Mechanical Engineering (CAD / SolidWorks / Gaming)</p>
                        <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Heavy 3D rendering assemblies, high graphic processing power.</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'editing' })}
                      className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                        quizAnswers.stream === 'editing'
                          ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Video className="w-4 h-4 text-purple-400 shrink-0" />
                      <div>
                        <p className="text-sm">Digital Design, Film, or Creative Arts</p>
                        <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Requires 4K Adobe panels, color rendering depth, or edit pipelines.</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'general' })}
                      className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                        quizAnswers.stream === 'general'
                          ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-sm">Everyday Commerce, Arts, or Business</p>
                        <p className="text-[10px] text-zinc-500 font-normal mt-0.5">General excel, reading PDFs, assignments, and continuous travel.</p>
                      </div>
                    </button>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setQuizStep(2)}
                      className="cursor-pointer bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1 shadow-md shadow-sky-500/10"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">What is your practical maximum budget cap?</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                      <span className="text-xs text-zinc-400">Selected Budget:</span>
                      <span className="text-sky-400 font-bold">₹{quizAnswers.budget.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, budget: 45000 })}
                        className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                          quizAnswers.budget === 45000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        Budget Entry Level (Under ₹45,000)
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, budget: 65000 })}
                        className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                          quizAnswers.budget === 65000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        Mid-Range Sweetspot (Under ₹65,000)
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, budget: 90000 })}
                        className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                          quizAnswers.budget === 90000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        High Performance Core (Under ₹90,000)
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, budget: 250000 })}
                        className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                          quizAnswers.budget === 250000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        Premium Creator Pro / No Limits
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-800 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setQuizStep(1)}
                      className="cursor-pointer text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizStep(3)}
                      className="cursor-pointer bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1 shadow-md shadow-sky-500/10"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">What is your single most critical feature priority?</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'battery' })}
                      className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                        quizAnswers.priority === 'battery' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      <Battery className="w-6 h-6 text-emerald-400" />
                      <span>All-Day Battery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'performance' })}
                      className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                        quizAnswers.priority === 'performance' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      <Cpu className="w-6 h-6 text-sky-400" />
                      <span>Graphics & Speed</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'screen' })}
                      className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                        quizAnswers.priority === 'screen' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      <Layers className="w-6 h-6 text-purple-400" />
                      <span>OLED Screen Visuals</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'any' })}
                      className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                        quizAnswers.priority === 'any' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                      }`}
                    >
                      <LaptopIcon className="w-6 h-6 text-indigo-400" />
                      <span>Balanced / Any</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setQuizStep(2)}
                      className="cursor-pointer text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleApply}
                      className="cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-sky-500/15"
                    >
                      Find Best Matches!
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
