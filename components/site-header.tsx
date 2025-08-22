"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "./ui/button";
import { useStickyHeader } from "@/hook/use-sticky-header";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
 const navMenus = siteConfig.mainNav;
 const isSticky = useStickyHeader(0.2);

 return (
  <header
   className={cn(
    "bg-[#eaeaea] backdrop-blur-lg",
    isSticky &&
     "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-colors duration-300 w-[90%] md:w-[50%] rounded-full bg-black/60 shadow-lg [&_a]:text-white backdrop-blur-sm"
   )}
  >
   <div className="container mx-auto max-w-7xl px-4 py-2 md:py-4 flex items-center justify-between">
    <Image
     src={isSticky ? "/icon-light.svg" : "/icon.svg"}
     width={isSticky ? 180 : 203}
     height={38}
     alt="Komfot"
    />
    <nav className="hidden md:flex items-center space-x-8">
     {navMenus.map((menu) => (
      <a
       href={menu.href}
       key={menu.title}
       className="text-primary-foreground hover:text-gray-900 text-base"
      >
       {menu.title}
      </a>
     ))}
    </nav>
    <Button size="lg">Get Started</Button>
   </div>
  </header>
 );
};
