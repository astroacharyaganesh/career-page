import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Compass, ExternalLink, Play, Youtube } from 'lucide-react';
import { getPeriodHref, ZodiacId } from '../data/horoscopeData';
import {
  ACHARYA_GANESH_YOUTUBE_VIDEOS_URL,
  HoroscopeVideoItem,
  HoroscopeVideosPayload,
  INITIAL_HOROSCOPE_VIDEOS,
  formatVideoDateUtc
} from '../data/horoscopeVideos';
import { AppLink } from './AppLink';
import { SacredMandalaAccent } from './SacredMandalaAccent';

interface HoroscopeVideoForecastsProps {
  selectedSignId?: ZodiacId;
}

export const HoroscopeVideoForecasts: React.FC<HoroscopeVideoForecastsProps> = ({
  selectedSignId: rawSignId
}) => {
  const selectedSignId: ZodiacId = rawSignId ?? 'aries';
  const [videos, setVideos] = useState<HoroscopeVideosPayload>(INITIAL_HOROSCOPE_VIDEOS);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadLatestVideos = async () => {
      try {
        const res = await fetch('/api/horoscope-videos');
        if (!res.ok) return;
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) return;
        const payload = (await res.json()) as Partial<HoroscopeVideosPayload>;
        if (active && payload.monthly?.id && payload.yearly?.id) {
          setVideos({
            channelUrl: payload.channelUrl || INITIAL_HOROSCOPE_VIDEOS.channelUrl,
            source: payload.source || 'live-rss',
            monthly: payload.monthly,
            yearly: payload.yearly
          });
        }
      } catch {
        // Keep deterministic channel fallback if offline
      }
    };

    loadLatestVideos();
    return () => {
      active = false;
    };
  }, []);

  const cards: {
    key: 'monthly' | 'yearly';
    label: string;
    subtitle: string;
    video: HoroscopeVideoItem;
    readHref: string;
    readLabel: string;
    Icon: typeof Calendar;
  }[] = [
    {
      key: 'monthly',
      label: 'Monthly Horoscope Video',
      subtitle: 'Latest monthly Rashi & transit forecast',
      video: videos.monthly,
      readHref: getPeriodHref('Monthly', selectedSignId),
      readLabel: 'Read Monthly Rashifal',
      Icon: Calendar
    },
    {
      key: 'yearly',
      label: 'Yearly Horoscope Video',
      subtitle: 'Latest annual Rashifal & major planetary outlook',
      video: videos.yearly,
      readHref: getPeriodHref('Yearly', selectedSignId),
      readLabel: 'Read Yearly Rashifal',
      Icon: Compass
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#cfa458] bg-gradient-to-r from-[#09142b] via-[#13254a] to-[#3c1018] p-4 sm:p-6 text-[#fffcf4] shadow-lg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -bottom-14 text-[#f4ce7c] opacity-15"
      >
        <SacredMandalaAccent className="w-[280px] h-[280px]" />
      </div>

      {/* Compact Header Row */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-[#cfa458]/35">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e0b458] bg-[#6e121b] text-[#fae091] shadow-sm">
            <Youtube className="w-5 h-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#fae091] leading-tight">
              Monthly &amp; Yearly Horoscope Videos
            </h3>
            <p className="text-[11px] sm:text-xs text-[#e6dac4]">
              Automatically updated with our latest monthly &amp; annual YouTube forecasts by Hanish Bagga
            </p>
          </div>
        </div>

        <a
          href={ACHARYA_GANESH_YOUTUBE_VIDEOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-bold text-[#fae091] hover:text-white transition-colors whitespace-nowrap"
        >
          <span>@acharyaganeshchannel</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* 2 Compact Horizontal Video Cards */}
      <div className="relative z-10 mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {cards.map((card) => {
          const { video, Icon } = card;
          const isPlaying = playingVideoId === `${card.key}-${video.id}`;
          const formattedDate = formatVideoDateUtc(video.publishedAt);

          return (
            <article
              key={card.key}
              className="group flex flex-col sm:flex-row gap-3.5 rounded-xl border border-[#cfa458]/45 bg-[#0d1933]/85 hover:border-[#fae091]/80 p-3.5 transition-all"
            >
              {/* Video Thumbnail / Inline Player */}
              <div className="relative aspect-video w-full sm:w-48 shrink-0 overflow-hidden rounded-lg border border-[#e0b458]/70 bg-[#060d1c] shadow-sm">
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
                    onClick={() => setPlayingVideoId(`${card.key}-${video.id}`)}
                    aria-label={`Play ${card.label}: ${video.title}`}
                    className="relative h-full w-full block cursor-pointer text-left"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#fae091] bg-[#6e121b]/95 text-[#fae091] shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                )}
              </div>

              {/* Heading, Metadata & YouTube Links */}
              <div className="flex flex-1 min-w-0 flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#fae091] tabular-nums">
                    <span className="inline-flex items-center gap-1 text-[#f6cf77]">
                      <Icon className="w-3 h-3" aria-hidden="true" />
                      <span>{card.label}</span>
                    </span>
                    {formattedDate && (
                      <>
                        <span aria-hidden="true" className="text-[#cfa053]">·</span>
                        <span className="text-[#e6dac4]">{formattedDate}</span>
                      </>
                    )}
                  </div>

                  <h4 className="mt-1 font-serif-display text-sm sm:text-[15px] font-bold text-[#fffcf4] leading-snug line-clamp-2">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fae091] transition-colors"
                    >
                      {video.title}
                    </a>
                  </h4>

                  <p className="mt-1 text-xs text-[#d6cab4] line-clamp-1">{card.subtitle}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 text-xs">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#fae091] hover:text-white transition-colors whitespace-nowrap"
                  >
                    <Youtube className="w-3.5 h-3.5 text-[#ff6b6b]" aria-hidden="true" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>

                  <AppLink
                    href={card.readHref}
                    className="inline-flex items-center gap-1 font-semibold text-[#f5dec0] hover:text-[#fae091] transition-colors whitespace-nowrap"
                  >
                    <span>{card.readLabel}</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </AppLink>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
