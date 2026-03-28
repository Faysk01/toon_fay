"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

// Tes données d'événements à la une
const EVENTS = [
  {
    id: 1,
    title: "FESPACO 2026",
    hoverText: "Participer au Fespaco 2026",
    btnText: "Savoir plus",
    image: "/assets/shopAlaUne/fespaco.png",
  },
  {
    id: 2,
    title: "Grillade Party",
    hoverText: "Grillade party à Ouaga 2000",
    btnText: "Savoir plus",
    image: "/assets/shopAlaUne/grillade.png",
  },
  {
    id: 3,
    title: "SIAO 2026",
    hoverText: "Le SIAO dans 3 jours",
    btnText: "En savoir plus",
    image: "/assets/shopAlaUne/siao.png",
  },
  {
    id: 4,
    title: "Fresh Party",
    hoverText: "Fresh party vous attend, à ne pas manquer !",
    btnText: "Savoir plus",
    image: "/assets/shopAlaUne/soiree.png",
  }
];

export default function ShopAlaUne() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* Icône Calendrier avec la couleur Fintech */}
          <div className="w-8 h-8 rounded-full bg-shop-accent/10 flex items-center justify-center border border-shop-accent/20">
            <CalendarDays className="w-4 h-4 text-shop-accent" />
          </div>
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            Événements à la Une
          </h2>
        </div>
      </div>

      {/* --- CARTES CAROUSEL SCROLLABLES --- */}
      <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {EVENTS.map((event) => (
          <Link 
            key={event.id}
            href="#"
            // Cartes hautes et imposantes (Présentatif)
            className="group relative flex flex-col w-[280px] md:w-[320px] h-[400px] md:h-[460px] shrink-0 snap-start bg-shop-card border border-shop-border rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-shop-accent/10 transition-all duration-500 ease-out"
          >
            {/* 1. L'IMAGE DE FOND */}
            <Image 
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 280px, 320px"
            />

            {/* Dégradé léger par défaut pour lire le titre en bas avant le survol */}
            <div className="absolute inset-0 bg-gradient-to-t from-shop-bg/90 via-shop-bg/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Titre visible par défaut (disparaît au survol) */}
            <div className="absolute bottom-6 left-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                {event.title}
              </h3>
            </div>

            {/* 2. OVERLAY MAGIQUE AU SURVOL (Verre dépoli sombre + Texte) */}
            {/* backdrop-blur-md crée l'effet flou élégant */}
            <div className="absolute inset-0 bg-shop-bg/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center p-8 text-center">
              
              <h3 className="text-2xl font-black text-white mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {event.title}
              </h3>
              
              <p className="text-sm font-medium text-shop-muted mb-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 leading-relaxed">
                {event.hoverText}
              </p>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-shop-accent text-white font-bold text-sm translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 hover:bg-shop-accent-hover hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                {event.btnText}
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </Link>
        ))}

        {/* Espace pour le scroll en fin de liste */}
        <div className="w-4 md:w-2 shrink-0"></div>

      </div>

    </section>
  );
}