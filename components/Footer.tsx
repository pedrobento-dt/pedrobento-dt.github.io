import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4 text-pastel-muted">
            <a href="https://github.com/pedrohbs0" target="_blank" rel="noreferrer" className="hover:text-pastel-accent transition-colors"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/pedrohbs0/" target="_blank" rel="noreferrer" className="hover:text-pastel-accent transition-colors"><Linkedin size={20}/></a>
            <a href="mailto:email@example.com" className="hover:text-pastel-accent transition-colors"><Mail size={20}/></a>
        </div>
        <p className="text-stone-400 text-sm">
          © {new Date().getFullYear()} Pedro Data Analyst. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;