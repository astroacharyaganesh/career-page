import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';
import {
  ASTROLOGY_QNA_CATEGORIES,
  ASTROLOGY_QNA_ITEMS,
  AstrologyQnaCategory
} from '../../data/homePageData';

interface AstrologyQnaSectionProps {
  onOpenBooking?: () => void;
}

const ROTATE_INTERVAL_MS = 5000;

export const AstrologyQnaSection: React.FC<AstrologyQnaSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<AstrologyQnaCategory | 'All'>('All');

  const totalItems = ASTROLOGY_QNA_ITEMS.length;
  const currentItem = ASTROLOGY_QNA_ITEMS[activeIndex] || ASTROLOGY_QNA_ITEMS[0];

  useEffect(() => {
    if (isPaused || isMoreModalOpen || totalItems <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isMoreModalOpen, totalItems]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const modalItems =
    modalCategory === 'All'
      ? ASTROLOGY_QNA_ITEMS
      : ASTROLOGY_QNA_ITEMS.filter((item) => item.category === modalCategory);

  return (
    <section
      id="astrology-qna"
      aria-label="Do You Know Astrology Insights"
      className="w-full bg-background py-7 sm:py-9"
    >
      <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
        <article
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="relative overflow-hidden rounded-2xl border border-[#e3cfb7] bg-gradient-to-br from-[#fdf5ee] via-[#fdfcf8] to-[#f8ead7] shadow-[0_12px_34px_-14px_rgba(93,46,10,0.16)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(93,46,10,0.22)]"
        >
          {/* Warm gold left architectural accent & subtle radial highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#b5651d] via-[#d9954e] to-[#b5651d]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 -right-14 h-44 w-44 rounded-full bg-[#f3d0a8]/35 blur-2xl"
          />

          <div className="relative pl-6 pr-5 py-5 sm:pl-9 sm:pr-8 sm:py-7">
            {/* Top Bar: DO YOU KNOW? Eyebrow + Index & Subtle Prev/Next Controls */}
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/12 text-primary border border-primary/25">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-primary">
                  DO YOU KNOW?
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="mr-1 text-[11px] font-semibold tabular-nums text-muted-foreground">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous astrology question"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/85 text-heading hover:bg-secondary/60 hover:border-primary/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next astrology question"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/85 text-heading hover:bg-secondary/60 hover:border-primary/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Animated Question & Answer Content (Rotates Every 5 Seconds) */}
            <div key={currentItem.id} className="qna-fade-slide mt-3.5 space-y-2.5">
              <h2 className="font-display text-xl sm:text-[1.6rem] font-bold text-heading leading-snug">
                {currentItem.question}
              </h2>

              <p className="text-[13.5px] sm:text-[15px] text-foreground/95 leading-relaxed">
                {currentItem.answer}
              </p>
            </div>

            {/* Bottom Step Dots + Explore More Trigger */}
            <div className="mt-4 pt-3.5 border-t border-border/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Astrology Q&A Slides">
                {ASTROLOGY_QNA_ITEMS.map((item, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={`View question ${idx + 1}: ${item.question}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? 'w-6 bg-primary'
                          : 'w-2 bg-border hover:bg-primary/50'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  setModalCategory('All');
                  setIsMoreModalOpen(true);
                }}
                className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-primary hover:text-heading underline decoration-primary/35 hover:decoration-heading underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
              >
                Explore More Astrology Questions →
              </button>
            </div>
          </div>

          {/* 5-second auto-advance progress bar along bottom edge */}
          {!isPaused && !isMoreModalOpen && (
            <div className="h-[3px] w-full bg-[#e8ddd0]/70 overflow-hidden" aria-hidden="true">
              <div
                key={`progress-${activeIndex}`}
                className="qna-progress-bar h-full w-full bg-gradient-to-r from-[#b5651d] via-[#d9954e] to-[#b5651d]"
              />
            </div>
          )}
        </article>
      </div>

      {/* Quick Q&A Explorer Modal */}
      {isMoreModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
          onClick={() => setIsMoreModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="more-qna-modal-title"
            className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-background border border-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 bg-muted border-b border-border flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  DO YOU KNOW?
                </p>
                <h3
                  id="more-qna-modal-title"
                  className="font-display text-lg sm:text-xl font-bold text-heading"
                >
                  Quick Vedic Astrology Answers
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMoreModalOpen(false)}
                aria-label="Close Q&A Explorer"
                className="p-2 rounded-full bg-card border border-border text-heading hover:bg-secondary/40 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-5 py-3 bg-card border-b border-border flex items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {(['All', ...ASTROLOGY_QNA_CATEGORIES] as const).map((cat) => {
                const active = modalCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setModalCategory(cat)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-heading border border-border hover:border-primary/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {modalItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-muted border border-border p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    <span>DO YOU KNOW?</span>
                    <span className="text-muted-foreground">{item.category}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-heading">
                    {item.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {onOpenBooking && (
              <div className="px-5 py-3.5 bg-muted border-t border-border flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  Want answers specific to your own Kundli?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsMoreModalOpen(false);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-xs font-semibold whitespace-nowrap cursor-pointer"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
