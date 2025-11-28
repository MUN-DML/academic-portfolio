import React from 'react';
import { ContactInfo } from './components/ContactInfo';
import { Background } from './components/Background';
import { Awards } from './components/Awards';
import { Publications } from './components/Publications';
import { Navigation } from './components/Navigation';
import { PROFILE } from './resources/content';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar (Desktop) / Top Card (Mobile) */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-8 lg:sticky lg:top-8 lg:self-start lg:h-fit">
            <ContactInfo />
            <Navigation />
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-12">
            <Background />
            <Publications />
            <Awards />
            
            {/* Footer */}
            <footer className="pt-12 border-t border-slate-200 text-center text-slate-400 text-sm">
              <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;