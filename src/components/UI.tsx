import React from 'react';
import { Link } from 'react-router-dom';

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'active' | 'pilot' | 'planned' | 'gold' | 'forest' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  const styles = {
    active: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    pilot: 'bg-amber-50 text-amber-800 border-amber-300',
    planned: 'bg-sky-50 text-sky-800 border-sky-300',
    gold: 'bg-amber-50/60 text-gold-700 border-gold-400/60 font-semibold',
    forest: 'bg-forest-900 text-nature-200 border-forest-700',
    neutral: 'bg-warm-100 text-warm-800 border-warm-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase ${styles[variant]} ${className}`}
    >
      {variant === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
      {variant === 'pilot' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
      {variant === 'planned' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
      {children}
    </span>
  );
};

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variants = {
    primary:
      'bg-forest-900 text-white hover:bg-forest-800 focus:ring-forest-700 shadow-sm hover:shadow active:scale-[0.99]',
    secondary:
      'bg-nature-600 text-white hover:bg-nature-700 focus:ring-nature-500 shadow-sm active:scale-[0.99]',
    gold:
      'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-forest-950 font-semibold hover:brightness-105 focus:ring-gold-400 shadow-md active:scale-[0.99]',
    outline:
      'border border-warm-300 bg-white/70 text-forest-900 hover:bg-warm-100 hover:border-warm-400 focus:ring-forest-800 backdrop-blur-sm',
    ghost:
      'text-forest-900 hover:bg-warm-200/50 focus:ring-warm-400',
  };

  const combinedClass = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm border border-warm-200 rounded-xl p-6 sm:p-8 ${
        hover ? 'card-hover-lift hover:border-nature-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

// SectionHeader Component
interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {kicker && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-semibold mb-3 ${
            dark ? 'text-gold-400' : 'text-nature-600'
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight ${
          dark ? 'text-white' : 'text-forest-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-balance ${
            dark ? 'text-warm-300' : 'text-warm-800'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

