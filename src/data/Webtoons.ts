// src/data/Webtoons.ts

// --- DÉFINITION DU MODÈLE (TypeScript) ---
export interface Series {
    id: string; // <-- L'identifiant unique ajouté
    title: string;
    author: string;
    rating: number;
    image: string;
    tag?: string;
    tagColor?: string;
}

// --- 1. SÉRIES POPULAIRES (Grand Carousel) ---
export const POPULAR_SERIES: Series[] = [
    { 
        id: "une-belle-rencontre",
        title: "Une belle rencontre", 
        author: "K. Fayssal", 
        rating: 4.6, 
        tag: "NEW", 
        image: "/imagesDB/covers/une-belle-rencontre.jpg" 
    },
    { 
        id: "roi-soundiata",
        title: "La légende du roi Soundiata", 
        author: "O. Moussa", 
        rating: 4.9, 
        tag: "TOP 1", 
        image: "/imagesDB/covers/roi-soundiata.jpg" 
    },
    { 
        id: "guerre-pouvoir",
        title: "Guerre au pouvoir", 
        author: "K. Idriss", 
        rating: 4.8, 
        tag: "BEST", 
        tagColor: "bg-slate-900", 
        image: "/imagesDB/covers/guerre-pouvoir.jpg" 
    },
    { 
        id: "love-script",
        title: "Love Script", 
        author: "Kabore Laura", 
        rating: 4.7, 
        tag: "CŒUR", 
        tagColor: "bg-pink-500", 
        image: "/imagesDB/covers/love-script.jpg" 
    },
    { 
        id: "la-queen",
        title: "La Queen", 
        author: "O. Djamii", 
        rating: 4.5, 
        image: "/imagesDB/covers/la-queen.jpg" 
    },
    { 
        id: "village-sans-frontiere",
        title: "Le village sans frontière", 
        author: "K. Fayssal", 
        rating: 4.4, 
        image: "/imagesDB/covers/village-sans-frontiere.jpg" 
    },
];

// --- 2. DONNÉES PAR CATÉGORIES DE MES SERIES ---
export const CATEGORIES = ["Romance", "Action", "Fantaisie", "Drame", "Comédie"];

export const DATA_BY_CATEGORY: Record<string, Series[]> = {
    "Romance": [
        { id: "love-script", title: "Love Script", author: "Kabore Laura", rating: 4.6, image: "/imagesDB/covers/love-script.jpg" },
        { id: "une-belle-rencontre", title: "Une belle rencontre", author: "K. Fayssal", rating: 4.8, image: "/imagesDB/covers/une-belle-rencontre.jpg", tag: "WEBTOON" },
        { id: "au-bout-de-sa-pensee", title: "Au bout de sa pensée", author: "Magi Serge", rating: 4.5, image: "/imagesDB/covers/au-bout-de-sa-pensee.jpg" },
        { id: "midnight-poppy", title: "Midnight Poppy", author: "Lilydusk", rating: 4.8, image: "/imagesDB/covers/midnight-poppy.jpg" },
    ],
    "Action": [
        { id: "la-guerre-au-pouvoir", title: "La guerre au pouvoir", author: "Madi Zongo", rating: 4.9, image: "/imagesDB/covers/guerre-pouvoir.jpg", tag: "HOT" },
        { id: "enfant-prodige", title: "L'enfant prodige", author: "Celestin O.", rating: 4.8, image: "/imagesDB/covers/enfant-prodige.jpg" },
        { id: "roi-soundiata", title: "La légende du roi Soundiata", author: "O. Moussa", rating: 4.7, image: "/imagesDB/covers/roi-soundiata.jpg" },
        { id: "village-sans-frontiere", title: "Le village sans frontière", author: "K. Fayssal", rating: 4.9, image: "/imagesDB/covers/village-sans-frontiere.jpg", tag: "UP" },
        { id: "teenage-mercenary", title: "Teenage Mercenary", author: "DO", rating: 4.6, image: "/imagesDB/covers/teenage-mercenary.jpg" },
        { id: "mort-soudaine", title: "Mort soudaine", author: "Fati D.", rating: 4.5, image: "/imagesDB/covers/mort-soudaine.jpg" },
    ],
    "Fantaisie": [
        { id: "a-l-ecole", title: "A l'école", author: "Anita Rachel", rating: 4.7, image: "/imagesDB/covers/a-l-ecole.jpg", tagColor: "bg-pink-500" },
        { id: "monde-magique", title: "Le monde magique", author: "O. Djamii", rating: 4.9, image: "/imagesDB/covers/monde-magique.jpg" },
        { id: "sage-ou-sorciere", title: "Sage ou sorcière", author: "KF", rating: 4.5, image: "/imagesDB/covers/sage-ou-sorciere.jpg" },
        { id: "les-dees", title: "Les dées", author: "K. Sara", rating: 4.3, image: "/imagesDB/covers/les-dees.jpg" },
    ],
    "Drame": [
        { id: "malheur-aventure", title: "Un malheur aventure", author: "K. Fayssal", rating: 4.7, image: "/imagesDB/covers/malheur-aventure.jpg", tag: "TOP" },
        { id: "sali", title: "Sali", author: "O. Djamii", rating: 4.9, image: "/imagesDB/covers/sali.jpg" },
    ],
    "Comédie": [
        { id: "mage-angel-queen", title: "Mage & Angel Queen", author: "Ernest Le grand", rating: 4.8, image: "/imagesDB/covers/mage-angel.jpg" },
        { id: "love-advice", title: "Love Advice", author: "Chocho", rating: 4.9, image: "/imagesDB/covers/love-advice.jpg", tag: "FUNNY" },
    ]
};

// --- 3. NOUVELLES SERIES SORTIES  ---
export const NEW_RELEASES: Series[] = [
    { id: "royaume-mossi", title: "Le royaume Mossi", author: "N. Sato", rating: 4.3, tag: "NEW", tagColor: "bg-green-600", image: "/imagesDB/covers/royaume-mossi.jpg" },
    { id: "dream-express", title: "Dream Express", author: "V. Kim", rating: 4.6, image: "/imagesDB/covers/dream-express.jpg" },
    { id: "albinos-noir", title: "L'albinos noir", author: "IB", rating: 4.7, tag: "ORIGINAL", tagColor: "bg-purple-600", image: "/imagesDB/covers/albinos-noir.jpg" },
    { id: "mystere", title: "Mystère", author: "O. Djamii", rating: 4.9, image: "/imagesDB/covers/mystere.jpg" },
];


// --- 4. DERNIERS ÉPISODES (Liste verticale - Thumbnails Paysage) ---
export const LATEST_EPISODES = [
    { 
        id: "1", 
        number: "89", 
        title: "Une alliance inattendue", 
        date: "Aujourd'hui", 
        thumbnail: "/imagesDB/thumbnails/thumb-alliance.jpg" 
    },
    {
        id: "2", 
        number: "124", 
        title: "L'hiver noir", 
        date: "Hier", 
        thumbnail: "/imagesDB/thumbnails/thumb-hiver.jpg" 
    },
    { 
        id: "3", 
        number: "42", 
        title: "Le secret du roi", 
        date: "05/08/2025", 
        thumbnail: "/imagesDB/thumbnails/thumb-secret.jpg" 
    },
];