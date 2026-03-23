import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CategoryTabs from "@/components/CategoryTabs";
import WebtoonCarousel from "@/components/WebtoonCarousel";
import EpisodeList from "@/components/EpisodeList"; 
import HeroSlider from "@/components/HeroSlider";
import { POPULAR_SERIES, NEW_RELEASES } from "@/data/Webtoons";

// --- FAUSSES DONNÉES TEMPORAIRES (MOCK) ---
// En attendant de créer la vraie DB des épisodes
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
    // On garde pb-24, mais on n'a plus besoin de pt-16 car ta Navbar est "sticky" et s'adapte toute seule !
    <main className="min-h-screen bg-white pb-24">
      
      {/* --- SECTION HERO (FULL WIDTH) --- */}
      <HeroSlider />

      <div className="space-y-20 mt-12"> {/* Espacement global aéré */}

        {/* --- SECTION 1 : POPULAIRES --- */}
        <section>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader title="Top Séries" href="/" />
            <div className="mt-4">
              <WebtoonCarousel items={POPULAR_SERIES} />
            </div>
          </div>
        </section>

        {/* --- SECTION 2 : PAR CATÉGORIES --- */}
        <section className="bg-slate-50 py-16 border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader title="Explorer par Genre" />
            <CategoryTabs />
          </div>
        </section>

        {/* --- SECTION 3 : NOUVEAUTÉS --- */}
        <section>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader title="Fraîchement Sortis" href="/" />
            <div className="mt-4">
              <WebtoonCarousel items={NEW_RELEASES} />
            </div>
          </div>
        </section>

        {/* --- SECTION 4 : DERNIERS ÉPISODES & CLASSEMENT --- */}
        <section>
          <div className="container mx-auto px-4 md:px-6">
             <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Colonne Gauche : Liste Épisodes (Prend 2 colonnes sur 3) */}
                <div className="md:col-span-2">
                  <SectionHeader title="Dernières Mises à Jour" />
                  <div className="mt-4">
                    <EpisodeList episodes={MOCK_LATEST_EPISODES} />
                  </div>
                </div>
                
                {/* Colonne Droite : Top Classement (Petit Widget Bonus) */}
                <div className="hidden md:block bg-indigo-50/50 rounded-2xl p-6 h-fit sticky top-28 border border-indigo-100/50">
                    <h3 className="font-bold text-indigo-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                      Top de la semaine
                    </h3>
                    
                    <ul className="space-y-4">
                        {POPULAR_SERIES.slice(0, 5).map((serie, i) => (
                          <li key={serie.id}>
                            {/* Le lien vers la série pour que ce soit interactif ! */}
                            <Link 
                              href={`/series/${serie.id}`}
                              className="group flex items-center gap-4 hover:bg-white p-2 rounded-lg transition-colors -ml-2"
                            >
                                <span className={`text-xl font-black w-6 text-center ${i < 3 ? 'text-indigo-600' : 'text-slate-300'}`}>
                                  {i + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
                                    {serie.title}
                                  </div>
                                  <div className="text-xs text-slate-500 truncate mt-0.5">
                                    {serie.author}
                                  </div>
                                </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                </div>

             </div>
          </div>
        </section>

      </div>
    </main>
  );
}