"use client";

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { companyTypes, regions } from '@/lib/data';
import { FilterOptions } from '@/lib/types';
import { useProviderStore } from '@/lib/store';

interface SearchFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const { filters } = useProviderStore();

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-background rounded-xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
        <div className="space-y-1 p-2">
          <label className="text-xs font-medium text-muted-foreground">Company Type</label>
          <Select
            value={filters.companyType}
            onValueChange={(value) => handleFilterChange('companyType', value)}
          >
            <SelectTrigger className="w-full text-sm">
              <SelectValue placeholder="Select company type" />
            </SelectTrigger>
            <SelectContent>
              {companyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 p-2">
          <label className="text-xs font-medium text-muted-foreground">Region</label>
          <Select
            value={filters.region}
            onValueChange={(value) => handleFilterChange('region', value)}
          >
            <SelectTrigger className="w-full text-sm">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 p-2">
          <label className="text-xs font-medium text-muted-foreground">Date of completion</label>
          <Select
            value={filters.completionDate}
            onValueChange={(value) => handleFilterChange('completionDate', value)}
          >
            <SelectTrigger className="w-full text-sm">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">Within 3 Days</SelectItem>
              <SelectItem value="7">Within 7 Days</SelectItem>
              <SelectItem value="14">Within 14 Days</SelectItem>
              <SelectItem value="30">Within 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-2 flex items-end">
          <Button className="w-full gap-2" size="default">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}