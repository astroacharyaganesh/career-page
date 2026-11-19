import React from 'react';
import { SEO_EDITORIAL_SECTION, HOME_FAQS } from '../../data/homePageData';
import { SacredDividerOrnament, SacredMandalaAccent } from '../SacredMandalaAccent';

export const SeoAndFaqSection: React.FC = () => {
  return (
    <>
      {/* Temple Maroon & Ivory Sacred Editorial Chronicle */}
      <section
        id="best-astrologer-india"
        className="w-full bg-[#f9f3e7] py-12 sm:py-16"
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
          <div className="rounded-3xl border border-[#cfa458] bg-[#fffdf9] overflow-hidden shadow-xs">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#4a0d14] via-[#6e121b] to-[#3c080d] px-6 sm:px-10 py-6 border-b border-[#cfa458]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 text-[#fae091] opacity-15"
              >
                <SacredMandalaAccent className="w-[240px] h-[240px]" />
              </div>
              <div className="relative z-10 flex flex-wrap items-center gap-3">
                <SacredDividerOrnament className="w-6 h-6 text-[#fae091] shrink-0" />
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#fae091]">
                    Sacred Lineage &amp; Practice
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#fffcf4] sm:text-3xl lg:text-4xl">
                    {SEO_EDITORIAL_SECTION.heading}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 text-[15.5px] leading-[1.78] text-[#281d14]">
              {SEO_EDITORIAL_SECTION.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="rounded-xl border border-[#eedbb7] bg-gradient-to-br from-[#fffcf7] to-[#faf2e3] p-5"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Botanical Emerald & Ivory Card Grid) */}
      <section
        id="home-faqs"
        className="w-full bg-gradient-to-b from-[#edf6f1] via-[#f4faf6] to-[#f9f3e7] border-t border-[#c4e0d3] py-12 sm:py-16"
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <SacredDividerOrnament className="w-5 h-5 text-[#0e4d3b]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0e4d3b]">
                Essential Answers
              </span>
              <SacredDividerOrnament className="w-5 h-5 text-[#0e4d3b]" />
            </div>
            <h2 className="font-display font-bold text-section-title sm:text-4xl lg:text-5xl text-[#0c3f30] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-[#2d5748] mx-auto">
              Clear guidance on our consultations, Astro Vastu assessments, and authentic Jyotish courses.
            </p>
          </div>

          <div className="mx-auto grid gap-5 sm:grid-cols-2">
            {HOME_FAQS.map((item, idx) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[#b5d6c7] bg-[#fffdf9] p-5 sm:p-6 shadow-2xs hover:border-[#2d8064] hover:shadow-sm transition-all space-y-2"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0e4d3b] font-serif-display text-xs font-bold text-[#fae091] tabular-nums mt-0.5"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif-display font-bold text-base sm:text-lg text-[#0e3f30]">
                    {item.question}
                  </h3>
                </div>
                <p className="pl-10 text-sm leading-relaxed text-[#33463f]">
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
