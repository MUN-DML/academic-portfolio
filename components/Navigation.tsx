import React, { useEffect, useState } from 'react';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('contact');

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top, contact is active
      if (window.scrollY < 100) {
        setActiveSection('contact');
        return;
      }

      // Check other sections
      const sections = ['background', 'publications', 'awards'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is near the viewport top
          // or if it covers a significant portion
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'contact', label: 'Contact information' },
    { id: 'background', label: 'Background' },
    { id: 'publications', label: 'Publications' },
    { id: 'awards', label: 'Awards' },
  ];

  return (
    <nav className="hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-8">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">On This Page</h3>
      
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-2.5 px-4 text-sm transition-all duration-300 border-l-4 ${
                activeSection === item.id
                  ? 'border-academic-600 text-academic-900 font-bold bg-academic-50'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-200'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};