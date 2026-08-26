import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const VedicTestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Reviews');

  const filters = [
    'All Reviews',
    'Job Switch & Timing',
    'Promotion & Growth',
    'Business & Startups',
    'Abroad Relocation',
    'Govt & Public Sector'
  ];

  const testimonials = [
    {
      category: 'Job Switch & Timing',
      date: 'February 2026',
      rating: 5,
      quote:
        'Salary and designation have hardly changed since the last four years, even regardless of good reviews. I studied my D10 chart, current Dasha and upcoming periods and got some good insights from Acharya Ganesh about the time that would be more favourable for me to move to another job.',
      outcome:
        'Changing jobs during the recommended time frame and advancing to a more fulfilling position with greater challenge and higher pay. Here is the reason I was able to wait for the right job because the career prediction had given me enough confidence to do so.'
    },
    {
      category: 'Promotion & Growth',
      date: 'January 2026',
      rating: 5,
      quote:
        'During consultation, Acharya ji analyzed my career prediction astrology 10th house, Dasha periods and Rahu influence and told me that going back to work with such difficult times and pressure from seniors, etc. was short-lived and he gave me some tips for doing so as well as some patience in my career.',
      outcome:
        "In the next couple of months there was a big organizational change here and I was offered a better leadership position. I've avoided an emotional resignation at the wrong time by following the astrology career prediction."
    },
    {
      category: 'Business & Startups',
      date: 'December 2025',
      rating: 5,
      quote:
        'When I looked at my date of birth chart and calculated the astrology of my 6th, 7th, 10th and 11th houses, along with Mercury, Rahu and my chart, it was evident that my career had a significant scope for improvement and transition from the job to a business was best done at a specific time.',
      outcome:
        'I had planned my exit, instead of exiting suddenly and I started the business at the recommended time. The consultation process assisted me in making a thoughtful decision with clarity between a job and entrepreneurship.'
    },
    {
      category: 'Abroad Relocation',
      date: 'November 2025',
      rating: 5,
      quote:
        'I had two L1 visa rejections and was losing hope about international transfer. Acharya Ganesh analyzed my 9th and 12th houses with Rahu transit and pointed out a 3-month auspicious window in early 2026.',
      outcome:
        'Applied exactly in the recommended astrological period and received US visa stamping on the first attempt without any RFE questions.'
    },
    {
      category: 'Govt & Public Sector',
      date: 'October 2025',
      rating: 5,
      quote:
        'Was caught between continuing corporate tech or preparing for State PSC exams. Acharya Ganesh evaluated Sun-Mars placement in my D10 chart confirming strong administrative yogas.',
      outcome:
        'Cleared the examination with state rank 14 in my first dedicated attempt with prescribed Surya Arghya and ruby remedy guidance.'
    },
    {
      category: 'Job Switch & Timing',
      date: 'September 2025',
      rating: 5,
      quote:
        'Was offered an early-stage startup role with stock options vs staying in a Tier-1 IT MNC. Consultation broke down planetary strengths of 2nd vs 11th houses.',
      outcome:
        'Accepted the leadership offer right before Jupiter transit; firm raised Series B resulting in +160% valuation growth in my equity package.'
    }
  ];

  const filteredTestimonials = activeFilter === 'All Reviews'
    ? testimonials
    : testimonials.filter((t) => t.category === activeFilter);

  return (
    <section
      id="verified-testimonials"
      className="py-16 lg:py-24 bg-[#1A0C06] text-stone-200 relative overflow-hidden border-b border-amber-950/40"
    >
      {/* Background starlight dots pattern */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #fcd34d 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Radiant ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#35180D] border border-amber-600/30 text-xs font-semibold text-amber-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Client Success Stories</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-amber-50 tracking-tight leading-[1.2]">
            Trusted by Professionals Across Different Career Stages
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-xs sm:text-sm text-amber-100/75 font-normal leading-relaxed max-w-2xl mx-auto">
            Real experiences from working professionals, senior executives, entrepreneurs, overseas job seekers and government-sector aspirants who sought guidance through career astrology.
          </p>

          {/* Review Score Badge matching screenshot */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-[13px] font-semibold text-amber-200">
            <div className="flex items-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">4.9 / 5 Rating</span>
            <span className="text-amber-400/50">•</span>
            <span className="text-amber-200/80">5,000+ Verified Google Reviews</span>
          </div>

        </div>

        {/* Filter Pills Row matching screenshot */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#e2a850] text-[#1a0c06] shadow-md shadow-amber-900/30'
                    : 'bg-[#2b140a] text-amber-200/80 hover:bg-[#381a0e] hover:text-white border border-amber-900/40'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Testimonials 3-Card Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#261208]/90 border border-amber-800/30 p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-amber-600/50 transition-all group"
            >
              <div>
                {/* Header Date & Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-amber-200/70">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.date}</span>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative mb-6">
                  <span className="font-serif-display text-4xl text-amber-500/30 absolute -top-4 -left-1 select-none pointer-events-none">
                    “
                  </span>
                  <p className="text-xs sm:text-[13px] text-amber-100/90 leading-relaxed italic font-normal pl-2.5">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Outcome Box */}
              <div className="pt-4 border-t border-amber-900/40 mt-auto">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>OUTCOME ACHIEVED:</span>
                </div>
                <p className="text-xs text-amber-200/80 leading-relaxed font-normal">
                  {t.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
