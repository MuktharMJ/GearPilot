import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'gearpilot_favorites';
const FAVORITES_EVENT = 'favorites-updated';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Function to load favorites from localStorage
  const loadFavorites = useCallback(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavoriteIds(JSON.parse(stored));
      } else {
        setFavoriteIds([]);
      }
    } catch (e) {
      console.error('Failed to parse favorites from localStorage', e);
      setFavoriteIds([]);
    }
  }, []);

  // Initialize and listen to storage/custom events
  useEffect(() => {
    loadFavorites();

    const handleUpdate = () => loadFavorites();

    window.addEventListener(FAVORITES_EVENT, handleUpdate);
    // Also listen to the standard storage event for cross-tab synchronization
    window.addEventListener('storage', (e) => {
      if (e.key === FAVORITES_KEY) {
        loadFavorites();
      }
    });

    return () => {
      window.removeEventListener(FAVORITES_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [loadFavorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      let newFavorites: string[];
      if (prev.includes(id)) {
        newFavorites = prev.filter((favId) => favId !== id);
      } else {
        newFavorites = [...prev, id];
      }

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      // Dispatch custom event so other components in the same window sync
      window.dispatchEvent(newEvent(FAVORITES_EVENT));
      
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((id: string) => favoriteIds.includes(id), [favoriteIds]);

  const clearFavorites = useCallback(() => {
    localStorage.removeItem(FAVORITES_KEY);
    window.dispatchEvent(newEvent(FAVORITES_EVENT));
    setFavoriteIds([]);
  }, []);

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoriteCount: favoriteIds.length,
  };
}

// Helper to create events properly
function newEvent(eventName: string) {
  return new Event(eventName);
}
