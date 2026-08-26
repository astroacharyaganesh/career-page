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
      icon: Calendar,
      description:
        'Select your preferred time slot and consultation format (1-on-1 Video Call via Zoom/Meet, Audio Call, or Comprehensive Written PDF Report).',
      bullets: [
        'Choose 1-on-1 Video (Zoom/Meet), Phone, or Written Report',
        'Instant calendar confirmation across all global timezones',
        'Flexible rescheduling anytime up to 12 hours prior'
      ]
    },
    {
      number: '02',
      phase: 'PHASE 2',
      title: 'Share Your Career Birth Details',
      badge: '100% confidential & encrypted data handling',
      icon: FileText,
      description:
        'Provide your accurate date, exact time, and city of birth. If birth time is slightly uncertain, our team applies Birth Time Rectification (BTR) principles.',
      bullets: [
        'Submit Birth Date, Time & City of Birth securely',
        'Free Birth Time Rectification (BTR) for uncertain birth times',
        '100% confidential, encrypted astrological privacy'
      ]
    },
    {
      number: '03',
      phase: 'PHASE 3',
      title: 'Receive Personalized Career Guidance',
      badge: 'Includes remedy chart + post-session summary',
      icon: Video,
      description:
        'Direct interactive session with Acharya Hanish Bagga. Receive deep Kundli diagnostics, exact timing predictions, tailored Vedic remedies, and ask all your questions.',
      bullets: [
        'Live 1-on-1 direct session with Acharya Hanish Bagga',
        'Detailed D1 & D10 chart mapping with exact month-by-month timing',
        'Prescribed Vedic gemstone, mantra & behavioral remedies'
      ]
    }
  ];

  return (
    <section
      id="consultation-process"
      className="py-16 lg:py-24 bg-[#F5ECE1] text-stone-800 relative overflow-hidden border-b border-[#E4D4C3]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block matching the screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">SIMPLE 3-STEP PROCESS</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            How Your Career Astrology Consultation Works
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
            A structured, seamless, and completely confidential step-by-step pathway from booking to direct astrological clarity.
          </p>

        </div>

        {/* Connected Vertical Stepper Container */}
        <div className="relative pl-6 sm:pl-16 space-y-8 lg:space-y-10">
          
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

                {/* Step Content Card matching screenshot */}
                <div className="flex-1 rounded-2xl bg-white border border-[#E8DACB] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#D8BF9F] transition-all duration-300">
                  
                  {/* Top Row: Icon + Phase + Title + Green Pill Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
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

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-4 pt-1">
                    {step.description}
                  </p>

                  {/* Bullet points with gold circles */}
                  <div className="pt-3 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-stone-700">
                    {step.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#C69C72] font-bold text-sm leading-none mt-0.5 select-none">☉</span>
                        <span className="text-stone-600 text-[11px] sm:text-xs">{bullet}</span>
                      </div>
                    ))}
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
