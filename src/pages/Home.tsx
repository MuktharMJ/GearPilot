import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { laptops } from '../data/laptops';
import { Laptop } from '../types';
import { useFilters } from '../hooks/useFilters';
import { useCompare } from '../hooks/useCompare';
import { useFavorites } from '../hooks/useFavorites';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterSidebar from '../components/FilterSidebar';
import LaptopCard from '../components/LaptopCard';
import LaptopDetailModal from '../components/LaptopDetailModal';
import QuizModal, { QuizAnswers } from '../components/QuizModal';
import CompareTray from '../components/CompareTray';
import Footer from '../components/Footer';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedLaptopId = searchParams.get('laptop');
  const selectedLaptop = selectedLaptopId ? laptops.find(l => l.id === selectedLaptopId) || null : null;
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const {
    selectedUseCase,
    setSelectedUseCase,
    maxPrice,
    setMaxPrice,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    filteredLaptops,
    resetFilters,
  } = useFilters();

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [filteredLaptops]);

  const { compareList, toggleCompare, clearCompare, removeFromCompare } = useCompare();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSelectLaptop = (laptop: Laptop | null) => {
    if (laptop) {
      setSearchParams(prev => { prev.set('laptop', laptop.id); return prev; });
    } else {
      setSearchParams(prev => { prev.delete('laptop'); return prev; });
    }
  };

  const handleApplyQuiz = (answers: QuizAnswers) => {
    const finalUseCase = answers.stream === 'general' ? 'college' : answers.stream;
    setSelectedUseCase(finalUseCase);
    setMaxPrice(answers.budget);
    
    if (answers.priority === 'battery') {
      setSearchQuery('battery');
    } else if (answers.priority === 'screen') {
      setSearchQuery('OLED');
    } else if (answers.priority === 'performance') {
      setSearchQuery('RTX');
    } else {
      setSearchQuery('');
    }
  };

  const handleCompareRoute = () => {
    const ids = compareList.map(l => l.id).join(',');
    navigate(`/compare?ids=${ids}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-screen bg-black text-[#f5f5f7] font-sans flex flex-col justify-between"
    >
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      <main className="max-w-[1200px] w-full mx-auto px-6 py-8 flex-1">
        <HeroSection />

        {/* Section header */}
        <div className="mb-10 pt-6 border-t border-white/[0.06]" id="scrolling-target">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#f5f5f7]">
                Explore laptops.
              </h2>
              <p className="text-[14px] text-[#86868b] mt-1">
                {filteredLaptops.length} models match your criteria.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedUseCase={selectedUseCase}
            setSelectedUseCase={setSelectedUseCase}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <div className="lg:col-span-3">
            {filteredLaptops.length === 0 ? (
              <div className="bg-white/[0.03] rounded-3xl border border-white/[0.06] p-16 text-center space-y-5">
                <div>
                  <h3 className="font-semibold text-lg text-[#f5f5f7]">No laptops found.</h3>
                  <p className="text-[14px] text-[#86868b] mt-2 max-w-md mx-auto">
                    Try adjusting your budget, choosing a different category, or simplifying your search.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="active:scale-95 cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] font-medium px-6 py-2.5 rounded-full transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filteredLaptops.slice(0, visibleCount).map((laptop) => (
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
                
                <div className="flex flex-col items-center justify-center gap-3 py-8">
                  <p className="text-[12px] text-[#6e6e73]">
                    Showing {Math.min(visibleCount, filteredLaptops.length)} of {filteredLaptops.length}
                  </p>
                  {visibleCount < filteredLaptops.length && (
                    <button
                      onClick={() => setVisibleCount(v => v + 8)}
                      className="active:scale-95 cursor-pointer text-[#0071e3] hover:text-[#0077ed] text-[13px] font-medium px-6 py-2.5 rounded-full border border-[#0071e3]/30 hover:border-[#0071e3]/60 transition-all"
                    >
                      Show More
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
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
    </motion.div>
  );
}
