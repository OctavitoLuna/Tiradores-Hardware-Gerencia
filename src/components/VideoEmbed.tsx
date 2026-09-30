import React from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  url: string;
  title: string;
  channel?: string;
}

export default function VideoEmbed({ url, title, channel }: VideoEmbedProps) {
  // If no URL is provided, show a placeholder
  if (!url || url === 'PENDIENTE DE PEGAR') {
    return (
      <div className="w-full aspect-video bg-surface text-foreground-inverse flex flex-col items-center justify-center p-6 text-center border-4 border-background-dark my-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
          <Play size={24} className="ml-1" />
        </div>
        <h4 className="font-display text-2xl tracking-wide uppercase">{title}</h4>
        {channel && <p className="text-gray-400 mt-2 font-sans text-sm">Canal: {channel}</p>}
        <div className="mt-4 px-4 py-1 border border-primary text-primary text-xs uppercase tracking-widest font-bold">
          Video Pendiente
        </div>
      </div>
    );
  }

  // Extract video ID for YouTube embed
  let videoId = '';
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes('youtube.com')) {
      videoId = parsedUrl.searchParams.get('v') || '';
    } else if (parsedUrl.hostname.includes('youtu.be')) {
      videoId = parsedUrl.pathname.slice(1);
    }
  } catch (e) {
    // invalid url
  }

  if (videoId) {
    return (
      <div className="w-full aspect-video my-8">
        <iframe
          className="w-full h-full border-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Fallback for non-youtube links
  return (
    <div className="w-full aspect-video bg-surface text-foreground-inverse flex flex-col items-center justify-center p-6 text-center border-4 border-background-dark my-8">
       <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Video</a>
    </div>
  );
}
