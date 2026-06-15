import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { ShieldAlert } from 'lucide-react';
import { laptops } from '../data/laptops';
import { Laptop } from '../types';
import { useFilters } from '../hooks/useFilters';
import { useCompare } from '../hooks/useCompare';
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

  const { compareList, toggleCompare, clearCompare, removeFromCompare } = useCompare();

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
    <div className="min-h-screen bg-[#07080d] text-[#e3e5eb] font-sans selection:bg-[#38bdf8] selection:text-black grid-pattern flex flex-col justify-between">
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      <main className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-10 flex-1">
        <HeroSection />

        <div className="mb-8" id="scrolling-target">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800/80">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Explore Current Laptop Matches</h2>
              <p className="text-xs text-zinc-400 tracking-wide mt-1">Real-time specifications, Indian pricing structures, and honest hardware breakdowns.</p>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-xl text-xs font-medium shrink-0">
              <span className="text-zinc-500">Matched Laptops:</span>
              <span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-400/20 font-bold">{filteredLaptops.length} available</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-500">Catalog Size:</span>
              <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md font-bold">{laptops.length} models</span>
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
              <div className="bg-zinc-900/30 rounded-2xl border border-zinc-800/80 p-16 text-center space-y-6">
                <div className="inline-flex p-4 bg-zinc-800 text-zinc-500 rounded-full">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">No laptops found</h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-md mx-auto">
                    Try adjusting your budget slider, choosing different major streams, or simplifying search queries to find suitable student recommendations.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/10"
                >
                  Reset Selection Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredLaptops.map((laptop) => (
                    <LaptopCard
                      key={laptop.id}
                      laptop={laptop}
                      onSelect={handleSelectLaptop}
                      isCompared={compareList.some(l => l.id === laptop.id)}
                      onCompare={toggleCompare}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </main>

      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => handleSelectLaptop(null)}
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
