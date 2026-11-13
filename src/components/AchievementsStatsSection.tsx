import React from 'react';
import { Award, Calendar, Star, Tv, Users } from 'lucide-react';
import { AchievementStatItem } from '../data/aboutPageData';

interface AchievementsStatsSectionProps {
  heading: string;
  intro: string;
  stats: AchievementStatItem[];
}

export const AchievementsStatsSection: React.FC<AchievementsStatsSectionProps> = ({
  heading,
  intro,
  stats
}) => {
  const getStatIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-amber-300" />;
      case 1:
        return <Calendar className="w-5 h-5 text-amber-300" />;
      case 2:
        return <Tv className="w-5 h-5 text-amber-300" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-300" />;
      default:
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
    }
  };

  return (
    <section
      id="achievements-in-numbers"
      aria-labelledby="achievements-heading"
      className="py-12 sm:py-16 bg-[#1B0C06] text-stone-200 relative overflow-hidden border-b border-amber-950/50"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fcd34d 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2
            id="achievements-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 tracking-tight leading-[1.2]"
          >
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 5 Exact Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#261208]/95 border border-amber-800/40 p-6 flex flex-col justify-between shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                {getStatIcon(idx)}
              </div>

              <div>
                <div className="font-serif-display text-3xl sm:text-4xl font-bold text-amber-300 tabular-nums tracking-tight">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm font-medium text-amber-50/90 mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
