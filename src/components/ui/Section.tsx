import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'align'> {
  id?: string;
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
  bgColor?: 'default' | 'muted' | 'accent' | 'gradient';
}

const containerWidthStyles = {
  sm: 'max-w-4xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

const bgColorStyles = {
  default: '',
  muted: 'bg-gray-50 dark:bg-gray-900/50',
  accent: 'bg-primary-50/50 dark:bg-primary-950/20',
  gradient: 'bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      id,
      containerWidth = 'xl',
      animate = true,
      bgColor = 'default',
      className = '',
      ...props
    },
    ref
  ) => {
    const { ref: scrollRef, isVisible } = useScrollAnimation();

    // Handle ref merging
    const sectionRef = (node: HTMLElement | null) => {
      // Update forward ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      // Update scroll ref
      if (scrollRef) {
        scrollRef.current = node as HTMLDivElement | null;
      }
    };

    return (
      <section
        id={id}
        ref={sectionRef}
        className={cn(
          // Base styles
          'relative w-full py-12 md:py-16 lg:py-20',
          // Background color
          bgColorStyles[bgColor],
          // Animation
          animate && 'animate-on-scroll',
          animate && isVisible && 'is-visible',
          className
        )}
        {...props}
      >
        <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', containerWidthStyles[containerWidth])}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
