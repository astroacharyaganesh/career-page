import React, { useState } from 'react';
import { Youtube } from 'lucide-react';
import {
  FEATURED_YOUTUBE_VIDEO,
  RECOMMENDED_YOUTUBE_VIDEOS,
  YouTubeVideoItem
} from '../../data/homePageData';

export const YouTubeInsightsSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideoItem>(FEATURED_YOUTUBE_VIDEO);
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(false);

  const topicLabels = [
    'Career astrology',
    'Relationship guidance',
    'Wealth astrology',
    'Vedic wisdom'
  ];

  const handleSelectRecommended = (video: YouTubeVideoItem) => {
    setSelectedVideo(video);
    setIsPlayingEmbed(true);
    const el = document.getElementById('featured-youtube-stage');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="astrology-insights"
      className="w-full bg-muted py-14 sm:py-16 lg:py-20"
      aria-labelledby="youtube-section-heading"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-gradient-to-br from-card via-background to-muted px-5 py-8 shadow-[0_24px_60px_rgb(93_46_10_/_0.06)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-secondary/35 blur-3xl"
            aria-hidden="true"
          />

          {/* Top 2-Column Featured Stage */}
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 xl:gap-16">
            {/* Left Copy */}
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-[0.8125rem]">
                Astrology Insights &amp; Guidance
              </p>
              <h2
                id="youtube-section-heading"
                className="mt-3 font-display text-[1.75rem] font-bold leading-[1.15] text-heading sm:mt-4 sm:text-4xl lg:text-[2.375rem]"
              >
                Learn From Expert Astrology Guidance
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
                Watch expert astrology videos on relationships, career, wealth, Vedic wisdom, and practical life guidance from Acharya Ganesh.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                Explore trusted astrology insights designed to help you make better decisions in life, relationships, finances, and personal growth — all guided by expert knowledge and practical remedies.
              </p>

              <p className="mt-5 text-xs font-medium text-muted-foreground flex flex-wrap items-center gap-x-2.5 gap-y-1">
                {topicLabels.map((topic, idx) => (
                  <React.Fragment key={topic}>
                    {idx > 0 && <span aria-hidden="true">·</span>}
                    <span>{topic}</span>
                  </React.Fragment>
                ))}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.youtube.com/@acharyaganeshchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 hover:shadow-lg"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Visit YouTube Channel</span>
                </a>

                <a
                  href="https://www.youtube.com/@acharyaganeshchannel/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-heading/15 bg-background/90 px-6 py-3 text-sm font-semibold text-heading transition hover:border-primary/35 hover:text-primary"
                >
                  Watch Latest Videos
                </a>
              </div>
            </div>

            {/* Right Featured Video Player */}
            <div id="featured-youtube-stage" className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Featured · {selectedVideo.category}
              </p>
              <div className="group relative aspect-video overflow-hidden rounded-2xl bg-heading shadow-[0_20px_50px_rgb(93_46_10_/_0.12)] ring-1 ring-border/80">
                {isPlayingEmbed ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                    title={selectedVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlayingEmbed(true)}
                    aria-label={`Play ${selectedVideo.title}`}
                    className="relative h-full w-full block cursor-pointer text-left"
                  >
                    <img
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative grid place-items-center rounded-full bg-secondary/95 text-heading shadow-[0_18px_45px_rgb(93_46_10_/_0.28)] ring-8 ring-white/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent h-16 w-16 sm:h-20 sm:w-20">
                        <span className="h-0 w-0 border-y-transparent border-l-current ml-1 border-y-[11px] border-l-[18px] sm:border-y-[13px] sm:border-l-[22px]" />
                      </span>
                    </span>
                    <span className="absolute bottom-4 left-4 right-4 text-sm sm:text-base font-semibold text-white line-clamp-2">
                      {selectedVideo.title}
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-heading line-clamp-1">{selectedVideo.title}</span>
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline shrink-0"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Strip: Recommended for You */}
          <div className="relative mt-12 pt-10 border-t border-border/80">
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-heading">
                  Recommended for You
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Curated astrology videos on career, relationships, wealth, and horoscope insights — tap to watch without leaving the page.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RECOMMENDED_YOUTUBE_VIDEOS.slice(1).map((video) => (
                <article key={video.id} className="group flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleSelectRecommended(video)}
                    aria-label={`Play video: ${video.title}`}
                    className="relative aspect-video w-full overflow-hidden rounded-xl bg-heading text-left shadow-sm ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-primary/25 cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/10 to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative grid place-items-center rounded-full bg-secondary/95 text-heading shadow-[0_18px_45px_rgb(93_46_10_/_0.28)] ring-6 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent h-12 w-12">
                        <span className="h-0 w-0 border-y-transparent border-l-current ml-0.5 border-y-[8px] border-l-[13px]" />
                      </span>
                    </span>
                  </button>

                  <div className="mt-2.5 flex flex-col gap-1 px-0.5">
                    <h4 className="font-sans text-sm font-bold text-heading line-clamp-2">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        {video.title}
                      </a>
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {video.category} · Acharya Ganesh
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
