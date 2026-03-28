import React from "react";
import Link from "next/link";
import Image from "next/image";
import { POPULAR_SERIES, NEW_RELEASES, DATA_BY_CATEGORY, Series } from "@/data/Webtoons";
import { Trophy, Star, ChevronRight, TrendingUp, ArrowRight } from "lucide-react";

// --- LOGIQUE DE DONNÉES : Fusionner, enlever les doublons et TRIER ---
function getRankedSeries(): Series[] {
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

  // On trie par note décroissante, puis on coupe (slice) pour ne garder que les 15 premiers
  return Array.from(uniqueSeriesMap.values())
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 15);
}

export default function RankingPage() {
  const rankedSeries = getRankedSeries();

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24">
      
      {/* --- EN-TÊTE DE LA PAGE --- */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-500">Leaderboard</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Le Top 15
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Découvrez les 15 œuvres les mieux notées par notre communauté. Un classement mis à jour en temps réel basé sur les avis des lecteurs.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 font-semibold text-xs rounded-full w-fit border border-emerald-100">
            <TrendingUp className="w-4 h-4" />
            Mise à jour : Aujourd&rsquo;hui
          </div>
          
        </div>
      </header>

      {/* --- LISTE DU CLASSEMENT --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex flex-col gap-3">
          {rankedSeries.map((series, index) => {
            const rank = index + 1;
            
            // Design spécifique pour le Top 3
            let rankStyle = "text-slate-400 bg-slate-100"; 
            if (rank === 1) rankStyle = "text-yellow-700 bg-yellow-100 border border-yellow-200 shadow-sm shadow-yellow-100";
            if (rank === 2) rankStyle = "text-slate-700 bg-slate-200 border border-slate-300 shadow-sm";
            if (rank === 3) rankStyle = "text-amber-800 bg-amber-100 border border-amber-200 shadow-sm shadow-amber-100";

            return (
              <Link 
                key={series.id} 
                href={`/series/${series.id}`}
                className="group flex items-center bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-3 md:p-4 transition-all duration-200 hover:shadow-md"
              >
                {/* 1. Numéro */}
                <div className="flex items-center justify-center w-10 md:w-14 shrink-0">
                  <span className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-black text-sm md:text-base ${rankStyle}`}>
                    {rank}
                  </span>
                </div>

                {/* 2. Image */}
                <div className="relative w-12 h-16 md:w-14 md:h-20 rounded-lg overflow-hidden shrink-0 ml-2 md:ml-0 bg-slate-100">
                  <Image 
                    src={series.image}
                    alt={series.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="60px"
                  />
                </div>

                {/* 3. Infos */}
                <div className="flex flex-col flex-1 ml-4 md:ml-6 min-w-0">
                  <h2 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                    {series.title}
                  </h2>
                  <span className="text-xs md:text-sm text-slate-500 truncate mt-0.5">
                    {series.author}
                  </span>
                  
                  {/* Tag Mobile */}
                  {series.tag && (
                    <span className={`md:hidden mt-1.5 w-fit px-2 py-0.5 text-[9px] font-bold uppercase text-white rounded-sm ${series.tagColor || "bg-indigo-600"}`}>
                      {series.tag}
                    </span>
                  )}
                </div>

                {/* 4. Bureau : Tag et Note */}
                <div className="hidden md:flex items-center gap-6 mr-6 shrink-0">
                  {series.tag ? (
                    <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-md ${series.tagColor || "bg-indigo-600"}`}>
                      {series.tag}
                    </span>
                  ) : (
                    <div className="w-16"></div>
                  )}
                  
                  <div className="flex items-center gap-1.5 w-16 justify-end">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-slate-900 text-sm">{series.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Mobile : Note */}
                <div className="flex md:hidden items-center gap-1 ml-3 shrink-0">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-slate-900 text-xs">{series.rating.toFixed(1)}</span>
                </div>

                {/* 5. Flèche */}
                <div className="ml-3 md:ml-6 shrink-0 text-slate-300 group-hover:text-indigo-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* --- BOUTON VOIR TOUT --- */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/originals" 
            className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-bold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Voir toutes les séries
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </section>

    </main>
  );
}