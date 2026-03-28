"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Nouvelles données avec les images de fond et les couleurs intégrées au thème Fintech
const SERVICES = [
  {
    id: 1,
    title: "Beauté & Soins",
    description: "Voir nos produits de qualité, pour une très belle peau.",
    buttonText: "Découvrir",
    image: "/assets/shopService/beauty.png",
    // Connecté au thème principal (Texte clair)
    titleColor: "text-shop-text", 
    descColor: "text-shop-muted",
    // Bouton sombre qui devient vert Fintech au survol
    btnColor: "bg-shop-surface text-shop-text border border-shop-border hover:bg-shop-accent hover:border-shop-accent hover:text-white",
    // Overlay sombre lié au fond global
    overlay: "bg-gradient-to-t from-shop-bg/90 via-shop-bg/40 to-transparent",
    glow: "hover:shadow-shop-accent/20"
  },
  {
    id: 2,
    title: "Décoration",
    description: "Consultez notre service de décoration d'événement.",
    buttonText: "Découvrir",
    image: "/assets/shopService/decoration.png",
    // Conservé en Orange pour s'adapter à l'image
    titleColor: "text-orange-50",
    descColor: "text-orange-200/80",
    btnColor: "bg-orange-500 text-white hover:bg-orange-400",
    overlay: "bg-gradient-to-t from-orange-950/90 via-orange-950/40 to-transparent",
    glow: "hover:shadow-orange-500/20"
  },
  {
    id: 3,
    title: "Cadeaux",
    description: "Voir les produits sélectionnés spécialement pour vous.",
    buttonText: "Voir plus",
    image: "/assets/shopService/cadeau.png",
    // Connecté au Vert Fintech (shop-accent)
    titleColor: "text-white",
    descColor: "text-shop-muted",
    btnColor: "bg-shop-accent text-white hover:bg-shop-accent-hover",
    overlay: "bg-gradient-to-t from-shop-bg/90 via-shop-bg/50 to-transparent",
    glow: "hover:shadow-shop-accent/30"
  },
  {
    id: 4,
    title: "Personnalisation",
    description: "Personnalisez vos objets avec nos services dédiés.",
    buttonText: "Découvrir",
    image: "/assets/shopService/personnalisation.png",
    // Conservé en clair/sombre pour bien contraster avec les autres cartes sombres
    titleColor: "text-slate-900",
    descColor: "text-slate-700",
    btnColor: "bg-slate-900 text-white hover:bg-slate-800",
    overlay: "bg-gradient-to-t from-white/90 via-white/50 to-transparent",
    glow: "hover:shadow-white/10"
  }
];

export default function ShopServices() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
      
      {/* --- EN-TÊTE : Bouton "Tout voir" lié au thème --- */}
      <div className="flex mb-8">
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-shop-surface border border-shop-border text-sm font-semibold text-shop-text hover:bg-shop-card hover:border-shop-accent/50 transition-colors w-fit shadow-md"
        >
          Tout voir
          <ArrowRight className="w-4 h-4 text-shop-muted group-hover:text-shop-accent group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* --- CARTES SCROLLABLES --- */}
      <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {SERVICES.map((service) => {
          return (
            <div 
              key={service.id}
              // Dimensions format "Portrait" + Bordure liée au thème
              className={`group relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] shrink-0 snap-start rounded-3xl cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-shop-border ${service.glow}`}
            >
              {/* IMAGE DE FOND */}
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 320px"
              />

              {/* OVERLAY DÉGRADÉ (Défini dans les données) */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${service.overlay}`}></div>
              
              {/* CONTENU (Texte et Bouton) poussé vers le bas */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                
                {/* Titre de la catégorie */}
                <h3 className={`text-2xl font-black mb-2 tracking-tight ${service.titleColor}`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 font-medium ${service.descColor} line-clamp-3`}>
                  {service.description}
                </p>
                
                {/* Bouton d'action */}
                <button className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg ${service.btnColor} group-hover:shadow-xl`}>
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          );
        })}
        
        <div className="w-4 md:w-2 shrink-0"></div>

      </div>

    </section>
  );
}