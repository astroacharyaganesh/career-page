import React, { useState } from 'react';
import { FAQS_LIST } from '../data/careerAstrologyData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqSectionProps {
  onOpenWhatsApp?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(FAQS_LIST[0]?.id || 'faq-1');

  return (
    <section id="faqs" className="py-16 sm:py-20 relative overflow-hidden bg-[#070A14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
        </div>
        {FAQS_LIST.map((faq) => {
          const isOpen = activeFaqId === faq.id;
          return (
            <div key={faq.id} className="rounded-2xl overflow-hidden bg-slate-900/70 border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <h3 className="font-display text-base font-bold text-white">{faq.question}</h3>
                {isOpen ? <ChevronUp className="w-5 h-5 text-amber-300" /> : <ChevronDown className="w-5 h-5 text-slate-300" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-slate-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
