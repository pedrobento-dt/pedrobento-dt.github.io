import React from 'react';
import { NavLink } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  labels: { home: string; resume: string; projects: string };
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, labels }) => {
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-colors font-medium ${
      isActive
        ? 'bg-pastel-accent text-white shadow-md shadow-emerald-200'
        : 'text-pastel-text hover:bg-pastel-secondary hover:text-emerald-900'
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-pastel-accent tracking-tight">Pedro.Data</span>
          </div>
          
          <div className="hidden sm:flex space-x-2">
            <NavLink to="/" className={linkClass}>{labels.home}</NavLink>
            <NavLink to="/resume" className={linkClass}>{labels.resume}</NavLink>
            <NavLink to="/projects" className={linkClass}>{labels.projects}</NavLink>
          </div>

          <div className="flex items-center">
             <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 hover:bg-stone-50 transition-colors text-sm font-medium text-stone-600"
              aria-label="Toggle Language"
            >
              <Languages size={16} />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu simple fallback (can be expanded) */}
        <div className="sm:hidden flex justify-around py-2 border-t border-stone-100 text-sm">
           <NavLink to="/" className={({isActive}) => isActive ? 'font-bold text-pastel-accent' : 'text-stone-600'}>{labels.home}</NavLink>
           <NavLink to="/resume" className={({isActive}) => isActive ? 'font-bold text-pastel-accent' : 'text-stone-600'}>{labels.resume}</NavLink>
           <NavLink to="/projects" className={({isActive}) => isActive ? 'font-bold text-pastel-accent' : 'text-stone-600'}>{labels.projects}</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;