"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Shirt, Crown, Palette, Gift } from "lucide-react";

// Nos 5 services/catégories
const SERVICES = [
  {
    id: 1,
    title: "Éditions Collector",
    description: "Des tomes physiques avec couvertures alternatives et pages couleurs inédites.",
    icon: BookOpen,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "group-hover:border-indigo-500/50",
    glow: "group-hover:shadow-indigo-500/20"
  },
  {
    id: 2,
    title: "Vêtements Exclusifs",
    description: "T-shirts, hoodies et accessoires streetwear aux couleurs de vos héros.",
    icon: Shirt,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    id: 3,
    title: "Figurines Premium",
    description: "Statues de collection ultra-détaillées, numérotées et peintes à la main.",
    icon: Crown,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    id: 4,
    title: "Artworks & Posters",
    description: "Des impressions haute qualité sur papier d'art, signées par les créateurs.",
    icon: Palette,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "group-hover:border-pink-500/50",
    glow: "group-hover:shadow-pink-500/20"
  },
  {
    id: 5,
    title: "Box Mystère",
    description: "Un assortiment surprise de goodies et de mangas pour les vrais fans.",
    icon: Gift,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20"
  }
];

export default function ShopServices() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
      
      {/* --- EN-TÊTE : Uniquement le bouton "Tout voir" à gauche --- */}
      <div className="flex mb-8">
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-semibold text-white hover:bg-slate-800 transition-colors w-fit"
        >
          Tout voir
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* --- CARTES SCROLLABLES --- */}
      <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {SERVICES.map((service) => {
          const Icon = service.icon;
          
          return (
            <div 
              key={service.id}
              className={`group relative flex flex-col w-72 md:w-80 shrink-0 snap-start bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-slate-900 ${service.borderColor} shadow-lg ${service.glow}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bgColor}`}>
                <Icon className={`w-7 h-7 ${service.color}`} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Découvrir
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          );
        })}
        
        <div className="w-4 md:w-2 shrink-0"></div>

      </div>

    </section>
  );
}