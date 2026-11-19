import React, { useEffect, useState } from 'react';
import { Calendar, ExternalLink, Play, Youtube } from 'lucide-react';
import {
  ACHARYA_GANESH_YOUTUBE_VIDEOS_URL,
  HoroscopeVideoItem,
  HoroscopeVideosPayload,
  INITIAL_HOROSCOPE_VIDEOS,
  formatVideoDateUtc
} from '../data/horoscopeVideos';
import { SacredMandalaAccent } from './SacredMandalaAccent';

interface MonthlyHoroscopeVideoCardProps {
  signName: string;
  vedicName: string;
}

export const MonthlyHoroscopeVideoCard: React.FC<MonthlyHoroscopeVideoCardProps> = ({
  signName,
  vedicName
}) => {
  const [video, setVideo] = useState<HoroscopeVideoItem>(INITIAL_HOROSCOPE_VIDEOS.monthly);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let active = true;

    const loadLatestMonthlyVideo = async () => {
      try {
        const res = await fetch('/api/horoscope-videos');
        if (!res.ok) return;
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) return;
        const payload = (await res.json()) as Partial<HoroscopeVideosPayload>;
        if (active && payload.monthly?.id) {
          setVideo(payload.monthly);
        }
      } catch {
        // Retain deterministic SSR fallback when offline
      }
    };

    loadLatestMonthlyVideo();
    return () => {
      active = false;
    };
  }, []);

  const formattedDate = formatVideoDateUtc(video.publishedAt);

  return (
    <section
      aria-labelledby="monthly-horoscope-video-heading"
      className="lg:col-span-12 relative overflow-hidden rounded-2xl border border-[#cfa458] bg-gradient-to-r from-[#09142b] via-[#14274c] to-[#3f161c] p-5 sm:p-7 text-[#fffcf4] shadow-md"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -bottom-16 text-[#f4ce7c] opacity-15"
      >
        <SacredMandalaAccent className="w-[300px] h-[300px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive YouTube Player / Thumbnail */}
        <div className="lg:col-span-5">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-[#e0b458] bg-[#070f21] shadow-lg">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play Monthly Horoscope Video: ${video.title}`}
                className="group relative h-full w-full block cursor-pointer text-left"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#fae091] bg-[#6e121b]/95 text-[#fae091] shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Heading, Details & YouTube Actions */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#fae091] tabular-nums">
            <span className="inline-flex items-center gap-1.5 text-[#f6cf77]">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Monthly Horoscope Video</span>
            </span>
            {formattedDate && (
              <>
                <span aria-hidden="true" className="text-[#cfa053]">·</span>
                <span>{formattedDate}</span>
              </>
            )}
            <span aria-hidden="true" className="text-[#cfa053]">·</span>
            <span>Hanish Bagga</span>
          </div>

          <h2
            id="monthly-horoscope-video-heading"
            className="font-serif-display text-2xl sm:text-[1.75rem] font-bold text-[#fffcf4] leading-snug"
          >
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fae091] transition-colors"
            >
              {video.title}
            </a>
          </h2>

          <p className="text-sm sm:text-[15px] text-[#efe5d2] leading-relaxed">
            Watch Acharya Ganesh’s latest monthly planetary transit video alongside your{' '}
            <strong className="font-semibold text-[#fae091]">
              {signName} ({vedicName} Chandra Rashi)
            </strong>{' '}
            Monthly Horoscope. Each month’s new forecast video is synced automatically from{' '}
            <span className="font-medium text-[#f5d384]">@acharyaganeshchannel</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {!isPlaying && (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709] cursor-pointer transition-all shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Play Monthly Video</span>
              </button>
            )}

            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#cfa458]/80 bg-white/10 hover:bg-white/18 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#fffcf4] transition-colors"
            >
              <Youtube className="w-4 h-4 text-[#ff6b6b]" aria-hidden="true" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={ACHARYA_GANESH_YOUTUBE_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#fae091] hover:text-white hover:underline px-2 py-2 transition-colors"
            >
              <span>More Videos on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
