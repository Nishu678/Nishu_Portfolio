import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'outlined';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-white dark:bg-gray-800',
  glass: 'backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700',
  elevated: 'bg-white dark:bg-gray-800 shadow-xl',
  outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hover = false,
      padding = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-xl',
          // Variant
          variantStyles[variant],
          // Shadow
          variant !== 'elevated' && 'shadow-md',
          // Hover effect
          hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]',
          // Padding
          paddingStyles[padding],
          // Custom
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
