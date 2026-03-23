// src/data/episodes.ts

// --- 1. LES TYPES ---
export interface EpisodeData {
  title: string;
  images: string[];
  prevEpisode: string | null;
  nextEpisode: string | null;
}

export type SeriesData = Record<string, EpisodeData>;
export type AllEpisodesData = Record<string, SeriesData>;

// --- 2. LA FONCTION MAGIQUE DE GÉNÉRATION ---
/**
 * Génère automatiquement la liste des images pour un épisode
 * Exemple: generateImages('/images/manga', 3) => ['/images/manga/1.jpg', '/images/manga/2.jpg', '/images/manga/3.jpg']
 */
export function generateImages(folderPath: string, numberOfPages: number, extension = "jpg"): string[] {
  return Array.from({ length: numberOfPages }, (_, i) => {
    return `${folderPath}/${i + 1}.${extension}`;
  });
}

// ============================================================================
// 📚 BASE DE DONNÉES DES ÉPISODES
// ============================================================================
export const EPISODES_DATA: AllEpisodesData = {
  
  // --------------------------------------------------------------------------
  // 🟢 SÉRIES AVEC DES ÉPISODES DISPONIBLES (Prêtes à être lues)
  // --------------------------------------------------------------------------
  
  "une-belle-rencontre": {
    "ep-1": {
      title: "Épisode 1",
      images: generateImages("/images/belle-rencontre-epi1", 17), 
      prevEpisode: null, 
      nextEpisode: "ep-2" 
    },
    "ep-2": {
      title: "Épisode 2",
      images: generateImages("/images/belle-rencontre-epi2", 35), // Ajuste ce nombre au besoin
      prevEpisode: "ep-1", 
      nextEpisode: null 
    }
  },


  // --------------------------------------------------------------------------
  // 🔴 SÉRIES EN COURS DE PRODUCTION (Afficheront l'écran "En cours de montage")
  // --------------------------------------------------------------------------
  
  // Populaires & Action
  "roi-soundiata": {},
  "guerre-pouvoir": {},
  "la-guerre-au-pouvoir": {}, // Note: tu as deux IDs similaires dans ton Webtoons.ts
  "village-sans-frontiere": {},
  "enfant-prodige": {},
  "teenage-mercenary": {},
  "mort-soudaine": {},

  // Romance
  "love-script": {},
  "au-bout-de-sa-pensee": {},
  "midnight-poppy": {},

  // Fantaisie
  "a-l-ecole": {},
  "monde-magique": {},
  "sage-ou-sorciere": {},
  "les-dees": {},

  // Drame
  "malheur-aventure": {},
  "sali": {},

  // Comédie
  "mage-angel-queen": {},
  "love-advice": {},

  // Nouveautés & Autres
  "la-queen": {},
  "royaume-mossi": {},
  "dream-express": {},
  "albinos-noir": {},
  "mystere": {},
};