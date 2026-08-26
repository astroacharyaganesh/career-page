import React from 'react';
import {
  Calendar,
  Play,
  Star,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideoIntro: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideoIntro }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative subtle cosmic circle lines */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[850px] h-[850px] border border-violet-500/[0.04] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-amber-500/15 border border-white/[0.1] backdrop-blur-md shadow-lg shadow-black/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-violet-200">
                Vedic Precision × Executive Trajectory
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-xs text-amber-300 font-medium">D10 Dashamsha Analysis</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-white leading-[1.1]">
              Decode Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                Cosmic Career Code.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-violet-200 to-indigo-300">
                Master Timing. Scale Up.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The high-precision career astrology platform engineered for executives, tech leads, and founders. 
              Pinpoint the exact months to switch jobs for <span className="text-amber-300 font-semibold">50%+ salary appraisal</span>, break promotion stagnation, and align your karma with the D10 Dashamsha divisional matrix.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-primary-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 pointer-events-none" />
              </button>

              <button
                id="hero-secondary-watch-intro-btn"
                onClick={onOpenVideoIntro}
                className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-violet-400/40 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                  <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300 ml-0.5" />
                </div>
                <span>Watch Introduction (2 Min)</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Private & Confidential (NDA Grade)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Manual Analysis by Acharya Ganesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Superstition / Zero Fear</span>
              </div>
            </div>

          </div>

          {/* Right Column: Acharya Profile Card with 4 Floating Highlight Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Outer glowing aura rings */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-violet-600/20 to-indigo-600/10 rounded-3xl filter blur-2xl -z-10 transform scale-95" />

            {/* Central Master Card */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0B1020]/95 to-[#070A14] border border-white/[0.12] p-4 shadow-2xl shadow-black/80 backdrop-blur-2xl">
              
              {/* Inner Acharya Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.08] group">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Acharya Ganesh - Vedic Career Astrologer"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/40 via-transparent to-amber-950/20 mix-blend-color" />

                {/* Vedic Astrological Astrolabe Hologram Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-amber-300 font-mono-code">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>D10 Dashamsha Master</span>
                </div>

                {/* Bottom Master Bio Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/[0.12]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-bold text-white flex items-center gap-1.5">
                        Acharya Ganesh
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                      </h3>
                      <p className="text-[11px] text-slate-300">
                        Senior Vedic Career Strategist & D10 Specialist
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      17+ YRS
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Statistic Card 1: Google Rating (Top Left) */}
              <div className="absolute -top-5 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/[0.12] shadow-xl shadow-black/60 flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-white">4.98 / 5.0</span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">Verified</span>
                  </div>
                  <p className="text-[10px] text-slate-400">2,400+ Google Reviews</p>
                </div>
              </div>

              {/* Floating Statistic Card 2: 50,000+ Clients (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/[0.12] shadow-xl shadow-black/60 flex items-center gap-3 animate-float-delay">
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center">
                  <Users className="w-5 h-5 text-violet-300" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white">50,000+</span>
                  <p className="text-[10px] text-slate-400">Global Professionals</p>
                </div>
              </div>

              {/* Floating Statistic Card 3: 17+ Years Master Experience (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 px-3.5 py-2.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/[0.12] shadow-xl shadow-black/60 flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center">
                  <Award className="w-4 h-4 text-indigo-300" />
                </div>
                <div>
                  <span className="font-bold text-xs text-white">17+ Years</span>
                  <p className="text-[10px] text-slate-400">Vedic Mastery</p>
                </div>
              </div>

              {/* Floating Statistic Card 4: Available Today Badge (Bottom Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 px-3.5 py-2.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-emerald-500/30 shadow-xl shadow-emerald-950/40 flex items-center gap-2.5 animate-float-delay">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <span className="font-bold text-xs text-emerald-300">Available Today</span>
                  <p className="text-[10px] text-slate-400">3 VIP Slots Remaining</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
