import React, { useEffect, useState } from 'react';
import { Calendar, ExternalLink, Play, Youtube } from 'lucide-react';
import {
  ACHARYA_GANESH_YOUTUBE_VIDEOS_URL,
  HoroscopeVideoItem,
  HoroscopeVideosPayload,
  INITIAL_HOROSCOPE_VIDEOS,
  formatVideoDateUtc
} from '../data/horoscopeVideos';

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
      className="lg:col-span-12 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-7 shadow-xs"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive YouTube Player / Thumbnail */}
        <div className="lg:col-span-5">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#cfa053] bg-[#0e1b36] shadow-sm">
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
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#9e6b16] tabular-nums">
            <span className="inline-flex items-center gap-1.5 text-[#6e121b]">
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
            className="font-serif-display text-2xl sm:text-[1.75rem] font-bold text-[#4a1117] leading-snug"
          >
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9e6b16] transition-colors"
            >
              {video.title}
            </a>
          </h2>

          <p className="text-sm sm:text-[15px] text-[#31261d] leading-relaxed">
            Watch Acharya Ganesh’s latest monthly planetary transit video alongside your{' '}
            <strong className="font-semibold text-[#4a1117]">
              {signName} ({vedicName} Chandra Rashi)
            </strong>{' '}
            Monthly Horoscope. Each month’s new forecast video is synced automatically from{' '}
            <span className="font-medium text-[#6e121b]">@acharyaganeshchannel</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {!isPlaying && (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709] cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Play Monthly Video</span>
              </button>
            )}

            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#cfa053] bg-[#fffaf1] hover:bg-[#f6ead3] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#6e121b] transition-colors"
            >
              <Youtube className="w-4 h-4 text-[#c41c24]" aria-hidden="true" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={ACHARYA_GANESH_YOUTUBE_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1b3a75] hover:text-[#6e121b] hover:underline px-2 py-2 transition-colors"
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
