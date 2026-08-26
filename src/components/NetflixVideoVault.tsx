import React, { useState, useRef } from 'react';
import { VIDEO_VAULT } from '../data/careerAstrologyData';
import { VideoItem } from '../types';
import {
  Play,
  Clock,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Tv,
  CheckCircle2
} from 'lucide-react';

interface NetflixVideoVaultProps {
  onPlayVideo: (video: VideoItem) => void;
}

export const NetflixVideoVault: React.FC<NetflixVideoVaultProps> = ({ onPlayVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = ['All', 'Job Switch', 'D10 Masterclass', 'Govt vs Corporate', 'Remedies', 'Case Study'];

  const filteredVideos =
    activeCategory === 'All'
      ? VIDEO_VAULT
      : VIDEO_VAULT.filter((v) => v.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
              <Tv className="w-3.5 h-3.5 text-amber-400" />
              <span>NETFLIX-STYLE MASTERCLASS VAULT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Watch Acharya Ganesh Live: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
                Career Astrology Breakdown Videos
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Real-world case studies, D10 Dashamsha calculation tutorials, and executive timing masterclasses.
            </p>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll Carousel Left"
              className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll Carousel Right"
              className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-code font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Netflix Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scroll-smooth snap-x no-scrollbar"
        >
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              onClick={() => onPlayVideo(video)}
              className="min-w-[300px] sm:min-w-[380px] max-w-[380px] rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group cursor-pointer flex flex-col justify-between snap-start"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-transparent" />

                {/* Central Play Button Overlay with Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-400/90 group-hover:bg-amber-300 group-hover:scale-110 shadow-xl shadow-amber-500/30 flex items-center justify-center transition-all duration-300">
                    <Play className="w-6 h-6 text-slate-950 fill-slate-950 ml-1" />
                  </div>
                </div>

                {/* Top Duration & Views Pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
                    {video.category}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-black/70 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {video.duration}
                  </span>
                </div>

                {/* Bottom Speaker Pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-mono-code text-slate-300">
                  <Eye className="w-3 h-3 text-slate-400" />
                  <span>{video.views}</span>
                </div>
              </div>

              {/* Video Info Container */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono-code text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Key Principle:
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {video.keyTakeaway}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
