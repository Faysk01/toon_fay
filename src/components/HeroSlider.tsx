"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";

// Tes données avec les images locales (les slugs correspondent parfaitement aux IDs de notre base de données !)
const FEATURED_MANGAS = [
  {
    
    id: 1,
    title: "love-script",
    description: "Comedie romantique, une histoire d'amour plein de surprises.",
    image: "/imagesDB/covers/love-script.jpg", 
    tags: ["Romance", "Comédie"],
    slug: "love-script" // <-- Correspond à l'ID dans Webtoons.ts
  },
  {
    id: 2,
    title: "La légende du roi Soundiata",
    description: "Découvrez l'épopée grandiose du fondateur de l'Empire du Mandé. Un récit historique époustouflant.",
    image: "/imagesDB/covers/roi-soundiata.jpg", 
    tags: ["Action", "Historique"],
    slug: "roi-soundiata"
  },
  {
    id: 3,
    title: "Guerre au pouvoir",
    description: "Dans un monde où la force dicte la loi, seuls les plus déterminés pourront s'asseoir sur le trône.",
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
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden bg-slate-900 group">
      
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
            /* IMPORTANT : 
               - object-cover : remplit tout l'espace
               - object-[50%_20%] : Centre horizontalement (50%), mais se cale à 20% du haut.
                 Cela permet de voir les visages au lieu des ventres sur les images portraits !
            */
            className="object-cover object-[50%_20%]" 
            priority={index === 0}
          />
          
          {/* Overlay : Dégradé sombre UNIQUEMENT en bas et à gauche pour le texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-80" />
        </div>
      ))}

      {/* CONTENU TEXTE */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 flex flex-col justify-end h-full max-w-4xl">
        
        {/* Tags avec animation d'apparition */}
        <div className="flex gap-2 mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {manga.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider rounded shadow-lg">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-3 drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {manga.title}
        </h1>
        
        {/* Description */}
        <p className="text-slate-200 text-sm md:text-lg mb-8 line-clamp-2 md:line-clamp-3 max-w-xl drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {manga.description}
        </p>

        {/* Bouton d'action */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            {/* 1. CHANGEMENT ICI : Le lien pointe maintenant vers /series/... */}
            <Link 
                href={`/series/${manga.slug}`} 
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-sm hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl"
            >
                <BookOpen className="w-5 h-5 text-indigo-600" /> 
                Commencer la lecture
            </Link>
        </div>
      </div>

      {/* Indicateurs de position (petits traits en bas à droite) */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {FEATURED_MANGAS.map((_, idx) => (
            <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            />
        ))}
      </div>

    </div>
  );
}