import { Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

interface HeaderProps {
  onOpenQuiz: () => void;
}

export default function Header({ onOpenQuiz }: HeaderProps) {
  const { favoriteCount } = useFavorites();

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-white/[0.08] transition-all">
      <div className="max-w-[980px] mx-auto px-6 h-11 flex items-center justify-between">
        <a href="/" className="text-[14px] font-semibold text-[#f5f5f7] tracking-tight hover:text-white/80 transition-colors">
          GearPilot
        </a>

        <div className="flex items-center gap-4">
          <Link to="/favorites" className="relative cursor-pointer text-[#f5f5f7] hover:text-[#ff3b30] transition-colors p-1" aria-label="Favorites">
            <Heart className="w-4.5 h-4.5" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-[#ff3b30] text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-[#1d1d1f]">
                {favoriteCount}
              </span>
            )}
          </Link>

          <button
            onClick={onOpenQuiz}
            className="cursor-pointer inline-flex items-center gap-1.5 bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all"
            id="btn-quiz-trigger"
          >
            <Sparkles className="w-3 h-3" />
            <span>Find Your Match</span>
          </button>
        </div>
      </div>
    </header>
  );
}
