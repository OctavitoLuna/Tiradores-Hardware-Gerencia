import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'white' | 'paper' | 'lime' | 'teal' | 'magenta' | 'yellow' | 'blue' | 'violet' | 'terracota' | 'ink';
  rotation?: number;
  tab?: boolean | string;
  tabColor?: string;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    color = 'white', 
    rotation = 0, 
    tab = false,
    tabColor,
    hoverEffect = true,
    children, 
    style,
    ...props 
  }, ref) => {
    const colorClasses = {
      white: 'bg-white text-[#0A0A0A]',
      paper: 'bg-[#FAF5DC] text-[#0A0A0A]',
      lime: 'bg-[#B6F23A] text-[#0A0A0A]',
      teal: 'bg-[#00C2CB] text-[#0A0A0A]',
      magenta: 'bg-[#FF3DCB] text-white',
      yellow: 'bg-[#FFE500] text-[#0A0A0A]',
      blue: 'bg-[#3B6BFF] text-white',
      violet: 'bg-[#7C6BFF] text-white',
      terracota: 'bg-[#C1522A] text-white',
      ink: 'bg-[#0A0A0A] text-[#FAF5DC]'
    };

    const rotationStyle = rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : {};

    return (
      <div
        ref={ref}
        style={{ ...rotationStyle, ...style }}
        className={cn(
          'relative border-[3px] border-[#0A0A0A] rounded-2xl shadow-brutal p-6 md:p-8',
          hoverEffect && 'brutal-card-hover',
          colorClasses[color],
          className
        )}
        {...props}
      >
        {/* Optional Folder Tab Notch (Style Reference 6) */}
        {tab && (
          <div 
            className={cn(
              "absolute -top-[19px] left-6 px-4 py-0.5 border-t-[3px] border-l-[3px] border-r-[3px] border-[#0A0A0A] rounded-t-xl text-[11px] font-display font-bold uppercase tracking-wider",
              tabColor ? tabColor : colorClasses[color]
            )}
          >
            {typeof tab === 'string' ? tab : 'DIR // HW'}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
