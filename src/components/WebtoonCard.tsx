import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // <-- 1. Import du Link de Next.js

interface WebtoonCardProps {
  id: string; // <-- 2. Ajout de l'ID obligatoire pour la navigation
  title: string;
  author: string;
  rating: number;
  image: string;
  tag?: string;
  tagColor?: string;
}

export default function WebtoonCard({ 
  id, 
  title, 
  author, 
  rating, 
  image, 
  tag,
  tagColor = "bg-indigo-600" 
}: WebtoonCardProps) {
  return (
    // 3. On remplace la <div> principale par <Link> et on ajoute "group" ici
    <Link href={`/series/${id}`} className="flex flex-col gap-2 w-full group">
      
      {/* 1. IMAGE : Simple zoom interne */}
      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-slate-100 cursor-pointer">
        
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 150px, 200px"
        />

        {/* Note en petit, simple */}
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded flex items-center gap-1 text-[10px] font-bold text-white z-10">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          {rating.toFixed(1)}
        </div>

        {/* Tag simple */}
        {tag && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase text-white rounded-sm z-10 ${tagColor}`}>
            {tag}
          </div>
        )}
      </div>

      {/* 2. TEXTE : Sobre */}
      <div className="flex flex-col">
        {/* On change hover:text-indigo-600 par group-hover:text-indigo-600 */}
        <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1">
          {title}
        </h3>
        <span className="text-xs text-slate-500 truncate">
          {author}
        </span>
      </div>
    </Link>
  );
}