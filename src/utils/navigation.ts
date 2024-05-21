const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Réalisations", url: "/products" },
  { name: "Contact", url: "/contact" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
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
