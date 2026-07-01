import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Gym</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With <span className="text-red-gradient">Club 96</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Have questions about memberships or personal training? Drop by our gym in Kovilpatti or message us on WhatsApp anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Consultation</h4>
                  <a href="tel:+919962224307" className="text-lg font-extrabold text-slate-900 hover:text-red-600 transition-colors block mt-0.5">
                    +91 99622 24307
                  </a>
                  <span className="text-xs text-slate-500">Call us for quick fee breakdown & slots</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Instant WhatsApp Chat</h4>
                  <a
                    href="https://wa.me/919962224307?text=Hi%20Club%2096%20Fitness!%20I%20would%20like%20to%20know%20more%20about%20your%20gym%20timings%20and%20plans."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors block mt-0.5"
                  >
                    Chat With Head Trainer &rarr;
                  </a>
                  <span className="text-xs text-slate-500">Fast replies typically within 10 minutes</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location Address</h4>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5 leading-snug">
                    Club 96 Fitness Center
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Manthithoppu Rd, Annai Theresa Nagar, <br />
                    Pandavarmangalam, Kovilpatti, TN 628501
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    Monday – Saturday: <span className="text-red-600">5:00 AM – 9:30 PM</span>
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    Sunday: <span className="text-slate-600">6:00 AM – 12:00 PM</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl shadow-md font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity text-sm"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram Feed</span>
              </a>

              <a
                href="https://wa.me/919962224307"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md font-bold flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col min-h-[450px]">
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 mb-4">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Club 96 • Manthithoppu Rd, Kovilpatti</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://share.google/WTp2VMFLf9bexnaWb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full transition-colors"
                >
                  📍 Get Directions
                </a>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full hidden sm:inline-block">
                  Open Daily
                </span>
              </div>
            </div>

            {/* Embedded Google Map iframe centered on exact address */}
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-slate-200 min-h-[400px]">
              <iframe
                title="Club 96 Fitness Real Location in Kovilpatti"
                src="https://www.google.com/maps?q=Manthithoppu+Rd,+Annai+Theresa+Nagar,+Kovilpatti,+Pandavarmangalam,+Tamil+Nadu+628501&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
