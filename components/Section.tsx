import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
        {icon && <span className="text-academic-600">{icon}</span>}
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {children}
      </div>
    </section>
  );
};