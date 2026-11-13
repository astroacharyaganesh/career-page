import React from 'react';
import { AtAGlanceFact } from '../../data/aboutPageData';
import { User, Compass, MapPin, Globe } from 'lucide-react';

interface AboutAtAGlanceSectionProps {
  facts: AtAGlanceFact[];
}

export const AboutAtAGlanceSection: React.FC<AboutAtAGlanceSectionProps> = ({ facts }) => {
  const icons = [User, Compass, MapPin, Globe];

  return (
    <section
      id="at-a-glance"
      aria-label="At a Glance"
      className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8"
    >
      <div className="rounded-2xl bg-white border border-[#E6D5C3] shadow-xl shadow-stone-900/10 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 divide-y sm:divide-y-0 lg:divide-x divide-[#EFE3D5]">
          {facts.map((fact, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className={`flex items-start gap-3.5 ${
                  idx > 0 ? 'pt-3.5 sm:pt-0 lg:pl-5' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 stroke-[1.9]" />
                </div>
                <div className="text-xs sm:text-sm leading-snug">
                  <span className="font-bold text-[#6B2E13]">{fact.label}: </span>
                  <span className="font-semibold text-[#23120A]">{fact.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
