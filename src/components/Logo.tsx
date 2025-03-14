import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ className = '', size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'h-10 w-10',
    medium: 'h-16 w-16',
    large: 'h-32 w-32'
  };

  return (
    <div className={`${className} ${sizeClasses[size]} flex items-center justify-center`}>
      <img 
        src="/images/logo.svg" 
        alt="Nutrigenetic Logo" 
        className="w-full h-full"
      />
    </div>
  );
}