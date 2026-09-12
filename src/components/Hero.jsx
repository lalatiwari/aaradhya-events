import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 bg-primary-dark overflow-hidden">
      {/* Background Media: Video with Fallback to High-Res Image */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero.jpg"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity filter contrast-125"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/hero.jpg"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80";
            }}
            alt="Aaradhya Events Stage Coordination"
            className="w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-primary-dark/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        
        {/* Category Line */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-xs sm:text-sm font-medium tracking-wide mb-6">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Government Events • Cultural Programs • Artist Management</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-[1.2] mb-6 max-w-4xl mx-auto">
          Creating Memorable Events, <br className="hidden sm:inline" />
          <span className="text-gold italic font-normal">Bringing Every Performance to Life.</span>
        </h1>

        {/* Supporting Headline */}
        <p className="text-base sm:text-lg lg:text-xl text-cream/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          {BUSINESS_CONFIG.subtitle}
        </p>

        {/* Location Tag */}
        <p className="text-xs sm:text-sm tracking-widest text-gold font-medium uppercase mb-8">
          {BUSINESS_CONFIG.location.serviceAreaText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-gold text-primary-dark font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition duration-200 shadow-lg hover:shadow-gold/20"
          >
            Plan Your Event
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_CONFIG.callUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-gold/50 text-cream font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition duration-200"
          >
            <Phone className="w-4 h-4 text-gold" />
            Call {BUSINESS_CONFIG.phone}
          </a>
          <a
            href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20we%20want%20to%20discuss%20an%20upcoming%20event.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-primary border border-gold/30 text-cream font-medium text-sm tracking-wider uppercase hover:bg-primary-light transition duration-200"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}