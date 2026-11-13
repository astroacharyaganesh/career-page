import React from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';

interface AboutClientStoriesSectionProps {
  data: AboutPageCmsData['testimonials'];
  youtubeUrl: string;
}

export const AboutClientStoriesSection: React.FC<AboutClientStoriesSectionProps> = ({
  data,
  youtubeUrl
}) => {
  return (
    <section
      id="client-stories"
      aria-labelledby="client-stories-heading"
      className="py-12 sm:py-16 bg-[#1A0C06] text-stone-200 relative overflow-hidden border-b border-amber-950/50"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fcd34d 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2
            id="client-stories-heading"
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 tracking-tight leading-[1.2]"
          >
            {data.heading}
          </h2>
          <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.stories.map((story, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-[#261208]/95 border border-amber-800/40 p-6 sm:p-7 flex flex-col justify-between shadow-lg space-y-5"
            >
              <div className="space-y-3.5">
                <span className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
                  {story.category}
                </span>

                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-amber-50 leading-snug">
                  {story.person}
                </h3>

                <p className="text-xs sm:text-sm text-amber-100/85 leading-relaxed">
                  {story.story}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-800/40">
                <p className="text-xs sm:text-sm font-medium italic text-amber-200 leading-relaxed">
                  {story.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-amber-100/90 font-medium flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span className="text-amber-300 font-semibold">{data.ratingPrefix}</span>
            <span className="text-amber-500/60">·</span>
            <a
              href="https://www.google.com/search?q=Acharya+Ganesh+Indirapuram+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-amber-400/50 underline-offset-4 hover:text-amber-300 transition-colors"
            >
              {data.verifiedReviewsLabel}
            </a>
            <span className="text-amber-500/60">·</span>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-amber-400/50 underline-offset-4 hover:text-amber-300 transition-colors"
            >
              {data.videoReviewsLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
