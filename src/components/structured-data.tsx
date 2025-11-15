const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.lamhaagroup.com/#restaurant",
  name: "Lamhaa",
  url: "https://www.lamhaagroup.com",
  logo: "https://www.lamhaagroup.com/logo_black.png",
  image: "https://www.lamhaagroup.com/LandingPage.png",
  description:
    "Lamhaa elevates contemporary Indian fine dining with private tasting menus, curated catering, and elegant venues across New Jersey and Pennsylvania.",
  servesCuisine: ["Indian", "Modern Indian", "Fine Dining"],
  priceRange: "$$$",
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "Pennsylvania" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bensalem",
    addressRegion: "PA",
    postalCode: "19020",
    addressCountry: "US",
  },
  hasMenu: "https://www.lamhaagroup.com/#menu",
};

const StructuredData = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
);

export default StructuredData;
