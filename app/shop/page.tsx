"use client"; // <-- Indispensable pour l'interactivité (les clics)

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, ArrowRight, ShieldCheck, Truck, RefreshCcw } from "lucide-react";

export default function ShopPage() {
  // --- ÉTAT DE NAVIGATION ---
  // Par défaut, l'onglet actif est "shop"
  const [activeTab, setActiveTab] = useState("shop");

  return (
    // Le fond principal : bg-slate-950 est un bleu-noir très profond et luxueux
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300 flex flex-col selection:bg-indigo-500/30">
      
      {/* =========================================
          1. NAVBAR SPÉCIFIQUE AU SHOP (Dark Mode)
      ========================================= */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo gauche */}
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              TOON<span className="text-indigo-500">.</span>
            </Link>

            {/* Navigation Desktop (Dynamique) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <button 
                onClick={() => setActiveTab("shop")}
                className={`transition-all duration-300 outline-none ${
                  activeTab === "shop" 
                    ? "text-white" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Shop
              </button>
              
              <button 
                onClick={() => setActiveTab("bd")}
                className={`transition-all duration-300 outline-none ${
                  activeTab === "bd" 
                    ? "text-white" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Vos BD
              </button>
            </nav>
          </div>

          {/* Outils droite (Recherche & Panier) */}
          <div className="flex items-center gap-6">
            
            {/* Barre de recherche style "Fintech" */}
            <div className="hidden lg:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                className="w-64 pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900 transition-all"
              />
            </div>

            {/* Bouton Recherche Mobile */}
            <button className="lg:hidden text-slate-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Icône Panier avec pastille */}
            <button className="relative text-slate-400 hover:text-white transition-colors group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-indigo-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-slate-950 group-hover:scale-110 transition-transform">
                0
              </span>
            </button>

            {/* Menu Burger Mobile */}
            <button className=" text-slate-400 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================
          2. ZONE CENTRALE (Placeholder Premium)
      ========================================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 relative overflow-hidden">
        
        {/* Effet de lumière en arrière-plan (Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Badges de Réassurance Ecommerce */}
        <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-10 border-t border-slate-800/60 max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <ShieldCheck className="w-8 h-8 text-slate-500" />
            <span className="text-sm font-semibold text-slate-300">Paiement 100% Sécurisé</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Truck className="w-8 h-8 text-slate-500" />
            <span className="text-sm font-semibold text-slate-300">Livraison dans les 2-3 jours</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <RefreshCcw className="w-8 h-8 text-slate-500" />
            <span className="text-sm font-semibold text-slate-300">Retours sous 30 jours</span>
          </div>
        </div>
      </section>

      {/* =========================================
          3. FOOTER MINIMALISTE SHOP (Dark Mode)
      ========================================= */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo et Message de qualité */}
          <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-2 mb-4">
            TOON<span className="text-indigo-500">.</span> Shop
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-10">
            Acheter vos bandes dessinées préférées, et profitez d&rsquo;une expérience de lecture premium. Une selection d&rsquo;articles de mode, de vetements et d&rsquo;objets de collection personnalisés
            disponibles exclusivement sur notre boutique officielle Toon Shop, livraisons inclusives incluses.
            
          </p>

          {/* Ligne de séparation et Copyright */}
          <div className="w-full border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Toon Shop par AfrikStudio. Tous droits réservés.</p>
            <div className="flex items-center gap-6 font-medium">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">CGV</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Confidentialité</span>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}