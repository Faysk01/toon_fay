"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, ShieldCheck, Truck, RefreshCcw } from "lucide-react";

// Imports de tes composants Fintech
import ShopHeroCarousel from "@/components/shop/ShopHeroCarousel";
import ShopServices from "@/components/shop/ShopServices";
import ShopTrendingProducts from "@/components/shop/ShopTrendingProducts"; 
import ShopOurSelection from "@/components/shop/ShopOurSelection"; 
import ShopBDBooks from "@/components/shop/ShopBDBooks";
import ShopAlaUne from "@/components/shop/ShopAlaUne";
import ShopASavoir from "@/components/shop/ShopASavoir"; 

export default function ShopPage() {
  // 1. ÉTATS POUR LA SMART NAVBAR
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 2. LOGIQUE DE DÉFILEMENT (Navbar)
  // NB: La magie du fond sombre est maintenant gérée globalement par ton <ThemeController /> dans layout.tsx !
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Si on descend (et qu'on a dépassé la hauteur de la navbar), on cache
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShowNavbar(false);
        } 
        // Si on remonte, on affiche
        else {
          setShowNavbar(true);
        }

        // On met à jour la dernière position
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // NETTOYAGE
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    // Ajout de pt-20 (padding-top) car la navbar est maintenant en "fixed" et sortie du flux normal
    <main className="shop-theme min-h-screen bg-shop-bg font-sans text-shop-text flex flex-col selection:bg-shop-accent/30 pt-20">
      
      {/* =========================================
          1. SMART NAVBAR (Apparaît/Disparait au scroll)
      ========================================= */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-shop-surface border-b border-shop-border transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            {/* Logo avec accent dynamique */}
            <Link href="/" className="text-2xl font-black tracking-tight text-shop-text flex items-center gap-2">
              TOON<span className="text-shop-accent">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-shop-muted group-focus-within:text-shop-accent transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                className="w-64 pl-10 pr-4 py-2 bg-shop-bg border border-shop-border rounded-full text-sm text-shop-text placeholder-shop-muted focus:outline-none focus:border-shop-accent/50 focus:bg-shop-surface focus:ring-4 focus:ring-shop-accent/10 transition-all shadow-sm"
              />
            </div>

            <button className="lg:hidden text-shop-muted hover:text-shop-text transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button className="relative text-shop-muted hover:text-shop-text transition-colors group">
              <ShoppingBag className="w-5 h-5" />
              {/* Pastille dynamique liée au thème */}
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-shop-accent text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-shop-surface group-hover:scale-110 transition-transform shadow-sm">
                0
              </span>
            </button>

            <button className="text-shop-muted hover:text-shop-text transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          COMPOSANTS PRINCIPAUX DE LA BOUTIQUE
      ========================================= */}
      <ShopHeroCarousel />
      <ShopServices />
      <ShopTrendingProducts />
      <ShopOurSelection />
      <ShopBDBooks />
      
      {/* =========================================
          COMPOSANTS D'ACTUALITÉS & ÉVÉNEMENTS
      ========================================= */}
      <ShopAlaUne />
      <ShopASavoir />

      {/* =========================================
          BADGES DE RÉASSURANCE (Placés juste avant le footer)
      ========================================= */}
      <div className="w-full bg-shop-surface/40 border-t border-shop-border py-8 mt-auto shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 md:gap-24 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            
            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-shop-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-shop-text">Paiement Sécurisé</span>
                <span className="text-xs text-shop-muted">100% garanti</span>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-shop-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-shop-text">Livraison Express</span>
                <span className="text-xs text-shop-muted">Dans les 2-3 jours</span>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-max snap-center">
              <div className="w-12 h-12 rounded-full bg-shop-card border border-shop-border flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5 text-shop-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-shop-text">Retours Simples</span>
                <span className="text-xs text-shop-muted">Sous 30 jours</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          FOOTER MINIMALISTE BOUTIQUE
      ========================================= */}
      <footer className="bg-shop-bg border-t border-shop-border py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-xl font-black tracking-tight text-shop-text flex items-center gap-1 mb-4">
            TOON<span className="text-shop-accent">.</span> Shop
          </h3>
          <p className="text-sm text-shop-muted leading-relaxed max-w-md mb-8">
            Achetez vos bandes dessinées préférées, et profitez d&rsquo;une expérience premium. Une sélection d&rsquo;articles de mode et d&rsquo;objets de collection disponibles exclusivement sur notre boutique.
          </p>
          <div className="w-full border-t border-shop-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-shop-muted">
            <p>&copy; {new Date().getFullYear()} Toon Shop par AfrikStudio. Tous droits réservés.</p>
            <div className="flex items-center gap-6 font-medium">
              <span className="hover:text-shop-accent-hover cursor-pointer transition-colors">CGV</span>
              <span className="hover:text-shop-accent-hover cursor-pointer transition-colors">Confidentialité</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}