import React from "react";
import WebtoonCard from "@/components/WebtoonCard";
import { CATEGORIES, DATA_BY_CATEGORY } from "@/data/Webtoons";
import { Layers } from "lucide-react";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* --- EN-TÊTE DE LA PAGE (Compact et Élégant) --- */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col ">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-500">Explorer par genre</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Catégories
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Plongez dans l&rsquo;action, vibrez avec nos romances ou frissonnez avec nos drames. Trouvez la série parfaite selon votre humeur du moment.
          </p>
        </div>
      </header>

      {/* --- SECTIONS PAR CATÉGORIE --- */}
      {/* On réduit un peu l'espacement entre les catégories (gap-12 au lieu de gap-24) pour rester compact */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col gap-12 md:gap-16">
        {CATEGORIES.map((category) => {
          // On récupère les séries de cette catégorie spécifique
          const seriesList = DATA_BY_CATEGORY[category] || [];

          // Si une catégorie est vide, on ne l'affiche pas
          if (seriesList.length === 0) return null;

          return (
            <section key={category} className="w-full">
              
              {/* Titre de la section (Taille affinée) */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 whitespace-nowrap">
                  {category}
                </h2>
                {/* Ligne séparatrice fine */}
                <div className="h-px bg-slate-200 flex-1 mt-1"></div>
                {/* Compteur discret */}
                <span className="text-xs font-semibold text-slate-400">
                  {seriesList.length} {seriesList.length > 1 ? 'séries' : 'série'}
                </span>
              </div>

              {/* LA GRILLE COMPACTE (Identique à la page Originals)
                  Jusqu'à 6 colonnes sur les très grands écrans. 
              */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-8 md:gap-x-5 md:gap-y-10">
                {seriesList.map((series) => (
                  <div key={series.id} className="w-full">
                    <WebtoonCard 
                      id={series.id}
                      title={series.title}
                      author={series.author}
                      rating={series.rating}
                      image={series.image}
                      tag={series.tag}
                      tagColor={series.tagColor}
                    />
                  </div>
                ))}
              </div>
              
            </section>
          );
        })}
      </div>

    </main>
  );
}