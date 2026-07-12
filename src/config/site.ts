import { MapPin, Phone, Mail } from "@lucide/astro";

export const routes = {
	home: "/",
	services: {
		index: "/#services",
		gasRefill: "/#services",
		laundry: "/#services",
		fixRepair: "/#services",
	},
	about: "/about",
	howItWorks: "/#how-it-works",
	contact: "/contact",
	careers: "/careers",
	legal: {
		terms: "/legal/terms",
		privacy: "/legal/privacy-policy",
	},
	faq: "/#faqs",
	"911": "/911",
} as const;

const mainNav = [
	{ name: "Home", href: routes.home },
	{ name: "Services", href: routes.services.index },
	{ name: "How It Works", href: routes.howItWorks },
	{ name: "About Us", href: routes.about },
	{ name: "Contact", href: routes.contact },
	{ name: "911", href: routes["911"] },
];

const serviceRoutes = [
	{ name: "Gas Refill", href: routes.services.gasRefill },
	{ name: "Laundry", href: routes.services.laundry },
	{ name: "911", href: routes["911"] },
	// { name: "Fix & Repair", href: routes.services.fixRepair }
];

export const siteConfig = {
	name: "THAZLO",
	description:
		"An all-in-one app for everyday home services. Order cooking gas, schedule laundry pickups, and book reliable maintenance workers easily.",
	url: "https://hazlo.it.com",

	appLink: {
		apple: "https://apps.apple.com/us/app/thazlo-laundry-gas/id6754158149",
		google: "https://play.google.com/store/apps/details?id=com.hazlo.thazlo",
	},

	// Contact Details
	contact: {
		location: {
			icon: MapPin,
			label: "Address",
			value: "Lagos, Nigeria",
			link: "https://www.google.com/maps/search/Royal+View+Estate+Lagos,+Nigeria/@6.45189,3.5515181,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
		},
		phone: {
			icon: Phone,
			label: "Phone Number",
			value: "+234 704 534 7814",
		},
		emails: [
			{ icon: Mail, label: "Email Address", value: "hazlongg@gmail.com" },
		],
	},

	// Socials
	socials: {
		facebook: "#", // TODO: add social links
		instagram: "https://www.instagram.com/t.hazlo?igsh=MXZnb2ZyN2NoZXp0bA==",
		whatsapp: "https://wa.me/2347045347814",
		x: "https://x.com/thazlong?s=11",
		youtube: "https://www.youtube.com/@ThazloInnovationLimited",
		linkedin: "#",
	},

	// Navigations
	mainNav,
	footerNav: [
		{
			title: "Company",
			links: [{ name: "About Us", href: routes.about }],
		},
		{
			title: "Services",
			links: serviceRoutes,
		},
		{
			title: "Support",
			links: [
				{ name: "FAQs", href: routes.faq },
				{ name: "Contact Us", href: routes.contact },
				{ name: "Privacy Policy", href: routes.legal.privacy },
			],
		},
	],
};

export type SiteConfig = typeof siteConfig;
