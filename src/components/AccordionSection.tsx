import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export interface AccordionSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  badge?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function AccordionSection({
  title,
  defaultOpen = false,
  children,
  badge,
  icon,
  className = '',
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-primary bg-white shadow-hard'
          : 'border-stone-300 bg-white hover:border-primary/50'
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors bg-white hover:bg-[#FDFBF7] gap-4"
      >
        <div className="flex items-center gap-3.5">
          {icon && (
            <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
              {icon}
            </div>
          )}
          <div>
            {badge && (
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                {badge}
              </span>
            )}
            {/* Título en cursiva naranja como se solicita exactamente */}
            <h3 className="font-display italic font-bold text-xl md:text-2xl text-primary leading-snug">
              {title}
            </h3>
          </div>
        </div>

        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
            isOpen
              ? 'bg-primary text-white border-primary rotate-180'
              : 'bg-stone-100 text-surface border-stone-300'
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 pt-2 md:px-7 md:pb-8 border-t border-stone-200/80 bg-white text-foreground-muted font-sans animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
