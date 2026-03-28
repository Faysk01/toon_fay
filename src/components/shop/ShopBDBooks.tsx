"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Book } from "lucide-react";

// Fausses données pour tes Bandes Dessinées Physiques
const BD_BOOKS = [
  { 
    id: 1, 
    name: "La légende du roi Soundiata - Tome 1", 
    description: "L'épopée fondatrice de l'Empire du Mandé. Une édition richement illustrée.",
    price: "15 000", 
    category: "Édition Standard", 
    image: "/imagesDB/covers/roi-soundiata.jpg",
    highlight: "Nouveau"
  },
  { 
    id: 2, 
    name: "Love Script - Tome 1", 
    description: "Comédie romantique. Quand le destin s'en mêle, l'amour n'est jamais loin.",
    price: "12 500", 
    category: "Édition Standard", 
    image: "/imagesDB/covers/love-script.jpg",
    highlight: "Best-Seller"
  },
  { 
    id: 3, 
    name: "Guerre au pouvoir - Intégrale", 
    description: "Le coffret collector ultime contenant l'intégralité du premier arc narratif.",
    price: "45 000", 
    category: "Coffret Collector", 
    image: "/imagesDB/covers/guerre-pouvoir.jpg",
    highlight: "Édition Limitée"
  }
];

export default function ShopBDBooks() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-shop-accent/10 flex items-center justify-center border border-shop-accent/20">
            <Book className="w-4 h-4 text-shop-accent" />
          </div>
          {/* Le titre reste de la couleur du thème sombre car il est en dehors de la carte */}
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Éditions Physiques
          </h2>
        </div>
        
        <Link 
          href="#" 
          // Le bouton "Voir la collection" a aussi un texte qui devient vert sombre au survol
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-shop-surface border border-shop-border text-xs font-semibold text-shop-text hover:bg-slate-800 hover:border-emerald-700/50 transition-colors w-fit shrink-0"
        >
          Voir la collection
          <ArrowRight className="w-3.5 h-3.5 text-shop-muted group-hover:text-emerald-700 transition-all" />
        </Link>
      </div>

      {/* --- CARTES LARGES SCROLLABLES --- */}
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {BD_BOOKS.map((item) => (
          <div 
            key={item.id}
            // 1. CARTE CLAIRE : Utilisation de `bg-slate-50`
            // 2. HOVER VERT SOMBRE : hover:border-emerald-700/50 et hover:shadow-emerald-700/15
            className="group relative flex w-[340px] md:w-[420px] h-36 md:h-40 shrink-0 snap-start bg-slate-400 border border-slate-200 rounded-2xl cursor-pointer hover:border-emerald-700/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-700/15 overflow-hidden"
          >
            {/* Zone Image (à gauche) */}
            <div className="relative w-1/3 md:w-32 h-full bg-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center p-2">
              <div className="relative w-full h-full rounded-md overflow-hidden shadow-sm">
                 <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="150px"
                  />
              </div>
              
              {/* Highlight Badge : Vert profond pour marquer le côté Premium */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider rounded-md z-10 shadow-sm">
                {item.highlight}
              </div>
            </div>
            
            {/* 2. TEXTE (à droite) : INVERSION DES COULEURS (Textes foncés sur fond clair) */}
            <div className="p-4 flex flex-col flex-1 justify-between z-10 bg-transparent">
              <div>
                {/* Catégorie en gris moyen */}
                <span className="text-[10px] font-bold text-slate-500 mb-1 tracking-wide uppercase truncate block">
                  {item.category}
                </span>
                {/* Titre en NOIR (slate-900) qui devient VERT SOMBRE (emerald-700) au survol */}
                <h3 className="text-sm font-black text-slate-900 mb-1.5 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.name}
                </h3>
                {/* Description en gris foncé (slate-600) */}
                <p className="text-[11px] text-slate-600 font-medium line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-2">
                {/* Prix en NOIR */}
                <span className="text-sm font-black text-slate-900">
                  {item.price} FCFA
                </span>
                
                {/* 3. Bouton Panier : Sombre de base, devient VERT SOMBRE (emerald-700) au survol */}
                <button className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-700 shadow-sm">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
        
        {/* Espace pour le scroll */}
        <div className="w-4 shrink-0"></div>

      </div>

    </section>
  );
}