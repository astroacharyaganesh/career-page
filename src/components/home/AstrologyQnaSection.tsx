import React, { useState } from 'react';
import { Compass, HelpCircle, Orbit, Sparkles, X, ArrowRight, ChevronUp } from 'lucide-react';
import {
  ASTROLOGY_QNA_CATEGORIES,
  ASTROLOGY_QNA_ITEMS,
  AstrologyQnaCategory,
  AstrologyQnaItem
} from '../../data/homePageData';

interface AstrologyQnaSectionProps {
  onOpenBooking?: () => void;
}

export const AstrologyQnaSection: React.FC<AstrologyQnaSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<AstrologyQnaCategory>('Planets');
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<AstrologyQnaCategory | 'All'>('All');

  const featuredQuestion: AstrologyQnaItem =
    ASTROLOGY_QNA_ITEMS.find((item) => item.category === selectedCategory) || ASTROLOGY_QNA_ITEMS[0];

  const getCategoryIcon = (category: AstrologyQnaCategory, isActive: boolean) => {
    const colorClass = isActive ? 'text-primary-foreground' : 'text-primary';
    switch (category) {
      case 'Planets':
        return <Orbit className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} aria-hidden="true" />;
      case 'Houses':
        return <Compass className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} aria-hidden="true" />;
      case 'Zodiac Signs':
        return <Sparkles className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} aria-hidden="true" />;
      case 'Prashna Kundali':
        return <HelpCircle className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} aria-hidden="true" />;
    }
  };

  const handleSelectCategory = (category: AstrologyQnaCategory) => {
    setSelectedCategory(category);
    setIsAnswerOpen(false);
  };

  const modalItems =
    modalCategory === 'All'
      ? ASTROLOGY_QNA_ITEMS
      : ASTROLOGY_QNA_ITEMS.filter((item) => item.category === modalCategory);

  return (
    <section
      id="astrology-qna"
      aria-labelledby="astrology-qna-heading"
      className="w-full bg-background py-8 sm:py-10"
    >
      <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            ASTROLOGY Q&amp;A
          </p>
          <h2
            id="astrology-qna-heading"
            className="mt-1.5 font-display text-2xl sm:text-[2rem] font-bold leading-[1.2] text-heading"
          >
            What Do You Want to Know?
          </h2>
          <p className="mt-2 text-sm sm:text-[0.9375rem] text-muted-foreground leading-relaxed">
            Explore quick answers about planets, houses, zodiac signs and Prashna Kundali.
          </p>
        </div>

        {/* 4 Compact Category Chips — single row centered on desktop, horizontal scroll on mobile */}
        <div
          role="tablist"
          aria-label="Astrology Q&A Topics"
          className="mt-5 -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center md:justify-center gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ASTROLOGY_QNA_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectCategory(category)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-[0.8125rem] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm border border-primary'
                    : 'bg-muted text-heading border border-border hover:border-primary/45 hover:bg-card'
                }`}
              >
                {getCategoryIcon(category, isActive)}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Single Featured Question Card */}
        <article className="mt-5 w-full rounded-2xl bg-muted border border-border shadow-sm hover:shadow-md hover:border-primary/35 transition-all duration-200 p-5 sm:px-7 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {featuredQuestion.topicTitle}
              </p>
              <h3 className="font-display text-lg sm:text-[1.375rem] font-bold text-heading leading-snug">
                {featuredQuestion.question}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {featuredQuestion.shortPreview}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setIsAnswerOpen((prev) => !prev)}
                aria-expanded={isAnswerOpen}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary hover:bg-accent text-heading px-5 py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap shadow-2xs transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {isAnswerOpen ? (
                  <>
                    <span>Hide Answer</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <span>Read Answer →</span>
                )}
              </button>
            </div>
          </div>

          {/* Lightweight Inline Traditional Answer */}
          {isAnswerOpen && (
            <div className="mt-4 pt-4 border-t border-border space-y-2.5">
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                {featuredQuestion.answer}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <p className="text-xs font-semibold text-primary">
                  {featuredQuestion.keyTakeaway}
                </p>
                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-heading hover:text-primary underline decoration-primary/40 underline-offset-4 cursor-pointer"
                  >
                    Ask About Your Chart →
                  </button>
                )}
              </div>
            </div>
          )}
        </article>

        {/* Bottom Text Link CTA */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => {
              setModalCategory(selectedCategory);
              setIsMoreModalOpen(true);
            }}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:text-heading underline decoration-primary/35 hover:decoration-heading underline-offset-4 transition-colors cursor-pointer"
          >
            Explore More Astrology Questions →
          </button>
        </div>
      </div>

      {/* Lightweight Quick Q&A Explorer Modal */}
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
                  ASTROLOGY Q&amp;A
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

            {/* Category Filter Tabs inside Modal */}
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

            {/* Concise Question List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {modalItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-muted border border-border p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    <span>{item.topicTitle}</span>
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
