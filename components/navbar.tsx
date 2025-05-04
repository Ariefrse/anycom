"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search, Bell, CircleUser, Menu, X } from 'lucide-react';

const navItems = [
  { 
    label: 'Manage company', 
    href: '#', 
    dropdown: true,
    items: ['Company Dashboard', 'Annual Returns', 'Corporate Compliance', 'Update Information']
  },
  { 
    label: 'Company Secretary', 
    href: '#', 
    dropdown: true,
    items: ['Find Secretary', 'Secretary Services', 'Compliance Calendar', 'Legal Requirements']
  },
  { 
    label: 'Incorporate Company', 
    href: '#', 
    dropdown: true,
    items: ['New Registration', 'Company Types', 'Requirements', 'Fee Structure']
  },
  { 
    label: 'Sign Documents', 
    href: '#', 
    dropdown: true,
    items: ['E-Signature', 'Document Templates', 'Verification', 'Audit Trail']
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="AnyComp Logo"
                width={58}
                height={58}
                className="m-2 mr-4 "
              />
            </Link>
            {/* Desktop Navigation - moved next to logo */}
            <div className="hidden md:flex items-center space-x-2 ml-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-1 px-3"
                    onClick={() => item.dropdown && toggleDropdown(item.label)}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </Button>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute left-0 mt-1 w-48 bg-background rounded-md shadow-lg py-1 z-10 border border-border">
                      {item.items.map((subItem) => (
                        <Link 
                          key={subItem}
                          href="#" 
                          className="block px-4 py-2 text-sm hover:bg-muted"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex  space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="rounded-full overflow-hidden border border-muted">
                <CircleUser className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-between w-full px-3"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform", 
                      activeDropdown === item.label ? "rotate-180" : ""
                    )} />
                  )}
                </Button>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.items.map((subItem) => (
                      <Link 
                        key={subItem}
                        href="#" 
                        className="block px-3 py-2 text-sm rounded-md hover:bg-muted"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center justify-around py-2 mt-4 border-t border-border">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <CircleUser className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}