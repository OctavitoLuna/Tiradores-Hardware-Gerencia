import React from 'react';
import { cn } from '../../lib/utils';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  activeColor?: 'teal' | 'terracota' | 'yellow' | 'lime' | 'magenta';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  activeColor = 'teal'
}) => {
  const activeColorMap = {
    teal: 'bg-[#00C2CB] text-[#0A0A0A]',
    terracota: 'bg-[#C1522A] text-white',
    yellow: 'bg-[#FFE500] text-[#0A0A0A]',
    lime: 'bg-[#B6F23A] text-[#0A0A0A]',
    magenta: 'bg-[#FF3DCB] text-white',
  };

  return (
    <div className={cn('flex flex-wrap gap-2 md:gap-3 items-center', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-4 md:px-6 py-2.5 rounded-full border-[3px] border-[#0A0A0A]',
              'font-display font-bold uppercase tracking-wider text-xs md:text-sm',
              'transition-all duration-150 cursor-pointer flex items-center gap-2',
              isActive
                ? cn(activeColorMap[activeColor], 'shadow-brutal translate-x-[-2px] translate-y-[-2px]')
                : 'bg-white text-[#0A0A0A] hover:bg-[#FAF5DC] shadow-[2px_2px_0_#0A0A0A]'
            )}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="px-1.5 py-0.2 bg-black text-white text-[10px] rounded-md font-mono">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
