import React from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';
import { ShieldCheck, UserCheck, BookOpen, HeartHandshake } from 'lucide-react';

interface AboutWhyTrustSectionProps {
  data: AboutPageCmsData['whyTrust'];
}

export const AboutWhyTrustSection: React.FC<AboutWhyTrustSectionProps> = ({ data }) => {
  const icons = [ShieldCheck, UserCheck, BookOpen, HeartHandshake];

  return (
    <section
      id="why-trust-acharya-ganesh"
      aria-labelledby="why-trust-heading"
      className="py-12 sm:py-16 bg-[#F4EBE0] text-stone-800 relative overflow-hidden border-b border-[#E7D7C7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2
            id="why-trust-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.2]"
          >
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-8 shadow-sm flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#23120A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
