import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ZODIAC_SIGNS } from '../../data/homePageData';

export const ZodiacCarouselSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const container = trackRef.current;
    if (!container) return;
    const step = 328;
    container.scrollTo({
      left: direction === 'next' ? container.scrollLeft + step : container.scrollLeft - step,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = trackRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / 328);
    setActiveDot(Math.min(ZODIAC_SIGNS.length - 1, Math.max(0, index)));
  };

  return (
    <section id="zodiac-signs" className="w-full bg-muted py-12 sm:py-16">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display font-bold text-section-title sm:text-4xl lg:text-5xl text-heading mb-3">
            Zodiac Signs: Learn The Names And Symbols
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full opacity-20 mx-auto mb-5" />
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base not-italic mx-auto">
            Welcome to a world where the ancient wisdom of the stars illuminates the path to understanding ourselves.
          </p>
        </div>

        <div
          className="relative w-full pb-6 mx-auto max-w-[1280px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Zodiac Signs Carousel"
        >
          <button
            type="button"
            onClick={() => scrollByCard('prev')}
            aria-label="Previous slide"
            className="inline-flex shrink-0 items-center justify-center rounded-full h-10 w-10 sm:h-11 sm:w-11 border border-border bg-card/90 text-heading shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg absolute left-0 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard('next')}
            aria-label="Next slide"
            className="inline-flex shrink-0 items-center justify-center rounded-full h-10 w-10 sm:h-11 sm:w-11 border border-border bg-card/90 text-heading shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg absolute right-0 top-1/2 z-30 translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-7 overflow-x-auto scroll-smooth py-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)'
            }}
          >
            {ZODIAC_SIGNS.map((sign) => (
              <div key={sign.name} className="shrink-0 w-[300px] snap-start">
                <a
                  href={sign.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mx-auto block max-w-[300px] [perspective:1000px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="relative min-h-[400px]">
                    <div className="relative h-full min-h-[400px] w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front Face: Zodiac Artwork */}
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-secondary bg-card shadow-sm transition-[border-color,box-shadow] duration-500 group-hover:border-primary group-hover:shadow-lg [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(0deg)]">
                        <img
                          src={sign.image}
                          alt={sign.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Back Face: Sign Traits */}
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-secondary bg-card shadow-sm transition-[border-color,box-shadow] duration-500 group-hover:border-primary group-hover:shadow-lg [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex [transform:rotateY(180deg)] flex-col items-center justify-center gap-4 px-6 text-center bg-gradient-to-b from-card via-muted to-secondary/35">
                        <div className="h-11 w-11 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-heading">
                          {sign.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-primary/30 rounded-full" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {sign.description}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                          Read {sign.name} Horoscope →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5" aria-label="Zodiac pagination">
            {ZODIAC_SIGNS.map((sign, idx) => (
              <button
                key={sign.name}
                type="button"
                onClick={() => {
                  trackRef.current?.scrollTo({ left: idx * 328, behavior: 'smooth' });
                  setActiveDot(idx);
                }}
                aria-label={`View ${sign.name}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeDot ? 'w-5 bg-primary cc-dot-active' : 'w-2 bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
