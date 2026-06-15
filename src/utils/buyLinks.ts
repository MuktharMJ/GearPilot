import { Laptop } from '../types';

export interface BuyLinkInfo {
  label: string;
  url: string;
  isVerified: boolean;
}

/**
 * Determines the marketplace from a URL (Amazon or Flipkart).
 */
function getMarketplace(url: string): 'Amazon' | 'Flipkart' | 'Store' {
  if (url.includes('amazon')) return 'Amazon';
  if (url.includes('flipkart')) return 'Flipkart';
  return 'Store';
}

/**
 * Returns the appropriate buy link info for a laptop.
 * - Verified links get "Buy Now" label
 * - Unverified/search links get "Search on Amazon/Flipkart" label
 */
export function getBuyLinkInfo(laptop: Laptop): BuyLinkInfo {
  const marketplace = getMarketplace(laptop.buyUrl);

  if (laptop.hasVerifiedBuyLink) {
    return {
      label: 'Buy Now',
      url: laptop.buyUrl,
      isVerified: true,
    };
  }

  return {
    label: `Search on ${marketplace}`,
    url: laptop.buyUrl,
    isVerified: false,
  };
}

/**
 * Generates fallback search URLs for a laptop on major marketplaces.
 */
export function getSearchLinks(laptop: Laptop): { amazon: string; flipkart: string } {
  const query = encodeURIComponent(laptop.name);
  return {
    amazon: `https://www.amazon.in/s?k=${query}`,
    flipkart: `https://www.flipkart.com/search?q=${query}`,
  };
}
