import React, { useState } from 'react';
import { X } from 'lucide-react';
import { STUDENT_REVIEWS, StudentReviewVideoItem } from '../../data/homePageData';

export const StudentReviewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<StudentReviewVideoItem | null>(null);

  const visibleReviews = showAll ? STUDENT_REVIEWS : STUDENT_REVIEWS.slice(0, 4);

  return (
    <section
      id="student-reviews"
      className="w-full bg-muted bg-cover bg-center bg-no-repeat py-12 sm:py-16"
      style={{ backgroundImage: "url('/ag-images/testimonial-bg.png')" }}
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20 relative overflow-hidden rounded-2xl py-8 sm:rounded-[24px] lg:rounded-[32px] lg:py-12">
        <div className="relative">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-primary mb-4">
              Our Students Reviews
            </h2>
            <div className="w-24 h-1 bg-heading/20 rounded-full mx-auto mb-5" />
            <p className="max-w-2xl text-accent text-base sm:text-lg not-italic mx-auto">
              Real voices, real journeys — hear directly from students about their experience learning Vedic astrology with Acharya Ganesh.
            </p>
          </div>

          <div className="mt-12 grid gap-6 px-4 sm:grid-cols-2 sm:gap-7 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-10">
            {visibleReviews.map((review) => (
              <article key={review.id} className="group/review flex flex-col">
                <div className="relative">
                  <div className="group/player relative isolate overflow-hidden rounded-[1.25rem] bg-heading shadow-[0_18px_45px_rgb(93_46_10_/_0.18)] ring-1 ring-secondary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(93_46_10_/_0.24)] hover:ring-primary/30 aspect-square">
                    <video
                      preload="metadata"
                      playsInline
                      muted
                      className="h-full w-full bg-black object-cover"
                      aria-label={review.label}
                    >
                      <source src={`${review.videoUrl}#t=0.1`} type="video/mp4" />
                    </video>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/70 via-transparent to-accent/10"
                    />

                    <button
                      type="button"
                      onClick={() => setActiveVideo(review)}
                      aria-label={`Play ${review.label}`}
                      className="absolute inset-0 z-20 flex items-center justify-center text-left cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-heading/10 to-transparent transition-opacity duration-300 group-hover/player:opacity-95" />
                      <span className="relative flex flex-col items-center gap-3 px-4">
                        <span
                          className="relative grid place-items-center rounded-full bg-secondary/95 text-heading shadow-[0_18px_45px_rgb(93_46_10_/_0.28)] ring-8 ring-white/20 transition-all duration-300 group-hover/player:scale-105 group-hover/player:bg-accent h-20 w-20 sm:h-24 sm:w-24"
                          aria-hidden="true"
                        >
                          <span className="h-0 w-0 border-y-transparent border-l-current ml-1 border-y-[14px] border-l-[22px] sm:border-y-[17px] sm:border-l-[27px]" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 cursor-pointer"
            >
              {showAll ? 'Show Less Reviews' : 'View 4 More Reviews'}
            </button>
          </div>
        </div>
      </div>

      {/* Inline MP4 Video Review Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-[#1c1917] border border-secondary/30 p-3 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 pb-3 text-white">
              <div>
                <p className="font-display text-lg font-bold text-secondary">
                  {activeVideo.studentName}
                </p>
                <p className="text-xs text-white/75">{activeVideo.program}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close review video"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <video
              controls
              autoPlay
              playsInline
              className="w-full max-h-[75vh] rounded-xl bg-black"
            >
              <source src={activeVideo.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
