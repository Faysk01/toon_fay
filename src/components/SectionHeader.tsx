import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  href?: string; // Lien "Voir tout" optionnel
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 md:mb-8 group">
      
      {/* --- TITRE --- */}
      <div className="flex items-center gap-3">
        {/* Pilule verte arrondie (Remplace l'ancienne bordure carrée) */}
        <div className="w-1.5 h-6 md:h-7 bg-emerald-500 rounded-full"></div>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      {/* --- LIEN "VOIR TOUT" --- */}
      {href && (
        <Link 
          href={href} 
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          Voir tout 
          {/* L'icône se décale légèrement au survol global du composant (ou du lien) */}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      )}
      
    </div>
  );
}