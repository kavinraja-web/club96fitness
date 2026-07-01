import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Crown, Sparkles, X, Send } from 'lucide-react';

export default function PlansSection() {
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹999',
      duration: '/ 1 Month',
      popular: false,
      savings: 'Standard Rate',
      desc: 'Ideal for getting started and testing your fitness dedication.',
      features: [
        'Full Gym & Strength Arena Access',
        'Cardio & Conditioning Floor',
        'General Trainer Guidance',
        'Locker & Shower Access',
        'Free Fitness Assessment',
      ],
      ctaText: 'Join For 1 Month',
    },
    {
      name: '3 Months Plan',
      price: '₹2,599',
      duration: '/ 3 Months',
      popular: false,
      savings: 'Save ₹398',
      desc: 'Great value for short-term transformation goals.',
      features: [
        'Everything in Monthly Plan',
        'Customized Workout Split Chart',
        'Basic Diet & Diet Chart',
        'Monthly Body Composition Check',
        'Weekend Group HIIT Sessions',
      ],
      ctaText: 'Join For 3 Months',
    },
    {
      name: '6 Months Plan',
      price: '₹3,999',
      duration: '/ 6 Months',
      popular: true,
      savings: 'Save ₹1,995 (Most Popular)',
      desc: 'The ultimate sweet spot for serious visible body transformation.',
      features: [
        'Everything in 3 Months Plan',
        'Personalized Macro Nutrition Plan',
        'Dedicated Progress Tracking by Trainers',
        'Priority Support & Form Check',
      ],
      ctaText: 'Join Most Popular Plan',
    },
    {
      name: '1 Year VIP Plan',
      price: '₹7,999',
      duration: '/ 12 + 3 Months Free!',
      popular: false,
      savings: '🎁 +3 Months FREE (Best Value)',
      desc: 'Unbeatable annual rate for year-round fitness — pay for 12 months, get 15 months total access!',
      features: [
        '🔥 +3 MONTHS EXTRA FREE (15 Months Total)',
        'Everything in 6 Months Plan',
        'VIP Year-Round Access',
        'Competition Prep Guidelines',
        'Direct WhatsApp Support with Head Trainer',
      ],
      ctaText: 'Claim 1 Year + 3 Months Free',
    },
  ];

  const handleWhatsAppJoin = (e) => {
    e.preventDefault();
    if (!selectedPlanModal) return;

    const message = encodeURIComponent(
      `Hi Club 96 Fitness Team!\n\nI want to enroll in the *${selectedPlanModal.name}* (${selectedPlanModal.price}).\n\n*My Details:*\nName: ${name || 'Prospective Member'}\nPhone: ${phone || 'Not provided'}\n\nPlease let me know the joining process and gym timings.`
    );
    window.open(`https://wa.me/919962224307?text=${message}`, '_blank');
    setSelectedPlanModal(null);
  };

  return (
    <section id="plans" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Invest in Your <span className="text-red-gradient">Health</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            No hidden fees. Premium equipment, expert trainers, and an inspiring environment at Kovilpatti's most competitive membership rates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-red-950 text-white shadow-2xl scale-105 border-2 border-amber-400 ring-4 ring-amber-400/20 z-10'
                  : 'bg-slate-50 text-slate-800 border border-slate-200/80 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className={`text-sm font-extrabold font-['Outfit'] uppercase tracking-wider ${plan.popular ? 'text-amber-400' : 'text-red-600'}`}>
                    {plan.name}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${plan.popular ? 'bg-amber-400/20 text-amber-300' : 'bg-red-100 text-red-700'}`}>
                    {plan.savings}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className={`text-4xl sm:text-5xl font-black font-['Outfit'] ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.duration}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.desc}
                </p>

                <div className={`border-t pt-6 space-y-3.5 ${plan.popular ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-amber-400' : 'text-slate-400'}`}>
                    Included Benefits:
                  </div>
                  {plan.features.map((feat, i) => {
                    const isFreeOffer = feat.includes('FREE');
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${isFreeOffer ? 'bg-emerald-500 text-white animate-pulse' : plan.popular ? 'bg-amber-400 text-slate-950' : 'bg-red-100 text-red-600'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={`${isFreeOffer ? 'text-red-600 font-extrabold bg-red-50 px-2 py-0.5 rounded-md border border-red-200 shadow-sm' : plan.popular ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium'}`}>
                          {feat}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setSelectedPlanModal(plan)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-amber-500/30 hover:bg-amber-400'
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/25'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 font-medium">
          🔒 Special discounts available for students, couples, and annual group registrations. Visit the gym directly in Kovilpatti or call us to inquire.
        </div>

      </div>

      {/* Instant WhatsApp Enrollment Modal */}
      <AnimatePresence>
        {selectedPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlanModal(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-200"
            >
              <button
                onClick={() => setSelectedPlanModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Instant Enrollment</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                {selectedPlanModal.name} ({selectedPlanModal.price})
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Fill out your details below and we will open WhatsApp with your customized joining request!
              </p>

              <form onSubmit={handleWhatsAppJoin} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kavin Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-slate-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-slate-900 font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Proceed to WhatsApp</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
