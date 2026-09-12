import React from 'react';
import { Sparkles, Music, Theater, Users2, Flag } from 'lucide-react';

export default function Performances() {
  const performanceCategories = [
    {
      title: "Dance Performances",
      desc: "Classical choreography, state folk traditions, and synchronised theme-based stage showcases.",
      icon: Users2
    },
    {
      title: "Drama & Theater",
      desc: "Historical narratives, value-based scripts, and social impact drama tailored for stage presentation.",
      icon: Theater
    },
    {
      title: "Nukkad Natak",
      desc: "Dynamic street plays structured to create immediate citizen engagement and departmental message delivery.",
      icon: Sparkles
    },
    {
      title: "Singing & Musical Acts",
      desc: "Vocal and instrumental melodies including patriotic anthems, devotional hymns, and regional folk.",
      icon: Music
    },
    {
      title: "Patriotic & National Day Acts",
      desc: "Curated acts specifically composed for Independence Day, Republic Day, and Foundation Day.",
      icon: Flag
    },
    {
      title: "Theme-Based Special Acts",
      desc: "Customised performances developed around the specific theme, campaign, or message of your event.",
      icon: Sparkles
    }
  ];

  return (
    <section id="performances" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Stage Entertainment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Entertainment That Brings the Stage Alive
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-base text-charcoal/70 font-light">
            Bring your event to life with engaging performances from our artist and cultural teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceCategories.map((perf, idx) => {
            const Icon = perf.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-lg border border-charcoal/10 hover:border-gold/70 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-charcoal mb-2">
                  {perf.title}
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed font-light">
                  {perf.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}