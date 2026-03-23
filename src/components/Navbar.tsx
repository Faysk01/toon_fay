"use client"; // Indispensable pour utiliser usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  // 1. LE LECTEUR : On cache totalement la Navbar si on est en train de lire
  
  if (pathname?.startsWith("/read") || pathname?.startsWith("/shop")) {
    return null;
  }

  // 2. L'ACCUEIL : On vérifie si on est sur la page principale
  const isHome = pathname === "/";

  return (
    // 3. LA MAGIE DU CSS DYNAMIQUE :
    // - Sur l'accueil : "sticky top-0" (Reste accrochée en haut)
    // - Ailleurs : "relative" (Apparaît en haut, puis disparaît en scrollant)
    <nav 
      className={`
        ${isHome ? "sticky top-0" : "relative"} 
        z-50 w-full bg-white border-b border-slate-100/80 backdrop-blur-md transition-all duration-300
      `}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Toon<span className="text-indigo-600">.</span>
        </Link>

        {/* Liens Centraux */}
        <div className="hidden md:flex items-center gap-10 font-medium text-slate-600">
          <Link href="/originals" className="hover:text-indigo-600 transition-colors relative group">
            Originals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/categories" className="hover:text-indigo-600 transition-colors relative group">
            Catégories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/rankings" className="hover:text-indigo-600 transition-colors relative group">
            Classement
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Droite : Shop & Search */}
        <div className="flex items-center gap-6">
           <button className="text-slate-400 hover:text-indigo-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/shop" className="text-slate-900 hover:text-indigo-600 font-medium text-sm flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Shop</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}