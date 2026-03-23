import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // On importe le helper de plugin

const config: Config = {
  // 1. MISE À JOUR : Configuration "Blindée" des chemins
  // Tailwind va scanner absolument tous ces dossiers pour générer le CSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Au cas où certains de tes dossiers ne seraient pas dans src/ :
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. TES COULEURS (Conservées)
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Indigo
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#1e1e2f", // Gris foncé texte
        muted: {
          DEFAULT: "#f3f3f8", // Gris clair fond cartes
          foreground: "#6b6b7b", // Gris moyen auteurs
        },
        accent: {
          DEFAULT: "#f0f0fa", // Fond tags
          foreground: "#4f46e5", // Texte tags
        },
      },
      
      // 2. OMBRES PERSONNALISÉES (Conservées)
      boxShadow: {
        'card': '0 10px 25px rgba(0,0,0,0.02), 0 2px 5px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 30px rgba(79, 70, 229, 0.15)', // Un peu plus visible
        'glow': '0 0 20px rgba(79, 70, 229, 0.35)', // Effet néon pour les boutons actifs
      },

      // 3. ANIMATIONS (Conservées)
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Pour les chargements
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
    },
  },
  
  // 4. PLUGINS UTILITAIRES (Conservés)
  plugins: [
    // Plugin maison pour cacher la scrollbar
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      });
    }),
  ],
};

export default config;