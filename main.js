import { getData } from './data.js';

// --- Global State ---
const state = {
  lang: 'pt',
  route: 'home',
  params: {}
};

// --- Helper Functions ---
const formatTech = (techList, limit = 3) => {
  if (!techList || techList.length === 0) return '';
  const visible = techList.slice(0, limit);
  const remainder = techList.length - limit;
  let html = visible.map(t => `<span class="bg-stone-50 border border-stone-200 text-stone-600 px-2 py-1 rounded-md text-xs font-medium">${t}</span>`).join('');
  if (remainder > 0) {
    html += `<span class="bg-stone-50 border border-stone-200 text-stone-600 px-2 py-1 rounded-md text-xs font-medium">+${remainder}</span>`;
  }
  return html;
};

// --- Component Strings ---

const Navbar = (data, currentRoute, lang) => {
  const isActive = (r) => currentRoute === r;
  const linkClass = (r) => 
    `px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
      isActive(r)
        ? 'bg-pastel-accent text-white shadow-md shadow-emerald-100'
        : 'text-pastel-text hover:bg-stone-50 hover:text-emerald-700'
    }`;

  return `
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.location.hash=''">
            <span class="font-bold text-xl text-pastel-accent tracking-tight hover:opacity-80 transition-opacity">Pedro.Data</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden sm:flex space-x-2">
            <a href="#home" class="${linkClass('home')}">${data.nav.home}</a>
            <a href="#resume" class="${linkClass('resume')}">${data.nav.resume}</a>
            <a href="#projects" class="${linkClass('projects')}">${data.nav.projects}</a>
          </div>

          <!-- Language Toggle -->
          <div class="flex items-center">
             <button
              id="lang-toggle"
              class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 hover:bg-stone-50 hover:border-emerald-200 transition-all text-sm font-medium text-stone-600 active:scale-95"
            >
              <i data-lucide="languages" class="w-4 h-4"></i>
              <span>${lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="sm:hidden flex justify-around py-3 border-t border-stone-100 text-sm bg-white/50">
           <a href="#home" class="${currentRoute === 'home' ? 'font-bold text-pastel-accent' : 'text-stone-500'}">${data.nav.home}</a>
           <a href="#resume" class="${currentRoute === 'resume' ? 'font-bold text-pastel-accent' : 'text-stone-500'}">${data.nav.resume}</a>
           <a href="#projects" class="${currentRoute === 'projects' ? 'font-bold text-pastel-accent' : 'text-stone-500'}">${data.nav.projects}</a>
        </div>
      </div>
    </nav>
  `;
};

const Footer = () => `
  <footer class="bg-white border-t border-stone-100 py-8 mt-auto">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <div class="flex justify-center space-x-8 mb-6 text-pastel-muted">
          <a href="https://github.com/pedrohbs0" target="_blank" class="hover:text-pastel-accent hover:-translate-y-1 transition-all"><i data-lucide="github" class="w-6 h-6"></i></a>
          <a href="https://www.linkedin.com/in/pedrohbs0/" target="_blank" class="hover:text-pastel-accent hover:-translate-y-1 transition-all"><i data-lucide="linkedin" class="w-6 h-6"></i></a>
          <a href="mailto:email@example.com" class="hover:text-pastel-accent hover:-translate-y-1 transition-all"><i data-lucide="mail" class="w-6 h-6"></i></a>
      </div>
      <p class="text-stone-400 text-xs">
        © ${new Date().getFullYear()} Pedro Data Analyst.
      </p>
    </div>
  </footer>
`;

const ProjectCard = (project, viewLabel) => `
  <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100 flex flex-col h-full group">
    <div class="h-48 overflow-hidden relative">
      <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      <div class="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pastel-accent shadow-sm border border-stone-100">
        ${project.role}
      </div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex items-center gap-2 mb-3 text-stone-400 text-xs uppercase tracking-wider font-semibold">
         <i data-lucide="clock" class="w-3 h-3"></i>
         <span>${project.date}</span>
      </div>
      <h3 class="text-lg font-bold text-stone-800 mb-2 group-hover:text-pastel-accent transition-colors">
        ${project.title}
      </h3>
      <p class="text-stone-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
        ${project.description}
      </p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${formatTech(project.tech)}
      </div>
      <a href="#projects/${project.id}" class="mt-auto inline-flex items-center text-sm font-bold text-pastel-accent hover:text-emerald-700 transition-colors">
        ${viewLabel} <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
      </a>
    </div>
  </div>
`;

