import React, { useState } from 'react';
import {
  Play,
  Sparkles,
  Clock,
  Tv
} from 'lucide-react';

interface SingleVideoSectionProps {
  onOpenBooking: (tier?: any) => void;
}

export const SingleVideoSection: React.FC<SingleVideoSectionProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // High quality embeddable YouTube video on Career Astrology / Vedic Guidance
  // Using an embeddable educational video ID with privacy-enhanced youtube-nocookie
  const youtubeVideoId = 'tgbNymZ7vqY'; // Standard embeddable video or fallback

  return (
    <section
      id="featured-video-guidance"
      className="py-12 lg:py-16 bg-[#1B0C06] text-stone-200 relative overflow-hidden border-b border-amber-950/50"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#36180C] border border-amber-600/40 text-xs font-semibold text-amber-300 mb-4 shadow-sm">
            <Tv className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-wider">FEATURED VIDEO MASTERCLASS</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-amber-50 tracking-tight leading-[1.2]">
            Watch Acharya Ganesh Explain Vedic Career Astrology
          </h2>
        </div>

        {/* Video Player Container Card */}
        <div className="rounded-3xl bg-[#261208] border-2 border-amber-500/40 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80 relative">
          
          {/* Main 16:9 Video Box */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-amber-900/60 shadow-2xl group">
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
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
                  alt="Career Astrology Video Preview"
                  className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B0C06] via-black/30 to-black/40" />

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-1 shadow-2xl shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-[#2A1309] flex items-center justify-center">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 text-amber-300 fill-amber-300 ml-1.5" />
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-semibold text-amber-200 border border-amber-500/30">
                    Click to Play Masterclass (16:40)
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#3D1A0C]/90 backdrop-blur-md border border-amber-600/40 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    HD 1080P MASTERCLASS
                  </span>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-amber-200/90">
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Duration: 16 Mins 40 Secs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Acharya Ganesh Official Channel</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
