import React from 'react';
import { motion } from 'framer-motion';
import { Flame, TrendingUp, Dumbbell, Activity, Zap, UserCheck, Trophy, Apple, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Flame className="w-7 h-7 text-red-600" />,
      title: 'Weight Loss',
      desc: 'High-intensity interval training (HIIT) and customized fat-burning protocols designed to shed pounds rapidly while preserving lean muscle.',
      tag: 'Fat Shredding'
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-amber-600" />,
      title: 'Weight Gain',
      desc: 'Scientific progressive overload and surplus calorie strategies tailored for hardgainers to pack on dense, clean muscle mass.',
      tag: 'Hypertrophy'
    },
    {
      icon: <Dumbbell className="w-7 h-7 text-red-600" />,
      title: 'Strength Training',
      desc: 'Master the big three compound lifts (squat, bench, deadlift) with calibrated weights and champion powerlifting guidance.',
      tag: 'Pure Power'
    },
    {
      icon: <Activity className="w-7 h-7 text-amber-600" />,
      title: 'Cardio & Endurance',
      desc: 'Modern motorized treadmills, spin bikes, and cross-trainers optimized for cardiovascular stamina and metabolic conditioning.',
      tag: 'Stamina Boost'
    },
    {
      icon: <Zap className="w-7 h-7 text-red-600" />,
      title: 'CrossFit & Functional',
      desc: 'High-energy agility drills, kettlebell work, and plyometrics engineered for total athletic performance and everyday stamina.',
      tag: 'Agility & Speed'
    },
    {
      icon: <UserCheck className="w-7 h-7 text-amber-600" />,
      title: 'Personal Training',
      desc: 'Exclusive 1-on-1 coaching sessions with dedicated form monitoring, daily motivation, and custom progress tracking.',
      tag: '1-on-1 VIP'
    },
    {
      icon: <Trophy className="w-7 h-7 text-red-600" />,
      title: 'Body Building',
      desc: 'Precision aesthetic sculpting and stage preparation led by 4-Time Mr. Tamil Nadu and South Indian champions.',
      tag: 'Stage Prep'
    },
    {
      icon: <Apple className="w-7 h-7 text-amber-600" />,
      title: 'Nutrition Guidance',
      desc: 'Customized macronutrient breakdown, Indian diet adaptations, and supplement advice tailored to your body type.',
      tag: 'Diet Mastery'
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest mb-4">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Premium Fitness <span className="text-red-gradient">Programs</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Whether your goal is rapid fat loss, elite muscle gain, or athletic conditioning, Club 96 provides specialized coaching guaranteed to deliver results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full -z-10 group-hover:from-red-50 group-hover:to-amber-50 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-red-100/70 flex items-center justify-center transition-colors shadow-inner">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-slate-100 group-hover:bg-red-600 group-hover:text-white text-slate-600 rounded-full transition-colors">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit'] group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="#plans"
                  className="inline-flex items-center text-xs font-bold text-slate-700 group-hover:text-red-600 transition-colors"
                >
                  <span>Start This Program</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
              Not sure which program suits your body?
            </h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Get a free fitness assessment and body composition analysis from our certified head trainers today.
            </p>
          </div>
          <a
            href="https://wa.me/919962224307?text=Hi%20Club%2096%2C%20I%20would%20like%20a%20free%20fitness%20assessment%20and%20program%20recommendation!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-2xl shadow-lg transition-transform hover:scale-105 whitespace-nowrap text-base"
          >
            Claim Free Assessment
          </a>
        </div>

      </div>
    </section>
  );
}
