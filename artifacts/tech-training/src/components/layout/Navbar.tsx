import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Clientele", href: "/clientele" },
    { label: "About Us", href: "/about" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <img src="/sugami-logo.png" alt="SUGAMI Cloud and AI Technologies" className="h-12 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-secondary">SUGAMI</span>
                <span className="text-xs font-medium text-muted-foreground">Cloud and AI Technologies</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <Button>Book Training</Button>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-2">Book Training</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
