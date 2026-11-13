import React, { useState } from 'react';
import { Expand, RefreshCw, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_MEMORIES, GalleryMemoryItem } from '../../data/homePageData';

export const MemoriesGallerySection: React.FC = () => {
  const [batchIndex, setBatchIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<GalleryMemoryItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const batches = [
    GALLERY_MEMORIES.slice(0, 6),
    GALLERY_MEMORIES.slice(6, 12),
    GALLERY_MEMORIES.slice(12, 18)
  ];
  const visibleMemories = batches[batchIndex % batches.length];

  const handleRefresh = () => {
    setBatchIndex((prev) => (prev + 1) % batches.length);
  };

  const navigateLightbox = (dir: 'prev' | 'next') => {
    if (!lightboxItem) return;
    const currentIdx = GALLERY_MEMORIES.findIndex((m) => m.id === lightboxItem.id);
    const nextIdx =
      dir === 'next'
        ? (currentIdx + 1) % GALLERY_MEMORIES.length
        : (currentIdx - 1 + GALLERY_MEMORIES.length) % GALLERY_MEMORIES.length;
    setLightboxItem(GALLERY_MEMORIES[nextIdx]);
  };

  return (
    <section id="memories-gallery" className="w-full bg-background py-10 sm:py-12">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-display font-bold text-section-title sm:text-4xl lg:text-5xl text-heading mb-3">
            Memories Over The Years
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full opacity-20 mx-auto mb-5" />
          <p className="max-w-xl text-muted-foreground text-sm sm:text-base mx-auto">
            A curated glimpse into moments, milestones, and celebrations across our journey.
          </p>
        </div>

        {/* 6-slot Bento Image Gallery */}
        <div className="w-full mx-auto">
          <div
            className="grid grid-flow-dense auto-rows-auto grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3"
            role="list"
            aria-label="Bento image gallery"
          >
            {visibleMemories.map((memory, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <figure
                  key={memory.id}
                  role="listitem"
                  className={`relative m-0 min-w-0 ${
                    isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-lg aspect-square w-full bg-card border border-border/50">
                    <img
                      src={memory.image}
                      alt={memory.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => setLightboxItem(memory)}
                      aria-label={`View full size: ${memory.alt}`}
                      className="inline-flex shrink-0 items-center justify-center rounded-md h-8 w-8 border border-border/80 bg-card/90 text-heading shadow-sm backdrop-blur-sm hover:border-primary/35 hover:bg-card hover:shadow-md absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 cursor-pointer"
                    >
                      <Expand className="w-4 h-4" />
                    </button>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>

        {/* Gallery Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-xs sm:text-sm font-semibold text-heading shadow-2xs transition hover:border-primary hover:bg-muted cursor-pointer"
          >
            View all
          </button>

          <button
            type="button"
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 justify-center rounded-full bg-secondary px-5 py-2.5 text-xs sm:text-sm font-semibold text-heading shadow-2xs transition hover:bg-secondary/85 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh memories</span>
          </button>
        </div>
      </div>

      {/* Single Image Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
              className="absolute -top-11 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
              <button
                type="button"
                onClick={() => navigateLightbox('prev')}
                aria-label="Previous memory"
                className="absolute left-2 sm:left-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={() => navigateLightbox('next')}
                aria-label="Next memory"
                className="absolute right-2 sm:right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-white/85">{lightboxItem.alt}</p>
          </div>
        </div>
      )}

      {/* Full Gallery Modal ("View all") */}
      {showAllModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto rounded-2xl bg-background border border-border p-5 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-heading">
                Memories Over The Years
              </h3>
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                aria-label="Close gallery"
                className="p-2 rounded-full border border-border bg-card text-heading hover:bg-muted cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {GALLERY_MEMORIES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setShowAllModal(false);
                    setLightboxItem(m);
                  }}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-border cursor-pointer"
                >
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
