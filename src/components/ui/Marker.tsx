import React from 'react';
import { cn } from '../../lib/utils';

export interface MarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'terracota' | 'yellow' | 'teal' | 'lime' | 'magenta' | 'blue';
  rotate?: number;
}

export const Marker: React.FC<MarkerProps> = ({
  color = 'terracota',
  rotate = -1.5,
  className,
  children,
  style,
  ...props
}) => {
  const colorStyles = {
    terracota: 'bg-[#C1522A] text-white',
    yellow: 'bg-[#FFE500] text-[#0A0A0A]',
    teal: 'bg-[#00C2CB] text-[#0A0A0A]',
    lime: 'bg-[#B6F23A] text-[#0A0A0A]',
    magenta: 'bg-[#FF3DCB] text-white',
    blue: 'bg-[#3B6BFF] text-white',
  };

  return (
    <span
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      className={cn(
        'inline-block px-3 py-1 my-1',
        'border-[3px] border-[#0A0A0A] rounded-full',
        'shadow-brutal-sm font-display tracking-wide uppercase',
        'transition-transform duration-200 hover:scale-105',
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Marker;
