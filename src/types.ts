export interface LaptopSpecs {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  display: string;
}

export type UseCaseType = 'coding' | 'gaming' | 'editing' | 'college';
export type PortabilityPreference = 'high' | 'medium' | 'low';
export type BatteryPreference = 'long' | 'average' | 'any';

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  useCases: UseCaseType[];
  batteryLife: number; // in hours
  weight: number; // in lbs
  portability: PortabilityPreference;
  specs: LaptopSpecs;
  imageUrl: string;
  description: string;
  buyUrl: string;
  pros: string[];
  cons: string[];
}

export interface QuizState {
  budget: number;
  useCase: UseCaseType;
  batteryPreference: BatteryPreference;
  portabilityPreference: PortabilityPreference;
}
