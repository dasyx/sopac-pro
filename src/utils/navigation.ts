const navBarLinks = [
  { name: "Accueil", url: "/" },
  /* { name: "Services", url: "/services" }, */
  { name: "Contact", url: "/contact" },
];

// An array of links for footer
const footerLinks = [
  /* {
    section: "Ecosystème",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Outils & Équipements", url: "/products" },
      { name: "Services de Construction", url: "/services" },
      { name: "Guides d'Installation", url: "/installation-guides" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    section: "Entreprise",
    links: [
      { name: "À propos de nous", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Carrières", url: "/careers" },
      { name: "Témoignages", url: "/testimonials" },
      { name: "Nos Partenaires", url: "/partners" },
    ],
  }, */
  {
    section: "Support",
    links: [
      { name: "Contactez-nous", url: "/contact" },
      { name: "Support Technique", url: "/technical-support" },
      { name: "Service Après-Vente", url: "/after-sales-service" },
      { name: "Garanties", url: "/warranties" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/yourworkspace", // Add slack link here
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
