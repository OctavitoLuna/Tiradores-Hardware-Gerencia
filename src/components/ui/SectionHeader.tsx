import React from 'react';
import { cn } from '../../lib/utils';
import Badge from './Badge';

export interface SectionHeaderProps {
  badge?: string;
  badgeColor?: 'black' | 'yellow' | 'teal' | 'lime' | 'magenta' | 'terracota' | 'white';
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeColor = 'yellow',
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'text-left max-w-4xl',
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge color={badgeColor} size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase text-[#0A0A0A] leading-[0.95] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/80 font-sans leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
