// components/ThemeController.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Déterminer si on est dans la boutique ou ailleurs
    const isShop = pathname.startsWith("/shop");
    const bgColor = isShop ? "#020617" : "#ffffff";

    // 2. Appliquer la couleur de fond instantanément à la racine
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;

    // 3. BONUS FINTECH : Changer dynamiquement la couleur de la barre de statut (Encoche iOS / Android)
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", bgColor);
    }
  }, [pathname]); // Se déclenche à CHAQUE changement de page, même via le bouton "Retour"

  return null; // Ce composant est invisible
}