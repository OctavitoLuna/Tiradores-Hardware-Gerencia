import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { ZoomIn, ZoomOut, Maximize2, Minimize2, Download, X, Sparkles } from 'lucide-react';
import Button from './Button';

export interface DiagramViewerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  downloadFilename: string;
  badgeText?: string;
  className?: string;
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({
  title,
  subtitle,
  imageSrc,
  downloadFilename,
  badgeText = 'DIAGRAMA VECTORIAL OFICIAL',
  className
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setScale(1);

  return (
    <div className={cn('w-full', className)}>
      {/* Main Container */}
      <div className="bg-white rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal p-6 md:p-8">
        
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-[3px] border-[#0A0A0A]">
          <div>
            <div className="inline-block px-3 py-1 bg-[#FFE500] border-[2px] border-[#0A0A0A] rounded-md font-display font-bold text-xs uppercase mb-2 shadow-[2px_2px_0_#0A0A0A]">
              {badgeText}
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-[#0A0A0A] uppercase tracking-wide">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs md:text-sm text-[#0A0A0A]/70 font-sans mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Square brutalist action buttons */}
            <button
              type="button"
              onClick={handleZoomIn}
              className="w-10 h-10 rounded-xl border-[2px] border-[#0A0A0A] bg-white hover:bg-[#FFE500] flex items-center justify-center font-bold shadow-[2px_2px_0_#0A0A0A] cursor-pointer transition-colors"
              title="Aumentar zoom"
            >
              <ZoomIn size={18} />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="w-10 h-10 rounded-xl border-[2px] border-[#0A0A0A] bg-white hover:bg-[#FFE500] flex items-center justify-center font-bold shadow-[2px_2px_0_#0A0A0A] cursor-pointer transition-colors"
              title="Reducir zoom"
            >
              <ZoomOut size={18} />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsZoomed(true);
                setScale(1);
              }}
              className="px-3.5 h-10 rounded-xl border-[2px] border-[#0A0A0A] bg-[#00C2CB] text-[#0A0A0A] hover:bg-[#00AFB7] flex items-center gap-1.5 font-display font-bold text-xs uppercase shadow-[2px_2px_0_#0A0A0A] cursor-pointer transition-colors"
              title="Ver en pantalla completa"
            >
              <Maximize2 size={16} />
              <span>Pantalla Completa</span>
            </button>
            <a
              href={imageSrc}
              download={downloadFilename}
              className="px-3.5 h-10 rounded-xl border-[2px] border-[#0A0A0A] bg-[#C1522A] text-white hover:bg-[#A5411E] flex items-center gap-1.5 font-display font-bold text-xs uppercase shadow-[2px_2px_0_#0A0A0A] transition-colors"
              title="Descargar SVG"
            >
              <Download size={16} />
              <span>Descargar SVG</span>
            </a>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div 
          onClick={() => {
            setIsZoomed(true);
            setScale(1);
          }}
          className="relative w-full overflow-hidden rounded-xl border-[3px] border-[#0A0A0A] bg-[#FAF5DC] p-4 sm:p-8 flex items-center justify-center min-h-[420px] md:min-h-[520px] cursor-pointer group"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-h-[600px] object-contain transition-transform duration-300 group-hover:scale-[1.02] select-none"
          />

          <div className="absolute bottom-4 right-4 bg-[#0A0A0A] text-[#FAF5DC] border-[2px] border-[#FFE500] px-4 py-2 rounded-full font-display font-bold text-xs uppercase shadow-brutal-sm flex items-center gap-2 group-hover:scale-105 transition-transform">
            <Maximize2 size={14} className="text-[#FFE500]" />
            <span>Haz clic para explorar con zoom</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm flex flex-col items-center justify-center p-3 md:p-6"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="bg-white rounded-2xl border-[4px] border-[#0A0A0A] shadow-brutal-xl max-w-7xl w-full h-[92vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 md:p-5 border-b-[3px] border-[#0A0A0A] bg-[#FAF5DC] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-xl md:text-2xl text-[#0A0A0A] uppercase">
                  {title}
                </h4>
                <p className="text-xs text-[#0A0A0A]/70 font-sans">
                  Vista ampliada e interactiva de alta fidelidad
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="w-9 h-9 rounded-lg border-[2px] border-[#0A0A0A] bg-white hover:bg-[#FFE500] flex items-center justify-center font-bold shadow-[2px_2px_0_#0A0A0A] cursor-pointer"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2.5 h-9 rounded-lg border-[2px] border-[#0A0A0A] bg-white font-mono text-xs font-bold shadow-[2px_2px_0_#0A0A0A] cursor-pointer"
                >
                  {Math.round(scale * 100)}%
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="w-9 h-9 rounded-lg border-[2px] border-[#0A0A0A] bg-white hover:bg-[#FFE500] flex items-center justify-center font-bold shadow-[2px_2px_0_#0A0A0A] cursor-pointer"
                >
                  <ZoomIn size={16} />
                </button>
                <a
                  href={imageSrc}
                  download={downloadFilename}
                  className="px-3 h-9 rounded-lg border-[2px] border-[#0A0A0A] bg-[#C1522A] text-white flex items-center gap-1 font-display font-bold text-xs uppercase shadow-[2px_2px_0_#0A0A0A]"
                >
                  <Download size={14} />
                  <span>SVG</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="w-9 h-9 rounded-lg border-[2px] border-[#0A0A0A] bg-[#FF3DCB] text-white flex items-center justify-center shadow-[2px_2px_0_#0A0A0A] cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Zoom Area */}
            <div className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center bg-[#FAF5DC]">
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.15s ease-out'
                }}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={imageSrc}
                  alt={title}
                  className="max-w-full max-h-[75vh] object-contain select-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagramViewer;
