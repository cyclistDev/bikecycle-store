import type { BikeCategory } from "@/data/products";

export interface BikeSize {
  size: string;
  minHeightCm: number;
  maxHeightCm: number;
}

export interface FrameColor {
  name: string;
  hex: string;
  priceDelta: number;
}

export interface GroupsetOption {
  name: string;
  priceDelta: number;
}

export interface BikeConfiguration {
  size: string;
  frameColor: string;
  groupset: string;
  priceAdjustment: number;
}

// Typical road-bike sizing chart (cm). Adjust per model when real data arrives from Supabase.
const roadSizes: BikeSize[] = [
  { size: "52", minHeightCm: 150, maxHeightCm: 160 },
  { size: "54", minHeightCm: 158, maxHeightCm: 168 },
  { size: "56", minHeightCm: 165, maxHeightCm: 175 },
  { size: "58", minHeightCm: 172, maxHeightCm: 180 },
  { size: "60", minHeightCm: 178, maxHeightCm: 188 },
  { size: "61", minHeightCm: 185, maxHeightCm: 195 },
];

const gravelSizes: BikeSize[] = [
  { size: "50", minHeightCm: 148, maxHeightCm: 158 },
  { size: "52", minHeightCm: 155, maxHeightCm: 165 },
  { size: "54", minHeightCm: 162, maxHeightCm: 172 },
  { size: "56", minHeightCm: 169, maxHeightCm: 179 },
  { size: "58", minHeightCm: 176, maxHeightCm: 186 },
  { size: "60", minHeightCm: 183, maxHeightCm: 193 },
];

const triathlonSizes: BikeSize[] = [
  { size: "51", minHeightCm: 150, maxHeightCm: 160 },
  { size: "54", minHeightCm: 158, maxHeightCm: 168 },
  { size: "56", minHeightCm: 165, maxHeightCm: 175 },
  { size: "58", minHeightCm: 172, maxHeightCm: 182 },
  { size: "61", minHeightCm: 180, maxHeightCm: 190 },
];

export const sizeCharts: Record<BikeCategory, BikeSize[]> = {
  road: roadSizes,
  aero: roadSizes,
  endurance: roadSizes,
  gravel: gravelSizes,
  triathlon: triathlonSizes,
};

export const frameColors: FrameColor[] = [
  { name: "Stealth Black", hex: "#1a1a1a", priceDelta: 0 },
  { name: "Carbon Red", hex: "#c8102e", priceDelta: 0 },
  { name: "Glacier White", hex: "#e8e8e8", priceDelta: 150 },
  { name: "Custom Paint", hex: "#6366f1", priceDelta: 450 },
];

export const groupsetOptions: GroupsetOption[] = [
  { name: "Shimano Dura-Ace Di2", priceDelta: 0 },
  { name: "Shimano Ultegra Di2", priceDelta: -400 },
  { name: "SRAM Red AXS", priceDelta: 300 },
  { name: "SRAM Force AXS", priceDelta: -200 },
];

export function recommendSize(
  category: BikeCategory,
  heightCm: number
): BikeSize | null {
  const chart = sizeCharts[category];
  if (!chart.length || !heightCm) return null;

  const exact = chart.find(
    (s) => heightCm >= s.minHeightCm && heightCm <= s.maxHeightCm
  );
  if (exact) return exact;

  // Nearest size by midpoint distance
  return chart.reduce((best, s) => {
    const mid = (s.minHeightCm + s.maxHeightCm) / 2;
    const bestMid = (best.minHeightCm + best.maxHeightCm) / 2;
    return Math.abs(heightCm - mid) < Math.abs(heightCm - bestMid) ? s : best;
  });
}
