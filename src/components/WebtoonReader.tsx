"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Link from 'next/link';

interface WebtoonReaderProps {
  seriesTitle: string;
  episodeTitle: string;
  images: string[];
}

export default function WebtoonReader({ seriesTitle, episodeTitle, images }: WebtoonReaderProps) {
  // État pour cacher/montrer la barre de navigation au scroll
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si on descend de plus de 50px, on cache. Si on remonte, on affiche.
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    // Fond sombre autour pour bien faire ressortir la zone de lecture blanche au centre
    <div className="min-h-screen bg-slate-900 relative">
      
      {/* --- BARRE DE NAVIGATION (Haut) --- */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-transform duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </Link>
          
          <div className="flex-1 text-center px-4 overflow-hidden">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">
              {seriesTitle}
            </p>
            <h1 className="text-sm font-bold text-slate-900 truncate">
              {episodeTitle}
            </h1>
          </div>

          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>

      {/* --- ZONE DE LECTURE --- */}
      {/* max-w-2xl centre la page sur PC (comme un mobile au milieu de l'écran) */}
      <div className="max-w-2xl mx-auto bg-white min-h-screen flex flex-col pt-14 pb-16 shadow-2xl">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Page ${index + 1}`}
            // LE SECRET EST ICI : block, w-full, et aucun margin/padding
            // pointer-events-none empêche l'utilisateur de cliquer/glisser l'image par erreur
            className="w-full h-auto block m-0 p-0 pointer-events-none select-none"
            loading={index === 0 ? "eager" : "lazy"} 
            // La 1ère image charge direct (eager), le reste attend qu'on scrolle (lazy)
          />
        ))}
      </div>

      {/* --- BARRE DE NAVIGATION (Bas - Suivant/Précédent) --- */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-transform duration-300 ${
          showNav ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <button className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ChevronLeft className="w-5 h-5" /> Ép. Précédent
          </button>
          <button className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
            Ép. Suivant <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}