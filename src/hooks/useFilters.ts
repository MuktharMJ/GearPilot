import { useState, useMemo } from 'react';
import { laptops } from '../data/laptops';
import { UseCaseType } from '../types';

export type SortOrder = 'price-asc' | 'price-desc' | 'battery-desc';

export function useFilters() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseType | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(250000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('price-asc');

  const filteredLaptops = useMemo(() => {
    let result = laptops.filter(laptop => {
      const matchesUseCase = selectedUseCase === 'all' || laptop.useCases.includes(selectedUseCase);
      const matchesPrice = laptop.price <= maxPrice;
      const matchesQuery =
        searchQuery === '' ||
        laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.specs.gpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesUseCase && matchesPrice && matchesQuery;
    });

    result = result.sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      if (sortOrder === 'battery-desc') return b.batteryLife - a.batteryLife;
      return 0;
    });

    return result;
  }, [selectedUseCase, maxPrice, searchQuery, sortOrder]);

  const resetFilters = () => {
    setSelectedUseCase('all');
    setMaxPrice(250000);
    setSearchQuery('');
    setSortOrder('price-asc');
  };

  return {
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
  };
}
