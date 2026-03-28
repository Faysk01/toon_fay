"use client";

import React, { useState } from 'react';
import WebtoonCarousel from './WebtoonCarousel';
import { CATEGORIES, DATA_BY_CATEGORY } from '@/data/Webtoons';

export default function CategoryTabs() {
  // On met la première catégorie par défaut
  // Astuce : On peut utiliser CATEGORIES[0] pour être sûr que ça existe toujours
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0] || "Action");

  const activeData = DATA_BY_CATEGORY[activeCategory as keyof typeof DATA_BY_CATEGORY] || [];

  return (
    <div className="flex flex-col gap-8">
      
      {/* --- 1. NAVIGATION DES ONGLETS (Scrollable sur mobile) --- */}
      <div className="w-full overflow-hidden">
        <div className="
          flex gap-3 overflow-x-auto pb-4 px-1
          snap-x 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        ">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  snap-start
                  px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ease-out
                  border active:scale-95 whitespace-nowrap
                  ${isActive 
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-200 transform scale-105' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800 hover:bg-slate-50'}
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- 2. CONTENU (Avec Animation) --- */}
      {/* L'astuce ici est la prop 'key={activeCategory}'.
          Quand la clé change, React détruit et recrée le composant, 
          ce qui déclenche l'animation CSS 'animate-in' à chaque fois.
      */}
      <div 
        key={activeCategory} 
        className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
      > 
        <WebtoonCarousel items={activeData} />
      </div>
      
    </div>
  );
}