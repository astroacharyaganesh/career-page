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
      title: 'Get Expert Vedic Career Analysis',
      description:
        'In-depth evaluation of your D1 Rasi & D10 Dashamsha charts by Acharya Ganesh with 17+ years of Vedic experience.'
    },
    {
      icon: Users,
      title: 'Personalized Horoscope-Based Guidance',
      description:
        'Tailored recommendations formulated specifically from your exact birth time, ascendant, and planetary dasha cycles.'
    },
    {
      icon: Shield,
      title: 'Practical Direction Instead of Generic Answers',
      description:
        'Actionable timing windows, clear professional direction, and realistic Vedic remedies without superstition or fear.'
    },
    {
      icon: Briefcase,
      title: 'Experience Across Different Career Situations',
      description:
        'Over 50,000+ professionals guided across corporate leadership, startups, government exams, and foreign relocation.'
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
                className="rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-start"
              >
                {/* Icon in Rounded Box */}
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] mb-5">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif-display text-lg sm:text-[19px] font-bold text-[#23120A] leading-snug mb-2.5">
                  {pillar.title}
                </h3>

                {/* Concise Card Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
