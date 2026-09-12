import React from 'react';
import { Users, Music, Theater, Mic2, Radio, Sparkles } from 'lucide-react';

export default function ArtistTeam() {
  const roles = [
    { title: "Dance Team", desc: "Disciplined dancers skilled in folk, classical, and synchronised ensemble formats.", icon: Users },
    { title: "Drama Artists", desc: "Expressive theatrical actors trained for both stage drama and open-air street plays.", icon: Theater },
    { title: "Singers", desc: "Versatile vocal artists delivering patriotic, devotional, and light classical presentations.", icon: Mic2 },
    { title: "Cultural Performers", desc: "Artisans preserving and showcasing authentic regional folk art forms.", icon: Sparkles },
    { title: "Anchors / Hosts", desc: "Articulate bilingual stage emcees experienced in formal government and institutional protocols.", icon: Radio },
    { title: "Special Performance Teams", desc: "Customized ensembles for milestone celebrations and specific departmental themes.", icon: Music }
  ];

  return (
    <section className="py-20 bg-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Performing Troupes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Artist Team
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-base text-charcoal/70 font-light">
            We work with talented artists and performance teams to create engaging cultural programs tailored to the nature and audience of your event.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-cream/30 border border-charcoal/10 hover:border-gold transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded bg-primary text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-charcoal">
                    {role.title}
                  </h3>
                </div>
                <p className="text-xs text-charcoal/75 leading-relaxed font-light">
                  {role.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}