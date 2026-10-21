import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Plus, Minus } from 'lucide-react';

export interface AccordionItemData {
  id?: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  defaultOpen?: boolean;
  color?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIds, setOpenIds] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    items.forEach((item, index) => {
      if (item.defaultOpen) initial[index] = true;
    });
    return initial;
  });

  const toggle = (index: number) => {
    setOpenIds(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = !!openIds[index];
        return (
          <div
            key={item.id || index}
            className={cn(
              'border-[3px] border-[#0A0A0A] rounded-2xl bg-white shadow-brutal overflow-hidden transition-all duration-200',
              isOpen && 'shadow-brutal-lg'
            )}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer hover:bg-[#FAF5DC] transition-colors gap-4"
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div className="w-12 h-12 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FFE500] flex items-center justify-center shrink-0 shadow-[2px_2px_0_#0A0A0A]">
                    {item.icon}
                  </div>
                )}
                <h3 className="font-display font-bold text-lg md:text-2xl text-[#0A0A0A] uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
              <div
                className={cn(
                  'w-9 h-9 rounded-full border-[2px] border-[#0A0A0A] bg-[#B6F23A] flex items-center justify-center shrink-0 shadow-[2px_2px_0_#0A0A0A] transition-transform duration-200',
                  isOpen ? 'bg-[#FF3DCB] text-white rotate-180' : 'text-[#0A0A0A]'
                )}
              >
                {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-[#0A0A0A]/90 text-base md:text-lg leading-relaxed border-t-[3px] border-[#0A0A0A] bg-white">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
