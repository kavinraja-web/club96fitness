import React from 'react';
import { motion } from 'framer-motion';
import { Users, Dumbbell, HeartHandshake, Target, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Professional Trainers',
      desc: 'Certified fitness experts and champion bodybuilders providing 1-on-1 coaching, form correction, and dedicated motivation every step of the way.',
      badge: 'Certified Experts'
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-amber-600" />,
      title: 'Modern Equipment',
      desc: 'Biomechanically precision-engineered machines, heavy-duty free weights, and cardio gear designed for maximum muscle engagement and joint safety.',
      badge: 'Imported Gear'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-red-600" />,
      title: 'Friendly Environment',
      desc: 'A positive, supportive, and hygienic atmosphere where beginners, women, and seasoned athletes all feel respected, energized, and inspired to succeed.',
      badge: 'Supportive Community'
    },
    {
      icon: <Target className="w-8 h-8 text-amber-600" />,
      title: 'Personalized Guidance',
      desc: 'Tailored nutrition plans, weight management roadmaps, and custom workout splits scientifically crafted for your exact metabolism and physique goals.',
      badge: '100% Results Oriented'
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest">
              <span>About Club 96 Fitness</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Kovilpatti's Most <span className="text-red-gradient">Prestigious</span> Fitness Destination
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              At <strong className="text-slate-900">Club 96 Fitness</strong>, we believe fitness is not just a routine—it is a lifestyle transformation. Founded with a passion for excellence, our gym combines luxury aesthetics, elite coaching, and unbeatable member support.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Spacious, fully air-conditioned & sanitized workout floor</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Specialized weight loss & competition prep programs</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Award-winning lineage: 4x Mr. Tamil Nadu Champions</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-red-600" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Trusted Quality</div>
                  <div className="text-base font-extrabold text-slate-900">1000+ Active Transformations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:border-red-300 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 group-hover:bg-red-50 transition-colors shadow-inner">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 group-hover:bg-amber-100 group-hover:text-amber-800 text-slate-600 rounded-full transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit'] group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>Club 96 Guarantee</span>
                  <span>&rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
