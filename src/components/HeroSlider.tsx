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
    // 2. h-[240px] : Hauteur format "Bannière" ultra-compacte pour mobile
    // 3. rounded-b-3xl : Bords arrondis en bas pour un look "App Mobile" moderne
    <div className="relative w-full h-[240px] overflow-hidden bg-slate-950 group md:hidden shadow-sm">
      
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
            sizes="100vw"
          />
          
          {/* Overlay : Dégradé sombre qui remonte moins haut pour laisser voir l'image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent" />
        </div>
      ))}

      {/* CONTENU TEXTE (Ajusté pour la très petite taille) */}
      <div className="absolute bottom-0 left-0 w-full px-5 pb-5 pt-10 z-10 flex flex-col justify-end">
        
        {/* Tags : Design "Pilule" ultra discret */}
        <div className="flex gap-1.5 mb-2 animate-in fade-in slide-in-from-bottom-1 duration-700 delay-75">
            {manga.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* Titre (text-2xl au lieu de 3xl pour tenir sur une ligne si possible) */}
        <h1 className="text-2xl font-black text-white mb-1 drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-1 duration-700 delay-150 line-clamp-1">
          {manga.title}
        </h1>
        
        {/* Description (Texte en gris clair text-slate-400) */}
        <p className="text-slate-400 text-[11px] mb-4 line-clamp-1 max-w-[90%] font-medium animate-in fade-in slide-in-from-bottom-1 duration-700 delay-200">
          {manga.description}
        </p>

        {/* Bouton d'action (Plus compact, hauteur réduite) */}
        <div className="animate-in fade-in slide-in-from-bottom-1 duration-700 delay-300">
            <Link 
                href={`/series/${manga.slug}`} 
                className="inline-flex items-center justify-center gap-1.5 bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-[11px] active:scale-95 transition-transform shadow-md"
            >
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> 
                Commencer
            </Link>
        </div>
      </div>

      {/* Indicateurs de position (Plus discrets, alignés avec le bouton) */}
      <div className="absolute bottom-6 right-5 flex gap-1 z-20 bg-black/20 p-1.5 rounded-full backdrop-blur-md border border-white/10">
        {FEATURED_MANGAS.map((_, idx) => (
            <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-4 bg-emerald-400' : 'w-1.5 bg-white/30'}`}
                aria-label={`Aller au slide ${idx + 1}`}
            />
        ))}
      </div>

    </div>
  );
}