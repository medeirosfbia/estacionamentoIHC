// src/components/ui/button.tsx
import * as React from 'react';
import { twMerge } from 'tailwind-merge'; // Para mesclar classes do Tailwind

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    
  <button
    ref={ref}
    className={twMerge(
      'inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      className
    )}
    {...props}
  />
));

Button.displayName = 'Button';
