import React from 'react'

interface ButtonProps {
  href?: string;
  download?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({ href, download, children, className, onClick, target, rel }: ButtonProps) {
  const baseClasses = "rounded-md border-none bg-[var(--color-foreground)] text-[var(--color-background)] px-4 py-3 no-underline inline-block transition-colors duration-200 hover:opacity-90";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  if (href) {
    return (
      <a 
        href={href} 
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}