import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, FileText, Video, CheckCircle2 } from 'lucide-react';

interface ConsultationProcessProps {
  onOpenBooking?: (tier?: any) => void;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = () => {
  const steps = [
    {
      number: '01',
      phase: 'PHASE 1',
      title: 'Book Your Consultation',
      badge: 'Flexible slots available 7 days a week',
      icon: Calendar
    },
    {
      number: '02',
      phase: 'PHASE 2',
      title: 'Share Your Career Birth Details',
      badge: '100% confidential & encrypted data handling',
      icon: FileText
    },
    {
      number: '03',
      phase: 'PHASE 3',
      title: 'Receive Personalized Career Guidance',
      badge: 'Includes remedy chart + post-session summary',
      icon: Video
    }
  ];

  return (
    <section
      id="consultation-process"
      className="py-7 sm:py-9 bg-[#F5ECE1] text-stone-800 relative overflow-hidden border-b border-[#E4D4C3]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">SIMPLE 3-STEP PROCESS</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2] text-[#23120A]">
            How Your Career Astrology Consultation Works
          </h2>

          <p className="mt-2.5 text-xs sm:text-base font-normal leading-relaxed text-stone-700">
            A structured, seamless and completely confidential step-by-step pathway from booking to direct astrological clarity.
          </p>
        </div>

        {/* Connected Vertical Stepper Container */}
        <div className="relative pl-6 sm:pl-16 space-y-6 lg:space-y-7">
          <div className="absolute left-[23px] sm:left-[35px] top-6 bottom-6 w-[2px] bg-[#D4BA9F]" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-sm -ml-6 sm:-ml-7 transition-colors bg-[#F5ECE1] border-2 border-[#C69C72] text-[#6B2E13] group-hover:border-[#6B2E13]">
                  <span className="font-serif-display text-sm sm:text-base font-bold tabular-nums">
                    {step.number}
                  </span>
                </div>

                {/* Step Content Card */}
                <div className="flex-1 rounded-2xl bg-white p-5 sm:p-6 shadow-sm transition-all border border-[#E8DACB] hover:shadow-md hover:border-[#D8BF9F]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F6EFE6] border border-[#EADAC9] text-[#6B2E13]">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8A4A28]">
                          {step.phase}
                        </div>
                        <h3 className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-[#23120A]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-semibold text-[#15803D] self-start sm:self-auto">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>{step.badge}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
