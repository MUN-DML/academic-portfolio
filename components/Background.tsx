import React from 'react';
import { Section } from './Section';
import { PROFILE, EDUCATION } from '../resources/content';
import { User, GraduationCap } from 'lucide-react';

export const Background: React.FC = () => {
  return (
    <Section id="background" title="Background" icon={<User className="w-6 h-6" />}>
      <div className="space-y-8">
        {/* About Me */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-slate-700 leading-relaxed text-lg">
            {PROFILE.bio}
          </p>
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-academic-500" />
            Education
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative pl-6 border-l-2 border-slate-200 hover:border-academic-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-academic-700 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded mt-1 sm:mt-0 whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                {edu.advisor && (
                  <p className="text-slate-600 text-sm mt-1">Advisor: {edu.advisor}</p>
                )}
                {edu.thesis && (
                  <p className="text-slate-600 text-sm mt-1 italic">Thesis: {edu.thesis}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};