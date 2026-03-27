"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, ShieldCheck, Truck, RefreshCcw } from "lucide-react";

// Imports de tes composants Fintech
import ShopHeroCarousel from "@/components/shop/ShopHeroCarousel";
import ShopServices from "@/components/shop/ShopServices";
import ShopTrendingProducts from "@/components/shop/ShopTrendingProducts"; // <-- L'import du nouveau composant

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("shop");

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300 flex flex-col selection:bg-indigo-500/30">
      
      {/* =========================================
          1. NAVBAR
      ========================================= */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              TOON<span className="text-indigo-500">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <button 
                onClick={() => setActiveTab("shop")}
                className={`transition-all duration-300 outline-none ${
                  activeTab === "shop" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Shop
              </button>
              <button 
                onClick={() => setActiveTab("bd")}
                className={`transition-all duration-300 outline-none ${
                  activeTab === "bd" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Vos BD
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                className="w-64 pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900 transition-all"
              />
            </div>

            <button className="lg:hidden text-slate-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button className="relative text-slate-400 hover:text-white transition-colors group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-indigo-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-slate-950 group-hover:scale-110 transition-transform">
                0
              </span>
            </button>

            <button className="text-slate-400 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          2. CARROUSEL MARKETING (Hero)
      ========================================= */}
      <ShopHeroCarousel />

      {/* =========================================
          3. NOS SERVICES / COLLECTIONS
      ========================================= */}
      <ShopServices />

      {/* =========================================
          4. NOUVEAUTÉS & TENDANCES (Cartes Produits)
      ========================================= */}
      <ShopTrendingProducts />

      {/* =========================================
          5. BADGES DE RÉASSURANCE (Scroll Horizontal sur Mobile)
      ========================================= */}
      <div className="w-full bg-slate-900/50 border-t border-slate-800/60 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 md:gap-24 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            
            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Paiement Sécurisé</span>
                <span className="text-xs text-slate-500">100% garanti</span>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Livraison Express</span>
                <span className="text-xs text-slate-500">Dans les 2-3 jours</span>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Retours Simples</span>
                <span className="text-xs text-slate-500">Sous 30 jours</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          6. FOOTER MINIMALISTE
      ========================================= */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-1 mb-4">
            TOON<span className="text-indigo-500">.</span> Shop
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-md mb-8">
            Achetez vos bandes dessinées préférées, et profitez d&rsquo;une expérience premium. Une sélection d&rsquo;articles de mode et d&rsquo;objets de collection disponibles exclusivement sur notre boutique.
          </p>
          <div className="w-full border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
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