import React from 'react';
import { cn } from '@/utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const variantStyles = {
    primary: 'bg-primary/20 text-white',
    secondary: 'bg-secondary/20 text-white',
    outline: 'bg-transparent border border-gray-700 text-gray-300',
    success: 'bg-green-500/20 text-green-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
