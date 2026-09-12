import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, Check } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Government Office Event',
    eventDate: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide at least your Name and Phone Number.");
      return;
    }

    const textMessage = `Hello Aaradhya Events & Planner,%0A%0AI would like to enquire about an event.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'Not Provided')}%0A*Event Type:* ${encodeURIComponent(formData.eventType)}%0A*Event Date:* ${encodeURIComponent(formData.eventDate || 'Not Fixed Yet')}%0A*Event Location:* ${encodeURIComponent(formData.location || 'Not Specified')}%0A*Message:* ${encodeURIComponent(formData.message || 'Kindly share availability and details.')}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${textMessage}`, '_blank');
      setSubmitted(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight">
                Let's Plan Your Next Event
              </h2>
              <div className="gold-ornament w-20 mb-6" />
              <p className="text-sm text-charcoal/75 leading-relaxed font-light mb-8">
                Connect with our team to arrange cultural programs, dance troupes, drama artists, or complete event coordination for your upcoming official function.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-charcoal">Location</h4>
                    <p className="text-xs sm:text-sm text-charcoal/70 mt-0.5">
                      {BUSINESS_CONFIG.name} <br />
                      {BUSINESS_CONFIG.location.city}, District {BUSINESS_CONFIG.location.district}, {BUSINESS_CONFIG.location.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-charcoal">Phone Contact</h4>
                    <a href={BUSINESS_CONFIG.callUrl} className="text-xs sm:text-sm text-primary font-semibold hover:underline block mt-0.5">
                      {BUSINESS_CONFIG.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-gold shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-charcoal">WhatsApp Direct</h4>
                    <a 
                      href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20I%20have%20an%20event%20query.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-primary font-semibold hover:underline block mt-0.5"
                    >
                      +91 {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-charcoal/10 flex flex-wrap gap-4 mt-8">
              <a
                href={BUSINESS_CONFIG.callUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-cream font-medium text-xs tracking-wider uppercase hover:bg-primary-dark transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                Call Now
              </a>
              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=Hello%20Aaradhya%20Events%2C%20we%20want%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gold text-primary-dark font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: WhatsApp-Powered Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-charcoal/10 shadow-lg">
              <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                Send Event Enquiry
              </h3>
              <p className="text-xs text-charcoal/60 mb-6 font-light">
                Submitting this form immediately opens your WhatsApp with all your event details filled in.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Officer / Coordinator Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="office@department.gov.in"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm bg-white focus:outline-none focus:border-gold"
                    >
                      <option value="Government Office Event">Government Office Event</option>
                      <option value="Cultural Program">Cultural Program</option>
                      <option value="Dance Troupe Performance">Dance Troupe Performance</option>
                      <option value="Drama / Nukkad Natak">Drama / Nukkad Natak</option>
                      <option value="Singing / Musical Act">Singing / Musical Act</option>
                      <option value="Annual Day / Institutional">Annual Day / Institutional</option>
                      <option value="Other Official Function">Other Official Function</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Tentative Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                      Event Location / City
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Itarsi / Narmadapuram"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                    Specific Requirements / Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Briefly describe what kind of performance or stage support you need..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded border border-charcoal/20 text-sm focus:outline-none focus:border-gold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-primary text-gold font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all duration-200 shadow-md"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}