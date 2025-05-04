"use client";

import { useProviderStore } from '@/lib/store';
import { ProviderCard } from '@/components/provider-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function ProvidersGrid() {
  const { sortOption, setSortOption, getFilteredProviders } = useProviderStore();
  const providers = getFilteredProviders();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Incorporate new company</h2>
        <p className="text-muted-foreground text-sm">Over 200 Company Secretaries ready to assist you</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm">Sort by:</p>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ratings">Ratings</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="completionTime">Completion Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Filter service providers based on your requirements
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Rating</label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="rounded-full">All</Button>
                      <Button variant="outline" size="sm" className="rounded-full">4+</Button>
                      <Button variant="outline" size="sm" className="rounded-full">4.5+</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="rounded-full">All</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Under RM 1,500</Button>
                      <Button variant="outline" size="sm" className="rounded-full">RM 1,500-2,000</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}