import type { MainNavItem } from "@/types";

export const siteConfig = {
 name: "Komfot Health",
 description: "Judgment-Free Post-Abortion & Sexual Health Care",
 url: "https://komfothealth.com",
 privacyPolicy:{
  name:'Komfot Health | Privacy Policy',
  description:''
 },

 mainNav: [
  {
   title: "Home",
   href: "/"
  },
  {
   title: "What we do",
   href: "#care-that-centers-you"
  },
  {
   title: "How it works",
   href: "#how-we-make-post-abortion-care-accessible"
  },
  {
   title: "About",
   href: "#our-value"
  }
 ] satisfies MainNavItem[],
 socials: {
  twitter: "https://x.com/komfothealth?s=21",
  instagram:
   "https://www.instagram.com/komfothealth?igsh=cmp6ZGNxdmtlOXNz&utm_source=qr",
  tiktok: "https://www.tiktok.com/@komfothealth?_t=ZS-8z5Sgh1sYjJ&_r=1",
  linkedin:'https://www.linkedin.com/company/komfothealth/'
 }
} as const;
