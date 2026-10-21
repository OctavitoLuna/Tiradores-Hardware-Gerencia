import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { gsap } from '../../lib/gsap';
import { useGSAP } from '@gsap/react';

export interface StatCounterProps {
  value: number | string;
  label: string;
  color?: 'white' | 'yellow' | 'teal' | 'lime' | 'magenta' | 'terracota' | 'blue';
  rotation?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  color = 'yellow',
  rotation = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(
    typeof value === 'number' ? '0' : String(value)
  );

  const colorClasses = {
    white: 'bg-white text-[#0A0A0A]',
    yellow: 'bg-[#FFE500] text-[#0A0A0A]',
    teal: 'bg-[#00C2CB] text-[#0A0A0A]',
    lime: 'bg-[#B6F23A] text-[#0A0A0A]',
    magenta: 'bg-[#FF3DCB] text-white',
    terracota: 'bg-[#C1522A] text-white',
    blue: 'bg-[#3B6BFF] text-white',
  };

  useGSAP(
    () => {
      if (typeof value === 'number') {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            setDisplayValue(String(Math.round(obj.val)));
          },
        });
      } else {
        // String value like "99.9%"
        const numeric = parseFloat(value.replace('%', ''));
        if (!isNaN(numeric)) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: numeric,
            duration: 1.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              once: true,
            },
            onUpdate: () => {
              setDisplayValue(`${obj.val.toFixed(1)}%`);
            },
          });
        }
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
      className={cn(
        'p-6 md:p-8 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal brutal-card-hover text-center select-none',
        colorClasses[color],
        className
      )}
    >
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-3 tabular-nums">
        <span>{prefix}</span>
        <span ref={numRef}>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <div className="font-display font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase opacity-90">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
