import { MapPin, Phone, Mail } from "@lucide/astro"

export const routes = {
  home: "/",
  services: { index: "/#services", gasRefill: "/#services", laundry: "/#services", fixRepair: "/#services" },
  about: "/about",
  contact: "/contact",
  careers: "/careers",
  terms: "/terms",
  privacy: "/privacy",
  faq: "/#faqs"
} as const;

const mainNav = [
  { name: "Home", href: routes.home },
  { name: "Services", href: routes.services.index },
  { name: "About us", href: routes.about },
  { name: "FAQs", href: routes.faq },
  // { name: "Get in Touch", href: routes.contact },
  // { name: "Careers", href: routes.careers }
];

const serviceRoutes = [
{ name: "Gas Refill", href: routes.services.gasRefill },
{ name: "Laundry", href: routes.services.laundry },
{ name: "Fix & Repair", href: routes.services.fixRepair }
]

export const siteConfig = {
  name: "THAZLO",

  description:
    "An all-in-one app for everyday home services. Order cooking gas, schedule laundry pickups, and book reliable maintenance workers easily.",

  url: "https://thazlo.com.ng", // TODO: update to the actual site domain

  contact: {
    location: { icon: MapPin, label: "Address", value: "Royal View Estate Lagos, Nigeria" },
    phone: { icon: Phone, label: "Phone Number", value: "+234 453 47814" },
    emails: [
      { icon: Mail, label: "Email Address", value: "hazlongg@gmail.com" },
    ],
  },

  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },

  mainNav,

  footerNav: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: routes.about },
        { name: "Contact Us", href: routes.contact },
      ],
    },
    {
      title: "Services",
      links: serviceRoutes
    },
    {
      title: "Resources",
      links: [
        { name: "FAQs", href: routes.faq },
      ],
    },

    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Terms of Service", href: routes.terms },
    //     { name: "Privacy Policy", href: routes.privacy },
    //   ],
    // },

  ],
};

export type SiteConfig = typeof siteConfig;
