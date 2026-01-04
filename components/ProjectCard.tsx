import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  viewLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewLabel }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-stone-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-pastel-accent shadow-sm">
          {project.role}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 text-stone-400 text-xs uppercase tracking-wider font-medium">
           <Clock size={14} className="opacity-70" />
           <span>{project.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-pastel-text mb-2 group-hover:text-pastel-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-stone-500 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((t, idx) => (
            <span key={idx} className="bg-pastel-bg border border-stone-200 text-stone-600 px-2 py-1 rounded text-xs">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
             <span className="bg-pastel-bg border border-stone-200 text-stone-600 px-2 py-1 rounded text-xs">
              +{project.tech.length - 3}
             </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`} 
          className="mt-auto inline-flex items-center text-sm font-semibold text-pastel-accent hover:text-emerald-700 transition-colors"
        >
          {viewLabel} <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;