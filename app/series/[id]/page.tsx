import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, List, ChevronRight } from "lucide-react";

import { POPULAR_SERIES, NEW_RELEASES, DATA_BY_CATEGORY, Series } from "@/data/Webtoons";

function getSeriesById(id: string): Series | undefined {
  const allSeries = [
    ...POPULAR_SERIES,
    ...NEW_RELEASES,
    ...Object.values(DATA_BY_CATEGORY).flat(),
  ];

  return allSeries.find((series) => series.id === id);
}

export default async function SeriesDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const series = getSeriesById(resolvedParams.id);

  if (!series) return notFound();

  // --- FAUSSES DONNÉES ÉPURÉES ---
  // On retire le "Unknown" pour faire très pro.
  const mockEpisodes = [
    { id: "ep-3", number: "3", title: "Épisode 3", date: "07/03/2026" },
    { id: "ep-2", number: "2", title: "Épisode 2", date: "01/03/2026" },
    { id: "ep-1", number: "1", title: "Épisode 1", date: "24/02/2026" },
  ];

  return (
    <main className="min-h-screen bg-white pb-32">

      {/* --- HEADER : PREND EXACTEMENT 2/3 DE L'ÉCRAN --- */}
      <div className="relative h-[60vh] md:h-[66vh] w-full flex items-end justify-center md:justify-start bg-black overflow-hidden">

        {/* Image Background */}
        <Image
          src={series.image}
          alt={series.title}
          fill
          priority
          className="object-cover object-top opacity-90"
          sizes="100vw"
        />

        {/* Gradient lisibilité : Ne couvre que la partie basse pour le texte */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        {/* Bouton retour */}
        <Link
          href="/"
          className="absolute top-6 left-6 z-20 p-2.5 bg-black/40 rounded-full text-white hover:bg-black/60 backdrop-blur-md transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* Contenu bannière : Ancré au bas de l'image (pb-8 / pb-12) */}
        <div className="relative z-10 container mx-auto px-6 pb-8 md:pb-12 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">

          {/* Cover Webtoon */}
          <div className="relative w-40 md:w-56 aspect-[2/3] shadow-2xl shadow-black/80 overflow-hidden border border-white/20 flex-shrink-0 bg-slate-800 rounded-sm">
            <Image
              src={series.image}
              alt={series.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 160px, 224px"
            />

            {series.tag && (
              <span
                className={`absolute top-0 left-0 px-3 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest text-white z-10 ${
                  series.tagColor || "bg-emerald-500"
                }`}
              >
                {series.tag}
              </span>
            )}
          </div>

          {/* Infos série */}
          <div className="flex flex-col text-center md:text-left text-white mb-1 md:mb-4 w-full">

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 leading-tight tracking-tight drop-shadow-2xl">
              {series.title}
            </h1>

            <p className="text-slate-200 font-medium text-base md:text-xl mb-6 drop-shadow-md">
              Une œuvre de{" "}
              <span className="text-white font-bold">{series.author}</span>
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href={`/read/${series.id}/ep-1`}
                className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 px-10 py-3.5 rounded-sm transition-colors w-full sm:w-auto text-base md:text-lg font-bold shadow-lg shadow-emerald-600/30"
              >
                <Play className="w-5 h-5 fill-white" />
                Lire le 1er épisode
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* --- SECTION ÉPISODES (Visible directement dans le 1/3 restant de l'écran) --- */}
      <div className="container mx-auto px-6 mt-10 md:mt-16 md:max-w-none md:px-0 md:pl-[20%] lg:pl-[25%] pr-6">

        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-2 max-w-5xl">
          <div className="flex items-center gap-2">
            <List className="w-6 h-6 text-emerald-500" />
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
              Épisodes
            </h2>
          </div>

          <span className="text-sm font-bold text-slate-500">
            {mockEpisodes.length} épisodes
          </span>
        </div>

        {/* LISTE DES ÉPISODES */}
        <div className="flex flex-col max-w-5xl">
          {mockEpisodes.map((ep) => (
            <Link
              key={ep.id}
              href={`/read/${series.id}/${ep.id}`}
              className="group flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-slate-50 transition-colors px-2 relative"
            >

              {/* Thumbnail : Plus compacte et nette */}
              <div className="relative w-24 md:w-28 aspect-[16/9] bg-slate-200 overflow-hidden flex-shrink-0 rounded-sm shadow-sm border border-slate-100">
                <Image
                  src={series.image}
                  alt={ep.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="112px"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Infos épisode : Affichage épuré "Épisode 1" sans badge superflu */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                
                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                  {ep.title}
                </h3>
                
                <span className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                  {ep.date}
                </span>

              </div>

              {/* Flèche */}
              <div className="pr-2 md:pr-4 text-slate-300 group-hover:text-emerald-600 transition-colors group-hover:translate-x-1">
                <ChevronRight className="w-5 h-5" />
              </div>

            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}