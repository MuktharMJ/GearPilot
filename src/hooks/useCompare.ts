import { useState } from 'react';
import { Laptop } from '../types';

export function useCompare() {
  const [compareList, setCompareList] = useState<Laptop[]>([]);

  const toggleCompare = (laptop: Laptop) => {
    setCompareList(prev => {
      const exists = prev.find(l => l.id === laptop.id);
      if (exists) {
        return prev.filter(l => l.id !== laptop.id);
      }
      if (prev.length >= 3) {
        // Optional: show a toast that max is 3, for now just replace the last one or ignore
        return [...prev.slice(0, 2), laptop];
      }
      return [...prev, laptop];
    });
  };

  const clearCompare = () => setCompareList([]);

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(l => l.id !== id));
  };

  return {
    compareList,
    toggleCompare,
    clearCompare,
    removeFromCompare
  };
}
