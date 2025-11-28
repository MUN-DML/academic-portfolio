import React from 'react';
import { Section } from './Section';
import { AWARDS } from '../resources/content';
import { Trophy } from 'lucide-react';

export const Awards: React.FC = () => {
  return (
    <Section id="awards" title="Awards" icon={<Trophy className="w-6 h-6" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AWARDS.map((award) => (
          <div 
            key={award.id} 
            className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-academic-200 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-academic-600 bg-academic-50 px-2 py-1 rounded-full border border-academic-100">
                {award.year}
              </span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{award.title}</h3>
            <p className="text-sm font-medium text-slate-500 mb-2">{award.organization}</p>
            {award.description && (
              <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-2 mt-2">
                {award.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};