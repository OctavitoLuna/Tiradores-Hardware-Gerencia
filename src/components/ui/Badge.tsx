import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'black' | 'yellow' | 'teal' | 'lime' | 'magenta' | 'terracota' | 'white';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  color = 'yellow',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const colorStyles = {
    black: 'bg-[#0A0A0A] text-[#FAF5DC] border-[#0A0A0A]',
    yellow: 'bg-[#FFE500] text-[#0A0A0A] border-[#0A0A0A]',
    teal: 'bg-[#00C2CB] text-[#0A0A0A] border-[#0A0A0A]',
    lime: 'bg-[#B6F23A] text-[#0A0A0A] border-[#0A0A0A]',
    magenta: 'bg-[#FF3DCB] text-white border-[#0A0A0A]',
    terracota: 'bg-[#C1522A] text-white border-[#0A0A0A]',
    white: 'bg-white text-[#0A0A0A] border-[#0A0A0A]',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'font-display font-bold uppercase tracking-wider',
        'border-[2px] rounded-md shadow-[2px_2px_0_#0A0A0A]',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
