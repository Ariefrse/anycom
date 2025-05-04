import { create } from 'zustand';
import { ServiceProvider, FilterOptions, SortOption } from '@/lib/types';
import { serviceProviders } from '@/lib/data';

interface ProviderStore {
  providers: ServiceProvider[];
  filters: FilterOptions;
  sortOption: SortOption;
  setFilters: (filters: FilterOptions) => void;
  setSortOption: (option: SortOption) => void;
  getFilteredProviders: () => ServiceProvider[];
}

export const useProviderStore = create<ProviderStore>((set, get) => ({
  providers: serviceProviders,
  filters: {
    companyType: 'Private Limited (SDN BHD)',
    region: 'Peninsular Malaysia (Mainland)',
    completionDate: '7'
  },
  sortOption: 'ratings',
  
  setFilters: (filters) => set({ filters }),
  setSortOption: (sortOption) => set({ sortOption }),
  
  getFilteredProviders: () => {
    const { providers, filters, sortOption } = get();
    
    let filteredProviders = [...providers];
    
    // Apply filtering
    if (filters.completionDate) {
      const maxDays = parseInt(filters.completionDate);
      filteredProviders = filteredProviders.filter(
        provider => provider.completionTime <= maxDays
      );
    }
    
    // Apply sorting
    filteredProviders.sort((a, b) => {
      switch (sortOption) {
        case 'ratings':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'completionTime':
          return a.completionTime - b.completionTime;
        default:
          return 0;
      }
    });
    
    return filteredProviders;
  }
}));