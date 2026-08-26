import React, { useState } from 'react';
import { TRANSFORMATION_STORIES } from '../data/careerAstrologyData';
import {
  Star,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';

interface TestimonialsStoriesProps {
  onOpenBooking: () => void;
}

export const TestimonialsStories: React.FC<TestimonialsStoriesProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeStory = TRANSFORMATION_STORIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATION_STORIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRANSFORMATION_STORIES.length) % TRANSFORMATION_STORIES.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0B1020]/90">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300 font-mono-code">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>REAL TRANSFORMATION STORIES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Before → Consultation → After: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-emerald-300">
              Verified Executive Success Proof
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We don’t do generic testimonials. Each case study below maps the client’s initial career stagnation, the specific astrological insight uncovered, and the real-world milestone achieved.
          </p>
        </div>

        {/* Featured Case Study Hero Showcase */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-900/95 via-[#0B1020] to-slate-900/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl">
          
          {/* Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            
            {/* Client Profile */}
            <div className="flex items-center gap-4">
              <img
                src={activeStory.avatar}
                alt={activeStory.clientName}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400/40 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {activeStory.clientName}
                  </h3>
                  {activeStory.googleReviewBadge && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Google Verified Review
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {activeStory.role} • <span className="text-amber-300">{activeStory.companyCategory}</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  {activeStory.location}
                </p>
              </div>
            </div>

            {/* Rating and Result Timeline Tag */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <div className="px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-mono-code font-bold text-amber-300">
                ⚡ {activeStory.timeframe}
              </div>
            </div>

          </div>

          {/* 3-Column Progression: BEFORE -> CONSULTATION -> AFTER */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
            
            {/* 1. Before State */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-rose-400">
                    01 • Before State
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-rose-500/10 text-rose-300">
                    {activeStory.beforeState.stagnationPeriod}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  {activeStory.beforeState.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStory.beforeState.pain}
                </p>
              </div>
            </div>

            {/* 2. Consultation Insight */}
            <div className="p-6 rounded-2xl bg-violet-950/30 border border-violet-500/30 space-y-3 flex flex-col justify-between shadow-lg shadow-violet-950/30">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-violet-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    02 • The Consultation Insight
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Planetary Diagnosis & Action Plan
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStory.consultationInsight.analysis}
                </p>
              </div>

              {/* Identified Planetary Coordinates */}
              <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {activeStory.consultationInsight.planetsIdentified.map((p, idx) => (
                  <span key={idx} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-violet-500/20 text-violet-200 border border-violet-500/30">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. After Outcome */}
            <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-emerald-400">
                    03 • The Transformation
                  </span>
                  <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                    {activeStory.afterOutcome.ctcJump}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  {activeStory.afterOutcome.outcomeTitle}
                </h4>
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  {activeStory.afterOutcome.verdict}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono-code text-emerald-300 font-semibold">
                Elevated to: {activeStory.afterOutcome.newRole}
              </div>
            </div>

          </div>

          {/* Carousel Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
            
            {/* Story Switcher Tabs */}
            <div className="flex items-center gap-2">
              {TRANSFORMATION_STORIES.map((st, idx) => (
                <button
                  key={st.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-amber-400 to-emerald-400'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to transformation story ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Transformation Story"
                className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Transformation Story"
                className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Callout action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Write Your Own Career Transformation Story</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
