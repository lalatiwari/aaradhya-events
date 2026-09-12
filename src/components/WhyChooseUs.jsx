import React from 'react';
import { 
  CheckCircle2, ShieldCheck, Users, Sparkles, Sliders, MapPin 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Professional Event Coordination",
      desc: "Organized planning, disciplined timelines, and coordinated backstage operations to prevent delays.",
      icon: CheckCircle2
    },
    {
      title: "Government Event Focus",
      desc: "Clear understanding of departmental dignity, ceremonial protocols, and administrative requirements.",
      icon: ShieldCheck
    },
    {
      title: "Talented Performance Teams",
      desc: "Experienced dance, drama, and vocal artists ready to perform with high discipline and cultural dignity.",
      icon: Users
    },
    {
      title: "Complete Cultural Entertainment",
      desc: "One coordinated destination for stage acts, anchor hosts, street plays, and traditional folk showcases.",
      icon: Sparkles
    },
    {
      title: "Flexible Event Requirements",
      desc: "Ability to adapt performance duration, team size, and acts to match your specific agenda and stage format.",
      icon: Sliders
    },
    {
      title: "Local Event Support",
      desc: "Centrally stationed in Itarsi, Narmadapuram, ensuring quick availability and dependable local coordination.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Why Aaradhya
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Why Choose Aaradhya?
          </h2>
          <div className="gold-ornament w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-lg border border-charcoal/10 shadow-sm">
                <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-charcoal mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}