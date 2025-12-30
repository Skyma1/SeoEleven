import React, { useState } from 'react';
import CTAModal from './CTAModal';

function CTAButton({ 
  children = 'Связаться с нами', 
  variant = 'primary',
  size = 'md',
  source = 'page',
  className = '',
  ...props 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all shadow-lg';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-[#c41f18] text-white shadow-primary/20',
    secondary: 'bg-graphite hover:bg-black text-white',
    outline: 'bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white',
    ghost: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
  };

  const sizeClasses = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </button>
      
      <CTAModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source={source}
      />
    </>
  );
}

export default CTAButton;

