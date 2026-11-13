import React from 'react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import { AboutPageCmsData } from '../../data/aboutPageData';
import { Calendar, MessageCircle } from 'lucide-react';

interface AboutHeroSectionProps {
  data: AboutPageCmsData['hero'];
  whatsappNumber: string;
  onOpenBooking: () => void;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  data,
  whatsappNumber,
  onOpenBooking
}) => {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Namaste Acharya Ganesh, I would like to book a 1-on-1 birth chart consultation.'
  )}`;

  return (
    <section
      id="about-hero"
      className="relative pt-8 pb-14 lg:pt-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#5c270b] via-[#481d07] to-[#2e1104] text-white"
    >
      {/* Sacred Vedic Diamond Kundali Watermark (Left) */}
      <div className="absolute top-10 -left-20 lg:left-[-60px] w-[480px] h-[480px] pointer-events-none opacity-[0.14] select-none">
        <svg viewBox="0 0 400 400" className="w-full h-full stroke-amber-200 fill-none" strokeWidth="1.2">
          <rect x="20" y="20" width="360" height="360" />
          <polygon points="200,20 380,200 200,380 20,200" />
          <line x1="20" y1="20" x2="380" y2="380" />
          <line x1="380" y1="20" x2="20" y2="380" />
          <circle cx="200" cy="200" r="140" strokeDasharray="4,4" />
          <circle cx="200" cy="200" r="170" />
        </svg>
      </div>

      {/* Sacred Chakra Watermark (Right) */}
      <div className="absolute -bottom-20 -right-20 lg:right-[-40px] w-[520px] h-[520px] pointer-events-none opacity-[0.12] select-none">
        <svg viewBox="0 0 500 500" className="w-full h-full stroke-amber-200 fill-none" strokeWidth="1">
          <circle cx="250" cy="250" r="230" />
          <circle cx="250" cy="250" r="200" strokeDasharray="6,4" />
          <circle cx="250" cy="250" r="160" />
          <circle cx="250" cy="250" r="110" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={250 + 230 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={250 + 230 * Math.sin((i * 30 * Math.PI) / 180)}
              strokeDasharray="2,4"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Exact Section 1 Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2.5">
              <p className="text-base sm:text-lg font-semibold text-amber-300 tracking-wide">
                {data.hindiLine}
              </p>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-amber-50 leading-[1.14] tracking-tight">
                {data.h1}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-200/95 pt-0.5">
                {data.subheading}
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-[17px] text-amber-50/90 leading-relaxed max-w-2xl">
              {data.intro}
            </p>

            {/* 4 Trust Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {data.trustChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#381607]/90 border border-amber-500/30 text-xs sm:text-[13px] font-semibold text-amber-100"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* 2 CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#2e1104] bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 active:scale-[0.99] transition-all shadow-lg shadow-black/30 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2e1104]" />
                <span>{data.primaryCta}</span>
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#10b981] hover:bg-[#059669] active:scale-[0.99] transition-all shadow-lg shadow-black/25 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white" />
                <span>{data.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Studio Portrait of Acharya Ganesh (Hanish Bagga) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] rounded-3xl bg-white border-2 border-amber-400/50 shadow-2xl shadow-black/45 overflow-hidden pt-6 px-6 flex items-end justify-center">
              {/* Subtle Sacred Geometry Ring Behind Portrait */}
              <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none opacity-20">
                <svg viewBox="0 0 300 300" className="w-64 h-64 stroke-[#8B3E18] fill-none" strokeWidth="1.2">
                  <circle cx="150" cy="150" r="130" />
                  <circle cx="150" cy="150" r="105" strokeDasharray="4,4" />
                  <polygon points="150,20 280,150 150,280 20,150" />
                </svg>
              </div>

              <img
                src={hanishPortrait}
                alt="Acharya Ganesh – Hanish Bagga, Vedic Astrologer & Astro-Vastu Expert"
                className="w-full max-w-[330px] h-[340px] sm:h-[380px] object-contain object-bottom relative z-10 block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
