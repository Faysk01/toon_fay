"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ChevronLeft, ChevronRight, Menu, ArrowUp, List } from "lucide-react";

// 👇 1. IMPORTATION DES DONNÉES DEPUIS NOS FICHIERS EXTERNES 👇
import { POPULAR_SERIES, NEW_RELEASES, DATA_BY_CATEGORY, Series } from "@/data/Webtoons";
import { EPISODES_DATA } from "@/data/episodes"; // On importe le dictionnaire magique !

// --- FONCTION DE RECHERCHE DE SÉRIE ---
function getSeriesById(id: string): Series | undefined {
  const allSeries = [
    ...POPULAR_SERIES,
    ...NEW_RELEASES,
    ...Object.values(DATA_BY_CATEGORY).flat(),
  ];
  return allSeries.find((series) => series.id === id);
}

export default function ReadEpisodePage({
  params,
}: {
  params: Promise<{ seriesId: string; episodeId: string }>;
}) {
  const resolvedParams = use(params);
  const { seriesId, episodeId } = resolvedParams;
  
  const series = getSeriesById(seriesId);

  // --- 2. ON RÉCUPÈRE DYNAMIQUEMENT LES DONNÉES DE L'ÉPISODE ---
  const currentEpisodeData = EPISODES_DATA[seriesId]?.[episodeId];

  // --- LOGIQUE DE SCROLL POUR LA NAVBAR ---
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =======================================================================
  // CAS 1 : L'ÉPISODE EXISTE DANS LA BASE DE DONNÉES
  // =======================================================================
  if (currentEpisodeData) {
    const { title, images, prevEpisode, nextEpisode } = currentEpisodeData;

    return (
      <main className="min-h-screen relative font-sans text-slate-900 bg-slate-50">
        
        {/* --- NAVBAR SUPÉRIEURE --- */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-transform duration-300 ease-in-out ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <Link href={`/series/${seriesId}`} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors group text-sm font-medium">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden md:block">Retour</span>
            </Link>
            
            <div className="flex-1 flex justify-center px-4">
              <div className="flex flex-col items-center">
                <h1 className="text-sm md:text-base font-bold text-slate-900 tracking-wide truncate max-w-[200px] md:max-w-xs text-center">
                  {series?.title || "Série inconnue"}
                </h1>
                <p className="text-[10px] md:text-xs font-bold text-emerald-500 uppercase tracking-[0.15em] mt-0.5">
                  {title}
                </p>
              </div>
            </div>

            <button className="text-slate-600 hover:text-emerald-600 transition-colors p-2 rounded-full hover:bg-slate-100">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- NAVIGATION FLOTTANTE PC (Gauche / Droite) --- */}
        {prevEpisode && (
          <Link href={`/read/${seriesId}/${prevEpisode}`} className={`hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 items-center justify-center rounded-full shadow-lg border border-slate-200 transition-all duration-300 ease-in-out ${showNav ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
            <ChevronLeft className="w-6 h-6" />
          </Link>
        )}

        {nextEpisode && (
          <Link href={`/read/${seriesId}/${nextEpisode}`} className={`hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 items-center justify-center rounded-full shadow-lg border border-slate-200 transition-all duration-300 ease-in-out ${showNav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}>
            <ChevronRight className="w-6 h-6" />
          </Link>
        )}

        {/* --- LECTEUR D'IMAGES --- */}
        <div className="relative w-full bg-slate-50 z-0 flex flex-col items-center overflow-x-hidden pt-16">
          <div className="w-full max-w-[700px] flex flex-col shadow-2xl bg-white">
            {images.map((src: string, index: number) => (
              <div key={index} className="relative w-full min-h-[300px]">
                <Image
                  src={src}
                  alt={`Page ${index + 1}`}
                  width={700}
                  height={980}
                  sizes="(max-width: 700px) 100vw, 700px"
                  className="block w-full h-auto m-0 p-0 select-none object-cover"
                  priority={index <= 1} // Précharge les premières images
                />
              </div>
            ))}
          </div>
        </div>
          
        {/* --- NAVIGATION DU BAS --- */}
        <div className="relative z-10 w-full bg-white border-t border-slate-200 py-16 px-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 mb-10 w-full max-w-sm">
            <div className="h-px bg-slate-200 flex-1"></div>
            <p className="text-slate-400 font-bold text-xs tracking-[0.25em] uppercase">
              À suivre
            </p>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            
            {/* Bouton Précédent Dynamique */}
            {prevEpisode ? (
              <Link href={`/read/${seriesId}/${prevEpisode}`} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 shadow-sm">
                <ChevronLeft className="w-5 h-5" />
                <span>Ép. Précédent</span>
              </Link>
            ) : (
              <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 border border-slate-100 text-slate-300 text-sm font-bold rounded-full cursor-not-allowed">
                <ChevronLeft className="w-5 h-5 opacity-50" />
                <span>Ép. Précédent</span>
              </div>
            )}
            
            {/* Bouton Suivant Dynamique */}
            {nextEpisode ? (
              <Link href={`/read/${seriesId}/${nextEpisode}`} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 text-white text-sm font-bold rounded-full hover:bg-emerald-600 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-emerald-600/20">
                <span>Ép. Suivant</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-100 border border-slate-200 text-slate-400 text-sm font-bold rounded-full cursor-not-allowed">
                <span>Fin de parution</span>
                <Clock className="w-4 h-4 opacity-50" />
              </div>
            )}
            
          </div>
          
          <Link href={`/series/${seriesId}`} className="mt-10 flex items-center gap-2.5 px-6 py-3 text-slate-500 text-sm font-bold rounded-full hover:text-slate-900 hover:bg-slate-100 transition-colors">
            <List className="w-4 h-4" />
            Liste des épisodes
          </Link>
        </div>

        {/* --- BOUTON RETOUR EN HAUT --- */}
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 rounded-full shadow-lg border border-slate-200 transition-all duration-300 group ${!showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`} aria-label="Retour en haut">
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </main>
    );
  }

  // =======================================================================
  // CAS 2 : L'ÉPISODE N'EXISTE PAS ENCORE (En cours de montage)
  // =======================================================================
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 h-16 flex items-center shadow-sm">
        <Link href={`/series/${seriesId}`} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-bold transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Retour
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 border border-slate-200 shadow-lg">
          <Clock className="w-10 h-10 text-slate-400" />
        </div>
        
        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          En cours de production
        </h1>
        
        <p className="text-slate-500 max-w-md text-base mb-10 leading-relaxed font-medium">
          L&rsquo;épisode que vous essayez de lire n&rsquo;est pas encore disponible ou est en cours de montage par notre équipe.
        </p>

        <Link href={`/series/${seriesId}`} className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white text-sm font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-600/20 hover:scale-[1.02] duration-200">
          <ArrowLeft className="w-4 h-4" />
          Revenir à {series?.title || "la série"}
        </Link>
      </div>
    </main>
  );
}