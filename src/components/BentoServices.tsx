import React from 'react';
import { BENTO_SERVICES } from '../data/careerAstrologyData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface BentoServicesProps {
  onOpenBooking: () => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-16 sm:py-20 relative overflow-hidden bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {BENTO_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={onOpenBooking}
              className={`${service.colSpan} rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${service.gradient} border border-white/[0.08] flex flex-col justify-between cursor-pointer`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-1">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-end text-xs font-bold text-amber-300 gap-1">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
