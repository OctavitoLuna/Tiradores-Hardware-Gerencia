import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Play } from 'lucide-react';
import Badge from './Badge';

export interface VideoCardProps {
  title: string;
  url: string;
  channel?: string;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  url,
  channel,
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID
  const getYouTubeId = (videoUrl: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <div
      className={cn(
        'group bg-white rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal brutal-card-hover overflow-hidden flex flex-col',
        className
      )}
    >
      {/* Video Viewport */}
      <div className="relative aspect-video w-full bg-[#0A0A0A] border-b-[3px] border-[#0A0A0A] overflow-hidden">
        {isPlaying && videoId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative cursor-pointer group flex items-center justify-center overflow-hidden"
            aria-label={`Reproducir video: ${title}`}
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="w-16 h-16 rounded-full border-[3px] border-[#0A0A0A] bg-[#FFE500] text-[#0A0A0A] flex items-center justify-center shadow-brutal group-hover:scale-110 group-hover:bg-[#FF3DCB] group-hover:text-white transition-all z-10">
              <Play size={28} className="fill-current ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* Video Information */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {channel && (
            <div className="mb-2">
              <Badge color="yellow" size="sm">
                <svg className="w-3.5 h-3.5 inline mr-1 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {channel}
              </Badge>
            </div>
          )}
          <h3 className="font-display font-bold text-lg md:text-xl text-[#0A0A0A] uppercase tracking-wide leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
