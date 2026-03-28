"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, User } from "lucide-react";

// On importe le modal
import NavModal from "@/components/NavModal";

export default function Navbar() {
  const pathname = usePathname();
  // État pour gérer l'ouverture du menu latéral
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. LE LECTEUR & LE SHOP : On cache totalement la Navbar principale
  if (pathname?.startsWith("/read") || pathname?.startsWith("/shop")) {
    return null;
  }

  const isHome = pathname === "/";

  return (
    <>
      <nav 
        className={`
          ${isHome ? "sticky top-0" : "relative"} 
          z-50 w-full bg-white/90 border-b border-slate-200/80 backdrop-blur-md transition-all duration-300 shadow-sm
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* ==========================================
              GAUCHE : Logo + Recherche Mobile
          ========================================== */}
          <div className="flex items-center gap-3">
            {/* --- LOGO --- */}
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
              TOON<span className="text-emerald-500">.</span>
            </Link>

            {/* --- RECHERCHE (Uniquement sur Mobile) --- */}
            {/* Apparaît sur mobile, disparaît sur sm (tablette/PC) */}
            <button className="flex sm:hidden p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors focus:outline-none">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* ==========================================
              CENTRE : Liens (Desktop uniquement)
          ========================================== */}
          <div className="hidden md:flex items-center gap-10 font-semibold text-slate-500 text-sm">
            <Link href="/originals" className="hover:text-emerald-600 transition-colors relative group">
              Originals
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/categories" className="hover:text-emerald-600 transition-colors relative group">
              Catégories
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/rankings" className="hover:text-emerald-600 transition-colors relative group">
              Classement
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full rounded-full"></span>
            </Link>
          </div>

          {/* ==========================================
              DROITE : Actions & Profil
          ========================================== */}
          <div className="flex items-center gap-3 md:gap-5">
            
            {/* --- RECHERCHE (Uniquement sur PC/Tablette) --- */}
            {/* Caché sur mobile, apparaît sur sm et plus */}
            <button className="hidden sm:block text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors focus:outline-none">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Bouton Shop (Compact sur mobile, complet sur PC) */}
            <Link 
              href="/shop" 
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50 transition-all font-semibold text-sm shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Boutique</span>
            </Link>

            {/* Séparateur visuel */}
            <div className="hidden sm:block w-px h-6 bg-slate-200 mx-1"></div>

            {/* Avatar Profil (Desktop) */}
            <button className="hidden sm:flex w-9 h-9 rounded-full bg-slate-100 border border-slate-200 items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 transition-all shadow-sm focus:outline-none">
              <User className="w-4 h-4" />
            </button>

            {/* Bouton Menu Burger (Ouvre le Modal) */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="p-2 ml-1 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </nav>

      {/* 2. LE MODAL / MENU LATÉRAL */}
      <NavModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}