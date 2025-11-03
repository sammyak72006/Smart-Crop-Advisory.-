import React, { forwardRef } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ title, children }, ref) => {
  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] tracking-tighter">{title}</h2>
        <div className="w-24 h-1 bg-[var(--color-primary)] mt-4"></div>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';