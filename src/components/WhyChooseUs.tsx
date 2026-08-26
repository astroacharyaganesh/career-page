import React from 'react';
import {
  Award,
  Users,
  Shield,
  Briefcase,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking?: (tier?: any) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Get Expert Vedic Career Analysis'
    },
    {
      icon: Users,
      title: 'Personalized Horoscope-Based Guidance'
    },
    {
      icon: Shield,
      title: 'Practical Direction Instead of Generic Answers'
    },
    {
      icon: Briefcase,
      title: 'Experience Across Different Career Situations'
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 lg:py-20 bg-[#F4EBE0] text-stone-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block matching the screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">WHY CHOOSE OUR CAREER ASTROLOGY SERVICES?</span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            Why Choose Our Career Astrology Services?
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
            Personalized Vedic insights and practical roadmaps formulated from your birth chart by Acharya Ganesh.
          </p>

        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-start min-h-[160px]"
              >
                {/* Icon in Rounded Box */}
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] mb-4">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif-display text-lg sm:text-[19px] font-bold text-[#23120A] leading-snug">
                  {pillar.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
