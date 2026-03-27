"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Plus, Book } from "lucide-react";

// Fausses données spécifiques aux Tomes physiques de tes BD
const BD_BOOKS = [
  { 
    id: 1, 
    name: "La légende du roi Soundiata - Tome 1", 
    price: "14.99", 
    category: "Édition Standard", 
    image: "/imagesDB/covers/roi-soundiata.jpg",
    tag: "Nouveau" 
  },
  { 
    id: 2, 
    name: "Love Script - Tome 1", 
    price: "14.99", 
    category: "Édition Standard", 
    image: "/imagesDB/covers/love-script.jpg" 
  },
  { 
    id: 3, 
    name: "Guerre au pouvoir - Tome 1", 
    price: "24.90", 
    category: "Édition Collector", 
    image: "/imagesDB/covers/guerre-pouvoir.jpg", 
    tag: "Limité" 
  },
  { 
    id: 4, 
    name: "La Queen - Artbook Officiel", 
    price: "29.99", 
    category: "Artbook", 
    image: "/imagesDB/covers/la-queen.jpg" 
  },
  { 
    id: 5, 
    name: "Albinos Noir - Tome 1", 
    price: "14.99", 
    category: "Édition Standard", 
    image: "/imagesDB/covers/albinos-noir.jpg" 
  },
  { 
    id: 6, 
    name: "Village Sans Frontière - Intégrale", 
    price: "39.90", 
    category: "Coffret Intégral", 
    image: "/imagesDB/covers/village-sans-frontiere.jpg", 
    tag: "Exclu" 
  }
];

export default function ShopBDBooks() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-slate-800/50 mt-8">
      
      {/* --- EN-TÊTE : Minimaliste --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* Petite icône pour différencier des vêtements */}
          <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
            <Book className="w-4 h-4 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Éditions Physiques
          </h2>
        </div>
        
        {/* Bouton Voir plus */}
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:bg-slate-800 hover:border-slate-700 transition-colors w-fit shrink-0"
        >
          Voir toute la collection
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* --- CARTES DE LIVRES SCROLLABLES --- */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {BD_BOOKS.map((book) => (
          <div 
            key={book.id}
            // Format "Poche" w-48, design Dark Mode
            className="group relative flex flex-col w-48 shrink-0 snap-start bg-slate-900/40 border border-slate-800/80 rounded-2xl cursor-pointer hover:border-indigo-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)] overflow-hidden"
          >
            {/* Image du Livre : aspect-[2/3] est le vrai format d'une BD/Manga */}
            <div className="relative w-full aspect-[2/3] bg-slate-800 overflow-hidden">
              <Image 
                src={book.image}
                alt={book.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 200px, 200px"
              />
              
              {/* Overlay sombre au survol pour faire ressortir le bouton */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Tag miniature (Nouveau, Limité) */}
              {book.tag && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-wider rounded-full z-10">
                  {book.tag}
                </div>
              )}

              {/* Bouton Panier Rapide au centre de la couverture */}
              <button className="absolute bottom-4 right-4 w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-indigo-500 hover:scale-110 z-10">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
            
            {/* Informations du Livre (Fond sombre) */}
            <div className="p-4 flex flex-col flex-1 bg-slate-900/90 backdrop-blur-sm">
              <span className="text-[10px] font-semibold text-indigo-400 mb-1 tracking-wide uppercase truncate">
                {book.category}
              </span>
              
              <h3 className="text-sm font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors">
                {book.name}
              </h3>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-black text-white">
                  {book.price} €
                </span>
                
                {/* Petit bouton "+" */}
                <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
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