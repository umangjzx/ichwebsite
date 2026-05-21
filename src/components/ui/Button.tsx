import React from 'react';
import { cn } from '@/utils/helpers';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
    secondary:
      'bg-secondary text-white hover:bg-secondary-dark hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
    outlined:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-95',
    ghost:
      'text-dark hover:bg-gray-100 hover:scale-105 active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded-md',
    md: 'px-8 py-4 text-sm rounded-lg',
    lg: 'px-10 py-5 text-base rounded-lg',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
