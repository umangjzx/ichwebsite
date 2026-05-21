import React from 'react';
import { cn } from '@/utils/helpers';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className,
  onClick,
}) => {
  const variantStyles = {
    default: 'bg-gray-900 shadow-md shadow-black/20 border border-gray-800',
    elevated: 'bg-gray-900 shadow-xl shadow-black/30 border border-gray-800',
    bordered: 'bg-gray-900 border-2 border-gray-700',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variantStyles[variant],
        hover && 'hover:shadow-xl hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
