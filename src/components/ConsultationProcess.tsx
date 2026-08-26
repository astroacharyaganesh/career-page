import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  FileText,
  Video,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react';

interface ConsultationProcessProps {
  onOpenBooking?: (tier?: any) => void;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = ({ onOpenBooking }) => {
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
        
        {/* Top Header Block matching the screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">SIMPLE 3-STEP PROCESS</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            How Your Career Astrology Consultation Works
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
            A structured, seamless and completely confidential step-by-step pathway from booking to direct astrological clarity.
          </p>

        </div>

        {/* Connected Vertical Stepper Container */}
        <div className="relative pl-6 sm:pl-16 space-y-6 lg:space-y-8">
          
          {/* Vertical Connecting Line with scroll reveal */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[23px] sm:left-[35px] top-6 bottom-6 w-[2px] bg-[#D4BA9F]"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                
                {/* Step Number Circle with bounce scale */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2 + 0.1,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                  className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5ECE1] border-2 border-[#C69C72] flex items-center justify-center shadow-sm -ml-6 sm:-ml-7 group-hover:border-[#6B2E13] group-hover:scale-105 transition-all duration-300"
                >
                  <span className="font-serif-display text-sm sm:text-base font-bold text-[#6B2E13]">
                    {step.number}
                  </span>
                </motion.div>

                {/* Step Content Card */}
                <div className="flex-1 rounded-2xl bg-white border border-[#E8DACB] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#D8BF9F] transition-all duration-300">
                  
                  {/* Top Row: Icon + Phase + Title + Green Pill Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#EADAC9] flex items-center justify-center text-[#6B2E13] flex-shrink-0 group-hover:bg-[#EBDDCB] transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#8A4A28] uppercase tracking-wider">
                          {step.phase}
                        </div>
                        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#23120A] tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-semibold text-[#15803D] self-start sm:self-auto shadow-2xs">
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
