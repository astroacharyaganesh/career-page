import React from 'react';
import { CAREER_PROBLEMS } from '../data/careerAstrologyData';
import {
  TrendingDown,
  DollarSign,
  Compass,
  Award,
  Briefcase,
  RefreshCw,
  ShieldAlert,
  Globe,
  Sparkles,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface ProblemsSectionProps {
  onOpenBooking: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenBooking }) => {
  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-rose-400" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-violet-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="problems" className="py-24 relative overflow-hidden bg-[#0B1020]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-semibold text-rose-300 font-mono-code">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>EXECUTIVE PAIN POINT DIAGNOSIS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Are Unaligned Planetary Transits <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-amber-400">
              Sabotaging Your Professional Growth?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Hard work without cosmic timing creates friction. We diagnose the astrological root cause in your birth chart and engineer non-dogmatic remedies to unlock exponential momentum.
          </p>
        </div>

        {/* 8 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              id={`problem-card-${prob.id}`}
              className="group relative rounded-3xl p-6 bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/40 hover:bg-slate-800/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.1] group-hover:border-amber-400/50 group-hover:bg-amber-500/10 flex items-center justify-center transition-colors">
                    {getProblemIcon(prob.iconName)}
                  </div>
                  <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {prob.frequency}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {prob.shortDesc}
                  </p>
                </div>

                {/* Astrological Root Cause Box */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono-code text-rose-300 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                    Vedic Planetary Trigger
                  </div>
                  <p className="text-[11px] text-slate-300 font-mono-code">
                    {prob.astrologicalRoot}
                  </p>
                </div>

                {/* Solution Outcome */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono-code text-emerald-400 font-bold uppercase tracking-wider">
                    Astrological Solution:
                  </div>
                  <p className="text-xs text-slate-200">
                    {prob.solutionOutcome}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300 transition-colors">
                <span className="text-[11px] font-mono-code text-violet-300">{prob.d10Impact}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-amber-950/30 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Facing multiple challenges simultaneously?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              One comprehensive 45-minute Executive Session isolates the exact dasha timeline to clear all hurdles.
            </p>
          </div>

          <button
            id="problems-solve-now-btn"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Resolve Career Bottlenecks</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