// --- Page Renderers ---

const HomePage = (data) => {
  const recentProjects = data.projects.slice(0, 3);
  
  return `
    <div class="flex flex-col fade-in">
      <!-- Hero -->
      <section class="bg-gradient-to-b from-white via-emerald-50/20 to-white py-24 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8 animate-fadeIn">
             <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
             ${data.profile.role}
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-stone-800 mb-6 tracking-tight leading-tight">
            Olá, sou <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">${data.profile.name}</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
             ${data.profile.about.split('.')[0]}.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#resume" class="px-8 py-3.5 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 hover:shadow-lg transition-all active:scale-95">
               ${data.nav.resume}
            </a>
             <a href="#projects" class="px-8 py-3.5 bg-white text-stone-700 border border-stone-200 rounded-full font-medium hover:bg-stone-50 hover:border-stone-300 transition-all active:scale-95">
               ${data.nav.projects}
            </a>
          </div>
        </div>
      </section>

      <!-- Skills Abstract -->
      <section class="py-16 bg-white border-y border-stone-50">
         <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group p-6 rounded-2xl hover:bg-stone-50 transition-colors">
                <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="database"></i></div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">Data Engineering</h3>
                <p class="text-sm text-stone-500 leading-relaxed">SQL, SAS EG, ETL Pipelines, Data Warehousing</p>
            </div>
            <div class="group p-6 rounded-2xl hover:bg-stone-50 transition-colors">
                <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="trending-up"></i></div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">Analytics & BI</h3>
                <p class="text-sm text-stone-500 leading-relaxed">Power BI, Credit Policy, Risk Analysis, KPIs</p>
            </div>
            <div class="group p-6 rounded-2xl hover:bg-stone-50 transition-colors">
                <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><i data-lucide="code"></i></div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">Data Science</h3>
                <p class="text-sm text-stone-500 leading-relaxed">Python, Pandas, Scikit-learn, Machine Learning</p>
            </div>
         </div>
      </section>

      <!-- Featured Projects -->
      <section class="py-24 px-4 bg-pastel-bg">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-end mb-12">
            <div>
               <h2 class="text-3xl font-bold text-stone-800 mb-3">${data.labels.latestProjects}</h2>
               <div class="h-1.5 w-24 bg-pastel-accent rounded-full"></div>
            </div>
            <a href="#projects" class="hidden md:flex items-center text-pastel-accent font-bold hover:text-emerald-700 transition-colors group">
              ${data.labels.viewAll} <i data-lucide="arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${recentProjects.map(p => ProjectCard(p, data.labels.viewProject)).join('')}
          </div>
          
           <div class="mt-12 text-center md:hidden">
             <a href="#projects" class="inline-block px-6 py-3 border border-stone-200 bg-white rounded-lg text-stone-600 font-medium shadow-sm">
               ${data.labels.viewAll}
             </a>
          </div>
        </div>
      </section>
    </div>
  `;
};

