import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Légal & Sécurité</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Politique de Confidentialité
        </h1>
        
        <p className="text-slate-400 text-sm font-medium mb-12 border-b border-slate-100 pb-8">
          Dernière mise à jour : 18 Mars 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Données que nous collectons</h2>
            <p>
              Pour vous offrir la meilleure expérience de lecture possible, nous collectons certaines données lors de votre inscription et de votre navigation :
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Données de compte :</strong> Adresse email, pseudonyme.</li>
              <li><strong>Données de lecture :</strong> Chapitres lus, favoris, temps passé sur l&rsquo;application.</li>
              <li><strong>Données techniques :</strong> Type d&rsquo;appareil, adresse IP (à des fins de sécurité).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Sécurité de vos informations</h2>
            <p>
              La sécurité de vos données est notre priorité absolue. Nous utilisons des protocoles de chiffrement de pointe (SSL/TLS) pour protéger vos informations personnelles. Vos mots de passe sont hachés et ne sont jamais stockés en texte clair.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Vos droits (RGPD)</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez d&rsquo;un droit total sur vos données. Vous pouvez à tout moment :
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Demander une copie des données que nous possédons sur vous.</li>
              <li>Modifier vos informations personnelles.</li>
              <li>Exiger la suppression définitive de votre compte et de vos données associées.</li>
            </ul>
          </section>

        </div>
      </article>
    </main>
  );
}