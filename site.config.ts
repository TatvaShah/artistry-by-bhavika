import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Artistry by Bhavika",
  tagline: "Soft glam and bridal makeup and hair.",
  category: "Makeup and hair",
  schemaType: "BeautySalon",
  area: "GTA, ON",
  siteUrl: "https://artistry-by-bhavika-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#847364" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Makeup and hair in the GTA",
    headline: "Soft glam and bridal beauty, made for you",
    subhead: "Professional makeup and hairstyling for soft glam and bridal looks. Bookings for 2026 and 2027 are open. Send a message to check a date.",
    images: [
      { src: "/images/post-1.jpg", alt: "A bridal makeup look by Artistry by Bhavika", width: 1080, height: 1440 },
      { src: "/images/post-6.jpg", alt: "A soft glam look with a maang tikka by Artistry by Bhavika", width: 1080, height: 1440 },
      { src: "/images/post-5.jpg", alt: "A polished hairstyle by Artistry by Bhavika", width: 1080, height: 1445 },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/artistrybybhavika" },
    secondaryCta: { label: "See the portfolio", href: "#gallery" },
  },

  highlights: [
    "Soft glam makeup",
    "Bridal makeup and hairstyling",
    "Bookings open for 2026 and 2027",
    "Book by Instagram DM",
  ],

  about: {
    title: "Welcome to Artistry by Bhavika",
    body: [
      "Artistry by Bhavika is a professional makeup artist offering soft glam and bridal beauty, including makeup and hairstyling.",
      "Looks are soft, polished and finished with a natural glow. Bookings for 2026 and 2027 are open. Send a message on Instagram with your event date to check availability.",
    ],
    image: { src: "/images/post-6.jpg", alt: "A soft glam look with a maang tikka by Artistry by Bhavika", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Makeup and hair",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message to ask about current pricing and to check a date.",
    groups: [
      {
        title: "Makeup",
        items: [
          { name: "Soft glam makeup" },
          { name: "Bridal makeup" },
        ],
      },
      {
        title: "Hair",
        items: [
          { name: "Bridal hairstyling" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "A bridal makeup look by Artistry by Bhavika", caption: "Bridal glam", href: "https://www.instagram.com/p/Dfm5Nv-REvF/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "A soft glam look with a maang tikka by Artistry by Bhavika", caption: "Soft glam", href: "https://www.instagram.com/p/DdKttYstLfe/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1445, alt: "A polished hairstyle by Artistry by Bhavika", caption: "Bridal hair", href: "https://www.instagram.com/p/Derm_LURE1D/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "A soft glam makeup look by Artistry by Bhavika", caption: "Glowing soft glam", href: "https://www.instagram.com/reel/DfZ_Sqax2Jf/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1920, alt: "A finished soft glam look by Artistry by Bhavika", caption: "A flawless finish", href: "https://www.instagram.com/reel/DfOI7uUN2ha/" },
      { src: "/images/post-3.jpg", width: 944, height: 1248, alt: "A soft makeup look by Artistry by Bhavika", caption: "Soft glam makeup", href: "https://www.instagram.com/p/DfTYoW7NbTV/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "artistrybybhavika",
    embeds: ["https://www.instagram.com/p/Dfm5Nv-REvF/", "https://www.instagram.com/p/DdKttYstLfe/", "https://www.instagram.com/p/Derm_LURE1D/"],
  },

  order: {
    label: "How to book",
    title: "Book with a DM",
    intro: "Send a message on Instagram with your event date and whether you need makeup, hair, or both. Bookings for 2026 and 2027 are open.",
    dmMessage: "Hi Artistry by Bhavika! I would like to book.\nEvent date:\nMakeup, hair, or both:\nEvent type (soft glam, bridal or other):",
    headerCtaLabel: "DM to book",
    links: [{ label: "DM to book", href: "https://ig.me/m/artistrybybhavika" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram with your event date and whether you need makeup, hair, or both." },
    { q: "What looks do you offer?", a: "Soft glam makeup, bridal makeup and bridal hairstyling." },
    { q: "Are 2026 and 2027 dates open?", a: "Yes. Bookings for 2026 and 2027 are open." },
  ],

  contact: {
    title: "Contact and booking",
    area: "the GTA, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/artistrybybhavika/" }],
  },

  seo: {
    title: "Artistry by Bhavika | Soft glam and bridal beauty in the GTA",
    description: "Soft glam and bridal makeup and hair in the GTA, including bridal hairstyling. Bookings for 2026 and 2027 are open. Send an Instagram DM to check a date.",
    keywords: ["soft glam GTA", "bridal makeup Brampton", "Artistry by Bhavika"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
