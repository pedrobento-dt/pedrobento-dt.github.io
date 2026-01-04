import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { getData } from './data';
import { Language } from './types';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const data = getData(lang);

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-pastel-bg text-pastel-text">
        <ScrollToTop />
        <Navbar lang={lang} setLang={setLang} labels={data.nav} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/resume" element={<Resume data={data} />} />
            <Route path="/projects" element={<Projects data={data} />} />
            <Route path="/projects/:id" element={<ProjectDetail data={data} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;