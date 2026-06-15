import { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Heart, ArrowLeft } from 'lucide-react';
import { laptops } from '../data/laptops';
import { Laptop } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { useCompare } from '../hooks/useCompare';
import Header from '../components/Header';
import LaptopCard from '../components/LaptopCard';
import LaptopDetailModal from '../components/LaptopDetailModal';
import QuizModal, { QuizAnswers } from '../components/QuizModal';
import CompareTray from '../components/CompareTray';
import Footer from '../components/Footer';

export default function Favorites() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedLaptopId = searchParams.get('laptop');
  const selectedLaptop = selectedLaptopId ? laptops.find(l => l.id === selectedLaptopId) || null : null;
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const { compareList, toggleCompare, clearCompare, removeFromCompare } = useCompare();

  const favoriteLaptops = laptops.filter(laptop => favoriteIds.includes(laptop.id));

  const handleSelectLaptop = (laptop: Laptop | null) => {
    if (laptop) {
      setSearchParams(prev => { prev.set('laptop', laptop.id); return prev; });
    } else {
      setSearchParams(prev => { prev.delete('laptop'); return prev; });
    }
  };

  const handleApplyQuiz = (answers: QuizAnswers) => {
    // If user takes quiz from favorites page, take them back to home page with filters
    const finalUseCase = answers.stream === 'general' ? 'college' : answers.stream;
    
    const params = new URLSearchParams();
    if (answers.priority === 'battery') params.set('q', 'battery');
    else if (answers.priority === 'screen') params.set('q', 'OLED');
    else if (answers.priority === 'performance') params.set('q', 'RTX');
    
    // Simplification for quiz routing
    navigate(`/?${params.toString()}`);
  };

  const handleCompareRoute = () => {
    const ids = compareList.map(l => l.id).join(',');
    navigate(`/compare?ids=${ids}`);
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-sans flex flex-col justify-between">
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      <main className="max-w-[1200px] w-full mx-auto px-6 py-12 flex-1">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-1 text-[13px] text-[#0071e3] hover:text-[#0077ed] transition-colors mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#f5f5f7] flex items-center gap-3">
                <Heart className="w-8 h-8 fill-[#ff3b30] text-[#ff3b30]" />
                Your Favorites
              </h2>
              <p className="text-[14px] text-[#86868b] mt-2">
                {favoriteLaptops.length} {favoriteLaptops.length === 1 ? 'laptop' : 'laptops'} saved.
              </p>
            </div>
          </div>
        </div>

        {favoriteLaptops.length === 0 ? (
          <div className="bg-white/[0.03] rounded-3xl border border-white/[0.06] p-16 text-center space-y-5">
            <Heart className="w-12 h-12 text-[#86868b] mx-auto opacity-50" />
            <div>
              <h3 className="font-semibold text-lg text-[#f5f5f7]">No favorites yet.</h3>
              <p className="text-[14px] text-[#86868b] mt-2 max-w-md mx-auto">
                Explore the catalog and tap the heart icon on any laptop to save it for later.
              </p>
            </div>
            <Link
              to="/"
              className="inline-block cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Explore Laptops
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {favoriteLaptops.map((laptop) => (
                <LaptopCard
                  key={laptop.id}
                  laptop={laptop}
                  onSelect={handleSelectLaptop}
                  isCompared={compareList.some(l => l.id === laptop.id)}
                  onCompare={toggleCompare}
                  isFavorite={isFavorite(laptop.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => handleSelectLaptop(null)}
        onSelectAlternative={handleSelectLaptop}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onApply={handleApplyQuiz}
      />

      <CompareTray
        compareList={compareList}
        onRemove={removeFromCompare}
        onClear={clearCompare}
        onCompare={handleCompareRoute}
      />

      <Footer />
    </div>
  );
}
