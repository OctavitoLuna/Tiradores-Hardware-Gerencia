import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'yellow' | 'teal' | 'magenta' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-[#C1522A] text-white hover:bg-[#A5411E]',
      secondary: 'bg-white text-[#0A0A0A] hover:bg-[#FAF5DC]',
      yellow: 'bg-[#FFE500] text-[#0A0A0A] hover:bg-[#F0D500]',
      teal: 'bg-[#00C2CB] text-[#0A0A0A] hover:bg-[#00AFB7]',
      magenta: 'bg-[#FF3DCB] text-white hover:bg-[#E62EB8]',
      destructive: 'bg-[#E53935] text-white hover:bg-[#C62828]',
      outline: 'bg-transparent text-[#0A0A0A] hover:bg-black/5'
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm md:text-base',
      lg: 'px-8 py-4 text-base md:text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-display font-bold uppercase tracking-wider',
          'border-[3px] border-[#0A0A0A] rounded-full',
          'shadow-brutal brutal-btn-hover cursor-pointer',
          'min-h-[44px] select-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
