"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

// 1. IMPORT DES VRAIES DONNÉES
import { PRODUCTS_DATA } from "@/data/productsData";

export default function ShopOurSelection() {
  
  // On sélectionne par exemple les produits de l'index 6 à 9 pour cette section
  // (Ou tu peux ajouter un champ `isSelection: true` dans tes données plus tard)
  const ourSelectionProducts = PRODUCTS_DATA.slice(6, 9);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* L'icône étoile dorée (Premium) */}
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </div>
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Notre Sélection
          </h2>
        </div>
        
        {/* Bouton "Voir la sélection" */}
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-shop-surface border border-shop-border text-xs font-semibold text-shop-text hover:bg-shop-card hover:border-shop-accent/50 transition-colors w-fit shrink-0"
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
            // Carte principale : Fond sombre
            className="group relative flex w-[340px] md:w-[420px] h-36 md:h-40 shrink-0 snap-start bg-shop-surface border border-shop-border rounded-2xl cursor-pointer hover:border-shop-accent/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-shop-accent/5 overflow-hidden"
          >
            {/* 1. Zone Image (à gauche) : FOND VERT CLAIR POUR FAIRE RESSORTIR LE PRODUIT */}
            <div className="relative w-1/3 md:w-40 h-full bg-emerald-50/5 overflow-hidden shrink-0 flex items-center justify-center p-4">
              {/* Cercle décoratif subtil derrière le produit */}
              <div className="absolute w-24 h-24 bg-shop-accent/10 rounded-full blur-xl group-hover:bg-shop-accent/20 transition-colors duration-500"></div>
              
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl z-10"
                sizes="150px"
              />
              
              {/* Highlight Badge (Si existant dans tes données, sinon on affiche la catégorie) */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-shop-accent/20 backdrop-blur-md border border-shop-accent/30 text-shop-accent text-[9px] font-bold uppercase tracking-wider rounded-md z-20 shadow-sm">
                {product.tag || product.category}
              </div>
            </div>
            
            {/* 2. Informations Produit (à droite) : FOND SOMBRE */}
            <div className="p-4 flex flex-col flex-1 bg-shop-surface border-l border-shop-border/50 justify-between">
              <div>
                {/* Catégorie */}
                <span className="text-[10px] font-semibold text-amber-500 mb-1 tracking-wide uppercase truncate block">
                  Sélection Premium
                </span>
                {/* Titre */}
                <h3 className="text-sm font-bold text-shop-text mb-1.5 line-clamp-1 group-hover:text-shop-accent transition-colors">
                  {product.name}
                </h3>
                {/* Description */}
                <p className="text-xs text-shop-muted line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                {/* Prix */}
                <span className="text-sm font-black text-shop-text">
                  {product.formattedPrice} FCFA
                </span>
                
                {/* Bouton Panier Rapide : passe en vert plein au survol */}
                <button className="w-8 h-8 bg-shop-card border border-shop-border text-shop-text rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-shop-accent group-hover:text-white group-hover:border-shop-accent shadow-sm z-20">
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