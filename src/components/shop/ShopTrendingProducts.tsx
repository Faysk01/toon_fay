"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Plus } from "lucide-react";

// Fausses données pour les 6 produits "Nouveautés & Tendances"
const TRENDING_PRODUCTS = [
  { 
    id: 1, 
    name: "T-Shirt Oversize 'Soundiata'", 
    price: "35.00", 
    category: "Vêtements", 
    image: "/imagesDB/covers/roi-soundiata.jpg",
    tag: "Nouveau" 
  },
  { 
    id: 2, 
    name: "Tome 1 Collector 'Love Script'", 
    price: "19.99", 
    category: "Édition Physique", 
    image: "/imagesDB/covers/love-script.jpg" 
  },
  { 
    id: 3, 
    name: "Figurine 'Guerre au pouvoir'", 
    price: "89.00", 
    category: "Figurines Premium", 
    image: "/imagesDB/covers/guerre-pouvoir.jpg", 
    tag: "Limité" 
  },
  { 
    id: 4, 
    name: "Poster Art 'La Queen'", 
    price: "15.00", 
    category: "Artworks", 
    image: "/imagesDB/covers/la-queen.jpg" 
  },
  { 
    id: 5, 
    name: "Sweat à capuche brodé", 
    price: "55.00", 
    category: "Vêtements", 
    image: "/imagesDB/covers/albinos-noir.jpg" 
  },
  { 
    id: 6, 
    name: "Box Découverte 'Originals'", 
    price: "49.90", 
    category: "Box Mystère", 
    image: "/imagesDB/covers/village-sans-frontiere.jpg", 
    tag: "Best-seller" 
  }
];

export default function ShopTrendingProducts() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-slate-800/50 mt-8">
      
      {/* --- EN-TÊTE : Uniquement le Titre et le Bouton --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-black text-white tracking-tight">
          Nouveautés & Tendances
        </h2>
        
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:bg-slate-800 transition-colors w-fit shrink-0"
        >
          Voir plus
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* --- CARTES PRODUITS SCROLLABLES (Miniatures) --- */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {TRENDING_PRODUCTS.map((product) => (
          <div 
            key={product.id}
            // w-48 (192px) au lieu de w-64 (256px) pour des cartes beaucoup plus compactes
            className="group relative flex flex-col w-48 shrink-0 snap-start bg-slate-900/40 border border-slate-800/80 rounded-2xl cursor-pointer hover:border-indigo-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)] overflow-hidden"
          >
            {/* Image du produit : aspect-[3/4] pour une hauteur maîtrisée */}
            <div className="relative w-full aspect-[3/4] bg-slate-800 overflow-hidden">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 200px, 200px"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Tag miniature */}
              {product.tag && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-wider rounded-full z-10">
                  {product.tag}
                </div>
              )}

              {/* Bouton Panier Rapide (Plus petit) */}
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-indigo-500 hover:scale-110 z-10">
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Informations Produit (Paddings réduits) */}
            <div className="p-4 flex flex-col flex-1 bg-slate-900/90 backdrop-blur-sm">
              <span className="text-[10px] font-semibold text-indigo-400 mb-1 tracking-wide uppercase truncate">
                {product.category}
              </span>
              
              <h3 className="text-sm font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors">
                {product.name}
              </h3>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-black text-white">
                  {product.price} €
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