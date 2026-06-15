import { SlidersHorizontal, X, Code, Gamepad2, Video, BookOpen, Info, ArrowUpDown } from 'lucide-react';
import { laptops } from '../data/laptops';
import { UseCaseType } from '../types';
import { SortOrder } from '../hooks/useFilters';

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedUseCase: UseCaseType | 'all';
  setSelectedUseCase: (useCase: UseCaseType | 'all') => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

export default function FilterSidebar({
  searchQuery,
  setSearchQuery,
  selectedUseCase,
  setSelectedUseCase,
  maxPrice,
  setMaxPrice,
  sortOrder,
  setSortOrder,
}: FilterSidebarProps) {
  return (
    <div className="lg:col-span-1 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/80 space-y-6 h-fit backdrop-blur-md">
      <div>
        <h3 className="font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2 pb-4 border-b border-zinc-800/80">
          <SlidersHorizontal className="w-4 h-4 text-sky-400" />
          <span>Product Filters</span>
        </h3>
      </div>

      {/* Sorting Dropdown */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Sort Results</label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
            <ArrowUpDown className="w-4 h-4" />
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="w-full appearance-none text-xs py-3 pl-9 pr-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all cursor-pointer"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="battery-desc">Battery: Longest First</option>
          </select>
        </div>
      </div>

      {/* Dynamic keyword Search Box */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Search Model or Processor</label>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. LOQ, M4, Asus Vivobook, RTX..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs py-3 pl-3 pr-9 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 placeholder-zinc-500 transition-all"
            id="inp-search"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Stream Use Case select buttons */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Target Use Case</label>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => setSelectedUseCase('all')}
            className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
              selectedUseCase === 'all'
                ? 'bg-sky-500/10 text-sky-400 border-sky-400/40 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <span>All Use Cases</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'all' ? 'bg-sky-400 text-sky-950' : 'bg-zinc-800 text-zinc-400'}`}>
              {laptops.length}
            </span>
          </button>
          
          <button
            onClick={() => setSelectedUseCase('coding')}
            className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
              selectedUseCase === 'coding'
                ? 'bg-sky-500/10 text-sky-400 border-sky-400/40 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Coding & Tech Majors</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'coding' ? 'bg-sky-400 text-sky-950' : 'bg-zinc-800 text-zinc-400'}`}>
              {laptops.filter(l => l.useCases.includes('coding')).length}
            </span>
          </button>

          <button
            onClick={() => setSelectedUseCase('gaming')}
            className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
              selectedUseCase === 'gaming'
                ? 'bg-indigo-500/10 text-indigo-300 border-indigo-400/40 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Gaming & Rendering</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'gaming' ? 'bg-indigo-400 text-indigo-950' : 'bg-zinc-800 text-zinc-400'}`}>
              {laptops.filter(l => l.useCases.includes('gaming')).length}
            </span>
          </button>

          <button
            onClick={() => setSelectedUseCase('editing')}
            className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
              selectedUseCase === 'editing'
                ? 'bg-purple-500/10 text-purple-300 border-purple-400/40 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Creative & Video Editing</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'editing' ? 'bg-purple-400 text-purple-950' : 'bg-zinc-800 text-zinc-400'}`}>
              {laptops.filter(l => l.useCases.includes('editing')).length}
            </span>
          </button>

          <button
            onClick={() => setSelectedUseCase('college')}
            className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
              selectedUseCase === 'college'
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-400/40 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Everyday Study & Longevity</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'college' ? 'bg-emerald-400 text-emerald-950' : 'bg-zinc-800 text-zinc-400'}`}>
              {laptops.filter(l => l.useCases.includes('college')).length}
            </span>
          </button>
        </div>
      </div>

      {/* Price slider with modern presets */}
      <div className="space-y-3 pt-3 border-t border-zinc-800">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Max Budget Threshold</span>
          <span className="text-[#38bdf8] font-bold">₹{maxPrice.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="25000"
          max="250000"
          step="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full tracking-wide accent-sky-500 bg-zinc-800 cursor-pointer h-1.5 rounded-lg"
        />
        <div className="flex justify-between text-[9px] text-zinc-500 font-bold">
          <span>₹25,000</span>
          <span>₹1,35,000</span>
          <span>₹2.5 Lacs+</span>
        </div>

        {/* Handpicked Fast Presets */}
        <div className="pt-2">
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Popular Budget Presets</p>
          <div className="flex flex-wrap gap-1.5">
            <button 
              onClick={() => setMaxPrice(40000)}
              className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              Under 40k
            </button>
            <button 
              onClick={() => setMaxPrice(60000)}
              className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              Under 60k
            </button>
            <button 
              onClick={() => setMaxPrice(80000)}
              className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              Under 80k
            </button>
            <button 
              onClick={() => setMaxPrice(120000)}
              className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              Creators (1.2L)
            </button>
          </div>
        </div>
      </div>

      {/* Quick Education Section */}
      <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 text-zinc-400 text-xs space-y-2">
        <div className="font-semibold text-sky-400 flex items-center gap-1">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>Buyer Cheat Sheet</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Check model suffix tags! AMD <strong className="text-zinc-200">"H"</strong> / Intel <strong className="text-zinc-200">"H"</strong> processors deliver gaming speeds but consume more power. <strong className="text-zinc-200">"U"</strong> processors save power, boosting battery life for long lectures.
        </p>
      </div>
    </div>
  );
}
