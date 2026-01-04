import React from 'react';
import { AppData } from '../types';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

interface ResumeProps {
  data: AppData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const { profile, labels } = data;

  return (
    <div className="py-16 px-4 bg-stone-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        {/* Header / Profile */}
        <div className="bg-emerald-50/50 p-8 md:p-12 border-b border-stone-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
                <img 
                  src={profile.photoUrl} 
                  alt={profile.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white" title="Available for work"></div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold text-stone-800 mb-2">{profile.name}</h1>
              <p className="text-xl text-emerald-700 font-medium mb-4">{profile.role}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-stone-500 text-sm">
                 <div className="flex items-center gap-1"><MapPin size={16}/> {profile.location}</div>
                 <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-emerald-600"><Mail size={16}/> {profile.email}</a>
                 <div className="flex items-center gap-1"><Phone size={16}/> {profile.phone}</div>
              </div>

              <div className="mt-6 flex justify-center md:justify-start gap-4">
                 <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-stone-200 text-blue-700 hover:scale-110 transition-transform"><Linkedin size={20}/></a>
                 <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-stone-200 text-stone-800 hover:scale-110 transition-transform"><Github size={20}/></a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl border border-stone-100">
            <h3 className="text-sm uppercase tracking-wider font-bold text-stone-400 mb-2">{labels.aboutMe}</h3>
            <p className="text-stone-600 leading-relaxed">{profile.about}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Left Column (Sidebar-ish) */}
          <div className="bg-stone-50 p-8 border-r border-stone-100 space-y-10">
            
            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-pastel-accent rounded-full mr-3"></span>
                {labels.skills}
              </h2>
              <div className="space-y-6">
                {profile.skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-emerald-700 mb-2 text-sm">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-stone-200 rounded text-xs text-stone-600 shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Languages */}
             <div>
              <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-pastel-accent rounded-full mr-3"></span>
                {labels.languages}
              </h2>
              <ul className="space-y-2">
                {profile.languages.map((lang, idx) => (
                  <li key={idx} className="text-stone-600 text-sm border-b border-stone-200 pb-2 last:border-0">{lang}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
             <div>
              <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-pastel-accent rounded-full mr-3"></span>
                {labels.certifications}
              </h2>
              <div className="space-y-4">
                {profile.certifications.map((cert, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-stone-200">
                    <div className="font-semibold text-stone-700 text-sm">{cert.name}</div>
                    <div className="text-xs text-stone-500 mt-1 flex justify-between">
                       <span>{cert.issuer}</span>
                       <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Main Content) */}
          <div className="md:col-span-2 p-8 md:p-12 space-y-12">
            
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-4">
                {labels.experience}
              </h2>
              <div className="space-y-10">
                {profile.experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-emerald-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-200 border-2 border-white"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                       <h3 className="text-xl font-bold text-stone-800">{exp.role}</h3>
                       <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <div className="text-stone-500 font-medium mb-3">{exp.company}</div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                            <span key={i} className="text-xs font-mono text-emerald-700 bg-emerald-50/50 px-2 py-1 rounded border border-emerald-100">#{t}</span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

             {/* Education */}
             <section>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-4">
                {labels.education}
              </h2>
              <div className="space-y-6">
                 {profile.education.map((edu, idx) => (
                    <div key={idx} className="bg-stone-50 p-6 rounded-xl">
                        <h3 className="font-bold text-stone-800">{edu.institution}</h3>
                        <div className="text-emerald-700 mt-1">{edu.degree}</div>
                        <div className="text-stone-400 text-sm mt-2">{edu.period}</div>
                    </div>
                 ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;