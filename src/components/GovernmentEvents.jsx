import React from 'react';
import { Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function GovernmentEvents() {
  const features = [
    "Official functions & department ceremonies",
    "Patriotic sequences & national day celebrations",
    "Cultural programs and traditional folk acts",
    "Award & felicitation stage protocols",
    "Foundation Day commemorations",
    "Public awareness street plays & Nukkad Natak",
    "Backstage artist discipline & punctual timelines"
  ];

  return (
    <section id="government-events" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C69A45_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-gold/40 shadow-2xl bg-black">
              <img
                src="/images/government-events.jpg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80";
                }}
                alt="Government and Official Event Coordination"
                className="w-full h-80 sm:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-gold text-primary-dark text-xs font-bold uppercase tracking-wider rounded inline-block mb-2">
                  Key Focus Area
                </span>
                <p className="font-serif text-lg font-semibold text-cream">
                  Structured Execution for Official Protocols
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-medium uppercase tracking-widest mb-4">
              <Landmark className="w-3.5 h-3.5" />
              Institutional Protocol
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream leading-tight mb-4">
              Specialized in Government & Official Events
            </h2>
            
            <p className="text-base text-cream/80 leading-relaxed font-light mb-8">
              Professional event coordination for Government departments, offices and institutions. We ensure seamless stage protocols, timely execution, and cultural decorum suited for official assemblies.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-cream/90 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-gold text-primary-dark font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition duration-200"
              >
                Discuss Your Event
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20we%20would%20like%20to%20discuss%20a%20Government%20office%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-gold/40 text-cream font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition duration-200"
              >
                Direct WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}