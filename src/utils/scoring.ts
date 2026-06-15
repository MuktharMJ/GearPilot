import { Laptop } from '../types';

export interface LaptopScores {
  overall: number;
  student: number;
  coding: number;
  gaming: number;
  creator: number;
}

/**
 * Calculates a score out of 100 based on a generic string matching logic.
 */
function getGpuScore(gpu: string): number {
  const g = gpu.toLowerCase();
  if (g.includes('rtx 4090')) return 100;
  if (g.includes('rtx 4080')) return 95;
  if (g.includes('rtx 4070')) return 88;
  if (g.includes('rtx 4060')) return 80;
  if (g.includes('rtx 3050') || g.includes('rtx 4050')) return 65;
  if (g.includes('rx 7600')) return 75;
  if (g.includes('m3 max') || g.includes('m4 pro')) return 90;
  if (g.includes('m3 pro')) return 80;
  if (g.includes('apple') && g.includes('core')) return 60; // Base M-series
  if (g.includes('arc') || g.includes('mx550')) return 40;
  return 20; // Integrated graphics
}

function getCpuScore(cpu: string): number {
  const c = cpu.toLowerCase();
  if (c.includes('i9') || c.includes('m3 max') || c.includes('m4 pro')) return 95;
  if (c.includes('i7') || c.includes('ryzen 9') || c.includes('m3 pro') || c.includes('ultra 9') || c.includes('ultra 7') || c.includes('m4')) return 85;
  if (c.includes('i5') || c.includes('ryzen 7') || c.includes('m3') || c.includes('m2') || c.includes('elite')) return 75;
  if (c.includes('ryzen 5') || c.includes('ultra 5') || c.includes('m1')) return 65;
  return 50; // i3 or basic ARM
}

function getRamScore(ram: string): number {
  if (ram.includes('32gb') || ram.includes('36gb') || ram.includes('24gb')) return 95;
  if (ram.includes('16gb') || ram.includes('18gb')) return 75;
  return 40; // 8GB
}

function getDisplayScore(display: string): number {
  const d = display.toLowerCase();
  let score = 50;
  if (d.includes('oled') || d.includes('xdr') || d.includes('mini-led') || d.includes('amoled')) score += 30;
  if (d.includes('4k') || d.includes('3k') || d.includes('2.8k') || d.includes('qhd') || d.includes('wqxga')) score += 15;
  if (d.includes('100% srgb') || d.includes('dci-p3')) score += 10;
  if (d.includes('120hz') || d.includes('144hz') || d.includes('165hz') || d.includes('240hz')) score += 10;
  return Math.min(score, 100);
}

function getBatteryScore(hours: number): number {
  if (hours >= 18) return 98;
  if (hours >= 14) return 90;
  if (hours >= 10) return 80;
  if (hours >= 8) return 70;
  if (hours >= 6) return 50;
  return 30;
}

function getPortabilityScore(weight: number): number { // weight in lbs (actually wait, they are described in kg in description, but data says lbs or kg? usually ~3-6 means lbs or kg? Data says 'weight: 5.2' which usually means lbs, but description says 2.6kg. Let's assume lower is better).
  if (weight <= 2.5) return 95;
  if (weight <= 3.2) return 85;
  if (weight <= 4.0) return 70;
  if (weight <= 5.0) return 50;
  return 30;
}

export function calculateScores(laptop: Laptop): LaptopScores {
  const gpu = getGpuScore(laptop.specs.gpu);
  const cpu = getCpuScore(laptop.specs.cpu);
  const ram = getRamScore(laptop.specs.ram);
  const display = getDisplayScore(laptop.specs.display);
  const battery = getBatteryScore(laptop.batteryLife);
  const portability = getPortabilityScore(laptop.weight);
  
  // Calculate specific scores
  const gaming = Math.round((gpu * 0.6) + (cpu * 0.2) + (display * 0.1) + (ram * 0.1));
  const coding = Math.round((cpu * 0.4) + (ram * 0.3) + (display * 0.2) + (battery * 0.1));
  const creator = Math.round((display * 0.4) + (gpu * 0.3) + (cpu * 0.2) + (ram * 0.1));
  const student = Math.round((battery * 0.4) + (portability * 0.4) + (cpu * 0.1) + (ram * 0.1));
  
  // Base overall score
  let overall = Math.round((gaming + coding + creator + student) / 4);

  // Bonus points for laptops matching their intended use cases well
  if (laptop.useCases.includes('gaming')) overall = Math.max(overall, gaming * 0.85 + overall * 0.15);
  if (laptop.useCases.includes('editing')) overall = Math.max(overall, creator * 0.85 + overall * 0.15);
  if (laptop.useCases.includes('coding')) overall = Math.max(overall, coding * 0.85 + overall * 0.15);
  
  // Ensure bounds
  return {
    overall: Math.min(100, Math.round(overall)),
    student: Math.min(100, student),
    coding: Math.min(100, coding),
    gaming: Math.min(100, gaming),
    creator: Math.min(100, creator)
  };
}
