import React from 'react';
import { eventHighlightsData } from '../data/events';
import { Sparkles } from 'lucide-react';

export default function EventHighlights() {
  return (
    <section className="py-20 bg-white border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Performance Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Event Highlights
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-sm text-charcoal/70 font-light">
            Examples of event formats and cultural stage executions delivered by our teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventHighlightsData.map((event) => (
            <div
              key={event.id}
              className="p-6 rounded-lg bg-cream/40 border border-charcoal/10 hover:border-gold transition-all"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3 text-gold" />
                {event.category}
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal mb-2">
                {event.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                {event.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}