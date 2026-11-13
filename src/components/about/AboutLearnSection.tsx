import React, { useState } from 'react';
import { AboutPageCmsData } from '../../data/aboutPageData';
import videoThumb from '../../assets/images/acharya_ganesh_video_thumbnail_1787737353353.jpg';
import { BookOpen, Play, Youtube } from 'lucide-react';

interface AboutLearnSectionProps {
  data: AboutPageCmsData['learning'];
}

export const AboutLearnSection: React.FC<AboutLearnSectionProps> = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="learn-with-him"
      aria-labelledby="learn-heading"
      className="py-12 sm:py-16 bg-[#F5ECE1] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Verbatim Section 9 Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2
              id="learn-heading"
              className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-[1.2]"
            >
              {data.heading}
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-xl">
              {data.body}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href={data.coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#6B2E13] hover:bg-[#52210C] transition-colors shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{data.coursesCta}</span>
              </a>

              <a
                href={data.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#23120A] bg-white hover:bg-stone-50 border border-[#D8C3AD] transition-colors shadow-2xs flex items-center gap-2"
              >
                <Youtube className="w-4 h-4 text-[#B91C1C]" />
                <span>{data.youtubeCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Playable Video Lesson Preview */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#D8C3AD] bg-[#23120A] shadow-xl">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=UU0_3Y9r2a1b4c5d6e7f8g9h&autoplay=1"
                  title="Acharya Ganesh Vedic Astrology Lessons"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Vedic astrology video lesson"
                  className="group relative w-full h-full block cursor-pointer focus:outline-none"
                >
                  <img
                    src={videoThumb}
                    alt="Acharya Ganesh Vedic astrology video lesson"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400 text-[#23120A] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                      <Play className="w-7 h-7 fill-[#23120A] ml-0.5" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
