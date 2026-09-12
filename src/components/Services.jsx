import React from 'react';
import { 
  Landmark, Building2, Sparkles, Users, Theater, Mic2, Award, 
  Presentation, CalendarCheck, Trophy, Flag, ShieldCheck, Building, Briefcase 
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMapping = {
  Landmark,
  Building2,
  Sparkles,
  Users,
  Theater,
  Mic2,
  Award,
  Presentation,
  CalendarCheck,
  Trophy,
  Flag,
  ShieldCheck,
  Building,
  Briefcase
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Comprehensive Management
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-base text-charcoal/70 font-light">
            Professional event management and cultural entertainment tailored to the needs of your event.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMapping[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-lg bg-cream/40 border border-charcoal/5 hover:border-gold/60 hover:bg-cream/90 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-gold transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 flex items-center text-xs font-semibold text-gold-dark tracking-wider uppercase">
                  <span>Professional Handling</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}