import Image from "next/image";
import { Button } from "./ui/button";
import Balancer from "react-wrap-balancer";
import { Mail } from "lucide-react";
import { Input } from "./ui/input";

export const SiteFooter = () => {
 return (
  <footer className="bg-teal-700 text-white py-20">
   <div className="relative">
    {/* <Image
     alt=""
     width={100}
     height={100}
     className="w-full absolute top-[-200px] left-[10px] z-[1] hidden lg:block blur-[600]"
     draggable={false}
     src="/eclipse.svg"
    /> */}
   </div>
   <div className="container max-w-7xl mx-auto px-4 z-[2] relative">
    <div className="text-center mb-20">
     <h2 className="md:text-7xl text-5xl font-medium mb-6">
      <Balancer>Get the latest healthcare tips & updates</Balancer>
     </h2>
     <p className="text-lg mb-12">
      <Balancer>
       The scheduling platform that transforms how professionals manage
       appointments and grow their business
      </Balancer>
      .
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
       The scheduling platform that transforms how professionals manage
       appointments and grow their business.
      </p>
     </div>

     <div className="space-y-4">
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
         How it work
        </a>
       </li>
      </ul>
     </div>

     <div className="space-y-4">
      <h4 className="font-semibold space-y-4">Legal</h4>
      <ul className="space-y-4">
       <li>
        <a href="#" className="hover:text-white">
         Terms
        </a>
       </li>
       <li>
        <a href="/privacy" className="hover:text-white">
         Privacy & Cookies
        </a>
       </li>
      </ul>
     </div>

     <div>
      <div className="mb-4">
       <p>info@komfothealth.com</p>
       <p>San Francisco, CA</p>
      </div>
      <div className="flex space-x-4">
       <a
        href="#"
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Image src="/icons/instagram.svg" height={40} width={40} alt="" />
       </a>
       <a
        href="#"
        className="flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Image
         src="/icons/facebook.svg"
         height={40}
         width={40}
         alt="facebook"
        />
       </a>
       <a
        href="#"
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Image src="/icons/twitter.svg" height={40} width={40} alt="twitter" />
       </a>
       <a
        href="#"
        className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
       >
        <Image
         src="/icons/linkedin.svg"
         height={40}
         width={40}
         alt="linkedin"
        />
       </a>
      </div>
     </div>
    </div>

    <div className="border-t border-[#2A7A7A] mt-16 pt-8">
     <p className="text-sm">© 2025 Barecal</p>
    </div>
   </div>
  </footer>
 );
};
