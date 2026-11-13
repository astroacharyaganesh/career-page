import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_COURSES } from '../../data/homePageData';

export const CoursesCarouselSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const container = trackRef.current;
    if (!container) return;
    const step = 340;
    const nextLeft =
      direction === 'next' ? container.scrollLeft + step : container.scrollLeft - step;
    container.scrollTo({ left: nextLeft, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = trackRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / 340);
    setActiveDot(Math.min(HOME_COURSES.length - 1, Math.max(0, index)));
  };

  const scrollToDot = (index: number) => {
    const container = trackRef.current;
    if (!container) return;
    container.scrollTo({ left: index * 340, behavior: 'smooth' });
    setActiveDot(index);
  };

  return (
    <section id="astrology-courses" className="w-full bg-muted pt-6 pb-12 sm:pt-8 sm:pb-16">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display font-bold text-section-title sm:text-4xl lg:text-5xl text-heading mb-3">
            India’s Highly Rated Astrology Courses
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full opacity-20 mx-auto mb-5" />
          <p className="max-w-2xl text-muted-foreground text-body sm:text-lg italic mx-auto">
            Master the ancient wisdom of Astrology with our comprehensive and professionally structured courses.
          </p>
        </div>

        <div className="relative w-full overflow-visible px-0 sm:px-4">
          <div
            className="relative w-full pb-6"
            role="region"
            aria-roledescription="carousel"
            aria-label="Astrology Courses Carousel"
          >
            {/* Prev / Next Navigation Buttons */}
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

            {/* Horizontal Track with Edge Fade Mask */}
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)'
              }}
            >
              {HOME_COURSES.map((course, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[290px] sm:w-[316px] snap-start"
                >
                  <article className="group/card flex h-full w-full flex-col">
                    <div className="relative mx-auto flex w-full flex-1 flex-col">
                      {/* Soft Oval Drop Shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-1 right-4 left-2 h-3 rounded-[50%] bg-foreground/12 blur-md transition-opacity duration-500 group-hover/card:opacity-80"
                      />

                      {/* 3D Sacred Book Cover + Pages Stack */}
                      <div className="relative pr-3.5 pl-2">
                        {/* Right Page Stack */}
                        <div aria-hidden="true" className="absolute top-1.5 right-0 bottom-1.5 z-0 w-[13px]">
                          <div className="absolute inset-0 rounded-r-[5px] bg-gradient-to-l from-secondary via-border to-[#d8c8b4] shadow-[inset_-2px_0_5px_rgb(255_255_255/0.7),inset_1px_0_2px_rgb(0_0_0/0.05)]" />
                          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-l from-[#b8a48f]/35 to-transparent" />
                          <div className="absolute top-3 bottom-3 left-[2px] w-[4px] rounded-[1px] bg-[repeating-linear-gradient(180deg,#fffcf8_0px,#fffcf8_2px,#e8ddd0_2px,#e8ddd0_3px)] shadow-[-1px_0_1px_rgb(0_0_0/0.05)]" />
                        </div>

                        {/* Left Spine Edge */}
                        <div
                          aria-hidden="true"
                          className="absolute top-2 bottom-2 left-0 z-0 w-1.5 rounded-l-[2px] border-r border-primary/25 bg-[repeating-linear-gradient(180deg,#faf6f0_0px,#faf6f0_2px,#e5d9cc_2px,#e5d9cc_3px)]"
                        />

                        {/* Book Cover Anchor */}
                        <a
                          href={course.detailHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/cover relative z-10 flex w-full flex-col overflow-hidden rounded-l-[5px] rounded-r-[2px] border-2 border-primary bg-card shadow-[-3px_5px_0_color-mix(in_srgb,var(--color-primary)_35%,#d4c4b0),5px_8px_20px_rgb(44_37_32/0.14)] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[-3px_6px_0_color-mix(in_srgb,var(--color-primary)_40%,#d4c4b0),7px_14px_28px_rgb(44_37_32/0.18)]"
                        >
                          <div className="aspect-[75/106] group relative min-h-0 flex-1 overflow-hidden bg-muted">
                            <img
                              src={course.image}
                              alt={course.title}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/cover:scale-105"
                            />
                          </div>

                          <div className="mt-auto flex justify-evenly shrink-0 flex-col gap-3 border-t-2 border-primary bg-card px-3.5 py-2 h-[100px]">
                            <h3 className="font-display text-base leading-snug font-semibold text-heading line-clamp-2 transition-colors duration-300 group-hover/cover:text-primary">
                              {course.title}
                            </h3>
                            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                              <span className="font-sans text-base leading-none font-semibold text-heading tabular-nums">
                                {course.price}
                              </span>
                              <span className="font-sans text-xs leading-none text-muted-foreground line-through tabular-nums">
                                {course.originalPrice}
                              </span>
                              <span className="font-sans text-sm leading-none font-bold text-success tabular-nums">
                                {course.discountPercent}% off
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* Buy Now Button */}
                      <div className="relative mt-5 px-0.5">
                        <a
                          href={course.buyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-4 py-3 font-display text-sm font-extrabold tracking-[0.1em] text-heading uppercase shadow-sm transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-px hover:bg-secondary/90 hover:shadow-md"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Blinking Star Pagination Dots */}
            <div className="mt-4 flex items-center justify-center gap-2" aria-label="Course slides pagination">
              {HOME_COURSES.map((c, idx) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => scrollToDot(idx)}
                  aria-label={`Go to course ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === activeDot
                      ? 'w-6 bg-primary cc-dot-active'
                      : 'w-2.5 bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* VIEW ALL COURSES CTA */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://acharyaganesh.com/course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase shadow-md transition hover:bg-primary/90 hover:shadow-lg"
            >
              <span aria-hidden="true">✦</span>
              <span>VIEW ALL COURSES</span>
              <span aria-hidden="true">✦</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
