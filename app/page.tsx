import Link from "next/link";
// 1. IMPORT DU COMPOSANT IMAGE DE NEXT.JS
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CategoryTabs from "@/components/CategoryTabs";
import WebtoonCarousel from "@/components/WebtoonCarousel";
import EpisodeList from "@/components/EpisodeList"; 
import HeroSlider from "@/components/HeroSlider";
import { POPULAR_SERIES, NEW_RELEASES } from "@/data/Webtoons";

// --- FAUSSES DONNÉES TEMPORAIRES (MOCK) ---
const MOCK_LATEST_EPISODES = [
  { 
    id: "roi-soundiata-ep-1", 
    number: "89", 
    title: "Une alliance inattendue", 
    date: "Aujourd'hui", 
    thumbnail: "/imagesDB/covers/roi-soundiata.jpg" 
  },
  {
    id: "love-script-ep-1", 
    number: "124", 
    title: "L'hiver noir", 
    date: "Hier", 
    thumbnail: "/imagesDB/covers/love-script.jpg" 
  },
  { 
    id: "guerre-pouvoir-ep-1", 
    number: "42", 
    title: "Le secret du roi", 
    date: "05/03/2026", 
    thumbnail: "/imagesDB/covers/guerre-pouvoir.jpg" 
  },
];

export default function Home() {
  return (
    // La page d'accueil principale
    <main className="min-h-screen bg-white pb-24 selection:bg-emerald-500/30">
      
      {/* --- SECTION HERO (FULL WIDTH) --- */}
      <HeroSlider />

      <div className="space-y-20 mt-16"> {/* Espacement global aéré et moderne */}

        {/* --- SECTION 1 : POPULAIRES --- */}
        <section>
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="Top Séries" href="/rankings" />
            <div className="mt-6">
              <WebtoonCarousel items={POPULAR_SERIES} />
            </div>
          </div>
        </section>

        {/* --- SECTION 2 : PAR CATÉGORIES --- */}
        {/* Un fond très légèrement grisé pour casser la monotonie du blanc */}
        <section className="bg-slate-50/50 py-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="Explorer par Genre" />
            <div className="mt-6">
              <CategoryTabs />
            </div>
          </div>
        </section>

        {/* --- SECTION 3 : NOUVEAUTÉS --- */}
        <section>
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="Fraîchement Sortis" href="/originals" />
            <div className="mt-6">
              <WebtoonCarousel items={NEW_RELEASES} />
            </div>
          </div>
        </section>

        {/* --- SECTION 4 : DERNIERS ÉPISODES & CLASSEMENT --- */}
        <section>
          <div className="max-w-7xl mx-auto px-6">
             <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
                
                {/* --- Colonne Gauche : Liste Épisodes (Prend 2 colonnes sur 3) --- */}
                <div className="lg:col-span-2">
                  <SectionHeader title="Dernières Mises à Jour" />
                  <div className="mt-6">
                    <EpisodeList episodes={MOCK_LATEST_EPISODES} />
                  </div>
                  
                  {/* Bouton pour voir tous les épisodes */}
                  <div className="mt-8 flex justify-center">
                    <Link 
                      href="/episodes" 
                      className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm"
                    >
                      Voir tout l&rsquo;historique
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* --- Colonne Droite : Top Classement (Widget Premium) --- */}
                <div className="hidden lg:block">
                  <div className="bg-white rounded-3xl p-6 h-fit sticky top-28 border border-slate-200 shadow-xl shadow-slate-200/40">
                    
                    {/* En-tête du Widget */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <h3 className="font-black text-slate-900 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        Top de la semaine
                      </h3>
                    </div>
                    
                    {/* Liste du classement */}
                    <ul className="space-y-2">
                        {POPULAR_SERIES.slice(0, 5).map((serie, i) => (
                          <li key={serie.id}>
                            <Link 
                              href={`/series/${serie.id}`}
                              className="group flex items-center gap-4 hover:bg-slate-50 p-3 rounded-2xl transition-all border border-transparent hover:border-slate-100"
                            >
                                {/* Numéro du classement */}
                                <span className={`text-2xl font-black w-6 text-center transition-colors ${i === 0 ? 'text-emerald-500 drop-shadow-sm' : i === 1 ? 'text-emerald-400' : i === 2 ? 'text-emerald-300' : 'text-slate-200 group-hover:text-slate-300'}`}>
                                  {i + 1}
                                </span>
                                
                                {/* 2. REMPLACEMENT DE <img /> PAR <Image /> ICI */}
                                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0 relative border border-slate-200/60">
                                  <Image 
                                    src={serie.image} 
                                    alt={serie.title} 
                                    fill
                                    sizes="48px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                  />
                                </div>

                                {/* Infos */}
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-slate-900 truncate group-hover:text-emerald-600 transition-colors">
                                    {serie.title}
                                  </div>
                                  <div className="text-xs font-medium text-slate-500 truncate mt-0.5">
                                    {serie.author}
                                  </div>
                                </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                    
                    {/* Lien bas du widget */}
                    <Link href="/rankings" className="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-center text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors">
                      Voir le classement complet
                    </Link>

                  </div>
                </div>

             </div>
          </div>
        </section>

      </div>
    </main>
  );
}