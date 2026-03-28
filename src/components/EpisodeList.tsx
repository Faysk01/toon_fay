import React from 'react';
import { ChevronRight, Clock } from 'lucide-react';
import Image from 'next/image'; // <-- 1. Import du composant Image

interface Episode {
  id: string;
  number: string;
  title: string;
  date: string;
  thumbnail: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-slate-900 mb-4 px-4">Derniers Épisodes</h3>
      
      <div className="flex flex-col">
        {episodes.map((ep) => (
          <div 
            key={ep.id} 
            className="group flex items-center gap-4 p-3 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            
            {/* 1. Thumbnail de l'épisode */}
            {/* Le parent DOIT avoir "relative" et une taille (w-20 h-16) pour que "fill" fonctionne */}
            <div className="relative w-20 h-16 overflow-hidden bg-slate-200 rounded-md flex-shrink-0">
              <Image 
                src={ep.thumbnail} 
                alt={`Episode ${ep.number}`} 
                fill // <-- Remplit le conteneur parent
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
                sizes="80px" // <-- Optimisation : dit au navigateur que l'image est petite
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            </div>

            {/* 2. Infos de l'épisode */}
            <div className="flex-1">
              <span className="text-xs font-bold text-emerald-500 mb-0.5 block">
                Ép. {ep.number}
              </span>
              <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                {ep.title}
              </h4>
              <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{ep.date}</span>
              </div>
            </div>

            {/* 3. Bouton d'action */}
            <div className="pr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-500 uppercase tracking-wider">
                Lire <ChevronRight className="w-4 h-4" />
              </span>
            </div>

          </div>
        ))}
      </div>
      
      <button className="mt-4 mx-4 py-3 text-sm font-medium text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-800 transition-colors">
        Voir tous les épisodes
      </button>
    </div>
  );
}