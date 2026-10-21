import React, { useRef } from 'react';
import { cn } from '../../lib/utils';
import { gsap } from '../../lib/gsap';
import { useGSAP } from '@gsap/react';

export interface StickerProps extends React.HTMLAttributes<HTMLDivElement> {
  rotate?: number;
  float?: boolean;
  color?: string;
}

export const Sticker: React.FC<StickerProps> = ({
  rotate = 0,
  float = true,
  className,
  children,
  style,
  ...props
}) => {
  const stickerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (float && stickerRef.current) {
        gsap.to(stickerRef.current, {
          y: '+=8',
          rotation: `+=${rotate > 0 ? 2 : -2}`,
          duration: 2.5 + Math.random() * 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }
    },
    { scope: stickerRef, dependencies: [float, rotate] }
  );

  return (
    <div
      ref={stickerRef}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
      className={cn(
        'inline-flex items-center justify-center p-3 rounded-2xl',
        'border-[3px] border-[#0A0A0A] bg-white shadow-brutal',
        'select-none transition-transform hover:scale-110 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Sticker;
