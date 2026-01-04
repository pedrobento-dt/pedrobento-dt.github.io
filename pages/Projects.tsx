import React, { useState } from 'react';
import { AppData } from '../types';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  data: AppData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const { projects, labels } = data;
  const [filter, setFilter] = useState<string>('All');

  // Extract unique roles for filter tabs
  const roles = ['All', ...Array.from(new Set(projects.map(p => p.role)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.role === filter);

  return (
    <div className="min-h-screen py-16 px-4 bg-pastel-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">{data.nav.projects}</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Uma coleção de trabalhos focados em análise de dados, machine learning e automação.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === role
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="animate-fadeIn">
               <ProjectCard project={project} viewLabel={labels.viewProject} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-stone-400">
             Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;