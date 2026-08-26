import React from 'react';
import { VideoItem } from '../types';
import {
  X,
  Play,
  Clock,
  Eye,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose,
  onOpenBooking
}) => {
  if (!video) return null;

  return (
    <div
      id="video-player-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#0B1020] border border-amber-400/40 p-6 sm:p-8 shadow-2xl shadow-black space-y-6 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1] shadow-2xl group">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover filter brightness-75 contrast-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-black/30 to-transparent" />

          {/* Animated Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-amber-400/90 shadow-2xl shadow-amber-500/40 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
              <Play className="w-8 h-8 text-slate-950 fill-slate-950 ml-1.5" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-slate-300">
            <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
              {video.category} • HD 1080p Masterclass
            </span>
            <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
              Duration: {video.duration}
            </span>
          </div>
        </div>

        {/* Video Info & Takeaways */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
              <Eye className="w-3.5 h-3.5" />
              <span>{video.views}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {video.description}
          </p>

          <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-500/25 space-y-1.5">
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Key Vedic Principle Revealed in this Video:
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {video.keyTakeaway}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Have a specific case like this? Consult Acharya directly.</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book D10 Analysis with Acharya Ganesh</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
