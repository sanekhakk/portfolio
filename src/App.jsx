import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';
import Certifications from './pages/Certifications';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"               element={<Home />} />
            <Route path="/skills"         element={<Skills />} />
            <Route path="/experience"     element={<Experience />} />
            <Route path="/projects"       element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about"          element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}