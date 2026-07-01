import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function TransformationSection() {
  const [activeTab, setActiveTab] = useState('All');

  const transformations = [
    {
      id: 1,
      name: 'Vignesh R.',
      age: '28 yrs',
      duration: '90 Days Program',
      category: 'Weight Loss',
      stats: '-18 KG Fat Loss',
      beforeImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      afterImg: '/assets/club963.jpeg',
      quote: 'Club 96 trainers changed my diet and workout discipline completely. From 94kg down to a lean 76kg in just 3 months!',
    },
    {
      id: 2,
      name: 'Suresh Kumar',
      age: '24 yrs',
      duration: '6 Months Hypertrophy',
      category: 'Muscle Gain',
      stats: '+10 KG Pure Muscle',
      beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
      afterImg: '/assets/club965.jpeg',
      quote: 'Being a hardgainer, I struggled for years until I joined Club 96. The compound lifting split and surplus diet plan gave me broad shoulders and confidence.',
    },
    {
      id: 3,
      name: 'Dr. Karthik S.',
      age: '35 yrs',
      duration: '4 Months Recomp',
      category: 'Weight Loss',
      stats: '-14 KG & Abs Sculpted',
      beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
      afterImg: '/assets/club962.jpeg',
      quote: 'Even with a busy medical practice in Kovilpatti, 45 mins at Club 96 every morning relieved my stress and got me in the best shape of my life.',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real People. Real <span className="text-red-gradient">Transformations</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            See how ordinary residents of Kovilpatti achieved extraordinary physique transformations with Club 96's expert trainers.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="p-6 pb-4 flex items-center justify-between border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit']">{item.name}</h3>
                    <span className="text-xs font-semibold text-slate-500">{item.age} • {item.duration}</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">
                    {item.stats}
                  </span>
                </div>

                {/* Split Image Container */}
                <div className="relative h-72 w-full grid grid-cols-2 overflow-hidden bg-slate-900">
                  
                  {/* Before Panel */}
                  <div className="relative h-full overflow-hidden border-r border-white/20">
                    <img
                      src={item.beforeImg}
                      alt="Before Transformation"
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase tracking-wider">
                      Before
                    </div>
                  </div>

                  {/* After Panel */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.afterImg}
                      alt="After Transformation at Club 96"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase tracking-wider shadow">
                      After
                    </div>
                  </div>

                  {/* VS Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg border-2 border-white z-10">
                    VS
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" /> 100% Verified Member
                </span>
                <span className="text-slate-400">Club 96 Gym</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="#plans"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold rounded-2xl shadow-xl shadow-red-600/25 transition-transform hover:scale-105"
          >
            <span>Start Your Transformation Today</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
