import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Government Events", href: "#government-events" },
    { name: "Performances", href: "#performances" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-gold/30' 
          : 'bg-primary-dark/80 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-primary text-gold font-serif font-bold text-xl group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                AARADHYA
              </span>
              <span className="block text-[10px] tracking-widest text-gold uppercase -mt-1 font-medium">
                Events & Planner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-cream/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.callUrl}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider text-cream border border-gold/40 hover:bg-gold hover:text-primary-dark transition-all duration-200"
              aria-label="Call Aaradhya Events"
            >
              <Phone className="w-3.5 h-3.5 text-gold hover:text-primary-dark" />
              Call Now
            </a>
            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%20%26%20Planner%2C%20I%20would%20like%20to%20enquire%20about%20event%20management%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider bg-gold text-primary-dark hover:bg-gold-light transition-all duration-200 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream hover:text-gold p-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-b border-gold/30 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-cream hover:text-gold text-base py-1 px-2 rounded hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gold/20 flex flex-col gap-2">
            <a
              href={BUSINESS_CONFIG.callUrl}
              className="flex items-center justify-center gap-2 py-2.5 rounded text-sm font-semibold uppercase tracking-wider text-cream border border-gold/40 hover:bg-gold hover:text-primary-dark"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call {BUSINESS_CONFIG.phone}
            </a>
            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20I%20would%20like%20to%20enquire%20about%20an%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded text-sm font-semibold uppercase tracking-wider bg-gold text-primary-dark hover:bg-gold-light"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}