import { X, ArrowUpDown } from 'lucide-react';
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

const useCaseOptions: { key: UseCaseType | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'coding', label: 'Coding' },
  { key: 'gaming', label: 'Gaming' },
  { key: 'editing', label: 'Creative' },
  { key: 'college', label: 'Study' },
];

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
    <div className="lg:col-span-1 bg-white/[0.03] p-6 rounded-2xl border border-white/[0.06] space-y-6 h-fit">
      <h3 className="font-semibold text-sm text-[#f5f5f7] pb-4 border-b border-white/[0.06]">
        Filters
      </h3>

      {/* Sort */}
      <div className="space-y-2">
        <label className="text-[11px] font-medium text-[#86868b] block">Sort by</label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6e6e73]">
            <ArrowUpDown className="w-3.5 h-3.5" />
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="w-full appearance-none text-[13px] py-2.5 pl-8 pr-4 rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#f5f5f7] focus:outline-none focus:ring-1 focus:ring-[#0071e3]/50 transition-all cursor-pointer"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="battery-desc">Battery: Longest First</option>
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <label className="text-[11px] font-medium text-[#86868b] block">Search</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Model, processor, brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-[13px] py-2.5 px-3 rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#f5f5f7] focus:outline-none focus:ring-1 focus:ring-[#0071e3]/50 placeholder-[#6e6e73] transition-all"
            id="inp-search"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6e6e73] hover:text-[#f5f5f7] transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Use Case */}
      <div className="space-y-2">
        <label className="text-[11px] font-medium text-[#86868b] block">Use case</label>
        <div className="flex flex-wrap gap-2">
          {useCaseOptions.map(({ key, label }) => {
            const count = key === 'all'
              ? laptops.length
              : laptops.filter(l => l.useCases.includes(key as UseCaseType)).length;
            return (
              <button
                key={key}
                onClick={() => setSelectedUseCase(key)}
                className={`cursor-pointer text-[12px] px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  selectedUseCase === key
                    ? 'bg-[#f5f5f7] text-black'
                    : 'bg-white/[0.06] text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.1]'
                }`}
              >
                {label} <span className="opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-3 pt-3 border-t border-white/[0.06]">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-medium text-[#86868b]">Max Budget</span>
          <span className="text-[13px] text-[#f5f5f7] font-semibold">₹{maxPrice.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="25000"
          max="250000"
          step="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#6e6e73]">
          <span>₹25k</span>
          <span>₹1.35L</span>
          <span>₹2.5L</span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {[
            { label: '40k', value: 40000 },
            { label: '60k', value: 60000 },
            { label: '80k', value: 80000 },
            { label: '1.2L', value: 120000 },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setMaxPrice(value)}
              className={`cursor-pointer text-[11px] px-2.5 py-1 rounded-full transition-all ${
                maxPrice === value
                  ? 'bg-[#f5f5f7] text-black font-medium'
                  : 'bg-white/[0.06] text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.1]'
              }`}
            >
              Under {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tip */}
      <div className="pt-4 border-t border-white/[0.06]">
        <p className="text-[11px] text-[#6e6e73] leading-relaxed">
          <span className="text-[#86868b] font-medium">Tip: </span>
          AMD "H" / Intel "H" processors deliver gaming speeds. "U" processors save power for long lectures.
        </p>
      </div>
    </div>
  );
}
