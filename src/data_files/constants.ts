import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Sopac",
  tagline: "Pompe à chaleur et climatisation de qualité en Normandie",
  description:
    "Sopac, expert en solutions de pompe à chaleur et climatisation en Normandie, vous propose des produits et services de haute qualité pour assurer votre confort thermique tout au long de l'année. Notre équipe de professionnels dévoués est à votre service pour vous offrir des solutions personnalisées, durables et économes en énergie. Faites confiance à Sopac pour un service irréprochable et des produits innovants, garantissant performance et fiabilité. Contactez notre équipe commerciale pour découvrir notre gamme complète et bénéficier de notre expertise reconnue.",
  description_short:
    "Sopac, expert en pompe à chaleur et climatisation, offre des solutions de qualité en Normandie pour un confort optimal.",
  url: "https://localhost:4321",
  author: "David Levast",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Pompe à chaleur et climatisation`,
  description:
    "Sopac, leader en solutions de pompe à chaleur et climatisation, offre des services d'excellence pour répondre à tous vos besoins en chauffage et refroidissement. Faites confiance à notre expertise et à notre équipe de professionnels dévoués pour garantir un confort optimal et des économies d'énergie. Découvrez notre gamme de produits innovants et bénéficiez de notre accompagnement personnalisé. Sopac, votre partenaire de confiance pour un environnement durable et confortable.",
  image: ogImageSrc,
};
