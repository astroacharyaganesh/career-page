import React, { useState } from 'react';
import { BENTO_SERVICES } from '../data/careerAstrologyData';
import { BentoService } from '../types';
import {
  Compass,
  TrendingUp,
  Award,
  DollarSign,
  Rocket,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';

interface BentoServicesProps {
  onOpenBooking: () => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<BentoService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-emerald-300" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-violet-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-300" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0B1020]/90">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-semibold text-amber-300 font-mono-code">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SPECIALIZED VEDIC CAREER ARCHITECTURES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Career Astrology Services: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              The Bento Suite for High Performers
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Select any module to inspect the planetary focus, expected ROI, and strategic deliverables.
          </p>
        </div>

        {/* Bento Grid Layout (12 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {BENTO_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`bento-service-${service.id}`}
              onClick={() => setSelectedService(service)}
              className={`${service.colSpan} group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b ${service.gradient} backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
            >
              <div className="space-y-4">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.12] group-hover:border-amber-400/50 group-hover:bg-amber-500/15 flex items-center justify-center transition-all">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-amber-300/90">
                        {service.category}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-code font-bold px-2.5 py-1 rounded-full bg-white/[0.06] text-amber-200 border border-white/[0.1]">
                    {service.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Planetary Focus Box */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono-code">Planetary Focus:</span>
                  <span className="text-amber-300 font-mono-code font-semibold">{service.planetaryFocus}</span>
                </div>

                {/* Key Features Bullet List */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Metric & Expand Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono-code text-slate-400">{service.metrics.label}: </span>
                  <span className="text-xs font-bold text-amber-300 font-mono-code">{service.metrics.value}</span>
                </div>

                <span className="text-xs font-bold text-slate-300 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expandable Service Detail Modal */}
      {selectedService && (
        <div
          id="bento-service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-[#0B1020] border border-amber-400/40 p-6 sm:p-8 shadow-2xl shadow-black space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] border border-white/[0.1] text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                {getServiceIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-xs font-mono-code text-amber-300 font-bold uppercase">
                  {selectedService.category} • {selectedService.badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
              <h4 className="text-xs font-mono-code font-bold text-amber-300 uppercase">
                Vedic Methodology & Scope:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                During your 1-on-1 session, Acharya Ganesh conducts a multi-dimensional sweep of your D1 Lagna, D10 Dashamsha, and active Vimshottari Mahadasha specifically mapped to <strong>{selectedService.title}</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono-code font-bold text-slate-300 uppercase">
                What You Get in This Module:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/[0.06] flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Validated Impact:</span>
                <p className="text-sm font-bold text-amber-300 font-mono-code">{selectedService.metrics.label}: {selectedService.metrics.value}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2"
              >
                <span>Book This Module</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
