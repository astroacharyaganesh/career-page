import React, { useState } from 'react';
import { CONSULTATION_PLANS } from '../data/careerAstrologyData';
import { ConsultationTier } from '../types';
import {
  Calendar,
  FileSpreadsheet,
  Cpu,
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star
} from 'lucide-react';

interface ConsultationProcessProps {
  onOpenBooking: (tier?: ConsultationTier) => void;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = ({ onOpenBooking }) => {
  const [selectedPlanTab, setSelectedPlanTab] = useState<ConsultationTier>('executive');

  const steps = [
    {
      step: '01',
      title: 'Book Consultation',
      subtitle: 'Instant slot reservation',
      description: 'Choose your consultation tier and pick an available calendar slot that suits your timezone.',
      icon: <Calendar className="w-6 h-6 text-amber-300" />,
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Share Birth Details',
      subtitle: 'Encrypted & confidential form',
      description: 'Provide your exact birth date, time, city of birth, current career dilemma, and specific questions.',
      icon: <FileSpreadsheet className="w-6 h-6 text-cyan-400" />,
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Manual Horoscope Audit',
      subtitle: 'D1 & D10 preparation',
      description: 'Acharya Ganesh personally spends 45–60 mins computing your planetary coordinates and divisional charts.',
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Personalized 1-on-1 Session',
      subtitle: 'Live call + Custom Blueprint',
      description: 'Join the live 45-min Zoom call to receive your roadmap, remedies, HD recording, and 25-page PDF report.',
      icon: <Video className="w-6 h-6 text-emerald-400" />,
      tag: 'Step 4'
    }
  ];

  return (
    <section id="consultation-process" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE 4-STEP PROTOCOL</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Seamless 4-Step Consultation Process: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              From Booking to Lifetime Clarity
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A frictionless, high-trust experience designed for busy professionals.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Timeline */}
        <div className="relative mb-20">
          {/* Connected horizontal glowing progress line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-10 h-1 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={s.step}
                id={`consult-step-${s.step}`}
                className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] group-hover:border-amber-400/40 group-hover:bg-amber-500/10 flex items-center justify-center transition-all">
                      {s.icon}
                    </div>
                    <span className="text-2xl font-mono-code font-black text-slate-500 group-hover:text-amber-300 transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-amber-300">
                      {s.tag}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors mt-0.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-violet-300 font-medium mt-0.5">
                      {s.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono-code text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guaranteed within 24–48 hours</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Consultation Packages Section */}
        <div id="pricing-plans" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Select Your Consultation Format
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Transparent, flat-rate pricing. No hidden fees or automated upsells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSULTATION_PLANS.map((plan) => {
              const isPopular = plan.popular;

              return (
                <div
                  key={plan.id}
                  id={`pricing-card-${plan.id}`}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-gradient-to-b from-slate-900/95 via-violet-950/40 to-slate-900/95 border-2 border-amber-400/80 shadow-2xl shadow-violet-950/60 scale-[1.02]'
                      : 'bg-slate-900/50 hover:bg-slate-900/80 border border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  {/* Top Popular Ribbon */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 shadow-md whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h4 className="font-display text-xl font-bold text-white">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-mono-code font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 line-through font-mono-code">
                        {plan.originalPrice}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono-code font-semibold ml-auto">
                        Flat Fee
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="font-mono-code text-slate-400">Duration:</span>
                        <span className="font-semibold text-white">{plan.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="font-mono-code text-slate-400">Format:</span>
                        <span className="font-medium text-amber-200">{plan.format}</span>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] uppercase font-mono-code font-bold text-slate-400">
                        Included In Consultation:
                      </p>
                      <ul className="space-y-2">
                        {plan.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-tight">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <button
                      id={`plan-book-btn-${plan.id}`}
                      onClick={() => onOpenBooking(plan.id)}
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 text-slate-950 shadow-lg shadow-amber-500/25 hover:scale-[1.02]'
                          : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Select This Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 mt-2 font-mono-code">
                      Ideal for: {plan.idealFor}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
