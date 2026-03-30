"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

// 1. IMPORT DES VRAIES DONNÉES
import { PRODUCTS_DATA } from "@/data/productsData";

export default function ShopOurSelection() {
  
  // On sélectionne par exemple les produits de l'index 6 à 9 pour cette section
  const ourSelectionProducts = PRODUCTS_DATA.slice(6, 9);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* L'icône étoile dorée (Premium) */}
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </div>
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Notre Sélection
          </h2>
        </div>
        
        {/* Bouton "Voir la sélection" */}
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-shop-surface border border-shop-border text-xs font-semibold text-shop-text hover:bg-shop-card hover:border-shop-accent/50 transition-colors w-fit shrink-0 shadow-sm"
        >
          Voir la sélection
          <ArrowRight className="w-3.5 h-3.5 text-shop-muted group-hover:text-shop-accent transition-all" />
        </Link>
      </div>

      {/* --- CARTES LARGES SCROLLABLES --- */}
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {ourSelectionProducts.map((product) => (
          <div 
            key={product.id}
            // Hauteur de la carte
            className="group relative flex w-[350px] md:w-[450px] h-44 md:h-48 shrink-0 snap-start bg-shop-surface border border-shop-border rounded-2xl cursor-pointer hover:border-shop-accent/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-shop-accent/10 overflow-hidden"
          >
            {/* ==========================================================
                1. ZONE IMAGE (À gauche)
            ========================================================== */}
            <div className="relative w-[40%] md:w-48 h-full shrink-0 flex items-center justify-center p-2 bg-transparent overflow-hidden">
              
              {/* IMAGE DE FOND PURE */}
              <Image 
                src="/assets/fontProduct.png" 
                alt="Texture de fond"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 150px, 200px"
              />

              {/* OVERLAY D'ASSOMBRISSEMENT (S'active au hover) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-0"></div>
              
              {/* LE PRODUIT LUI-MÊME */}
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-125 drop-shadow-2xl z-10"
                sizes="(max-width: 768px) 150px, 200px"
              />
              
              {/* Highlight Badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-shop-card/90 backdrop-blur-md border border-shop-border text-shop-text text-[9px] font-bold uppercase tracking-wider rounded-md z-20 shadow-sm">
                {product.tag || product.category}
              </div>
            </div>
            
            {/* ==========================================================
                2. INFORMATIONS PRODUIT (À droite)
            ========================================================== */}
            <div className="p-4 md:p-5 flex flex-col flex-1 border-l border-shop-border/50 justify-between z-10 bg-shop-surface">
              <div>
                <span className="text-[10px] font-semibold text-amber-500 mb-1 tracking-wide uppercase truncate block">
                  Sélection Premium
                </span>
                
                <h3 className="text-base font-bold text-shop-text mb-2 line-clamp-2 group-hover:text-shop-accent transition-colors leading-snug">
                  {product.name}
                </h3>
                
                <p className="text-xs text-shop-muted line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-base font-black text-shop-text">
                  {product.formattedPrice} FCFA
                </span>
                
                <button className="w-9 h-9 bg-shop-card border border-shop-border text-shop-text rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-shop-accent group-hover:text-white group-hover:border-shop-accent shadow-sm z-20">
                  <ShoppingBag className="w-4 h-4" />
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
          // Alignée sur la hauteur h-44 md:h-48 des cartes produits
          className="group relative flex flex-col items-center justify-center w-[140px] md:w-[180px] h-44 md:h-48 shrink-0 snap-start rounded-2xl bg-shop-surface/40 border border-shop-border hover:bg-shop-surface hover:border-shop-accent/40 transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Effet de brillance (Shine) adapté à la couleur shop-accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-shop-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></div>

          {/* Cercle avec la Flèche (S'anime vers la droite) */}
          <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center text-shop-muted group-hover:text-white group-hover:bg-shop-accent group-hover:border-shop-accent transition-all duration-300 mb-3 shadow-sm relative z-10">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <span className="text-xs font-bold text-shop-muted group-hover:text-white transition-colors text-center px-4 relative z-10">
            Toute la sélection
          </span>
        </Link>
        
        {/* Espace pour le scroll en fin de liste */}
        <div className="w-4 shrink-0"></div>

      </div>

    </section>
  );
}