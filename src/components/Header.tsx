import { Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuiz: () => void;
}

export default function Header({ onOpenQuiz }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-white/[0.08] transition-all">
      <div className="max-w-[980px] mx-auto px-6 h-11 flex items-center justify-between">
        <a href="/" className="text-[14px] font-semibold text-[#f5f5f7] tracking-tight hover:text-white/80 transition-colors">
          GearPilot
        </a>

        <button
          onClick={onOpenQuiz}
          className="cursor-pointer inline-flex items-center gap-1.5 bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all"
          id="btn-quiz-trigger"
        >
          <Sparkles className="w-3 h-3" />
          <span>Find Your Match</span>
        </button>
      </div>
    </header>
  );
}
