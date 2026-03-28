"use client"; // Indispensable pour utiliser usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  // 1. LE LECTEUR & LE SHOP : On cache totalement la Navbar principale
  if (pathname?.startsWith("/read") || pathname?.startsWith("/shop")) {
    return null;
  }

  // 2. L'ACCUEIL : On vérifie si on est sur la page principale
  const isHome = pathname === "/";

  return (
    // 3. LA MAGIE DU CSS DYNAMIQUE :
    // - Sur l'accueil : "sticky top-0" (Reste accrochée en haut)
    // - Ailleurs : "relative" (Apparaît en haut, puis disparaît en scrollant)
    // - Ajout d'un shadow-sm très léger pour détacher la navbar du fond
    <nav 
      className={`
        ${isHome ? "sticky top-0" : "relative"} 
        z-50 w-full bg-white border-b border-slate-200/80 backdrop-blur-md transition-all duration-300 shadow-sm
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo avec le point Vert Fintech */}
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          TOON<span className="text-emerald-500">.</span>
        </Link>

        {/* Liens Centraux (Typographie affinée) */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-slate-500 text-sm">
          <Link href="/originals" className="hover:text-emerald-600 transition-colors relative group">
            Originals
            {/* Ligne d'animation verte plus fine et arrondie */}
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

        {/* Droite : Shop & Search */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-slate-400 hover:text-emerald-600 transition-colors p-2">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Bouton "Shop" transformé en vrai CTA (Call To Action) Premium */}
          <Link 
            href="/shop" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50 transition-all font-semibold text-sm shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span>Boutique</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}