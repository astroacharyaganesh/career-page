import React from 'react';
import { Star, ShieldCheck, Sparkles, Award, Building, Lock, CheckCircle2, Tv } from 'lucide-react';
import { TRUST_MARQUEE_ITEMS, STATS_HIGHLIGHTS } from '../data/careerAstrologyData';

export const TrustMarquee: React.FC = () => {
  const corporateAlumni = [
    { company: 'Google', role: 'Staff Engineers & Directors' },
    { company: 'Microsoft', role: 'Principal PMs & Partners' },
    { company: 'Amazon AWS', role: 'Senior Solutions Architects' },
    { company: 'Goldman Sachs', role: 'VP Investment Banking' },
    { company: 'McKinsey & Co', role: 'Engagement Managers' },
    { company: 'UPSC Aspirants', role: 'IAS / IPS / IFS Officers' },
    { company: 'FinTech Unicorns', role: 'Founders & CPOs' },
    { company: 'Meta Platforms', role: 'Engineering Managers' },
  ];

  return (
    <section id="trust-section" className="py-14 border-y border-white/[0.06] bg-[#070a14]/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
          {STATS_HIGHLIGHTS.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200">{stat.label}</p>
              <p className="text-[11px] text-slate-400 font-medium">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Section Subheading */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono-code">
            Recognized by National Media & Trusted by High-Performers Worldwide
          </p>
        </div>

      </div>

      {/* Row 1: Media & Accolades Marquee (Scroll Left) */}
      <div className="relative w-full overflow-hidden flex items-center mb-4">
        {/* Left and right fade gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070a14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070a14] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {[...TRUST_MARQUEE_ITEMS, ...TRUST_MARQUEE_ITEMS].map((item, index) => (
            <div
              key={`m1-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 hover:bg-white/[0.06] transition-colors whitespace-nowrap shadow-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                {item.icon === 'Star' && <Star className="w-3.5 h-3.5 fill-amber-300" />}
                {item.icon === 'Sparkles' && <Sparkles className="w-3.5 h-3.5" />}
                {item.icon === 'Award' && <Award className="w-3.5 h-3.5" />}
                {item.icon === 'TrendingUp' && <CheckCircle2 className="w-3.5 h-3.5" />}
                {item.icon === 'ShieldCheck' && <ShieldCheck className="w-3.5 h-3.5" />}
                {item.icon === 'Building' && <Building className="w-3.5 h-3.5" />}
                {item.icon === 'Lock' && <Lock className="w-3.5 h-3.5" />}
                {item.icon === 'Tv' && <Tv className="w-3.5 h-3.5" />}
                {!['Star', 'Sparkles', 'Award', 'TrendingUp', 'ShieldCheck', 'Building', 'Lock', 'Tv'].includes(item.icon) && (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Alumni Coached Companies (Scroll Right) */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070a14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070a14] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center gap-4 py-2">
          {[...corporateAlumni, ...corporateAlumni].map((corp, index) => (
            <div
              key={`m2-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-violet-950/20 border border-violet-500/20 hover:border-violet-400/40 transition-colors whitespace-nowrap shadow-sm"
            >
              <span className="text-xs font-mono-code font-bold text-amber-300">[{corp.company}]</span>
              <span className="text-xs text-slate-300 font-medium">{corp.role}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
