import React from 'react';
import { Phone, MapPin, MessageCircle, Heart, Trophy, ArrowUp } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/club96logo.jpeg"
                alt="Club 96 Logo"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-red-600"
              />
              <span className="font-black text-2xl tracking-tight font-['Outfit'] text-white">
                CLUB <span className="text-red-600">96</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kovilpatti's most prestigious luxury gym & personal training institute. Stronger every day with modern biomechanical equipment and award-winning trainers.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-400">
              <Trophy className="w-4 h-4" /> 4x Mr. Tamil Nadu Winner Gym
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-400">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home & Arena</a></li>
              <li><a href="#showcase" className="hover:text-red-500 transition-colors">Photo Showcase</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Club 96</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Fitness Programs</a></li>
              <li><a href="#plans" className="hover:text-red-500 transition-colors">Membership Plans</a></li>
              <li><a href="#gallery" className="hover:text-red-500 transition-colors">Member Transformations</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 font-['Outfit']">
              Specialized Coaching
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-400">
              <li className="hover:text-white transition-colors">Weight Loss & Fat Burn</li>
              <li className="hover:text-white transition-colors">Hypertrophy Muscle Gain</li>
              <li className="hover:text-white transition-colors">Competition Stage Preparation</li>
              <li className="hover:text-white transition-colors">1-on-1 VIP Personal Training</li>
              <li className="hover:text-white transition-colors">Women's Specialized Fitness</li>
              <li className="hover:text-white transition-colors">CrossFit & Agility Drills</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-2 font-['Outfit']">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <a href="https://share.google/WTp2VMFLf9bexnaWb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Manthithoppu Rd, Annai Theresa Nagar, Kovilpatti, TN 628501
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+919962224307" className="hover:text-white font-bold">+91 99622 24307</a>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center transition-all shadow"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919962224307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919962224307"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Club 96 Fitness Center, Kovilpatti. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Membership</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
