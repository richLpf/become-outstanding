import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GuidePage } from './pages/GuidePage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (hash: string) => {
    if (window.location.hash === hash) {
      // If same hash, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Parse route from hash
  const route = currentHash.replace(/^#\/?/, '');
  // route can be:
  // '' or '/' -> home
  // 'about' -> about
  // 'guide' -> guide default
  // 'guide/:slug' -> guide with specific article slug

  let pageContent: React.ReactNode = null;

  if (route.startsWith('about')) {
    pageContent = <AboutPage onNavigate={navigate} />;
  } else if (route.startsWith('guide')) {
    // extract slug if any
    const parts = route.split('/');
    const slug = parts[1] || undefined;
    pageContent = <GuidePage currentSlug={slug} onNavigate={navigate} />;
  } else {
    // Default to Home
    pageContent = <HomePage onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#27272A] selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPath={currentHash} onNavigate={navigate} />
      <div className="flex-1">{pageContent}</div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
