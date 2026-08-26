import React, { useState } from 'react';
import {
  ChevronRight,
  MessageCircle,
  Plus,
  Minus,
  CheckCircle2,
  Lock,
  Palette,
  ChevronDown,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (tier?: any) => void;
  onWatchIntro?: () => void;
  onOpenVideoIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onWatchIntro, onOpenVideoIntro }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [careerFocus, setCareerFocus] = useState('Career Path & Suitable Field Analysis');
  const [showBirthDetails, setShowBirthDetails] = useState(false);
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please provide your name and contact phone number to confirm your consultation.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger booking modal or success step
      setTimeout(() => {
        onOpenBooking('executive');
      }, 800);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Namaste Acharya Ganesh, I want to book a Career Astrology consultation for "${careerFocus}". Name: ${fullName || 'Professional'}, Phone: ${phone || 'Direct'}.`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  const planets = [
    { name: 'Sun', symbol: '☉', role: 'Authority & Govt.' },
    { name: 'Jupiter', symbol: '♃', role: 'Growth & Wisdom' },
    { name: 'Saturn', symbol: '♄', role: 'Karma & Tenure' },
    { name: 'Mercury', symbol: '☿', role: 'Business & Tech' },
    { name: 'Rahu', symbol: '☊', role: 'Foreign Careers' },
  ];

  const highlights = [
    'Identify suitable career fields matching your planetary strengths',
    'Understand auspicious timing for job change, promotion & growth',
    'Resolve business vs job dilemmas through Dashamsha (D10) chart',
    'Practical, time-tested Vedic remedies to overcome roadblocks',
  ];

  return (
    <section
      id="hero-banner"
      className="relative pt-4 pb-8 lg:pt-6 lg:pb-10 overflow-hidden bg-gradient-to-b from-[#5c270b] via-[#481d07] to-[#2e1104] text-white"
    >
      {/* 1. Sacred Vedic Geometry & Diamond Kundali Watermarks */}
      {/* Left side diamond horoscope watermark */}
      <div className="absolute top-12 -left-20 lg:left-[-60px] w-[500px] h-[500px] pointer-events-none opacity-[0.14] select-none">
        <svg viewBox="0 0 400 400" className="w-full h-full stroke-amber-200 fill-none" strokeWidth="1.2">
          {/* Outer Square */}
          <rect x="20" y="20" width="360" height="360" />
          {/* Inner Diamond (North Indian Kundali Chart) */}
          <polygon points="200,20 380,200 200,380 20,200" />
          {/* Cross lines */}
          <line x1="20" y1="20" x2="380" y2="380" />
          <line x1="380" y1="20" x2="20" y2="380" />
          <circle cx="200" cy="200" r="140" strokeDasharray="4,4" />
          <circle cx="200" cy="200" r="170" />
        </svg>
      </div>

      {/* Right side Astrolabe / Chakra watermark */}
      <div className="absolute -bottom-20 -right-20 lg:right-[-40px] w-[540px] h-[540px] pointer-events-none opacity-[0.12] select-none">
        <svg viewBox="0 0 500 500" className="w-full h-full stroke-amber-200 fill-none" strokeWidth="1">
          <circle cx="250" cy="250" r="230" />
          <circle cx="250" cy="250" r="200" strokeDasharray="6,4" />
          <circle cx="250" cy="250" r="160" />
          <circle cx="250" cy="250" r="110" />
          <circle cx="250" cy="250" r="60" />
          {/* 12 Radiant Rays */}
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

      {/* Radiant ambient glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[450px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-orange-700/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row: Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 pb-3 sm:pb-4 text-xs text-amber-200/80">
          <nav className="flex items-center gap-1.5 flex-wrap font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-amber-400/60">›</span>
            <span className="hover:text-white cursor-pointer transition-colors">Services</span>
            <span className="text-amber-400/60">›</span>
            <span className="text-amber-100 font-semibold">Career Growth & Job Uncertainty (Career Astrology)</span>
          </nav>
        </div>

        {/* Main Grid: Left Content (7 cols) + Right Consultation Card (5 cols) - Equal & Balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3c1706]/90 border border-amber-500/30 text-amber-200 text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>AUTHENTIC VEDIC CAREER GUIDANCE</span>
              </div>

              {/* Main Display Headline in Regal Serif */}
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-amber-50 leading-[1.22] tracking-tight">
                Understand Your Career Path with Vedic Astrology
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-[15px] text-amber-100/90 font-normal leading-relaxed">
                Gain deep clarity into your professional strengths, job switch timing, business potential, and customized planetary remedies through classical D1 Kundali & D10 Dashamsha analysis.
              </p>
            </div>

            {/* 5 Planetary Characteristic Chips */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                Key Planetary Career Influences:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {planets.map((p, idx) => (
                  <div
                    key={idx}
                    className="px-2.5 py-2 rounded-xl bg-[#381607]/85 border border-amber-600/25 text-center flex flex-col items-center justify-center transition-all hover:bg-[#4a1e0a]/90 hover:border-amber-500/40"
                  >
                    <div className="text-xs font-semibold text-amber-100 flex items-center justify-center gap-1">
                      <span>{p.name}</span>
                      <span className="text-amber-300 text-sm">{p.symbol}</span>
                    </div>
                    <div className="text-[10px] text-amber-200/75 leading-tight mt-0.5 whitespace-nowrap">
                      {p.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2x2 Feature Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((text, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#311306]/80 border border-amber-600/25 hover:border-amber-500/40 transition-colors flex items-start gap-2.5 text-xs sm:text-[13px] text-amber-100/95 leading-relaxed backdrop-blur-sm"
                >
                  <span className="text-amber-400 font-bold text-sm mt-[-1px] select-none">✦</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-2 border-t border-amber-600/30 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200/80">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">★ 4.9/5</span>
                <span>Client Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-300 font-bold">25,000+</span>
                <span>Charts Analyzed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">100%</span>
                <span>Confidential</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (WHITE CONSULTATION CARD) ================= */}
          <div className="lg:col-span-5 w-full flex flex-col">
            <div className="relative w-full h-full rounded-2xl bg-white text-slate-800 p-6 sm:p-7 shadow-2xl shadow-black/40 border border-stone-100 flex flex-col justify-between">
              
              {/* Top Center Pill */}
              <div className="flex justify-center mb-2">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#6d2c0d] text-amber-100 shadow-sm">
                  1-ON-1 CONSULTATION
                </span>
              </div>

              {/* Card Title & Subtitle */}
              <div className="text-center mb-4">
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Book Career Consultation
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 mt-1 font-normal">
                  Get personalized Vedic roadmap from Acharya Ganesh
                </p>
              </div>

              {/* Consultation Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/70 text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6d2c0d]/30 focus:border-[#6d2c0d] transition-all placeholder:text-stone-400"
                  />
                </div>

                {/* Phone & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/70 text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6d2c0d]/30 focus:border-[#6d2c0d] transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/70 text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6d2c0d]/30 focus:border-[#6d2c0d] transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Primary Career Focus */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Primary Career Focus <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={careerFocus}
                      onChange={(e) => setCareerFocus(e.target.value)}
                      className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/70 text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6d2c0d]/30 focus:border-[#6d2c0d] transition-all cursor-pointer pr-10"
                    >
                      <option value="Career Path & Suitable Field Analysis">Career Path & Suitable Field Analysis</option>
                      <option value="Job Switch & Salary Appraisal Timing">Job Switch & Salary Appraisal Timing</option>
                      <option value="Promotion Delay & Corporate Politics">Promotion Delay & Corporate Politics</option>
                      <option value="Business vs Job (D10 Dashamsha Analysis)">Business vs Job (D10 Dashamsha Analysis)</option>
                      <option value="Foreign Relocation & Visa Timing">Foreign Relocation & Visa Timing</option>
                      <option value="Government Exam / UPSC Astrological Window">Government Exam / UPSC Astrological Window</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Expandable Birth Details Accordion */}
                <div className="pt-0.5">
                  <button
                    type="button"
                    onClick={() => setShowBirthDetails(!showBirthDetails)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#6d2c0d] hover:text-[#522008] transition-colors focus:outline-none cursor-pointer"
                  >
                    {showBirthDetails ? (
                      <Minus className="w-3.5 h-3.5 rounded-full border border-[#6d2c0d] p-0.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 rounded-full border border-[#6d2c0d] p-0.5" />
                    )}
                    <span>Add Birth Details (Optional for Faster Reading)</span>
                  </button>

                  {showBirthDetails && (
                    <div className="mt-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-2.5 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-medium text-stone-600 mb-0.5">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-stone-200 bg-white text-stone-800 text-xs focus:outline-none focus:border-[#6d2c0d]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-stone-600 mb-0.5">
                            Time of Birth (Exact)
                          </label>
                          <input
                            type="time"
                            value={tob}
                            onChange={(e) => setTob(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-stone-200 bg-white text-stone-800 text-xs focus:outline-none focus:border-[#6d2c0d]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-0.5">
                          Place of Birth (City, State, Country)
                        </label>
                        <input
                          type="text"
                          value={pob}
                          onChange={(e) => setPob(e.target.value)}
                          placeholder="e.g. New Delhi, India"
                          className="w-full px-2.5 py-1.5 rounded-md border border-stone-200 bg-white text-stone-800 text-xs focus:outline-none focus:border-[#6d2c0d]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-amber-50 bg-[#6d2c0d] hover:bg-[#572209] active:scale-[0.99] transition-all shadow-md shadow-amber-950/20 flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></span>
                      Reserving VIP Slot...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2 text-amber-200">
                      <CheckCircle2 className="w-4 h-4" />
                      Consultation Requested!
                    </span>
                  ) : (
                    <>
                      <span>Confirm Consultation Slot</span>
                      <ChevronRight className="w-4 h-4 text-amber-200" />
                    </>
                  )}
                </button>

                {/* Instant WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#10b981] hover:bg-[#059669] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white fill-white" />
                  <span>Instant WhatsApp Booking (+91 73000-04325)</span>
                </button>

                {/* Confidentiality Footer */}
                <div className="pt-1 text-center text-[10px] text-stone-500 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-stone-400" />
                  <span>Strict Confidentiality • 100% Verified Vedic Astrologers</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
