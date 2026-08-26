import React, { useState } from 'react';
import {
  Sparkles,
  Calculator,
  Compass,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Zap,
  Lock
} from 'lucide-react';
import { AstroCalculationResult } from '../types';

interface FreeAstroCalculatorProps {
  onOpenBooking: () => void;
}

export const FreeAstroCalculator: React.FC<FreeAstroCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedSign, setSelectedSign] = useState('Leo (Simha)');
  const [currentDilemma, setCurrentDilemma] = useState('job-switch');
  const [experienceLevel, setExperienceLevel] = useState('mid');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<AstroCalculationResult | null>({
    zodiacSign: 'Leo (Simha)',
    rulingPlanet: 'Sun (Surya) - Authority & Kingmaker',
    careerHouse10Status: '10th House Taurus ruled by Venus (Executive FinTech / Strategic Advisory)',
    activeDasha: 'Favorable Mercury-Jupiter Antardasha Sub-period',
    currentPhaseEnergy: 'Favorable Switch Window',
    alignmentScore: 88,
    immediateOpportunity: 'Next 60–90 Days indicates high probability of 40–55% salary jump if switched to Strategy / Leadership role.',
    keyVedicAdvice: 'Avoid staying in operational execution; pitch for VP or Team Principal scope before next solar transit.'
  });

  const zodiacSigns = [
    { name: 'Aries (Mesha)', planet: 'Mars (Mangal)' },
    { name: 'Taurus (Vrishabha)', planet: 'Venus (Shukra)' },
    { name: 'Gemini (Mithuna)', planet: 'Mercury (Budh)' },
    { name: 'Cancer (Karka)', planet: 'Moon (Chandra)' },
    { name: 'Leo (Simha)', planet: 'Sun (Surya)' },
    { name: 'Virgo (Kanya)', planet: 'Mercury (Budh)' },
    { name: 'Libra (Tula)', planet: 'Venus (Shukra)' },
    { name: 'Scorpio (Vrishchika)', planet: 'Mars/Ketu' },
    { name: 'Sagittarius (Dhanu)', planet: 'Jupiter (Guru)' },
    { name: 'Capricorn (Makara)', planet: 'Saturn (Shani)' },
    { name: 'Aquarius (Kumbha)', planet: 'Saturn/Rahu' },
    { name: 'Pisces (Meena)', planet: 'Jupiter (Guru)' }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    setTimeout(() => {
      let score = 75;
      let phase: AstroCalculationResult['currentPhaseEnergy'] = 'Favorable Switch Window';
      let opp = 'Strong cosmic support for title elevation in Q3-Q4.';
      let advice = 'Strengthen your 10th lord and time high-stakes negotiations on Thursdays/Sundays.';

      if (currentDilemma === 'job-switch') {
        score = 88;
        phase = 'Favorable Switch Window';
        opp = 'High probability of 45%+ salary jump if interviews are scheduled during upcoming Jovian transit.';
        advice = 'Target industry leaders and negotiate total compensation with equity packages.';
      } else if (currentDilemma === 'promotion') {
        score = 82;
        phase = 'Hyper Growth';
        opp = 'Executive sponsorship alignment is entering a 90-day golden window.';
        advice = 'Pitch your strategic portfolio directly to C-suite stakeholders before next new moon.';
      } else if (currentDilemma === 'business') {
        score = 91;
        phase = 'Strategic Consolidation';
        opp = '7th and 10th houses show strong co-founder synergy and fundraising openness.';
        advice = 'Select an auspicious Muhurta date for product beta launch to ensure market traction.';
      } else {
        score = 79;
        phase = 'Patience & Upskilling';
        opp = 'Rahu-Ketu transit indicates a high-yield pivot if combined with advanced credentialing.';
        advice = 'Perform 6th-house protective remediation to defuse office politics.';
      }

      setResult({
        zodiacSign: selectedSign,
        rulingPlanet: zodiacSigns.find((z) => z.name === selectedSign)?.planet || 'Sun (Surya)',
        careerHouse10Status: `10th House Karma Matrix calibrated for ${selectedSign}`,
        activeDasha: 'Vedic Transit Window Activated',
        currentPhaseEnergy: phase,
        alignmentScore: score,
        immediateOpportunity: opp,
        keyVedicAdvice: advice
      });
      setIsCalculating(false);
    }, 600);
  };

  return (
    <section id="free-calculator" className="py-24 relative overflow-hidden bg-[#070A14] border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-semibold text-amber-300 font-mono-code">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>INTERACTIVE VEDIC ASTROLOGY TOOL</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Free Instant Career Alignment Check <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              Calculate Your 2026–2027 Planetary Energy
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Get an instant algorithmic snapshot of your current karmic timing before diving into the complete manual 1-on-1 reading with Acharya Ganesh.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Input Form Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.1] shadow-2xl space-y-5">
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              Configure Your Parameters
            </h3>

            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Zodiac / Moon Sign */}
              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1.5">
                  1. Your Zodiac / Moon Sign (Rashi)
                </label>
                <select
                  value={selectedSign}
                  onChange={(e) => setSelectedSign(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.12] text-sm text-white focus:outline-none focus:border-amber-400 font-mono-code"
                >
                  {zodiacSigns.map((z) => (
                    <option key={z.name} value={z.name} className="bg-[#0B1020] text-white">
                      {z.name} (Ruler: {z.planet})
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Concern / Objective */}
              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1.5">
                  2. Primary Career Priority
                </label>
                <select
                  value={currentDilemma}
                  onChange={(e) => setCurrentDilemma(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.12] text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="job-switch" className="bg-[#0B1020]">
                    Strategic Job Switch & Salary Jump (50%+)
                  </option>
                  <option value="promotion" className="bg-[#0B1020]">
                    Breaking Promotion Delay / Director Elevation
                  </option>
                  <option value="business" className="bg-[#0B1020]">
                    Starting a Tech Startup / Agency / Business
                  </option>
                  <option value="politics" className="bg-[#0B1020]">
                    Defusing Corporate Politics & Workplace Toxicity
                  </option>
                  <option value="govt" className="bg-[#0B1020]">
                    UPSC / Civil Services / State Exam Selection
                  </option>
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1.5">
                  3. Seniority Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'early', label: '1–4 Years' },
                    { id: 'mid', label: '5–12 Years' },
                    { id: 'senior', label: '13+ Years / CXO' }
                  ].map((lvl) => (
                    <button
                      type="button"
                      key={lvl.id}
                      onClick={() => setExperienceLevel(lvl.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-mono-code transition-all ${
                        experienceLevel === lvl.id
                          ? 'bg-amber-400/20 border border-amber-400 text-amber-300 font-bold'
                          : 'bg-black/30 border border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                disabled={isCalculating}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isCalculating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Computing Planetary Vectors...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Calculate Instant Alignment</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6">
            {result && (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0B1020]/95 to-slate-900/90 border border-amber-400/40 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-amber-300">
                      Algorithmic Assessment
                    </span>
                    <h4 className="font-display text-xl font-bold text-white">
                      {result.zodiacSign} Karma Vector
                    </h4>
                  </div>

                  {/* Alignment Score Gauge */}
                  <div className="text-right">
                    <div className="font-mono-code text-2xl font-black text-emerald-400">
                      {result.alignmentScore}%
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono-code">Cosmic Alignment</span>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${result.alignmentScore}%` }}
                  />
                </div>

                {/* Key Insights List */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono-code text-slate-400 uppercase font-bold">
                      Current Transit Phase Energy:
                    </div>
                    <p className="text-xs font-bold text-amber-300 font-mono-code">
                      ⚡ {result.currentPhaseEnergy}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/20 space-y-1">
                    <div className="text-[10px] font-mono-code text-violet-300 uppercase font-bold">
                      Immediate Opportunity Window:
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {result.immediateOpportunity}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <div className="text-[10px] font-mono-code text-emerald-300 uppercase font-bold">
                      Acharya Ganesh Strategic Direction:
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {result.keyVedicAdvice}
                    </p>
                  </div>
                </div>

                {/* CTA to Unlock Manual Full Reading */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-5 rounded-2xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Unlock Full Manual D10 Chart Reading</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    *Algorithmic preview only. Full reading includes sub-minute D10 calculation by Acharya Ganesh.
                  </p>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
