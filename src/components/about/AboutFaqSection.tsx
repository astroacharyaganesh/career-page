import React, { useState } from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';
import { ChevronDown } from 'lucide-react';

interface AboutFaqSectionProps {
  data: AboutPageCmsData['faqs'];
}

export const AboutFaqSection: React.FC<AboutFaqSectionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="about-faq"
      aria-labelledby="about-faq-heading"
      className="py-12 sm:py-16 bg-[#FAF6F0] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            id="about-faq-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.2]"
          >
            {data.heading}
          </h2>
        </div>

        <div className="space-y-3.5">
          {data.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E8DACB] overflow-hidden shadow-2xs"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FCF9F5] transition-colors"
                  >
                    <span className="font-serif-display text-base sm:text-lg font-bold text-[#23120A]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B2E13] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#F2E8DC]">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
