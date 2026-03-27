"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Fausses données pour les slides marketing
const MARKETING_SLIDES = [
  {
    id: 1,
    badge: "Exclusivité",
    title: "Éditions Collector",
    description: "Des coffrets exclusifs et numérotés, imprimés avec des finitions premium.",
    button: "Découvrir",
    bgGradient: "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900",
  },
  {
    id: 2,
    badge: "Nouveauté",
    title: "Streetwear Officiel",
    description: "Portez les couleurs de vos héros. Découvrez notre nouvelle collection.",
    button: "Voir la collection",
    bgGradient: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
  },
  {
    id: 3,
    badge: "Précommande",
    title: "Figurines Premium",
    description: "Des détails à couper le souffle. Réservez dès maintenant.",
    button: "Précommander",
    bgGradient: "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900",
  }
];

export default function ShopHeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % MARKETING_SLIDES.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(timer);
  }, []);

  return (
    // 1. HAUTEUR RÉDUITE : h-[250px] sur mobile et h-[300px] sur PC
    <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-slate-950 border-b border-slate-800/60">
      
      {/* Les Slides */}
      {MARKETING_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-4 md:px-6 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          } ${slide.bgGradient}`}
        >
          {/* Effet de lumière "Fintech" un peu plus petit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Badge plus petit */}
            <span className="px-2.5 py-0.5 mb-3 text-[9px] font-bold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md">
              {slide.badge}
            </span>
            
            {/* Titre réduit (text-2xl à 4xl au lieu de 4xl à 6xl) */}
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3 drop-shadow-lg">
              {slide.title}
            </h1>
            
            {/* Description plus courte et compacte */}
            <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed max-w-md line-clamp-2 md:line-clamp-none">
              {slide.description}
            </p>

            {/* Bouton plus fin */}
            <button className="group flex items-center gap-2 px-6 py-2.5 bg-white text-slate-950 font-bold rounded-full hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 text-xs">
              {slide.button}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}

      {/* Indicateurs remontés un peu (bottom-4) et plus discrets */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {MARKETING_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === current ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Aller au slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}