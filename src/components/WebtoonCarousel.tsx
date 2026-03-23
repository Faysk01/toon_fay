"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WebtoonCard from './WebtoonCard'; 

// 1. MISE À JOUR : Ajout de l'id obligatoire
interface Webtoon {
  id: string; 
  title: string;
  author: string;
  rating: number;
  image: string;
  tag?: string;
  tagColor?: string;
}

export default function WebtoonCarousel({ items = [] }: { items?: Webtoon[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Vérification de la position du scroll
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Tolérance de 5px pour les arrondis
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [items]);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = dir === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  if (!items.length) return null;

  return (
    <div className="relative w-full">
      
      {/* Boutons de navigation (Simples ronds blancs) */}
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 p-2 rounded-full shadow-md text-slate-800 hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95 hidden md:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 p-2 rounded-full shadow-md text-slate-800 hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95 hidden md:flex"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Liste des cartes */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="
          flex gap-4 overflow-x-auto 
          pb-8 pt-2 px-1 /* Padding pour laisser respirer l'effet hover des cartes */
          snap-x snap-mandatory 
          [&::-webkit-scrollbar]:hidden scroll-smooth
        "
      >
        {/* 2. MISE À JOUR : On utilise item.id comme clé React (meilleure performance) */}
        {items.map((item) => (
          <div key={item.id} className="min-w-[150px] md:min-w-[180px] snap-start">
            {/* L'item contient maintenant l'id, qui est passé à la WebtoonCard */}
            <WebtoonCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}