import React from 'react';
import { Section } from './Section';
import { PUBLICATIONS } from '../resources/content';
import { BookText, FileText, Code, Globe, Video } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications" icon={<BookText className="w-6 h-6" />}>
      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <div 
            key={pub.id} 
            className={`
              p-6 rounded-xl border transition-all duration-300
              ${pub.highlight 
                ? 'bg-academic-50/50 border-academic-200 shadow-sm' 
                : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
              }
            `}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {pub.title}
              </h3>
              
              <div className="text-slate-700 text-sm">
                {pub.authors.map((author, index) => (
                  <span key={index}>
                    {/* Bold the name if it matches "Researcher" or similar logic could be added */}
                    {author.includes("Researcher") ? <span className="font-bold text-slate-900 underline decoration-academic-300 underline-offset-2">{author}</span> : author}
                    {index < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-1">
                <span className="font-medium text-academic-700 italic">{pub.venue}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">{pub.year}</span>
              </div>

              {pub.abstract && pub.highlight && (
                <p className="text-sm text-slate-600 mt-3 mb-1 line-clamp-3">
                  {pub.abstract}
                </p>
              )}

              {pub.links && pub.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors
                        bg-slate-100 text-slate-700 hover:bg-academic-100 hover:text-academic-800 border border-slate-200
                      "
                    >
                      {link.type === 'pdf' && <FileText className="w-3.5 h-3.5" />}
                      {link.type === 'code' && <Code className="w-3.5 h-3.5" />}
                      {link.type === 'website' && <Globe className="w-3.5 h-3.5" />}
                      {link.type === 'video' && <Video className="w-3.5 h-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};