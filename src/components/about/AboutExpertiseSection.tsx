import React from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface AboutExpertiseSectionProps {
  data: AboutPageCmsData['expertise'];
}

export const AboutExpertiseSection: React.FC<AboutExpertiseSectionProps> = ({ data }) => {
  const secondaryIcons = [Compass, ShieldCheck];

  return (
    <section
      id="experience-and-expertise"
      aria-labelledby="expertise-heading"
      className="py-12 sm:py-16 bg-[#FAF6F0] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2
            id="expertise-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.2]"
          >
            {data.heading}
          </h2>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* 12-Col Grid: Featured Card (7 cols) + 2 Discipline Cards Stacked (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Card: Vedic astrology */}
          <div className="lg:col-span-7 rounded-2xl bg-[#3A180B] border border-amber-600/40 p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-2xl sm:text-[26px] font-bold text-amber-50">
                  {data.featuredCard.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                {data.featuredCard.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-500/20">
              {data.featuredCard.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#261006] border border-amber-500/30 text-xs font-medium text-amber-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Vastu & Astro-Vastu + Spiritual guidance */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {data.cards.map((card, idx) => {
              const Icon = secondaryIcons[idx % secondaryIcons.length];
              return (
                <div
                  key={idx}
                  className="flex-1 rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-7 shadow-sm flex flex-col justify-center space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#23120A]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
