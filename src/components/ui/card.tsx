// src/components/ui/card.tsx
import * as React from 'react';

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md ${className}`}
  >
    {children}
  </div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);
