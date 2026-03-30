"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Plus } from "lucide-react";

// 1. IMPORT DE TES VRAIES DONNÉES
import { PRODUCTS_DATA } from "@/data/productsData"; 

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
            // Carte principale
            className="group relative flex flex-col w-60 md:w-64 shrink-0 snap-start rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-shop-accent/10 border border-shop-border overflow-hidden bg-shop-surface"
          >
            {/* 1. IMAGE DU PRODUIT : Plus grande et fond Orange Clair */}
            {/* L'aspect ratio passe de 4/3 à 1/1 (Carré) pour donner plus de hauteur à l'image */}
            <div className="relative w-full aspect-square bg-orange-100/60 overflow-hidden flex items-center justify-center p-2">
              
              {/* Image agrandie (padding réduit p-4 au lieu de p-6) et Zoom plus fort au survol (scale-125) */}
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-125 p-4 drop-shadow-xl"
                sizes="(max-width: 768px) 250px, 300px"
              />
              
              {/* Overlay ultra léger au survol de l'image */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-0"></div>

              {/* Tag miniature */}
              {product.tag && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-shop-accent/10 backdrop-blur-md text-shop-accent text-[9px] font-bold uppercase tracking-wider rounded-full z-20 shadow-sm border border-shop-accent/20">
                  {product.tag}
                </div>
              )}

              {/* Bouton Panier Rapide */}
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-shop-accent text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-shop-accent-hover hover:scale-110 z-20">
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* 2. INFORMATIONS PRODUIT : Fond SOMBRE (shop-surface) */}
            <div className="p-4 flex flex-col flex-1 bg-shop-surface border-t border-shop-border relative z-10">
              
              {/* Nom du produit */}
              <h3 className="text-sm font-bold text-shop-text mb-1 line-clamp-1 group-hover:text-shop-accent transition-colors">
                {product.name}
              </h3>
              
              {/* Description courte */}
              <p className="text-[11px] text-shop-muted line-clamp-2 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>
              
              {/* Ligne Prix / Action */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-black text-shop-text">
                  {product.formattedPrice} FCFA
                </span>
                
                {/* Petit bouton "+" stylisé pour fond sombre */}
                <div className="w-6 h-6 rounded-full border border-shop-border flex items-center justify-center text-shop-muted group-hover:bg-shop-accent group-hover:text-white group-hover:border-shop-accent transition-colors shadow-sm">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>
        ))}
        
        {/* ==========================================================
            CARTE FINALE : FLÈCHE STYLISÉE "VOIR TOUT"
        ========================================================== */}
        <Link 
          href="#"
          // self-stretch permet à la carte de prendre la même hauteur que les autres cartes produits
          className="group relative flex flex-col items-center justify-center w-[140px] md:w-[180px] self-stretch shrink-0 snap-start rounded-2xl bg-shop-surface/40 border border-shop-border hover:bg-shop-surface hover:border-shop-accent/40 transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Effet de brillance (Shine) qui traverse la carte au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-shop-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></div>

          {/* Cercle avec la Flèche (S'anime vers la droite) */}
          <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center text-shop-muted group-hover:text-white group-hover:bg-shop-accent group-hover:border-shop-accent transition-all duration-300 mb-3 shadow-sm relative z-10">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <span className="text-xs font-bold text-shop-muted group-hover:text-white transition-colors text-center px-4 relative z-10">
            Voir toutes les tendances
          </span>
        </Link>

        {/* Espace pour le scroll */}
        <div className="w-4 shrink-0"></div>

      </div>

    </section>
  );
}