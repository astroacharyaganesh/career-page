import React from 'react';
import {
  Award,
  Users,
  Shield,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  onOpenBooking?: (tier?: any) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Get Expert Vedic Career Analysis'
    },
    {
      icon: Users,
      title: 'Personalized Horoscope-Based Guidance'
    },
    {
      icon: Shield,
      title: 'Practical Direction Instead of Generic Answers'
    },
    {
      icon: Briefcase,
      title: 'Experience Across Different Career Situations'
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 lg:py-20 bg-[#F4EBE0] text-stone-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">WHY CHOOSE OUR CAREER ASTROLOGY SERVICES?</span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            Why Choose Our Career Astrology Services?
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
            Personalized Vedic insights and practical roadmaps formulated from your birth chart by Acharya Ganesh.
          </p>

        </motion.div>

        {/* 4 Clean Minimal Cards with Staggered Wavy Zoom-Out Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.18, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.18,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className="group relative"
              >
                {/* Continuous Staggered Harmonic Floating Wave */}
                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    scale: [1, 0.988, 1]
                  }}
                  transition={{
                    duration: 3.6,
                    delay: idx * 0.45,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                  className="w-full h-full rounded-2xl bg-white border border-[#E9DACB] p-6 sm:p-7 shadow-sm group-hover:shadow-lg group-hover:border-[#D4B99D] transition-all flex flex-col justify-between items-start min-h-[160px]"
                >
                  {/* Icon in Rounded Box with subtle rotation */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] mb-4 group-hover:bg-[#EEDDC8] transition-colors"
                  >
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </motion.div>

                  {/* Card Title */}
                  <h3 className="font-serif-display text-lg sm:text-[19px] font-bold text-[#23120A] leading-snug group-hover:text-[#6B2E13] transition-colors">
                    {pillar.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

