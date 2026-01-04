import React from 'react';
import { AppData } from '../types';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Database, TrendingUp, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  data: AppData;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const { profile, projects, labels } = data;
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-bg via-emerald-50/30 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-1 rounded-full bg-emerald-100/50 mb-6">
             <span className="px-4 py-1 rounded-full bg-white text-pastel-accent text-sm font-medium shadow-sm">
                {profile.role}
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 tracking-tight">
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{profile.name}</span>
          </h1>
          <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto leading-relaxed">
             {profile.about.split('.')[0]}.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to="/resume" className="px-8 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-all shadow-lg shadow-stone-200">
               {data.nav.resume}
            </Link>
             <Link to="/projects" className="px-8 py-3 bg-white text-stone-800 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all">
               {data.nav.projects}
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Teaser (Abstract) */}
      <section className="py-12 bg-white border-y border-stone-50">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Database size={24}/></div>
                <h3 className="font-semibold text-stone-800 mb-2">Data Engineering</h3>
                <p className="text-sm text-stone-500">SQL, SAS EG, ETL Pipelines</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4"><TrendingUp size={24}/></div>
                <h3 className="font-semibold text-stone-800 mb-2">Analytics & BI</h3>
                <p className="text-sm text-stone-500">Power BI, Credit Policy, KPIs</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4"><Code size={24}/></div>
                <h3 className="font-semibold text-stone-800 mb-2">Data Science</h3>
                <p className="text-sm text-stone-500">Python, Pandas, Machine Learning</p>
            </div>
         </div>
      </section>

      {/* Featured Projects Hall */}
      <section className="py-20 px-4 bg-pastel-bg">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-bold text-stone-800 mb-2">{labels.latestProjects}</h2>
               <div className="h-1 w-20 bg-pastel-accent rounded-full"></div>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-pastel-accent font-medium hover:text-emerald-700 transition-colors">
              Ver todos <ArrowRight size={20} className="ml-2"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map(project => (
              <ProjectCard key={project.id} project={project} viewLabel={labels.viewProject} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/projects" className="inline-block px-6 py-3 border border-stone-200 bg-white rounded-lg text-stone-600 font-medium">
               Ver todos os projetos
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;