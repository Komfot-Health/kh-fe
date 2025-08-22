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
   },
  ] satisfies MainNavItem[]
 } as const;