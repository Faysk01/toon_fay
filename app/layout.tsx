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

// ==============================================================================
// 3. CONFIGURATION VIEWPORT & BARRE DE STATUT (iOS/Android)
// ==============================================================================
export const viewport: Viewport = {
  // C'EST ÇA QUI CAUSAIT LE VIOLET ! On le passe en blanc (#ffffff)
  themeColor: "#ffffff", 
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Très important sur mobile : empêche le zoom forcé quand on clique sur un input
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ajout de 'bg-white' directement sur la balise html pour sécuriser le fond caché
    <html lang="fr" className="scroll-smooth bg-white">
      <body className={`${outfit.className} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}>
        
        {/* Navbar fixe ou sticky */}
        <Navbar />
        
        {/* Le contenu principal */}
        {/* On ajoute flex-grow pour que le footer soit toujours poussé en bas, même si la page est vide */}
        <div className="flex-grow bg-white">
          {children}
        </div>
        
        <Footer />
        
      </body>
    </html>
  );
}