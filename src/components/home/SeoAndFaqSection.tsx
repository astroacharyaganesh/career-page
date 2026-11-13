import React from 'react';
import { SEO_EDITORIAL_SECTION, HOME_FAQS } from '../../data/homePageData';

export const SeoAndFaqSection: React.FC = () => {
  return (
    <>
      {/* Editorial SEO Content Section */}
      <section
        id="best-astrologer-india"
        className="w-full bg-transparent py-12 sm:py-16 lg:py-20"
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
          <div className="space-y-5 text-base leading-7 text-foreground">
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              {SEO_EDITORIAL_SECTION.heading}
            </h2>
            {SEO_EDITORIAL_SECTION.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/95 leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (2-Column Grid matching acharyaganesh.com) */}
      <section id="home-faqs" className="w-full bg-transparent py-12 sm:py-16">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-section-title sm:text-4xl lg:text-5xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full opacity-20 mx-auto" />
          </div>

          <div className="mx-auto grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {HOME_FAQS.map((item) => (
              <div key={item.question} className="space-y-2">
                <h3 className="font-semibold text-base text-heading">
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
