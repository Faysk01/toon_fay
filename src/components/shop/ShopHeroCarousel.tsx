"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Gamepad2, ShoppingBag, Sparkles, BookOpenText, ChevronLeft, ChevronRight } from "lucide-react";

// 1. DÉFINITION DES DONNÉES DES SLIDES
const SLIDE_DATA = [
  {
    id: 1,
    type: "split", 
    imagePosition: "left",
    badgeIcon: Sparkles,
    badgeText: "Tendance Fashion",
    title: "Soyez à la mode avec nos produits",
    buttonText: "Shop Now",
    imageSrc: "/assets/shopCarousel/girlHeadphone.png",
    bgColor: "bg-[#f57c00]", 
    textColor: "text-white",
    btnColor: "bg-white text-[#f57c00]",
  },
  {
    id: 2, 
    type: "cover", 
    badgeIcon: ShoppingBag,
    badgeText: "Lifestyle & Déco",
    title: "Une belle sélection pour votre chambre",
    buttonText: "Découvrir",
    imageSrc: "/assets/shopCarousel/chambre.png", 
    textColor: "text-white",
    btnColor: "bg-pink-600 text-white hover:bg-pink-500",
    overlayClass: "bg-gradient-to-t from-pink-950/90 via-pink-950/40 to-transparent md:bg-gradient-to-r md:from-pink-950/90 md:via-pink-950/50 md:to-transparent",
    badgeClass: "bg-pink-500/20 border border-pink-500/30",
    badgeTextClass: "text-pink-100",
    badgeIconClass: "text-pink-400"
  },
  {
    id: 3,
    type: "split",
    imagePosition: "left", // <-- MODIFICATION ICI : L'image passe à gauche
    badgeIcon: Gamepad2,
    badgeText: "Gaming Zone",
    title: "Ne ratez pas nos produits pour gaming",
    buttonText: "Shop Now",
    imageSrc: "/assets/shopCarousel/game.png",
    bgColor: "bg-slate-100", // Fond gris-blanc clair
    textColor: "text-slate-800", // Texte noir clair / gris très foncé
    btnColor: "bg-slate-800 text-white hover:bg-slate-700", // Bouton sombre contrastant
    borderColor: "border-slate-200"
  },
  {
    id: 4,
    type: "cover", 
    badgeIcon: BookOpenText,
    badgeText: "Culture & Lecture",
    title: "Achetez nos BD pour une bonne lecture",
    buttonText: "Lire maintenant",
    imageSrc: "/assets/shopCarousel/filleLecture.png", 
    textColor: "text-white",
    btnColor: "bg-shop-accent text-white hover:bg-shop-accent-hover",
    overlayClass: "bg-gradient-to-t from-shop-bg/90 via-shop-bg/40 to-transparent md:bg-gradient-to-r md:from-shop-bg md:via-shop-bg/70 md:to-transparent",
    badgeClass: "bg-shop-accent/20 border border-shop-accent/30",
    badgeTextClass: "text-white",
    badgeIconClass: "text-shop-accent"
  }
];

export default function ShopHeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDE_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDE_DATA.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden bg-shop-bg border-b border-shop-border selection:bg-shop-accent/30 group">
      
      {/* Les Slides */}
      {SLIDE_DATA.map((slide, index) => {
        const BadgeIcon = slide.badgeIcon;
        const isActive = index === current;
        const isImageLeft = slide.imagePosition === "left";

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
            }`}
          >
            {/* ---------------------------------------------------------
                LAYOUT TYPE "SPLIT" (Ajusté pour Mobile)
            --------------------------------------------------------- */}
            {(slide.type === "split") && (
              <div className={`relative w-full h-full overflow-hidden ${slide.bgColor} ${slide.borderColor ? `border ${slide.borderColor}` : ''}`}>
                
                <div className="absolute inset-0 md:hidden opacity-30 blur-[2px]">
                  <Image 
                      src={slide.imageSrc || ""} 
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16">
                  
                  {/* Partie Texte */}
                  <div className={`flex flex-col items-center text-center md:items-start md:text-left ${slide.textColor} ${isImageLeft ? 'md:order-2 md:pl-10' : 'md:order-1'}`}>
                    
                    {/* Badge: adaptation conditionnelle si le texte est sombre (slide 3) */}
                    <div className={`inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1 rounded-full mb-3 md:mb-4 backdrop-blur-sm ${slide.textColor === 'text-slate-800' ? 'bg-slate-200/50 border border-slate-300/50' : 'bg-black/10 border border-black/20'}`}>
                      <BadgeIcon className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-80" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{slide.badgeText}</span>
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1] md:leading-[0.95] mb-5 md:mb-6 max-w-[280px] md:max-w-md drop-shadow-sm md:drop-shadow-none">
                      {slide.title}
                    </h1>
                    
                    <button className={`group flex items-center gap-1.5 md:gap-2 px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 text-xs md:text-sm ${slide.btnColor}`}>
                      {slide.buttonText}
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Partie Image */}
                  <div className={`hidden md:block relative h-full w-full ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
                    <Image 
                      src={slide.imageSrc || ""} 
                      alt={slide.title}
                      fill
                      className={`object-contain ${isImageLeft ? 'object-left-bottom p-0 scale-105 origin-bottom' : 'object-right-bottom p-4'}`}
                      priority={index === 0}
                      sizes="50vw"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------
                LAYOUT TYPE "COVER" (Ajusté pour Mobile)
            --------------------------------------------------------- */}
            {slide.type === "cover" && (
              <div className="relative w-full h-full overflow-hidden bg-shop-bg">
                
                <Image 
                  src={slide.imageSrc || ""}
                  alt={slide.title}
                  fill
                  className="object-cover object-[70%_50%] md:object-center"
                  priority={true}
                  sizes="100vw"
                />

                <div className={`absolute inset-0 ${slide.overlayClass}`}></div>

                <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-end md:justify-center px-8 md:px-16 pb-10 md:pb-0">
                  <div className={`flex flex-col items-start text-left ${slide.textColor}`}>
                    
                    <div className={`inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1 rounded-full mb-3 md:mb-4 backdrop-blur-md ${slide.badgeClass}`}>
                      <BadgeIcon className={`w-3 h-3 md:w-3.5 md:h-3.5 ${slide.badgeIconClass}`} />
                      <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${slide.badgeTextClass}`}>{slide.badgeText}</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1] mb-5 md:mb-6 max-w-[280px] md:max-w-[450px] drop-shadow-lg">
                      {slide.title}
                    </h1>
                    
                    <button className={`group flex items-center gap-1.5 md:gap-2 px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold shadow-lg shadow-black/20 transition-all active:scale-95 text-xs md:text-sm ${slide.btnColor}`}>
                      {slide.buttonText}
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        );
      })}

      {/* --- FLÈCHES DE NAVIGATION --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/30 border border-white/20 transition-all shadow-lg opacity-0 md:opacity-100 group-hover:scale-110 backdrop-blur-md"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/30 border border-white/20 transition-all shadow-lg opacity-0 md:opacity-100 group-hover:scale-110 backdrop-blur-md"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* --- INDICATEURS (Liés au thème) --- */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-30 bg-shop-bg/60 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm border border-shop-border/50">
        {SLIDE_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
              idx === current ? "w-4 md:w-6 bg-shop-text" : "w-1.5 md:w-2 bg-shop-muted/40 hover:bg-shop-muted/80"
            }`}
            aria-label={`Aller au slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}