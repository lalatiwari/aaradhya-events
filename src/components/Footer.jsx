import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-cream border-t border-gold/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center bg-primary text-gold font-serif font-bold text-lg">
                A
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                AARADHYA
              </span>
            </div>
            <p className="font-serif italic text-gold text-sm mb-3">
              "Creating Moments. Delivering Experiences."
            </p>
            <p className="text-xs text-cream/75 max-w-sm leading-relaxed font-light mb-4">
              Specialized in professional event management, government office functions, and cultural entertainment in Itarsi, Narmadapuram, and Madhya Pradesh.
            </p>
            <p className="text-xs text-gold/90 font-medium">
              Phone: {BUSINESS_CONFIG.phoneFormatted}
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-sm text-gold uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-cream/80 font-light">
              <a href="#hero" className="hover:text-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#government-events" className="hover:text-gold transition-colors">Government Events</a>
              <a href="#performances" className="hover:text-gold transition-colors">Performances</a>
              <a href="#gallery" className="hover:text-gold transition-colors">Photo Gallery</a>
              <a href="#videos" className="hover:text-gold transition-colors">Video Gallery</a>
              <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-sm text-gold uppercase tracking-wider mb-4">
              Service Region
            </h4>
            <p className="text-xs text-cream/80 leading-relaxed font-light mb-2">
              Headquarters: <br />
              Itarsi, District Narmadapuram, Madhya Pradesh.
            </p>
            <p className="text-xs text-cream/60">
              Coverage: Itarsi, Narmadapuram, Bhopal & surrounding Madhya Pradesh regions.
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60 font-light">
          <p>© 2026 Aaradhya Events & Planner. All Rights Reserved.</p>
          <p className="text-gold/80 font-medium">Professional Indian Cultural Event Management</p>
        </div>

      </div>
    </footer>
  );
}