import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Activity, Flame, ArrowRight, RefreshCw } from 'lucide-react';

export default function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.375); // Lightly active
  const [goal, setGoal] = useState('loss');

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight (Needs Muscle Gain)';
    bmiColor = 'text-amber-600 bg-amber-50 border-amber-200';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight (Fat Loss Recommended)';
    bmiColor = 'text-orange-600 bg-orange-50 border-orange-200';
  } else if (bmi >= 30) {
    bmiCategory = 'Obese (Intensive HIIT Recommended)';
    bmiColor = 'text-red-600 bg-red-50 border-red-200';
  }

  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr = gender === 'male' ? bmr + 5 : bmr - 161;

  let maintenanceCalories = Math.round(bmr * activity);
  let targetCalories = maintenanceCalories;
  if (goal === 'loss') targetCalories -= 500;
  if (goal === 'gain') targetCalories += 400;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Fitness Tool</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Calculate Your <span className="text-red-gradient">BMI & Calories</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enter your body metrics below to receive instant scientific feedback and recommended calorie goals.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Gender</label>
                <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'male' ? 'bg-red-600 text-white shadow' : 'text-slate-600'}`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'female' ? 'bg-red-600 text-white shadow' : 'text-slate-600'}`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Age ({age} yrs)</label>
                <input
                  type="range"
                  min="14"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-red-600 mt-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Height ({height} cm)</label>
                <input
                  type="range"
                  min="130"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-red-600 mt-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Weight ({weight} kg)</label>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-red-600 mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Activity Level</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm focus:ring-2 focus:ring-red-600 focus:outline-none"
                >
                  <option value={1.2}>Sedentary (Desk Job, No Exercise)</option>
                  <option value={1.375}>Lightly Active (Workout 1-3 days/wk)</option>
                  <option value={1.55}>Moderately Active (Workout 3-5 days/wk)</option>
                  <option value={1.725}>Very Active (Intense Workout 6-7 days/wk)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Primary Fitness Goal</label>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setGoal('loss')}
                    className={`py-2 px-1 text-[11px] font-bold rounded-lg transition-all ${goal === 'loss' ? 'bg-red-600 text-white shadow' : 'text-slate-600'}`}
                  >
                    Fat Loss
                  </button>
                  <button
                    onClick={() => setGoal('maintain')}
                    className={`py-2 px-1 text-[11px] font-bold rounded-lg transition-all ${goal === 'maintain' ? 'bg-red-600 text-white shadow' : 'text-slate-600'}`}
                  >
                    Maintain
                  </button>
                  <button
                    onClick={() => setGoal('gain')}
                    className={`py-2 px-1 text-[11px] font-bold rounded-lg transition-all ${goal === 'gain' ? 'bg-amber-600 text-white shadow' : 'text-slate-600'}`}
                  >
                    Muscle Gain
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-red-950 p-8 sm:p-12 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                <span>Your Real-Time Results</span>
                <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>

              {/* BMI Score Display */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-xs text-slate-300 font-semibold uppercase">Body Mass Index (BMI)</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-4xl sm:text-5xl font-black font-['Outfit'] text-amber-400">{bmi}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${bmiColor}`}>
                    {bmiCategory}
                  </span>
                </div>
              </div>

              {/* Calories Target */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-4">
                <div className="text-xs text-slate-300 font-semibold uppercase flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-500" /> Daily Target Calories
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black font-['Outfit'] text-white">{targetCalories}</span>
                  <span className="text-sm font-semibold text-slate-300">kcal / day</span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Based on your {goal === 'loss' ? '500 kcal deficit' : goal === 'gain' ? '400 kcal surplus' : 'maintenance level'}.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/919962224307?text=Hi%20Club%2096%20Fitness!%20My%20BMI%20is%20${bmi}%20(${bmiCategory})%20and%20my%20target%20calories%20are%20${targetCalories}%20kcal/day.%20I%20want%20to%20achieve%20my%20fitness%20goals!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <span>Send Results to Coach on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
