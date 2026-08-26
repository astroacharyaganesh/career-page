import React, { useState } from 'react';
import { CAREER_JOURNEY_STAGES } from '../data/careerAstrologyData';
import {
  Compass,
  AlertTriangle,
  TrendingUp,
  Award,
  Crown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CareerJourneyTimelineProps {
  onOpenBooking: () => void;
}

export const CareerJourneyTimeline: React.FC<CareerJourneyTimelineProps> = ({ onOpenBooking }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2); // default to Job Switch

  const stageIcons = [
    <Compass key="0" className="w-5 h-5 text-amber-300" />,
    <AlertTriangle key="1" className="w-5 h-5 text-rose-400" />,
    <TrendingUp key="2" className="w-5 h-5 text-emerald-400" />,
    <Award key="3" className="w-5 h-5 text-violet-400" />,
    <Crown key="4" className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE 5-STAGE TRANSFORMATION TIMELINE</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Astrological Career Trajectory: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-violet-300">
              From Stagnation to Unstoppable Authority
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            Where are you currently situated on your karmic timeline? Click any stage below to inspect the underlying planetary misalignment and the exact astrological breakthrough required.
          </p>
        </div>

        {/* Timeline Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left / Center: Vertical Connected Timeline */}
          <div className="lg:col-span-7 relative">
            
            {/* Continuous Vertical Glowing Connector Line */}
            <div className="absolute top-8 bottom-8 left-6 sm:left-8 w-[3px] bg-gradient-to-b from-amber-400 via-violet-500 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.5)]" />

            <div className="space-y-6 sm:space-y-8">
              {CAREER_JOURNEY_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <div
                    key={stage.step}
                    id={`timeline-node-${stage.step}`}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative pl-16 sm:pl-20 cursor-pointer group transition-all duration-300 ${
                      isActive ? 'scale-[1.01]' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Node Dot / Icon Marker */}
                    <div
                      className={`absolute left-0 sm:left-2 top-0.5 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-400/20 via-violet-600/40 to-slate-900 border-amber-400 text-amber-300 shadow-amber-500/25 ring-4 ring-amber-400/20 scale-110'
                          : 'bg-slate-900/90 border-white/[0.12] text-slate-400 group-hover:border-violet-400/50 group-hover:bg-slate-800'
                      }`}
                    >
                      {stageIcons[idx]}
                    </div>

                    {/* Stage Card */}
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-slate-900/95 via-violet-950/40 to-slate-900/90 border-amber-400/50 shadow-2xl shadow-violet-950/50'
                          : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/[0.08] hover:border-white/[0.15]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-white/[0.06] text-amber-300 border border-white/[0.08]">
                            STAGE {stage.step}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                            {stage.stageName}
                          </h3>
                        </div>

                        <span className="text-[11px] font-mono-code text-slate-400">
                          {stage.timeframe}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mb-3 font-medium">
                        {stage.subtitle}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {stage.challenge}
                      </p>

                      {/* Mini tags */}
                      <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
                        <span className="text-[11px] text-violet-300 font-mono-code flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Key: {stage.planetaryKey}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Inspector Panel for Selected Stage */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0B1020]/95 to-[#070A14] border border-amber-400/30 shadow-2xl shadow-black/80 backdrop-blur-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-300">
                    Live Planetary Diagnostic
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono-code">
                  Stage {CAREER_JOURNEY_STAGES[activeStageIndex].step} / 05
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-white">
                  {CAREER_JOURNEY_STAGES[activeStageIndex].stageName}
                </h3>
                <p className="text-xs text-amber-200/80 font-medium">
                  {CAREER_JOURNEY_STAGES[activeStageIndex].subtitle}
                </p>
              </div>

              {/* Challenge Box */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 uppercase tracking-wide">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>The Real-World Friction</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {CAREER_JOURNEY_STAGES[activeStageIndex].challenge}
                </p>
              </div>

              {/* Astrological Insight Box */}
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-violet-300 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vedic Root Cause (D1 / D10)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {CAREER_JOURNEY_STAGES[activeStageIndex].astroInsight}
                </p>
              </div>

              {/* The Astrological Breakthrough Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Breakthrough Strategy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {CAREER_JOURNEY_STAGES[activeStageIndex].breakthrough}
                </p>
              </div>

              {/* Action Button */}
              <button
                id="journey-stage-cta-btn"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Clear Stage {CAREER_JOURNEY_STAGES[activeStageIndex].step} Obstacles with Acharya</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
