import React, { useState } from 'react';
import { FAQS_LIST } from '../data/careerAstrologyData';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

interface FaqSectionProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Accuracy & Science', 'Consultation', 'Timing & Privacy', 'Remedies'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS_LIST
      : FAQS_LIST.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              Clarity, Ethics & Methodology
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Got specific questions about birth time accuracy, confidentiality, or remedial measures? Find instant answers below.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-code font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = activeFaqId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-accordion-${faq.id}`}
                className="rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-300">
                      {faq.category}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:text-amber-300 flex-shrink-0 transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-200 space-y-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 max-w-xl mx-auto p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a unique question not covered here? Speak directly with our executive coordinator.
          </p>
          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp Support (Instant Reply)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
