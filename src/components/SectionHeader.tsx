import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  href?: string; // Lien "Voir tout" optionnel
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 border-l-4 border-indigo-600 pl-4">
      <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{title}</h2>
      {href && (
        <Link href={href} className="text-sm font-medium text-slate-500 hover:text-indigo-600 hover:gap-2 flex items-center gap-1 transition-all">
          Voir tout <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}