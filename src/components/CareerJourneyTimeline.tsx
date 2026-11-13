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
  CheckCircle2
} from 'lucide-react';

interface CareerJourneyTimelineProps {
  onOpenBooking: () => void;
}

export const CareerJourneyTimeline: React.FC<CareerJourneyTimelineProps> = ({
  onOpenBooking
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2);

  const stages = CAREER_JOURNEY_STAGES;
  const currentStage = stages[activeStageIndex] || stages[0];

  const stageIcons = [
    <Compass key="0" className="w-5 h-5 text-amber-300" />,
    <AlertTriangle key="1" className="w-5 h-5 text-rose-400" />,
    <TrendingUp key="2" className="w-5 h-5 text-emerald-400" />,
    <Award key="3" className="w-5 h-5 text-violet-400" />,
    <Crown key="4" className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="journey-timeline" className="py-16 sm:py-20 relative overflow-hidden bg-[#070A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE 5-STAGE TRANSFORMATION TIMELINE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Astrological Career Trajectory
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 relative">
            <div className="absolute top-8 bottom-8 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-amber-400 via-violet-500 to-indigo-400 rounded-full" />

            <div className="space-y-6">
              {stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative pl-16 sm:pl-20 cursor-pointer group transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div
                      className={`absolute left-0 sm:left-2 top-0.5 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-lg ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-400/20 via-violet-600/40 to-slate-900 border-amber-400 text-amber-300'
                          : 'bg-slate-900/90 border-white/[0.12] text-slate-400'
                      }`}
                    >
                      {stageIcons[idx % stageIcons.length]}
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl border bg-slate-900/40 border-white/[0.08]">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {stage.stageName}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                        {stage.challenge}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020] border border-violet-400/30 space-y-5">
              <h3 className="font-display text-2xl font-bold text-white">
                {currentStage.stageName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentStage.astroInsight}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>{currentStage.breakthrough}</span>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Clear Stage {currentStage.step} Obstacles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
