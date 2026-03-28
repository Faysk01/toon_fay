"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Footer() {
  const pathname = usePathname();

  // On cache ce footer global sur la boutique car elle possède déjà le sien
  if (pathname?.startsWith("/shop")) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* GRILLE RESPONSIVE : 
            - Mobile: 2 colonnes (grid-cols-2) pour gagner de la place
            - Tablette/PC: 4 colonnes (md:grid-cols-4) 
            - gap-y-10 : espace vertical entre les lignes sur mobile
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          
          {/* --- Colonne Brand (Prend toute la largeur sur mobile pour bien présenter la marque) --- */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              TOON<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed pr-4">
              La plateforme de bandes dessinées développée par AfrikStudio. Faite par des fans, pour des fans.
            </p>
          </div>

          {/* --- Colonne Liens --- */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6">Plateforme</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <Link href="/originals" className="hover:text-emerald-600 transition-colors">Originals</Link>
              </li>
              <li>
                <Link href="/rankings" className="hover:text-emerald-600 transition-colors">Classement</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-emerald-600 transition-colors">Catégories</Link>
              </li>
            </ul>
          </div>

          {/* --- Colonne Support --- */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <Link href="/support/help" className="hover:text-emerald-600 transition-colors">Aide & FAQ</Link>
              </li>
              <li>
                <Link href="/support/terms" className="hover:text-emerald-600 transition-colors">Conditions d&rsquo;utilisation</Link>
              </li>
              <li>
                <Link href="/support/privacy" className="hover:text-emerald-600 transition-colors">Confidentialité</Link>
              </li>
            </ul>
          </div>

          {/* --- Colonne Social / Réseaux (Prend toute la largeur sur mobile) --- */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6">Suivez-nous</h4>
            <div className="flex gap-3">
              
              {/* BOUTON FACEBOOK */}
              <a 
                href="https://www.facebook.com/fayssal.kouraogo.14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* BOUTON INSTAGRAM */}
              <a 
                href="https://www.instagram.com/fayssal_kouraogo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* BOUTON SNAPCHAT */}
              <a 
                href="https://snapchat.com/t/kc0Q1HlC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-200 hover:bg-yellow-50 transition-all duration-300"
                aria-label="Snapchat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.59 2.5a5.16 5.16 0 0 0-4.7 3c-.23.6-.33 1.3-.34 2.1-.01.95-.12 1.37-.53 1.64-.26.17-.64.24-1.25.26-.32.02-.68.17-.93.42-.29.3-.35.66-.21.96.15.32.48.51.86.51h1.17c.54 0 .86.27.95.78.07.41.01.8-.18 1.15-.3.53-.88.94-1.57 1.1-.64.15-1.07.56-1.16 1.11-.08.52.17 1.05.62 1.31.29.17.65.23 1.06.18h.27c.56-.06 1.13.04 1.64.29.42.2.8.48 1.13.84l.27.3c.3.34.7.53 1.14.53h1.16c.44 0 .84-.19 1.14-.53l.27-.3c.33-.36.71-.64 1.13-.84.51-.25 1.08-.35 1.64-.29h.27c.41.05.77-.01 1.06-.18.45-.26.7-.79.62-1.31-.09-.55-.52-.96-1.16-1.11-.69-.16-1.27-.57-1.57-1.1-.19-.35-.25-.74-.18-1.15.09-.51.41-.78.95-.78h1.17c.38 0 .71-.19.86-.51.14-.3.08-.66-.21-.96-.25-.25-.61-.4-.93-.42-.61-.02-.99-.09-1.25-.26-.41-.27-.52-.69-.53-1.64-.01-.8-.11-1.5-.34-2.1a5.16 5.16 0 0 0-4.7-3z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="border-t border-slate-200 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Toon Inc. par AfrikStudio. Tous droits réservés.</p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <span className="hover:text-emerald-600 cursor-pointer transition-colors">Politique de cookies</span>
            <span className="hover:text-emerald-600 cursor-pointer transition-colors">Mentions légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}