import React from 'react';
import { DELIVERABLES_LIST } from '../data/careerAstrologyData';
import {
  FileText,
  Calendar,
  Layers,
  GitCompare,
  Sparkles,
  ShieldCheck,
  Globe,
  Video,
  CheckCircle2,
  Download
} from 'lucide-react';

interface DeliverablesGridProps {
  onOpenBooking: () => void;
}

export const DeliverablesGrid: React.FC<DeliverablesGridProps> = ({ onOpenBooking }) => {
  const getDeliverableIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-300" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'GitCompare':
        return <GitCompare className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-emerald-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="deliverables" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>EXECUTIVE CONSULTATION ARTIFACTS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What You Receive: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              The 8 Signature Career Deliverables
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Every consultation is backed by tangible, permanent artifacts. You receive lifetime access to your confidential recordings, mathematical blueprints, and remedial protocols.
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERABLES_LIST.map((item, idx) => (
            <div
              key={item.id}
              id={`deliverable-card-${item.id}`}
              className="group p-6 sm:p-7 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Format Pill */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] group-hover:border-amber-400/40 group-hover:bg-amber-500/10 flex items-center justify-center transition-colors">
                    {getDeliverableIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono-code font-bold px-2.5 py-1 rounded-full bg-white/[0.06] text-amber-300 border border-white/[0.1]">
                    {item.format}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-emerald-400 font-mono-code">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.highlight}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Sample Report Callout Preview */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-amber-950/30 border border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 flex-shrink-0">
              <Download className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                Downloadable Sample PDF Blueprint
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Preview how an authentic 25-page D1 + D10 Vedic Career Horoscope Report looks before booking.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-amber-500/20"
          >
            Reserve Your Blueprint
          </button>
        </div>

      </div>
    </section>
  );
};
