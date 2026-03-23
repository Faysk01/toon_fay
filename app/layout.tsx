import type { Metadata, Viewport } from "next";
// 1. On change Inter pour Outfit (plus moderne/entertainment)
import { Outfit } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuration de la police
const outfit = Outfit({ 
  subsets: ["latin"],
  // On peut charger plusieurs graisses si besoin, mais le défaut suffit souvent
  display: 'swap', 
});

// 2. Métadonnées optimisées pour le SEO et le partage
export const metadata: Metadata = {
  title: {
    default: "Toon - Votre Plateforme de Webtoons",
    template: "%s | Toon", // Permet d'avoir "Solo Leveling | Toon" automatiquement
  },
  description: "Lisez vos mangas et webtoons préférés en version animée et immersive.",
  icons: {
    icon: "/favicon-v2.ico", // Assure-toi d'avoir un favicon
  },
};

// Configuration pour mobile (couleur de la barre de statut)
export const viewport: Viewport = {
  themeColor: "#4f46e5", // La couleur Indigo-600 de ton thème
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ajout de 'scroll-smooth' pour un défilement fluide
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.className} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}>
        
        {/* Navbar fixe ou sticky */}
        <Navbar />
        
        {/* Le contenu principal */}
        {/* On ajoute flex-grow pour que le footer soit toujours poussé en bas, même si la page est vide */}
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
        
      </body>
    </html>
  );
}