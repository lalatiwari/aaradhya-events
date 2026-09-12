import React from 'react';
import { Landmark, Sparkles, Users, Theater } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function About() {
  const highlights = [
    { title: "Government Events", icon: Landmark, desc: "Department functions & official protocol adherence." },
    { title: "Cultural Programs", icon: Sparkles, desc: "Aesthetic traditional & modern stage programming." },
    { title: "Artist Teams", icon: Users, desc: "Disciplined in-house & networked performing troupes." },
    { title: "Stage Performances", icon: Theater, desc: "End-to-end choreography, music & theatrical flow." }
  ];

  return (
    <section id="about" className="py-20 bg-cream border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-gold/30 to-primary/20 transform -rotate-1" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-primary-dark">
                <img
                  src="/images/about.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80";
                  }}
                  alt="Aaradhya Events Stage Team Preparation"
                  className="w-full h-96 sm:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-primary-dark/90 backdrop-blur-sm border border-gold/40 p-4 rounded text-cream">
                <p className="font-serif text-sm font-semibold text-gold tracking-wide">
                  Based in {BUSINESS_CONFIG.location.displayText}
                </p>
                <p className="text-xs text-cream/80 mt-0.5">
                  Serving Government offices, institutions & organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Our Identity
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              About Aaradhya Events & Planner
            </h2>
            
            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed font-light">
              <p>
                Aaradhya Events & Planner is an event management and cultural entertainment team based in Itarsi, Madhya Pradesh. We specialize in organizing professional events, especially Government office functions, official programs and cultural events.
              </p>
              <p>
                From event planning and coordination to stage performances, dance, drama, music and artist management, our team helps bring every event together with professionalism, creativity and attention to detail.
              </p>
            </div>

            {/* Visual Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-lg bg-white border border-gold/20 shadow-sm hover:border-gold/60 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-cream text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-charcoal text-sm">{item.title}</h4>
                        <p className="text-xs text-charcoal/70 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}