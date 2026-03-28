import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface WebtoonCardProps {
  id: string;
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
  // 1. Le vert émeraude remplace le violet par défaut
  tagColor = "bg-emerald-500" 
}: WebtoonCardProps) {
  return (
    <Link href={`/series/${id}`} className="flex flex-col gap-3 w-full group">
      
      {/* --- IMAGE : Bords arrondis XL, bordure subtile et ombre --- */}
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer shadow-sm group-hover:shadow-md transition-all duration-500">
        
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 150px, 200px"
        />

        {/* --- NOTE : Style "Badge Financier" (Flou + bordure verre) --- */}
        <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 text-[10px] font-bold text-white z-10 shadow-sm border border-white/10">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          {rating.toFixed(1)}
        </div>

        {/* --- TAG : Plus fin et trapu --- */}
        {tag && (
          <div className={`absolute top-2 left-2 px-2 py-1 text-[9px] tracking-wider font-bold uppercase text-white rounded-md z-10 shadow-sm ${tagColor}`}>
            {tag}
          </div>
        )}
      </div>

      {/* --- TEXTE : Typographie affinée --- */}
      <div className="flex flex-col px-1">
        {/* Le texte passe au vert émeraude au survol */}
        <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-1">
          {title}
        </h3>
        <span className="text-xs text-slate-500 font-medium truncate mt-0.5">
          {author}
        </span>
      </div>
      
    </Link>
  );
}