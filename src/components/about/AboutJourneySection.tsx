import React from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';

interface AboutJourneySectionProps {
  data: AboutPageCmsData['journey'];
}

export const AboutJourneySection: React.FC<AboutJourneySectionProps> = ({ data }) => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-12 sm:py-16 bg-[#FAF7F2] text-stone-800 relative overflow-hidden border-y border-stone-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <h2
            id="journey-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.22]"
          >
            {data.heading}
          </h2>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Vertical Timeline of 5 Exact Items */}
        <div className="relative pl-6 sm:pl-14 space-y-5 sm:space-y-6">
          <div className="absolute left-[23px] sm:left-[33px] top-6 bottom-6 w-[2px] bg-[#D4BA9F]" />

          {data.items.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#F5ECE1] border-2 border-[#C69C72] text-[#6B2E13] flex items-center justify-center shadow-2xs -ml-6">
                <span className="font-serif-display text-sm font-bold tabular-nums">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex-1 rounded-2xl bg-white border border-[#E8DACB] p-5 sm:p-6 shadow-2xs">
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#23120A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Pull-Quote */}
        <blockquote className="mt-10 sm:mt-12 rounded-2xl bg-[#3A180B] border border-amber-600/40 p-6 sm:p-8 text-center shadow-lg">
          <p className="font-serif-display text-xl sm:text-2xl italic text-amber-50 leading-relaxed">
            {data.pullQuote}
          </p>
        </blockquote>
      </div>
    </section>
  );
};
