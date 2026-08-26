import React from 'react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="border-t border-white/[0.08] bg-[#050810] py-10 sm:py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center font-cinzel font-black text-amber-300">
                  ॐ
                </div>
              </div>
              <div>
                <span className="font-display text-base font-bold text-white">
                  AstroCareer<span className="text-amber-400">™</span>
                </span>
                <p className="text-[11px] text-slate-500">Acharya Ganesh Vedic Advisory</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Empowering global executives, software architects, and founders through high-precision D1 & D10 Dashamsha career astrology, planetary timing, and authentic Vedic remedies.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono-code">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Vedic Jyotish Master • 17+ Years Practice</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#understanding-career-astrology" className="hover:text-amber-300 transition-colors">Overview</a></li>
              <li><a href="#why-choose-us" className="hover:text-amber-300 transition-colors">Why Vedic Astrology</a></li>
              <li><a href="#career-stages" className="hover:text-amber-300 transition-colors">Career Stages</a></li>
              <li><a href="#verified-testimonials" className="hover:text-amber-300 transition-colors">Client Reviews</a></li>
              <li><a href="#consultation-process" className="hover:text-amber-300 transition-colors">Consultation Process</a></li>
              <li><a href="#vedic-career-hub" className="hover:text-amber-300 transition-colors">Knowledge Hub</a></li>
              <li><a href="#career-astrology-faqs" className="hover:text-amber-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Key Diagnostics */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Diagnostics
            </h4>
            <ul className="space-y-2">
              <li><a href="#deliverables-and-diagnostics" className="hover:text-amber-300 transition-colors">10th House Karma Bhava</a></li>
              <li><a href="#deliverables-and-diagnostics" className="hover:text-amber-300 transition-colors">D10 Dashamsha Analysis</a></li>
              <li><a href="#deliverables-and-diagnostics" className="hover:text-amber-300 transition-colors">Dasha & Transit Windows</a></li>
              <li><a href="#deliverables-and-diagnostics" className="hover:text-amber-300 transition-colors">Amatyakaraka Career Lord</a></li>
              <li><a href="#deliverables-and-diagnostics" className="hover:text-amber-300 transition-colors">Authentic Vedic Remedies</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Ethics */}
          <div className="space-y-3">
            <h4 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider">
              Confidentiality
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              We operate under strict executive non-disclosure standards. Personal identity, natal charts, and consultation transcripts are never shared or indexed.
            </p>
            <div className="pt-2 text-[11px] font-mono-code text-slate-500">
              Operating Timezones: IST / EST / PST / GMT
            </div>
          </div>

        </div>

        {/* Bottom Bar with Ethical Disclaimer */}
        <div className="pt-8 border-t border-white/[0.06] space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            <strong>Ethical Vedic Disclaimer:</strong> AstroCareer consultations are meant for personal alignment, psychological clarity, and strategic timing. Vedic Astrology is a predictive science of tendencies and possibilities; it does not replace legal, financial, or medical counsel. Acharya Ganesh strictly opposes fear-mongering and superstitious guarantees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} AstroCareer™ by Acharya Ganesh. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Sparkles className="w-3 h-3 text-amber-400" /> for Global High Performers
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
