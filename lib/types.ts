export interface ServiceProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  ratingCount: number;
  description: string;
  price: number;
  currency: string;
  completionTime: number;
  completionTimeUnit: 'hours' | 'days';
  features?: string[];
}

export interface FilterOptions {
  companyType: string;
  region: string;
  completionDate: string;
}

export type SortOption = 'ratings' | 'price' | 'completionTime';