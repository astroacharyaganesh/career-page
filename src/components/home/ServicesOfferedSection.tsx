import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES_OFFERED } from '../../data/homePageData';
import { SacredDividerOrnament } from '../SacredMandalaAccent';

interface ServicesOfferedSectionProps {
  onOpenBooking: () => void;
}

export const ServicesOfferedSection: React.FC<ServicesOfferedSectionProps> = ({
  onOpenBooking
}) => {
  return (
    <section
      id="services-offered"
      className="w-full bg-gradient-to-b from-[#fbf1db] via-[#f8ebd0] to-[#fdf6e7] border-y border-[#e7cfa0] pt-10 pb-10 sm:pt-12 sm:pb-12"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <SacredDividerOrnament className="w-5 h-5 text-[#6e121b]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c520d]">
              Vedic Guidance &amp; Vastu
            </span>
            <SacredDividerOrnament className="w-5 h-5 text-[#6e121b]" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#4a1117] mb-2">
            Services Offered
          </h2>
          <p className="max-w-2xl text-[#5c4835] text-sm sm:text-base not-italic mx-auto">
            Align your space and self with our expert consultations crafted to bring clarity and lasting harmony.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mx-auto">
          {SERVICES_OFFERED.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={onOpenBooking}
              className="group rounded-2xl border border-[#d6b26f] bg-[#fffdf9] overflow-hidden shadow-xs hover:border-[#b57b1d] hover:shadow-[0_18px_36px_-14px_rgba(92,54,14,0.28)] transition-all duration-300 flex flex-col hover:-translate-y-1 text-left cursor-pointer"
            >
              <div className="relative w-full shrink-0 overflow-hidden bg-[#142546]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={320}
                  height={426}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 h-auto max-h-[400px] w-full aspect-[3/4]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#2a0c0e]/70 to-transparent"
                />
              </div>
              <div className="px-3.5 py-3.5 sm:px-4 sm:py-4 flex-1 flex flex-col justify-between gap-2 bg-gradient-to-b from-[#fffdf9] to-[#fbf3e1]">
                <div>
                  <h3 className="font-serif-display text-base sm:text-lg font-bold leading-snug text-[#4a1117] group-hover:text-[#9e6b16] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[#5c4835] text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6e121b] group-hover:translate-x-0.5 transition-transform pt-1">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
