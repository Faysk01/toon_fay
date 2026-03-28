"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Plus } from "lucide-react";

// 1. IMPORT DE TES VRAIES DONNÉES
import { PRODUCTS_DATA } from "@/data/productsData"; // <-- Vérifie que le chemin est correct

export default function ShopTrendingProducts() {
  
  // On ne prend que les 6 premiers produits pour la section "Tendances"
  const trendingProducts = PRODUCTS_DATA.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 mt-8">
      
      {/* --- EN-TÊTE : Titre et Bouton "Voir plus" --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-black text-shop-text tracking-tight">
          Nouveautés & Tendances
        </h2>
        
        {/* Bouton sombre lié au thème */}
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-shop-surface border border-shop-border text-xs font-semibold text-shop-text hover:bg-shop-card hover:border-shop-accent/50 transition-colors shadow-sm w-fit shrink-0"
        >
          Voir plus
          <ArrowRight className="w-3.5 h-3.5 text-shop-muted group-hover:text-shop-accent group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* --- CARTES PRODUITS SCROLLABLES (Miniatures) --- */}
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {trendingProducts.map((product) => (
          <div 
            key={product.id}
            // Utilisation de la bordure du thème pour bien délimiter la carte
            className="group relative flex flex-col w-56 shrink-0 snap-start rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-shop-accent/10 border border-shop-border overflow-hidden bg-shop-surface"
          >
            {/* Image du produit : On garde bg-slate-100 pur pour bien faire ressortir les images sans fond (Bicolor) */}
            <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-4">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 p-6"
                sizes="(max-width: 768px) 200px, 200px"
              />
              
              {/* Overlay ultra léger au survol de l'image */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

              {/* Tag miniature (Vert Fintech lié au thème) */}
              {product.tag && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-shop-accent/20 text-shop-accent text-[9px] font-bold uppercase tracking-wider rounded-full z-10 shadow-sm border border-shop-accent/30 backdrop-blur-sm">
                  {product.tag}
                </div>
              )}

              {/* Bouton Panier Rapide (Vert dynamique) */}
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-shop-accent text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-shop-accent-hover hover:scale-110 z-10">
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Informations Produit : Fond SOMBRE (shop-surface) */}
            <div className="p-4 flex flex-col flex-1 bg-shop-surface border-t border-shop-border">
              
              {/* Nom du produit (Blanc) */}
              <h3 className="text-sm font-bold text-shop-text mb-1 line-clamp-1 group-hover:text-shop-accent transition-colors">
                {product.name}
              </h3>
              
              {/* Description courte (Gris moyen) */}
              <p className="text-[11px] text-shop-muted line-clamp-2 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>
              
              {/* Ligne Prix / Action */}
              <div className="mt-auto flex items-center justify-between">
                {/* Prix en Blanc */}
                <span className="text-sm font-black text-shop-text">
                  {product.formattedPrice} FCFA
                </span>
                
                {/* Petit bouton "+" stylisé pour fond sombre */}
                <div className="w-6 h-6 rounded-full border border-shop-border flex items-center justify-center text-shop-muted group-hover:bg-shop-accent group-hover:text-white group-hover:border-shop-accent transition-colors">
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