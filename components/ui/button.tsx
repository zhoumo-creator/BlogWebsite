import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  asChild = false, 
  variant = 'default', 
  ...props 
}) => {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp 
      {...props} 
      className={`${props.className || ''} ${variant === 'outline' ? 'border border-current' : ''}`}
    >
      {children}
    </Comp>
  );
};