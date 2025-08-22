import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "./ui/button";

export const SiteHeader = () => {
 const navMenus = siteConfig.mainNav;

 return (
  <header className="bg-[#eaeaea] backdrop-blur-lg">
   <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <Image src="/icon.svg" width={203} height={38} alt="Komfot" />
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
