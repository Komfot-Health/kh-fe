import type { MainNavItem } from "@/types";

export const siteConfig = {
  name: "Komfot Health",
  description: "Judgment-Free Post-Abortion & Sexual Health Care",
  // url: "https://cybershield.com",
 
  mainNav: [
   {
    title: "Home",
    href: "#home"
   },
   {
    title: "Services",
    href: "#services"
   },
   {
    title: "How it works",
    href: "#how-it-works"
   },
   {
    title: "About",
    href: "#about"
   },
  ] satisfies MainNavItem[]
 } as const;