import React from 'react';
import { SERVICES_OFFERED } from '../../data/homePageData';

interface ServicesOfferedSectionProps {
  onOpenBooking: () => void;
}

export const ServicesOfferedSection: React.FC<ServicesOfferedSectionProps> = ({
  onOpenBooking
}) => {
  return (
    <section id="services-offered" className="w-full bg-muted pt-10 pb-6 sm:pt-12 sm:pb-8">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-2">
            Services Offered
          </h2>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base not-italic mx-auto">
            Align your space and self with our expert services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mx-auto">
          {SERVICES_OFFERED.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={onOpenBooking}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 text-left cursor-pointer"
            >
              <div className="relative w-full shrink-0 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={320}
                  height={426}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 h-auto max-h-[400px] w-full aspect-[3/4]"
                />
              </div>
              <div className="px-3 py-3 sm:px-4 sm:py-3 flex flex-col gap-1">
                <h3 className="text-base font-bold leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
