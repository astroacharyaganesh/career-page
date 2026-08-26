import React, { useState } from 'react';
import {
  Play,
  Sparkles,
  Clock,
  Tv
} from 'lucide-react';
import { motion } from 'motion/react';

interface SingleVideoSectionProps {
  onOpenBooking: (tier?: any) => void;
}

export const SingleVideoSection: React.FC<SingleVideoSectionProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // High quality embeddable YouTube video on Career Astrology / Vedic Guidance
  const youtubeVideoId = 'tgbNymZ7vqY';

  return (
    <section
      id="featured-video-guidance"
      className="py-7 sm:py-9 bg-[#1B0C06] text-stone-200 relative overflow-hidden border-b border-amber-950/50"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fcd34d 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#36180C] border border-amber-600/40 text-[11px] font-semibold text-amber-300 mb-2 shadow-sm">
            <Tv className="w-3 h-3 text-amber-400" />
            <span className="uppercase tracking-wider">FEATURED VIDEO MASTERCLASS</span>
          </div>

          <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[28px] font-bold text-amber-50 tracking-tight leading-[1.25]">
            Watch Acharya Ganesh Explain Vedic Career Astrology
          </h2>
        </motion.div>

        {/* Video Player Container Card - Compact & Minimized Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.25, ease: 'easeOut' }
          }}
          className="rounded-2xl bg-[#261208] border border-amber-500/40 p-2.5 sm:p-3.5 shadow-xl shadow-black/70 relative"
        >
          
          {/* Main 16:9 Video Box - Compact Frame */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-amber-900/60 shadow-lg group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title="Acharya Ganesh Vedic Career Astrology Guide"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* Custom Thumbnail Overlay */}
                <motion.img
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
                  alt="Career Astrology Video Preview"
                  className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B0C06]/90 via-black/30 to-black/40" />

                {/* Pulsing Compact Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 15px rgba(245, 158, 11, 0.3)',
                        '0 0 30px rgba(245, 158, 11, 0.5)',
                        '0 0 15px rgba(245, 158, 11, 0.3)'
                      ]
                    }}
                    transition={{
                      scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                      boxShadow: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-0.5 shadow-xl shadow-amber-500/40"
                  >
                    <div className="w-full h-full rounded-full bg-[#2A1309] flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 fill-amber-300 ml-1" />
                    </div>
                  </motion.div>
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-semibold text-amber-200 border border-amber-500/30 shadow-sm">
                    Click to Play (16:40)
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#3D1A0C]/90 backdrop-blur-md border border-amber-600/40 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                    HD MASTERCLASS
                  </span>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-amber-200/90">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Duration: 16m 40s</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300 text-[11px]">
                    <Sparkles className="w-3 h-3" />
                    <span>Acharya Ganesh Official</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
