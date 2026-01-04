import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AppData } from '../types';
import { ArrowLeft, Calendar, Github, ExternalLink, Code2, Tag } from 'lucide-react';

interface ProjectDetailProps {
  data: AppData;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const project = data.projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-stone-500 hover:text-emerald-600 mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform"/>
          {data.labels.backToProjects}
        </Link>

        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
          {/* Header Image */}
          <div className="h-64 md:h-96 w-full relative">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded mb-3">
                  {project.role.toUpperCase()}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar Info */}
            <aside className="space-y-8">
              <div className="flex items-center text-stone-600">
                <Calendar className="mr-3 text-emerald-500" size={20} />
                <div>
                   <p className="text-xs text-stone-400 uppercase font-bold">{data.labels.published}</p>
                   <p className="font-medium">{project.date}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3 text-stone-600">
                    <Code2 className="mr-3 text-emerald-500" size={20} />
                    <p className="text-xs text-stone-400 uppercase font-bold">{data.labels.techStack}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-lg text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-100">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors font-medium">
                    <Github size={18} className="mr-2" />
                    GitHub Repository
                  </a>
                )}
                {project.demoUrl && (
                   <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl hover:bg-emerald-200 transition-colors font-medium">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Overview</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <h2 className="text-2xl font-bold text-stone-800 mb-6">Details & Process</h2>
              <div className="prose prose-stone prose-lg text-stone-600">
                 <p>{project.fullContent}</p>
                 {/* This would ideally handle markdown if we added a markdown parser library */}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;