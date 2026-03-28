// Fichier : src/assets/data/productsData.ts (ou le chemin qui te convient)

// 1. DÉFINITION DU TYPE (Très important en Fintech pour éviter les erreurs)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // En format numérique pour faciliter les calculs (ex: panier)
  formattedPrice: string; // Prêt à l'affichage
  category: string;
  image: string;
  tag?: string; // Tag optionnel (Nouveau, Promo, etc.)
  inStock: boolean;
}

// 2. BASE DE DONNÉES FICTIVE (Mock Data)
export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod_001",
    name: "MacBook Air M2",
    description: "La puce M2 d'Apple dans un design incroyablement fin. Puissance et autonomie exceptionnelles pour les professionnels.",
    price: 950000,
    formattedPrice: "950 000",
    category: "Ordinateurs",
    image: "/assets/asus_laptop_image.png", // Remplacer par macbook_image.png si besoin
    tag: "Best-seller",
    inStock: true
  },
  {
    id: "prod_002",
    name: "Asus ZenBook Pro 14",
    description: "Ultraportable performant avec écran OLED. Pensé pour la productivité extrême et la création de contenu.",
    price: 850000,
    formattedPrice: "850 000",
    category: "Ordinateurs",
    image: "/assets/asus_laptop_image.png",
    inStock: true
  },
  {
    id: "prod_003",
    name: "Sony PlayStation 5",
    description: "Console next-gen avec chargement ultra-rapide, retour haptique immersif et graphismes 4K époustouflants.",
    price: 420000,
    formattedPrice: "420 000",
    category: "Gaming",
    image: "/assets/playstation_image.png",
    tag: "Tendance",
    inStock: true
  },
  {
    id: "prod_004",
    name: "Samsung Galaxy S23 Ultra",
    description: "Smartphone premium avec appareil photo 200 Mpx, processeur Snapdragon ultra-rapide et écran Dynamic AMOLED.",
    price: 680000,
    formattedPrice: "680 000",
    category: "Smartphones",
    image: "/assets/samsung_s23phone_image.png",
    inStock: true
  },
  {
    id: "prod_005",
    name: "Apple AirPods Pro 2",
    description: "Écouteurs sans fil avec réduction de bruit active intelligente et Audio Spatial pour une immersion totale.",
    price: 185000,
    formattedPrice: "185 000",
    category: "Audio",
    image: "/assets/apple_earphone_image.png",
    tag: "Nouveau",
    inStock: true
  },
  {
    id: "prod_006",
    name: "Bose QuietComfort 45",
    description: "Casque circum-auriculaire offrant le silence absolu, un confort premium et un son pur de très haute fidélité.",
    price: 245000,
    formattedPrice: "245 000",
    category: "Audio",
    image: "/assets/bose_headphone_image.png",
    inStock: true
  },
  {
    id: "prod_007",
    name: "Bose Noise Cancelling 700",
    description: "Design épuré en acier inoxydable avec des microphones révolutionnaires pour des appels vocaux d'une clarté inégalée.",
    price: 275000,
    formattedPrice: "275 000",
    category: "Audio",
    image: "/assets/bose_headphone_image.png",
    tag: "Premium",
    inStock: true
  },
  {
    id: "prod_008",
    name: "Sony WF-1000XM5",
    description: "Écouteurs intra-auriculaires compacts dotés de la meilleure réduction de bruit du marché et d'un son Haute Résolution.",
    price: 195000,
    formattedPrice: "195 000",
    category: "Audio",
    image: "/assets/sony_airbuds_image.png",
    inStock: true
  },
  {
    id: "prod_009",
    name: "JBL Charge 5",
    description: "Enceinte Bluetooth ultra-robuste et étanche. Offre un son JBL Original Pro puissant avec 20 heures d'autonomie.",
    price: 125000,
    formattedPrice: "125 000",
    category: "Audio",
    image: "/assets/jbl_soundbox_image.png",
    inStock: true
  },
  {
    id: "prod_010",
    name: "Garmin Venu 3",
    description: "Montre connectée GPS élégante avec suivi avancé de la santé, coaching sportif et écran AMOLED ultra-lumineux.",
    price: 285000,
    formattedPrice: "285 000",
    category: "Wearables",
    image: "/assets/venu_watch_image.png",
    tag: "Santé",
    inStock: true
  }
];