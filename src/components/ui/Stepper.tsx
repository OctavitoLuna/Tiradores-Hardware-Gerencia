import React from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

export interface StepItem {
  number: string | number;
  title: string;
  desc?: string;
  color?: string;
  status?: 'completed' | 'active' | 'upcoming';
}

export interface StepperProps {
  steps: StepItem[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  orientation = 'horizontal',
  className,
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={cn('relative space-y-8 pl-6 border-l-[3px] border-[#0A0A0A]', className)}>
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[37px] top-0 w-10 h-10 rounded-full border-[3px] border-[#0A0A0A] bg-[#FFE500] flex items-center justify-center font-display font-bold text-lg shadow-[2px_2px_0_#0A0A0A]">
              {step.number}
            </div>
            <div className="bg-white p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal brutal-card-hover ml-4">
              <h4 className="font-display font-bold text-xl uppercase text-[#0A0A0A] mb-1">
                {step.title}
              </h4>
              {step.desc && (
                <p className="text-sm md:text-base text-[#0A0A0A]/80 font-sans leading-relaxed">
                  {step.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-5 gap-4 relative', className)}>
      {steps.map((step, idx) => {
        const bgColors = ['bg-[#FFE500]', 'bg-[#00C2CB]', 'bg-[#B6F23A]', 'bg-[#FF3DCB]', 'bg-[#C1522A]'];
        const currentColor = step.color || bgColors[idx % bgColors.length];
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-5 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal brutal-card-hover relative"
          >
            <div
              className={cn(
                'w-14 h-14 rounded-full border-[3px] border-[#0A0A0A] flex items-center justify-center font-display font-bold text-2xl mb-4 shadow-[2px_2px_0_#0A0A0A]',
                currentColor,
                step.color === 'bg-[#FF3DCB]' || step.color === 'bg-[#C1522A]' ? 'text-white' : 'text-[#0A0A0A]'
              )}
            >
              {step.number}
            </div>
            <h4 className="font-display font-bold text-lg md:text-xl uppercase text-[#0A0A0A] mb-2">
              {step.title}
            </h4>
            {step.desc && (
              <p className="text-xs md:text-sm text-[#0A0A0A]/80 font-sans leading-relaxed">
                {step.desc}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
