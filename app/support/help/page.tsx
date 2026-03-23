import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Mail, MessageCircle, HelpCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24">
      
      {/* En-tête avec retour */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l&rsquo;accueil
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Centre d&rsquo;Aide
          </h1>
        </div>
        
        <p className="text-slate-500 text-lg mb-10">
          Comment pouvons-nous vous aider aujourd&rsquo;hui ?
        </p>

        {/* Barre de recherche (Design) */}
        <div className="relative mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher une réponse (ex: mot de passe, paiement...)" 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm text-slate-900"
          />
        </div>

        {/* FAQ Section */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Questions Fréquentes</h2>
        
        <div className="flex flex-col gap-4">
          {/* Item FAQ 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900 mb-2">Comment lire un épisode bloqué ?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Certains épisodes premium nécessitent des &quot;Coins&quot;. Vous pouvez en acheter dans la boutique ou en gagner en regardant des publicités courtes dans l&rsquo;onglet récompenses.
            </p>
          </div>

          {/* Item FAQ 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900 mb-2">Quand les nouveaux épisodes sortent-ils ?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les mises à jour dépendent des créateurs. En général, les séries &quot;Originals&quot; sont mises à jour une fois par semaine. Vous pouvez voir le jour de parution sur la page de chaque série.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-indigo-50 border border-indigo-100 rounded-3xl p-8 text-center">
          <h2 className="text-lg font-bold text-indigo-900 mb-2">Vous n&rsquo;avez pas trouvé votre réponse ?</h2>
          <p className="text-indigo-700/80 text-sm mb-6">Notre équipe de support est là pour vous aider 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-sm hover:shadow-md transition-all w-full sm:w-auto justify-center">
              <Mail className="w-4 h-4" />
              Nous envoyer un email
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-sm hover:shadow-md hover:bg-indigo-700 transition-all w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4" />
              Chat en direct
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}