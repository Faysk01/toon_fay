"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

// Fausses données pour la Sélection Spéciale
const OUR_SELECTION = [
  { 
    id: 1, 
    name: "Pack Premium 'Empire du Mandé'", 
    description: "L'intégrale tome 1 & 2 avec un marque-page exclusif en métal.",
    price: "45.00", 
    category: "Coffret", 
    image: "/imagesDB/covers/roi-soundiata.jpg",
    highlight: "Coup de cœur"
  },
  { 
    id: 2, 
    name: "Hoodie 'Love Script' Édition Limitée", 
    description: "Sweat à capuche lourd 400g/m², broderie sur le cœur.",
    price: "65.00", 
    category: "Vêtement", 
    image: "/imagesDB/covers/love-script.jpg",
    highlight: "Exclu Web"
  },
  { 
    id: 3, 
    name: "Toile Canvas 'La Queen'", 
    description: "Impression sur toile qualité musée avec cadre en bois.",
    price: "120.00", 
    category: "Décoration", 
    image: "/imagesDB/covers/la-queen.jpg",
    highlight: "Série Limitée"
  }
];

export default function ShopOurSelection() {
  return (
    // Bordure top liée au thème (border-shop-border)
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* L'icône étoile dorée est conservée car elle représente bien le côté "Premium" */}
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </div>
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Notre Sélection
          </h2>
        </div>
        
        {/* Bouton avec variables globales */}
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
        
        {OUR_SELECTION.map((item) => (
          <div 
            key={item.id}
            // Utilisation de shop-surface/40 et hover avec accent
            className="group relative flex w-[340px] md:w-[420px] h-36 md:h-40 shrink-0 snap-start bg-shop-surface/40 border border-shop-border rounded-2xl cursor-pointer hover:border-shop-accent/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            {/* Image (à gauche) */}
            <div className="relative w-1/3 md:w-36 h-full bg-shop-card overflow-hidden shrink-0">
              <Image 
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="150px"
              />
              {/* Overlay léger qui fond vers la couleur de fond globale */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-shop-bg/50"></div>
              
              {/* Highlight Badge */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-shop-surface/80 backdrop-blur-md border border-shop-border text-shop-text text-[9px] font-bold uppercase tracking-wider rounded-md z-10 shadow-sm">
                {item.highlight}
              </div>
            </div>
            
            {/* Informations Produit (à droite) */}
            <div className="p-4 flex flex-col flex-1 bg-shop-surface/80 backdrop-blur-sm justify-between">
              <div>
                {/* L'accent ambre/doré reste pour la catégorie de cette section */}
                <span className="text-[10px] font-semibold text-amber-500 mb-1 tracking-wide uppercase truncate block">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-shop-text mb-1.5 line-clamp-1 group-hover:text-shop-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-shop-muted line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-black text-shop-text">
                  {item.price} €
                </span>
                
                {/* Bouton Panier Rapide : passe en vert (shop-accent) au survol */}
                <button className="w-8 h-8 bg-shop-card border border-shop-border text-shop-text rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-shop-accent group-hover:text-white group-hover:border-shop-accent shadow-sm">
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