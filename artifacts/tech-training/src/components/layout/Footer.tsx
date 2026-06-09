import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-12 md:py-16 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img src="/sugami-logo.png" alt="SUGAMI Cloud and AI Technologies" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
              SUGAMI Cloud and AI Technologies — Empowering Professionals Through Technology Training.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/in/suketu-nayak-604850122/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/clientele" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Clientele</Link></li>
              <li><Link href="/gallery" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">AI Training</Link></li>
              <li><Link href="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Cloud Computing</Link></li>
              <li><Link href="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Data Analytics</Link></li>
              <li><Link href="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Software Dev</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>B2/24 Orchid Heights,<br />Applewood Township, SP Ring Road,<br />Ahmedabad, Gujarat 380058, INDIA</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 992 555 2595</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>suketunayak@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} SUGAMI Cloud and AI Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
