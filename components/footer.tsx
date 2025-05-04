import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AnyComp</h3>
            <p className="text-muted-foreground mb-4">
              Making company incorporation simple and accessible for entrepreneurs across Malaysia.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Our Team</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Company Registration</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Company Secretary</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accounting & Tax</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Business Advisory</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@anycomp.com</span>
              </p>
              <p className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+603 1234 5678</span>
              </p>
            </div>
            <div className="mt-4">
              <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}