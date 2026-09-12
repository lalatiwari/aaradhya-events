import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20I%20would%20like%20to%20enquire%20about%20event%20management.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-emerald-700 transition-all duration-200 border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <a
        href={BUSINESS_CONFIG.callUrl}
        aria-label="Call Aaradhya Events"
        className="w-12 h-12 rounded-full bg-primary text-gold flex items-center justify-center shadow-lg hover:scale-110 hover:bg-primary-dark transition-all duration-200 border border-gold/40"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}