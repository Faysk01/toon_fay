import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      
      {/* En-tête */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l&rsquo;accueil
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-emerald-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Légal</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Conditions d&rsquo;utilisation
        </h1>
        
        <p className="text-slate-400 text-sm font-medium mb-12 border-b border-slate-100 pb-8">
          Dernière mise à jour : 18 Mars 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptation des conditions</h2>
            <p>
              En accédant à l&rsquo;application Toon et en l&rsquo;utilisant, vous acceptez d&rsquo;être lié par les présentes Conditions d&rsquo;utilisation. Si vous n&rsquo;acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Utilisation du service</h2>
            <p>
              Notre plateforme vous permet de lire des bandes dessinées numériques (Webtoons). Vous vous engagez à ne pas :
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Copier, distribuer ou modifier le contenu sans autorisation.</li>
              <li>Utiliser des systèmes automatisés (bots) pour extraire nos œuvres.</li>
              <li>Partager votre compte avec des tiers de manière abusive.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
            <p>
              Toutes les œuvres, images, textes et logos présents sur la plateforme sont la propriété exclusive de leurs auteurs respectifs ou de Toon. Toute reproduction non autorisée entraînera des poursuites légales immédiates.
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}