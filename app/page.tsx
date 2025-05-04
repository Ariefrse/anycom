"use client";

import { SearchFilter } from '@/components/search-filter';
import { ProvidersGrid } from '@/components/providers-grid';
import { useProviderStore } from '@/lib/store';

export default function Home() {
  const { filters, setFilters } = useProviderStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="space-y-6">
        <SearchFilter onFilterChange={setFilters} />
        <ProvidersGrid />
      </div>
    </div>
  );
}