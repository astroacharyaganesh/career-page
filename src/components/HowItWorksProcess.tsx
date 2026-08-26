import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/careerAstrologyData';
import {
  Binary,
  LayoutGrid,
  Cpu,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const HowItWorksProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to D1 & D10

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-5 h-5 text-amber-300" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>THE 5-TIER VEDIC ANALYTICAL ENGINE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Career Astrology Works: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              Astronomical Mathematics Meets Human Potential
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We don’t rely on vague generalizations. We run multi-dimensional calculations combining Lahiri Ephemeris, D1 Rasi foundational matrix, and the D10 Dashamsha career microscope.
          </p>
        </div>

        {/* Connected Horizontal / Grid Process Pipeline */}
        <div className="relative">
          
          {/* Desktop Connected Glowing Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-12 h-1 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  id={`how-it-works-step-${step.number}`}
                  onClick={() => setActiveStep(idx)}
                  className={`group rounded-3xl p-6 cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-900/95 via-violet-950/40 to-[#0B1020] border-amber-400/60 shadow-2xl shadow-violet-950/60 scale-[1.03]'
                      : 'bg-slate-900/50 hover:bg-slate-900/80 border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Step Number & Node Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/30'
                            : 'bg-white/[0.04] border-white/[0.1] text-slate-400 group-hover:border-violet-400/40'
                        }`}
                      >
                        {getStepIcon(step.icon)}
                      </div>
                      <span className="text-xl font-mono-code font-black text-slate-400 group-hover:text-amber-300 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono-code mt-1">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-1.5">
                    <div className="text-[10px] font-mono-code text-violet-300 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      {step.techAspect}
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {step.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive D1 vs D10 Explainer Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0B1020]/95 to-slate-900/90 border border-white/[0.1] shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono-code font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                THE SECRET OF D10 DASHAMSHA
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Why 95% of Astrologers Fail at Career Predictions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most astrologers look exclusively at the D1 birth chart. However, Vedic Maharishis designed the <strong>D10 Dashamsha divisional harmonic</strong> specifically to unpack managerial hierarchy, corporate promotions, and business ventures.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold text-slate-400">D1 RASI CHART</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono-code">General Life Map</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    Overall physical constitution & longevity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    Broad financial inclination & family wealth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    General tendency towards work vs business
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-violet-950/30 border border-amber-500/30 space-y-2 shadow-lg shadow-violet-950/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold text-amber-300">D10 DASHAMSHA (CAREER MATRIX)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 font-mono-code font-bold">Surgical Career Precision</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Exact executive authority rank & peer respect
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Exact month of promotion & salary appraisal jump
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Startup viability & co-founder synergy
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
