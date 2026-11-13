import React from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';
import { Target, Eye } from 'lucide-react';

interface AboutVisionMissionSectionProps {
  data: AboutPageCmsData['visionMission'];
}

export const AboutVisionMissionSection: React.FC<AboutVisionMissionSectionProps> = ({ data }) => {
  return (
    <section
      id="vision-and-mission"
      aria-labelledby="vision-mission-heading"
      className="py-12 sm:py-16 bg-[#F4EBE0] text-stone-800 relative overflow-hidden border-b border-[#E7D7C7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2
            id="vision-mission-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.2]"
          >
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
              <Target className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#23120A]">
                {data.missionLabel}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {data.missionText}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
              <Eye className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#23120A]">
                {data.visionLabel}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {data.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
