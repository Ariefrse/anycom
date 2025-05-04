"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ServiceProvider } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProviderCardProps {
  provider: ServiceProvider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMessage = () => {
    toast(`Message sent to ${provider.name}`, {
      description: "A representative will contact you shortly.",
      action: {
        label: "Dismiss",
        onClick: () => {},
      },
    });
  };
  
  const handleIncorporate = () => {
    toast.success(`Starting incorporation process with ${provider.name}`, {
      description: "You'll be guided through the next steps.",
    });
  };
  
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl bg-gray-50 border border-gray-200 overflow-hidden transition-all duration-300",
        isHovered ? "shadow-lg" : "shadow-sm"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 flex flex-col space-y-2">
        {/* Logo */}
        <div className="w-full h-60 relative flex items-center justify-center bg-white">
          <Image 
            src={provider.logo} 
            alt={provider.name}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Header with name and rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-[15px] text-gray-900">{provider.name}</h3>
          <div className="flex items-center gap-1">
            <span className="font-medium text-[15px]">{provider.rating}</span>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
        
        {/* Description */}
        <p className="text-[13px] text-gray-700 leading-snug min-h-[40px]">{provider.description}</p>
        
        {/* Completion time */}
        <div className="text-xs text-gray-500">
          Complete in {provider.completionTime} working days
        </div>
        
        {/* Price and clients */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-medium text-[15px]">RM</span>
            <span className="font-medium text-[15px]">{provider.price.toLocaleString()}</span>
          </div>
          <div className="text-xs text-gray-500">
            ({provider.ratingCount.toLocaleString()} clients)
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="mt-auto flex">
        <Button 
          variant="ghost" 
          className="flex-1 rounded-none h-9 text-xs bg-gray-50 hover:bg-gray-100 text-gray-700"
          onClick={handleMessage}
        >
          Message
        </Button>
        <Button 
          className="flex-1 rounded-none h-9 text-xs bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
          onClick={handleIncorporate}
        >
          Incorporate
        </Button>
      </div>
    </div>
  );
}