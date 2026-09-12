import React from 'react';

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Understand Your Event",
      desc: "We discuss the nature of the event, department protocols, venue requirements, audience expectations, and scheduling."
    },
    {
      num: "02",
      title: "Plan & Coordinate",
      desc: "Our team designs the stage flow, acts sequence, lighting & sound requirements, and backup protocols."
    },
    {
      num: "03",
      title: "Arrange Artists & Performances",
      desc: "We assemble the dance troupes, singers, drama artists, and anchors aligned specifically with the event's cultural theme."
    },
    {
      num: "04",
      title: "Deliver a Memorable Event",
      desc: "On-site backstage coordination, stage discipline, and cue management to guarantee a prestigious, dignified execution."
    }
  ];

  return (
    <section className="py-24 bg-cream border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Execution Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            How We Work
          </h2>
          <div className="gold-ornament w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-lg border border-charcoal/10 relative shadow-sm hover:border-gold transition-colors"
            >
              <div className="text-4xl font-serif font-bold text-gold/40 mb-3">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-base text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}