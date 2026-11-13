import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../../data/homePageData';

interface HomeHeroSectionProps {
  onOpenBooking: () => void;
}

export const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section className="w-full bg-transparent py-0 my-2 sm:my-4">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          aria-label="Featured astrology consultations"
          aria-roledescription="carousel"
          className="w-full"
        >
          <article className="flex w-full flex-col overflow-hidden rounded-2xl sm:rounded-[24px] relative min-h-[38rem] sm:min-h-[32rem] lg:min-h-[30rem] lg:grid lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:items-stretch">
            {/* Cross-fading slide backdrop gradients */}
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 transition-opacity ease-in-out duration-500 z-0 ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`absolute inset-0 ${slide.gradientClass}`} />
                <div
                  className="absolute inset-0"
                  style={{ background: slide.glowStyle }}
                />
              </div>
            ))}

            {/* Left Visual Cutout Column */}
            <div className="relative z-10 order-2 h-[18rem] w-full shrink-0 sm:h-[20rem] lg:order-1 lg:h-full lg:min-h-0">
              <div className="absolute inset-0 px-2 sm:px-4 lg:px-6">
                <div
                  className="pointer-events-none absolute bottom-[6%] left-1/2 z-0 h-10 w-[75%] -translate-x-1/2 rounded-[100%] bg-black/25 blur-xl"
                  aria-hidden="true"
                />
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.id}
                    aria-hidden={idx !== activeIndex}
                    className={`absolute inset-2 sm:inset-4 lg:inset-6 transition-opacity ease-in-out duration-500 ${
                      idx === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="h-full w-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Text & CTA Column */}
            <div className="relative z-10 order-1 flex shrink-0 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:order-2 lg:px-12 lg:py-12 xl:px-14">
              <div
                id="hero-carousel-panel"
                role="tabpanel"
                aria-labelledby={`hero-slide-tab-${currentSlide.id}`}
                aria-live="polite"
                aria-atomic="true"
                className="grid [&>*]:col-start-1 [&>*]:row-start-1"
              >
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  const HeadingTag = idx === 0 ? 'h1' : 'h2';
                  return (
                    <div
                      key={slide.id}
                      aria-hidden={!isActive}
                      className={
                        isActive
                          ? 'z-10 transition-opacity duration-300 opacity-100'
                          : 'pointer-events-none invisible z-0 opacity-0'
                      }
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-[0.8125rem]">
                        {slide.kicker}
                      </p>
                      <HeadingTag className="mt-3 font-display text-[1.75rem] font-bold leading-[1.12] text-primary-foreground sm:mt-4 sm:text-4xl lg:text-[2.625rem] xl:text-[2.75rem]">
                        {slide.title}
                      </HeadingTag>
                      <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-white/95 sm:mt-4 sm:text-lg">
                        {slide.subtitle}
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-[0.9375rem]">
                        {slide.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-sm text-white/85 sm:mt-7">
                <span className="font-semibold text-white">Hanish Bagga</span>
                <span className="mx-2 text-white/40" aria-hidden="true">
                  ●
                </span>
                <span>Astrology &amp; Astro Vastu Expert</span>
              </p>

              {/* 3D Sacred Book-Page CTA Button */}
              <div className="mt-7 sm:mt-8">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="group/cta inline-block [perspective:900px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground cursor-pointer text-left"
                >
                  <span className="relative inline-flex">
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-3 right-3 h-2.5 rounded-[50%] bg-black/35 blur-md opacity-75 transition-[opacity,transform] duration-500 ease-out group-hover/cta:opacity-95 group-hover/cta:scale-x-[1.02] group-active/cta:scale-x-[0.98] group-active/cta:opacity-60"
                    />
                    <span className="relative flex min-h-12 items-center overflow-hidden rounded-[4px] border-2 border-primary bg-card px-5 sm:min-h-[3.25rem] sm:px-6 shadow-[-4px_6px_0_color-mix(in_srgb,var(--color-primary)_38%,#d4c4b0),6px_10px_24px_rgb(0_0_0/0.28)] transition-[transform,box-shadow] duration-500 ease-out group-hover/cta:shadow-[-4px_8px_0_color-mix(in_srgb,var(--color-primary)_42%,#d4c4b0),8px_16px_28px_rgb(0_0_0/0.32)] group-hover/cta:[transform:translateY(-4px)_rotateX(2deg)_rotateY(-6deg)] group-active/cta:duration-150 group-active/cta:[transform:translateY(3px)_translateX(2px)_rotateX(0deg)_rotateY(0deg)_scale(0.985)]">
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 bottom-1.5 z-0 w-1.5 left-0 rounded-l-[2px] border-r border-primary/25 bg-[repeating-linear-gradient(180deg,#faf6f0_0px,#faf6f0_2px,#e5d9cc_2px,#e5d9cc_3px)]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 bottom-1.5 z-0 w-1.5 right-0 rounded-r-[2px] border-l border-primary/25 bg-[repeating-linear-gradient(180deg,#faf6f0_0px,#faf6f0_2px,#e5d9cc_2px,#e5d9cc_3px)]"
                      />
                      <span className="relative z-10 px-1 font-display text-sm font-bold tracking-[0.06em] text-heading sm:text-base whitespace-nowrap">
                        Book A Consultation
                      </span>
                    </span>
                  </span>
                </button>
              </div>

              {/* Carousel Tab Controls */}
              <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Hero topics">
                {HERO_SLIDES.map((slide, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      id={`hero-slide-tab-${slide.id}`}
                      aria-selected={selected}
                      aria-controls="hero-carousel-panel"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        selected
                          ? 'w-8 bg-primary-foreground/90'
                          : 'w-2 bg-primary-foreground/35 hover:bg-primary-foreground/55'
                      }`}
                    >
                      <span className="sr-only">{slide.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
