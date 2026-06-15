import { Laptop } from '../types';

export function getWhoShouldBuy(laptop: Laptop): string[] {
  const points: string[] = [];
  
  if (laptop.useCases.includes('gaming')) {
    if (laptop.price > 150000) points.push('Hardcore gamers seeking high framerates at max settings');
    else points.push('Gamers looking for solid performance on a budget');
  }
  
  if (laptop.useCases.includes('coding')) {
    if (laptop.specs.ram.includes('32GB') || laptop.specs.ram.includes('36GB')) {
      points.push('Developers running heavy Docker containers or VMs');
    } else {
      points.push('Software engineers and computer science students');
    }
  }
  
  if (laptop.useCases.includes('editing')) {
    if (laptop.specs.display.toLowerCase().includes('oled') || laptop.specs.display.toLowerCase().includes('100% srgb')) {
      points.push('Content creators who need highly accurate display colors');
    } else {
      points.push('Video editors and creative professionals');
    }
  }
  
  if (laptop.batteryLife >= 12) {
    points.push('Road warriors who need true all-day battery life without a charger');
  } else if (laptop.useCases.includes('college') && laptop.batteryLife >= 8) {
    points.push('Students needing a reliable machine for back-to-back classes');
  }
  
  if (laptop.weight <= 3.0) {
    points.push('Frequent travelers who prioritize an ultra-lightweight design');
  }

  // Fallback if we didn't generate enough points
  if (points.length < 2) {
    points.push(`Anyone looking for a capable ${laptop.brand} machine under ₹${(Math.ceil(laptop.price / 10000) * 10).toLocaleString('en-IN')}k`);
  }

  return points.slice(0, 4);
}

export function getWhoShouldAvoid(laptop: Laptop): string[] {
  const points: string[] = [];
  
  if (laptop.price > 120000) {
    points.push('Budget-conscious buyers looking for basic web browsing');
  }
  
  if (laptop.weight > 4.5) {
    points.push('Users who commute daily and need a highly portable laptop');
  }
  
  if (laptop.batteryLife < 6) {
    points.push('People who work away from power outlets for extended periods');
  }
  
  if (!laptop.useCases.includes('gaming') && (laptop.specs.gpu.toLowerCase().includes('integrated') || laptop.specs.gpu.toLowerCase().includes('uhd') || laptop.specs.gpu.toLowerCase().includes('iris') || laptop.specs.gpu.toLowerCase().includes('radeon graphics'))) {
    points.push('Gamers wanting to play modern AAA titles');
  }
  
  if (laptop.specs.ram.includes('8GB')) {
    points.push('Power users who heavily multitask or edit 4K video');
  }

  // Fallback if we didn't generate enough
  if (points.length === 0) {
    points.push('Those looking for extreme niche use-cases outside its design');
  }

  return points.slice(0, 4);
}

export function getValueVerdict(laptop: Laptop): string {
  if (laptop.price < 50000) {
    return `At ₹${laptop.price.toLocaleString('en-IN')}, the ${laptop.name} is positioned as a highly accessible entry-level machine. While it cuts some corners to reach this price point, it delivers excellent value for students and light users who prioritize core functionality over premium features.`;
  }
  if (laptop.price < 90000) {
    return `Priced at ₹${laptop.price.toLocaleString('en-IN')}, this laptop hits the "sweet spot" for many buyers. It offers a balanced mix of performance and build quality, making it a solid investment that punches slightly above its weight class without venturing into premium territory.`;
  }
  if (laptop.price < 150000) {
    return `At ₹${laptop.price.toLocaleString('en-IN')}, you are paying a premium for refined design, better displays, and higher-tier components. The ${laptop.name} justifies its cost if you rely on it daily for professional work or serious gaming, though casual users might find it overkill.`;
  }
  return `With an enthusiast price tag of ₹${laptop.price.toLocaleString('en-IN')}, the ${laptop.name} is an uncompromising flagship. It offers top-tier performance for power users whose time is money. If you need maximum power and have the budget, it's worth it—otherwise, look at mid-range alternatives.`;
}

export function getAlternatives(laptop: Laptop, allLaptops: Laptop[]): Laptop[] {
  return allLaptops
    .filter(l => l.id !== laptop.id)
    // Find laptops within +/- 30% price
    .filter(l => l.price >= laptop.price * 0.7 && l.price <= laptop.price * 1.3)
    // Prefer laptops that share at least one use case
    .sort((a, b) => {
      const aShared = a.useCases.filter(uc => laptop.useCases.includes(uc)).length;
      const bShared = b.useCases.filter(uc => laptop.useCases.includes(uc)).length;
      if (bShared !== aShared) return bShared - aShared;
      
      // If shared use cases are equal, sort by price closeness
      const aPriceDiff = Math.abs(a.price - laptop.price);
      const bPriceDiff = Math.abs(b.price - laptop.price);
      return aPriceDiff - bPriceDiff;
    })
    .slice(0, 3);
}
