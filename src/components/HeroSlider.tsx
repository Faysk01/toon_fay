"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const FEATURED_MANGAS = [
  {
    id: 1,
    title: "Love Script",
    description: "Comédie romantique, une histoire d'amour pleine de surprises.",
    image: "/imagesDB/covers/love-script.jpg", 
    tags: ["Romance", "Comédie"],
    slug: "love-script"
  },
  {
    id: 2,
    title: "La légende du roi Soundiata",
    description: "Découvrez l'épopée grandiose du fondateur de l'Empire du Mandé.",
    image: "/imagesDB/covers/roi-soundiata.jpg", 
    tags: ["Action", "Historique"],
    slug: "roi-soundiata"
  },
  {
    id: 3,
    title: "Guerre au pouvoir",
    description: "Dans un monde où la force dicte la loi, seuls les plus déterminés survivront.",
    image: "/imagesDB/covers/guerre-pouvoir.jpg",
    tags: ["Action", "Drame"],
    slug: "guerre-pouvoir"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Changement toutes les 6 secondes
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % FEATURED_MANGAS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const manga = FEATURED_MANGAS[current];

  return (
    // 1. md:hidden CACHE LE SLIDER SUR PC
    // 2. h-[320px] RÉDUIT LA HAUTEUR SUR MOBILE
    <div className="relative w-full h-[300px] overflow-hidden bg-slate-900 group md:hidden">
      
      {FEATURED_MANGAS.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* IMAGE DE FOND */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-[50%_20%]" 
            priority={index === 0}
          />
          
          {/* Overlay : Dégradé sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90" />
        </div>
      ))}

      {/* CONTENU TEXTE (Ajusté pour la petite taille) */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col justify-end h-full">
        
        {/* Tags */}
        <div className="flex gap-2 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            {manga.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-md">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* Titre (Plus petit : text-3xl) */}
        <h1 className="text-3xl font-black text-white mb-1.5 drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200 line-clamp-1">
          {manga.title}
        </h1>
        
        {/* Description (Marges réduites) */}
        <p className="text-slate-300 text-xs mb-5 line-clamp-2 max-w-[85%] drop-shadow-md animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          {manga.description}
        </p>

        {/* Bouton d'action (Plus fin) */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 delay-400">
            <Link 
                href={`/series/${manga.slug}`} 
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-indigo-50 active:scale-95 transition-all shadow-lg"
            >
                <BookOpen className="w-4 h-4 text-indigo-600" /> 
                Commencer
            </Link>
        </div>
      </div>

      {/* Indicateurs de position (Plus discrets et mieux placés) */}
      <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
        {FEATURED_MANGAS.map((_, idx) => (
            <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                aria-label={`Aller au slide ${idx + 1}`}
            />
        ))}
      </div>

    </div>
  );
}