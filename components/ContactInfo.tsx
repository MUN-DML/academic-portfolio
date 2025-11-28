import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, BookOpen } from 'lucide-react';
import { PROFILE } from '../resources/content';

export const ContactInfo: React.FC = () => {
  return (
    <div id="contact" className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-48 h-48 mb-6">
          <img
            src={PROFILE.avatarUrl}
            alt={PROFILE.name}
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
          />
          <div className="absolute inset-0 rounded-full border border-slate-100 pointer-events-none"></div>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">{PROFILE.name}</h1>
        <p className="text-lg text-academic-800 font-medium mb-1">{PROFILE.title}</p>
        <p className="text-slate-500 mb-6">{PROFILE.institution}</p>

        <div className="w-full space-y-3 text-left">
          <div className="flex items-center gap-3 text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors">
            <Mail className="w-5 h-5 text-academic-500 shrink-0" />
            <a href={`mailto:${PROFILE.email}`} className="hover:text-academic-700 truncate">
              {PROFILE.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-600 p-2">
            <MapPin className="w-5 h-5 text-academic-500 shrink-0" />
            <span>{PROFILE.location}</span>
          </div>
        </div>

        <div className="flex gap-4 mt-6 justify-center">
          {PROFILE.socials.googleScholar && (
            <a href={PROFILE.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#4285F4] hover:bg-blue-50 rounded-full transition-all" aria-label="Google Scholar">
              <BookOpen className="w-6 h-6" />
            </a>
          )}
          {PROFILE.socials.github && (
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
          )}
          {PROFILE.socials.twitter && (
            <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#1DA1F2] hover:bg-sky-50 rounded-full transition-all" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
          )}
          {PROFILE.socials.linkedin && (
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#0077b5] hover:bg-blue-50 rounded-full transition-all" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};