import { Laptop as LaptopIcon, Sparkles, Sparkle } from 'lucide-react';

interface HeaderProps {
  onOpenQuiz: () => void;
}

export default function Header({ onOpenQuiz }: HeaderProps) {
  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-sky-500/10 border-b border-sky-400/20 text-sky-300 py-3 px-6 text-center text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Sparkle className="w-4 h-4 animate-spin-slow text-sky-400" />
        <span>Indian College Admissions 2026: Check our updated prices & custom specs guide below!</span>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#07080d]/80 backdrop-blur-xl border-b border-zinc-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/10">
              <LaptopIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">GearPilot</span>
                <span className="bg-sky-500/10 text-sky-400 text-[10px] px-2 py-0.5 rounded-full font-medium border border-sky-400/10">Student Edition</span>
              </div>
              <p className="text-[10px] text-zinc-400">Your Ultimate Hardware Advisor</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md shadow-sky-500/10"
              id="btn-quiz-trigger"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Find Your Match</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
