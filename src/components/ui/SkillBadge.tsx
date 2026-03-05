import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface SkillBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const levelColors = {
  beginner: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  intermediate: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  advanced: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
  expert: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
};

const sizeStyles = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
};

export function SkillBadge({
  name,
  level = 'intermediate',
  animate = true,
  size = 'md',
  className = '',
  ...props
}: SkillBadgeProps) {
  const Component = animate ? motion.span : 'span';

  // Filter out props that conflict with Framer Motion
  const { onDrag, onDragEnd, onDragStart, ...safeProps } = props as any;

  return (
    <Component
      className={cn(
        // Base styles
        'inline-flex items-center gap-2 rounded-full font-medium',
        'transition-all duration-200',
        'hover:scale-105 hover:shadow-md',
        // Level color
        levelColors[level],
        // Size
        sizeStyles[size],
        className
      )}
      whileHover={animate ? { scale: 1.05 } : undefined}
      whileTap={animate ? { scale: 0.95 } : undefined}
      initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.2 }}
      {...safeProps}
    >
      {name}
    </Component>
  );
}