const ResumePage = (data) => {
  const { profile, labels } = data;
  return `
    <div class="py-12 md:py-20 px-4 bg-stone-50 flex-grow fade-in">
      <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        
        <!-- Profile Header -->
        <div class="bg-gradient-to-r from-emerald-50/50 to-white p-8 md:p-12 border-b border-stone-100">
          <div class="flex flex-col md:flex-row items-center gap-10">
            <div class="relative shrink-0">
                <img src="${profile.photoUrl}" alt="${profile.name}" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                <div class="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white" title="Active"></div>
            </div>
            <div class="text-center md:text-left flex-1">
              <h1 class="text-4xl font-bold text-stone-800 mb-2">${profile.name}</h1>
              <p class="text-xl text-emerald-600 font-medium mb-6">${profile.role}</p>
              
              <div class="flex flex-wrap justify-center md:justify-start gap-4 text-stone-500 text-sm font-medium">
                 <div class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm"><i data-lucide="map-pin" class="w-4 h-4 text-emerald-500"></i> ${profile.location}</div>
                 <a href="mailto:${profile.email}" class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm hover:text-emerald-600 transition-colors"><i data-lucide="mail" class="w-4 h-4 text-emerald-500"></i> ${profile.email}</a>
                 <div class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm"><i data-lucide="phone" class="w-4 h-4 text-emerald-500"></i> ${profile.phone}</div>
              </div>
            </div>
          </div>
          
          <div class="mt-10 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
            <h3 class="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3">${labels.aboutMe}</h3>
            <p class="text-stone-600 leading-relaxed text-lg">${profile.about}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12">
          <!-- Sidebar (Left) -->
          <div class="md:col-span-4 bg-stone-50/50 p-8 border-r border-stone-100 space-y-10">
            
            <!-- Skills -->
            <div>
              <h2 class="text-lg font-bold text-stone-800 mb-5 flex items-center">
                <span class="w-1.5 h-6 bg-pastel-accent rounded-full mr-3"></span>
                ${labels.skills}
              </h2>
              <div class="space-y-6">
                ${profile.skills.map(group => `
                  <div>
                    <h3 class="font-bold text-emerald-700 mb-2 text-xs uppercase tracking-wider">${group.category}</h3>
                    <div class="flex flex-wrap gap-2">
                      ${group.items.map(item => `<span class="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-600 shadow-sm">${item}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Languages -->
            <div>
              <h2 class="text-lg font-bold text-stone-800 mb-5 flex items-center">
                <span class="w-1.5 h-6 bg-pastel-accent rounded-full mr-3"></span>
                ${labels.languages}
              </h2>
              <ul class="space-y-3">
                ${profile.languages.map(l => `<li class="text-stone-600 text-sm flex items-center"><span class="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>${l}</li>`).join('')}
              </ul>
            </div>

             <!-- Certifications -->
            <div>
              <h2 class="text-lg font-bold text-stone-800 mb-5 flex items-center">
                <span class="w-1.5 h-6 bg-pastel-accent rounded-full mr-3"></span>
                ${labels.certifications}
              </h2>
              <div class="space-y-3">
                ${profile.certifications.map(c => `
                  <div class="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                    <div class="font-bold text-stone-700 text-sm mb-1">${c.name}</div>
                    <div class="text-xs text-stone-500 flex justify-between items-center">
                       <span>${c.issuer}</span>
                       <span class="bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">${c.year}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Main Content (Right) -->
          <div class="md:col-span-8 p-8 md:p-12 space-y-12 bg-white">
            
            <!-- Experience -->
            <section>
              <h2 class="text-2xl font-bold text-stone-800 mb-8 pb-4 border-b border-stone-100">${labels.experience}</h2>
              <div class="space-y-12">
                ${profile.experiences.map(exp => `
                  <div class="relative pl-8 border-l-2 border-emerald-100">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-100 border-2 border-white ring-2 ring-emerald-50"></div>
                    
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                       <h3 class="text-xl font-bold text-stone-800">${exp.role}</h3>
                       <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 mt-2 sm:mt-0 w-fit">${exp.period}</span>
                    </div>
                    <div class="text-stone-500 font-semibold mb-4 flex items-center gap-2">
                        <i data-lucide="building-2" class="w-4 h-4"></i>
                        ${exp.company}
                    </div>
                    <p class="text-stone-600 text-sm leading-relaxed mb-5">${exp.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${exp.tech.map(t => `<span class="text-xs font-mono font-medium text-emerald-700 bg-emerald-50/50 px-2 py-1 rounded border border-emerald-100">#${t}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Education -->
            <section>
              <h2 class="text-2xl font-bold text-stone-800 mb-8 pb-4 border-b border-stone-100">${labels.education}</h2>
              <div class="grid gap-6">
                 ${profile.education.map(edu => `
                    <div class="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                        <div class="flex items-start justify-between">
                            <div>
                                <h3 class="font-bold text-stone-800 text-lg">${edu.institution}</h3>
                                <div class="text-emerald-700 font-medium mt-1">${edu.degree}</div>
                            </div>
                            <span class="text-xs font-bold text-stone-400 bg-white px-2 py-1 rounded border border-stone-100">${edu.period}</span>
                        </div>
                    </div>
                 `).join('')}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  `;
};

const ProjectsPage = (data) => {
  return `
    <div class="min-h-screen py-16 px-4 bg-pastel-bg fade-in">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-stone-800 mb-4">${data.nav.projects}</h1>
          <p class="text-stone-500 max-w-2xl mx-auto text-lg">
             ${state.lang === 'pt' ? 'Uma coleção de trabalhos focados em análise de dados, machine learning e automação.' : 'A collection of works focused on data analysis, machine learning, and automation.'}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${data.projects.map(p => ProjectCard(p, data.labels.viewProject)).join('')}
        </div>
      </div>
    </div>
  `;
};

const ProjectDetailPage = (data, id) => {
  const project = data.projects.find(p => p.id === id);
  if (!project) {
      // Redirect if not found
      window.location.hash = 'projects';
      return '';
  }

  return `
    <div class="min-h-screen py-12 px-4 bg-white fade-in">
      <div class="max-w-4xl mx-auto">
        <a href="#projects" class="inline-flex items-center text-stone-500 hover:text-emerald-600 mb-8 transition-colors group font-medium">
          <i data-lucide="arrow-left" class="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
          ${data.labels.backToProjects}
        </a>

        <article class="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
          <div class="h-64 md:h-96 w-full relative">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex items-end p-8 md:p-12">
              <div class="w-full">
                <span class="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded mb-4 shadow-sm">
                  ${project.role.toUpperCase()}
                </span>
                <h1 class="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">${project.title}</h1>
              </div>
            </div>
          </div>

          <div class="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <aside class="space-y-8 h-fit lg:sticky lg:top-24">
              <div class="flex items-center text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <i data-lucide="calendar" class="mr-3 text-emerald-500 w-5 h-5"></i>
                <div>
                   <p class="text-xs text-stone-400 uppercase font-bold">${data.labels.published}</p>
                   <p class="font-bold">${project.date}</p>
                </div>
              </div>
              
              <div>
                <div class="flex items-center mb-4 text-stone-700">
                    <i data-lucide="code-2" class="mr-3 text-emerald-500 w-5 h-5"></i>
                    <p class="text-xs text-stone-400 uppercase font-bold">${data.labels.techStack}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${project.tech.map(t => `<span class="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 rounded-lg text-sm font-medium shadow-sm">${t}</span>`).join('')}
                </div>
              </div>

              <div class="space-y-3 pt-6 border-t border-stone-100">
                ${project.githubUrl ? `
                  <a href="${project.githubUrl}" target="_blank" class="flex items-center justify-center w-full px-4 py-3 bg-stone-800 text-white rounded-xl hover:bg-stone-700 hover:-translate-y-0.5 transition-all font-bold shadow-lg shadow-stone-200">
                    <i data-lucide="github" class="mr-2 w-5 h-5"></i> GitHub Repository
                  </a>` : ''}
                ${project.demoUrl ? `
                   <a href="${project.demoUrl}" target="_blank" class="flex items-center justify-center w-full px-4 py-3 bg-white text-emerald-700 border-2 border-emerald-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all font-bold">
                    <i data-lucide="external-link" class="mr-2 w-5 h-5"></i> Live Demo
                  </a>` : ''}
              </div>
            </aside>

            <div class="lg:col-span-2">
              <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                 Overview
              </h2>
              <p class="text-stone-600 text-lg leading-relaxed mb-10 border-l-4 border-emerald-200 pl-6 italic">
                ${project.description}
              </p>

              <h2 class="text-2xl font-bold text-stone-800 mb-6">Details & Process</h2>
              <div class="prose prose-stone prose-lg text-stone-600 leading-relaxed">
                 <p>${project.fullContent}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  `;
};

// --- Core Application Loop ---

const render = () => {
  const data = getData(state.lang);
  const app = document.getElementById('app');
  let content = '';

  // 1. Router Logic
  if (state.route === 'home') content = HomePage(data);
  else if (state.route === 'resume') content = ResumePage(data);
  else if (state.route === 'projects') content = ProjectsPage(data);
  else if (state.route === 'project-detail') content = ProjectDetailPage(data, state.params.id);
  else content = HomePage(data); // Default fallback

  // 2. DOM Injection (Rebuilds the tree)
  app.innerHTML = `
    ${Navbar(data, state.route, state.lang)}
    <main class="flex-grow flex flex-col">${content}</main>
    ${Footer()}
  `;

  // 3. Post-Render Initialization
  if (window.lucide) window.lucide.createIcons();
  
  // Re-bind Toggle
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.onclick = () => {
      state.lang = state.lang === 'pt' ? 'en' : 'pt';
      render();
    };
  }
};

const handleHashChange = () => {
  const hash = window.location.hash.slice(1);
  
  if (!hash || hash === 'home' || hash === '') {
    state.route = 'home';
    state.params = {};
  } else if (hash === 'resume') {
    state.route = 'resume';
    state.params = {};
  } else if (hash === 'projects') {
    state.route = 'projects';
    state.params = {};
  } else if (hash.startsWith('projects/')) {
    state.route = 'project-detail';
    state.params = { id: hash.split('/')[1] };
  } else {
    state.route = 'home';
  }
  
  render();
  window.scrollTo(0, 0);
};

// --- Bootstrap ---
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('DOMContentLoaded', () => {
  handleHashChange(); 
});