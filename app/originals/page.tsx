import React from "react";
import WebtoonCard from "@/components/WebtoonCard"; 
import { POPULAR_SERIES, NEW_RELEASES, DATA_BY_CATEGORY, Series } from "@/data/Webtoons";
import { Sparkles, ArrowDownWideNarrow } from "lucide-react";

// --- LOGIQUE DE DONNÉES : Fusionner et enlever les doublons ---
function getAllUniqueSeries(): Series[] {
  const allSeriesRaw = [
    ...POPULAR_SERIES,
    ...NEW_RELEASES,
    ...Object.values(DATA_BY_CATEGORY).flat(),
  ];

  const uniqueSeriesMap = new Map();
  allSeriesRaw.forEach((series) => {
    if (!uniqueSeriesMap.has(series.id)) {
      uniqueSeriesMap.set(series.id, series);
    }
  });

  return Array.from(uniqueSeriesMap.values());
}

export default function OriginalsPage() {
  const allSeries = getAllUniqueSeries();

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* --- EN-TÊTE DE LA PAGE (Plus compact) --- */}
      {/* Réduction du padding (pt-10 pb-8 au lieu de pt-16 pb-12) */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              {/* Texte plus petit : text-xs au lieu de text-sm */}
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Catalogue Complet</span>
            </div>
            {/* Titre réduit : text-3xl au lieu de 5xl */}
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Les Originals
            </h1>
            {/* Paragraphe réduit : text-sm md:text-base */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Découvrez l&rsquo;intégralité de nos séries exclusives. Des histoires captivantes, mises à jour chaque semaine par nos meilleurs créateurs.
            </p>
          </div>

          {/* Bouton réduit : text-xs et padding diminué */}
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs rounded-full transition-colors w-fit">
            <ArrowDownWideNarrow className="w-4 h-4" />
            Trier par : Popularité
          </button>
          
        </div>
      </header>

      {/* --- GRILLE DE SÉRIES --- */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex items-center justify-between mb-6">
          {/* Titre de section plus discret : text-lg */}
          <h2 className="text-lg font-bold text-slate-900">
            Toutes les œuvres <span className="text-slate-400 font-medium text-sm ml-2">({allSeries.length})</span>
          </h2>
        </div>

        {/* LA GRILLE COMPACTE : On ajoute une colonne à chaque palier d'écran.
          - Mobile : 2 colonnes ou 3 si l'écran est un peu large (sm:grid-cols-3)
          - Tablette : 4 colonnes (md:grid-cols-4)
          - PC : 5 colonnes (lg:grid-cols-5)
          - Grand Écran : 6 colonnes (xl:grid-cols-6)
          Les espaces (gap) sont aussi réduits pour un aspect plus "serré" et pro.
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-8 md:gap-x-5 md:gap-y-10">
          {allSeries.map((series) => (
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

    </main>
  );
}