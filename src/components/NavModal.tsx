"use client";

import React, { useEffect } from "react";
import Link from "next/link";
// 1. On importe 'LucideIcon' pour typer correctement notre icône
import { X, User, Crown, BookOpen, LayoutGrid, TrendingUp, ShoppingBag, LogOut, ChevronRight, LucideIcon } from "lucide-react";

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavModal({ isOpen, onClose }: NavModalProps) {
  
  // Bloque le scroll de la page quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      
      {/* 1. OVERLAY (Le fond noir flouté). Un clic ferme le menu */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* 2. LE DRAWER (Panneau blanc glissant) */}
      <div className="relative w-full max-w-[340px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* EN-TÊTE : Logo + Bouton Fermer */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
          <span className="text-xl font-black tracking-tight text-slate-900">
            TOON<span className="text-emerald-500">.</span>
          </span>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* CONTENU SCROLLABLE */}
        <div className="flex-1 overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:hidden">
          
          {/* --- SECTION PROFIL (Fausses données pour le design) --- */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Fayssal Kouraogo</h4>
                <p className="text-xs text-slate-500 font-medium">Membre Premium</p>
              </div>
            </div>
            
            <Link 
              href="/profile" 
              onClick={onClose}
              className="flex items-center justify-center w-full py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 shadow-sm transition-all"
            >
              Gérer mon compte
            </Link>
          </div>

          {/* --- SECTION NAVIGATION --- */}
          <div className="flex flex-col gap-1 mb-8">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Plateforme
            </h5>
            
            <MenuLink href="/originals" icon={Crown} text="Toon Originals" onClose={onClose} />
            <MenuLink href="/categories" icon={LayoutGrid} text="Catégories" onClose={onClose} />
            <MenuLink href="/rankings" icon={TrendingUp} text="Classement" onClose={onClose} />
            <MenuLink href="/bibliotheque" icon={BookOpen} text="Ma Bibliothèque" onClose={onClose} />
          </div>

          {/* --- SECTION E-COMMERCE --- */}
          <div className="flex flex-col gap-1 mb-8">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Boutique
            </h5>
            
            <Link 
              href="/shop" 
              onClick={onClose}
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100"
            >
              <div className="flex items-center gap-3 text-slate-700 group-hover:text-emerald-700">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-semibold text-sm">Toon Shop</span>
              </div>
              <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                NOUVEAU
              </span>
            </Link>
          </div>

        </div>

        {/* PIED DE PAGE : Déconnexion */}
        <div className="p-6 border-t border-slate-100">
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-500 transition-colors w-full p-2 rounded-lg hover:bg-red-50">
            <LogOut className="w-4 h-4" />
            <span>Se déconnecter</span>
          </button>
        </div>

      </div>
    </div>
  );
}

// 2. CORRECTION ICI : On utilise LucideIcon au lieu de any
interface MenuLinkProps {
  href: string;
  icon: LucideIcon; 
  text: string;
  onClose: () => void;
}

function MenuLink({ href, icon: Icon, text, onClose }: MenuLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={onClose}
      className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-3 text-slate-600 group-hover:text-emerald-600">
        <Icon className="w-5 h-5" />
        <span className="font-semibold text-sm">{text}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}