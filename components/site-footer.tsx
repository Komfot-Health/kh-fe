"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Balancer from "react-wrap-balancer";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
 //  const pathname = usePathname();
 //  const isHomePage = pathname === "/";
 const socials = siteConfig.socials;

 return (
  <footer className="bg-teal-700 text-white py-20">
   {/* {isHomePage && (
    <div className="relative h-0">
     <Image
      alt=""
      width={100}
      height={100}
      className="w-full absolute top-[-280px] left-[10px] z-[1] hidden lg:block blur-[600]"
      draggable={false}
      src="/eclipse.svg"
     />
    </div>
   )} */}
   <div className="container max-w-7xl mx-auto px-4 z-[2] relative">
    <div className="text-center mb-20">
     <h2 className="md:text-7xl text-5xl font-medium mb-6">
      <Balancer>Get the latest healthcare tips & updates</Balancer>
     </h2>
     <p className="text-lg mb-12">
      <Balancer>Get informed about post-abortion care.</Balancer>.
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto h-16">
      <div className="relative flex-1">
       <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
       <Input
        placeholder="Enter your email address"
        className="pl-10 h-16 bg-teal-800 border-none text-white placeholder:text-gray-300 rounded-2xl"
       />
      </div>
      <Button className="bg-black hover:bg-gray-800 text-white px-8 h-full rounded-2xl">
       Subscribe
      </Button>
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     <div>
      <Image
       src="/icon-light.svg"
       width={203}
       height={20}
       alt="Komfot Health"
      />
      <p className="text-sm">
       Judgment-Free Post-Abortion & Sexual Health Care
      </p>
     </div>

     <div className="space-y-4 text-sm">
      <h4 className="font-semibold space-y-4">Company</h4>
      <ul className="space-y-4">
       <li>
        <a href="#" className="hover:text-white">
         Home
        </a>
       </li>
       <li>
        <a href="#" className="hover:text-white">
         About
        </a>
       </li>
       <li>
        <a href="#" className="hover:text-white">
         How it works
        </a>
       </li>
      </ul>
     </div>

     <div className="space-y-4 text-sm">
      <h4 className="font-semibold space-y-4">Legal</h4>
      <ul className="space-y-4">
       <li>
        <a href="/terms-of-service" className="hover:text-white">
         Terms
        </a>
       </li>
       <li>
        <a href="/privacy-policy" className="hover:text-white">
         Privacy & Cookies
        </a>
       </li>
      </ul>
     </div>

     <div>
      <div className="mb-4 text-sm space-y-3">
       <p>info@komfothealth.com</p>
       <address className="not-italic">San Francisco, CA</address>
      </div>
      <div className="flex space-x-4 space-y-3">
       <a
        href={socials.instagram}
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Instagram className="size-4" />
       </a>
       <a
        href={socials.tiktok}
        className="flex items-center justify-center hover:bg-[#1A6B6B] bg-[#2A7A7A] w-10 h-10 rounded-full"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="currentColor"
         viewBox="0 0 16 16"
        >
         <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
        </svg>
       </a>
       <a
        href={socials.twitter}
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Twitter className="size-4" />
       </a>
       <a
        href={socials.linkedin}
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Linkedin className="size-4" />
       </a>
      </div>
     </div>
    </div>

    <div className="mt-16 pt-8">
     <p className="text-sm">&copy; 2025 Komfot Health</p>
    </div>
   </div>
  </footer>
 );
};
