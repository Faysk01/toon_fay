"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper, Plus } from "lucide-react";

// 1. DONNÉES DES PUBLICATIONS "À SAVOIR"
const ASAVOIR_DATA = [
  {
    id: 1,
    title: "10e édition des Universités Africaines",
    description: "Rencontre avec le Président Ibrahim Traoré pour la commémoration et l'avenir de l'éducation en Afrique.",
    image: "/assets/shopAsavoir/ucao.jpg",
  },
  {
    id: 2,
    title: "Concert Gospel FDS",
    description: "Un grand concert organisé à l'honneur de nos Forces de Défense et de Sécurité (FDS) pour leur courage.",
    image: "/assets/shopAsavoir/concert.jpg",
  },
  {
    id: 3,
    title: "Conseil des Ministres",
    description: "Le conseil des ministres se tiendra exceptionnellement aujourd'hui à 17h, à suivre en direct sur la RTB.",
    image: "/assets/shopAsavoir/conseilMinistre.jpg",
  },
  {
    id: 4,
    title: "Trois hommes, un village",
    description: "Le retour très attendu de votre série culte préférée : Trois hommes, un village. Bientôt disponible !",
    image: "/assets/shopAsavoir/serieTV.jpg",
  }
];

export default function ShopASavoir() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10 border-t border-shop-border mt-8">
      
      {/* --- EN-TÊTE --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {/* Icône Journal/Actu liée au thème */}
          <div className="w-8 h-8 rounded-full bg-shop-accent/10 flex items-center justify-center border border-shop-accent/20">
            <Newspaper className="w-4 h-4 text-shop-accent" />
          </div>
          <h2 className="text-2xl font-black text-shop-text tracking-tight">
            À Savoir
          </h2>
        </div>
        
        {/* Bouton Voir tout en haut */}
        <Link 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-shop-surface border border-shop-border text-xs font-semibold text-shop-text hover:bg-slate-800 hover:border-shop-accent/50 transition-colors w-fit shrink-0"
        >
          Toutes les actualités
          <ArrowRight className="w-3.5 h-3.5 text-shop-muted group-hover:text-shop-accent transition-all" />
        </Link>
      </div>

      {/* --- CARTES RECTANGULAIRES SCROLLABLES --- */}
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {ASAVOIR_DATA.map((article) => (
          <Link 
            key={article.id}
            href="#"
            // Formats rectangulaires (paysage) typiques des articles
            className="group relative flex flex-col w-[320px] md:w-[380px] h-[220px] md:h-[260px] shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-shop-accent/10 transition-shadow duration-500 border border-shop-border"
          >
            {/* 1. IMAGE DE FOND */}
            <Image 
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 320px, 380px"
            />

            {/* 2. DÉGRADÉ DE BASE (Pour toujours lire le texte) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* 3. TEXTE DE LA CARTE (Glisse vers le haut au survol) */}
            <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-14">
              <h3 className="text-lg md:text-xl font-black text-white mb-2 line-clamp-2 leading-tight drop-shadow-md">
                {article.title}
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-300 line-clamp-2 drop-shadow-sm">
                {article.description}
              </p>
            </div>

            {/* 4. BARRE "LIRE PLUS" (Floutée, apparaît du bas vers le haut) */}
            {/* Elle est cachée (translate-y-full) par défaut, et remonte (translate-y-0) au survol */}
            <div className="absolute bottom-0 left-0 w-full h-14 bg-shop-surface/80 backdrop-blur-xl border-t border-shop-border translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30 flex items-center justify-between px-5">
              <span className="text-sm font-bold text-white">
                Lire l&rsquo;article
              </span>
              <div className="w-8 h-8 rounded-full bg-shop-accent text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </Link>
        ))}

        {/* ==========================================================
            CARTE FINALE : BOUTON "VOIR PLUS" BIEN STYLISÉ
        ========================================================== */}
        <Link 
          href="#"
          className="group flex flex-col items-center justify-center w-[160px] md:w-[200px] h-[220px] md:h-[260px] shrink-0 snap-start rounded-2xl border-2 border-dashed border-shop-border bg-shop-surface/30 hover:bg-shop-accent/5 hover:border-shop-accent/40 transition-all duration-300 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center text-shop-muted group-hover:text-shop-accent group-hover:scale-110 transition-all duration-300 mb-3 shadow-sm">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold text-shop-text group-hover:text-shop-accent transition-colors">
            Voir plus d&rsquo;actus
          </span>
        </Link>

        {/* Espace final pour que la dernière carte ne colle pas au bord de l'écran sur mobile */}
        <div className="w-4 shrink-0"></div>

      </div>

    </section>
  );
}