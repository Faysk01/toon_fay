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
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Éditions Physiques
          </h2>
        </div>
        
        <Link 
          href="#" 
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
            className="group relative flex w-[340px] md:w-[420px] h-36 md:h-40 shrink-0 snap-start bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer hover:border-emerald-700/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-700/15 overflow-hidden"
          >
            {/* Zone Image */}
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
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider rounded-md z-10 shadow-sm">
                {item.highlight}
              </div>
            </div>
            
            {/* Textes */}
            <div className="p-4 flex flex-col flex-1 justify-between z-10 bg-transparent">
              <div>
                <span className="text-[10px] font-bold text-slate-500 mb-1 tracking-wide uppercase truncate block">
                  {item.category}
                </span>
                <h3 className="text-sm font-black text-slate-900 mb-1.5 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-600 font-medium line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-sm font-black text-slate-900">
                  {item.price} FCFA
                </span>
                <button className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-700 shadow-sm">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
        
        {/* ==========================================================
            CARTE FINALE : FLÈCHE STYLISÉE "VOIR TOUT"
        ========================================================== */}
        <Link 
          href="#"
          className="group relative flex flex-col items-center justify-center w-[140px] md:w-[180px] h-36 md:h-40 shrink-0 snap-start rounded-2xl bg-shop-surface/40 border border-shop-border hover:bg-shop-surface hover:border-emerald-700/30 transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Effet de brillance (Shine) qui traverse la carte au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-700/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></div>

          {/* Cercle avec la Flèche (S'anime vers la droite) */}
          <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center text-shop-muted group-hover:text-white group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-all duration-300 mb-3 shadow-sm relative z-10">
            {/* La flèche elle-même bouge légèrement à l'intérieur du cercle */}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <span className="text-xs font-bold text-shop-muted group-hover:text-white transition-colors text-center px-4 relative z-10">
            Toute la collection
          </span>
        </Link>

        {/* Espace pour le scroll en fin de liste */}
        <div className="w-4 shrink-0"></div>

      </div>

    </section>
  );
}