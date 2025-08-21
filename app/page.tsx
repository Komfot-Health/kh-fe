import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const services: { title: string; description: string; img?: string }[] = [
 {
  title: "Post Abortion Care",
  description:
   "Skip the search for a non-judgmental provider, we connect you to vetted health providers who offer evacuation services for an incomplete or missed abortion.",
  img: "/post-abortion.svg"
 },
 {
  title: "PID Treatment",
  description:
   "If you are dealing with lower abdominal pain and smelly discharge after an unsafe abortion procedure, it could be PID. Speak to our providers from the convenience of your home.",
  img: "/pid-treatment.svg"
 },
 {
  title: "Contraceptive Services",
  description:
   "Stop the guesswork, our health providers will work with you to find the right kind of contraceptive that works for you with minimal side effects.",
  img: "/contraceptive-services.svg"
 },
 {
  title: "Cervical Cancer Screening",
  description:
   "Prevent cervical cancer by checking for pre-cancerous cells by visual inspection with acetic acid. Book a screening session from your phone."
 },
 {
  title: "Mental Health Care",
  description:
   "For most people, miscarriage care ends with a hospital visit, but speak to trusted therapists who understand all of your emotions and get the care you deserve."
 },
 {
  title: "HPV Vaccination",
  description:
   "Get vaccinated against strains of HPV that cause oral, throat, anal and cervical cancers. Book a session to begin."
 }
];

export default function Home() {
 const navMenus = siteConfig.mainNav;
 return (
  <div className="min-h-screen bg-white">
   {/* Header */}
   <header className="border-b border-gray-200 bg-white">
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

   <section
    className="py-20 bg-[url(/hero.png)] bg-center h-screen bg-no-repeat"
    id="hero"
   >
    <div className="container mx-auto px-4 text-center">
     <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6">
      <span>Trusted by </span>
      <span className="inline">
       <span className="text-main font-medium mx-1">1000+</span>
       Women
      </span>
     </div>

     <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight text-center">
      <p className="md:max-w-4xl mx-auto">
       <Balancer>Judgment-Free Post-Abortion & Sexual Health Care</Balancer>
      </p>
     </h1>

     <p className="md:text-lg text-md mb-8 max-w-3xl mx-auto">
      Whether you&apos;re recovering from an abortion or seeking guidance on
      contraception or mental wellness, Komfot Health is here to support you —
      without shame, without delay.
     </p>

     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="md:w-48 w-full">
       Connect to a provider
      </Button>
      <Button size="lg" className="md:w-48 w-full" variant="white">
       Learn more
      </Button>
     </div>
    </div>
   </section>

   <section className="bg-main py-20" id="care-that-centers-you">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="md:text-6xl text-4xl font-bold mb-4">
       Care That Centers You
      </h2>
      <p className="md:text-lg text-md max-w-3xl mx-auto">
       <Balancer>
        Whether you&apos;re recovering from an abortion or seeking guidance on
        contraception or mental wellness, Komfot Health is here to support you —
        without shame, without delay.
       </Balancer>
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {services.map((svc) => (
       <Card
        key={svc.title}
        className={cn("bg-white border-none pt-6", svc.img && "pb-0")}
       >
        <CardHeader>
         <CardTitle className="text-black text-xl text-md">
          {svc.title}
         </CardTitle>
        </CardHeader>
        <CardContent>
         <CardDescription className="text-secondary-foreground text-base">
          {svc.description}
         </CardDescription>
        </CardContent>
        {svc.img && (
         <CardFooter className="flex justify-between items-center mt-auto px-0">
          <Image
           src={svc.img}
           alt={svc.title}
           width={100}
           height={50}
           className="w-full h-[200px] object-cover"
          />
         </CardFooter>
        )}
       </Card>
      ))}
     </div>
    </div>
   </section>

   <section className="bg-white py-20">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="md:text-6xl text-4xl font-bold mb-4">Our Value</h2>
      <p className="md:text-lg text-md">
       Putting the patient at the heart of everything we do ensures they
      </p>
     </div>

     {/* Large Mission Section */}
     <div className="bg-gray-100 rounded-lg p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
       <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center flex-shrink-0">
         <span className="text-white font-bold text-lg">+</span>
        </div>
        <div>
         <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
         <p className="text-gray-700 text-lg leading-relaxed">
          Skip the search for a non-judgmental provider, we connect you to
          vetted health providers who offer evacuation services for an
          incomplete or missed abortion.
         </p>
        </div>
       </div>
       <div className="flex justify-center">
        <div className="w-80 h-80 bg-gradient-to-br from-purple-200 to-teal-200 rounded-full flex items-center justify-center">
         {/* Placeholder for the women circle illustration */}
         <span className="text-gray-500 text-sm">Women Support Circle</span>
        </div>
       </div>
      </div>
     </div>

     {/* Two Smaller Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg border-0">
       <CardHeader>
        <div className="flex items-center space-x-3">
         <div className="w-10 h-10 bg-main rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">👤</span>
         </div>
         <CardTitle className="text-xl font-bold text-gray-900">
          Patient-centeredness
         </CardTitle>
        </div>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-700 text-base">
         Putting the patient at the heart of everything we do ensures they feel
         supported, valued, and understood at every step.
        </CardDescription>
        <div className="mt-6 flex justify-end">
         <div className="w-24 h-16 bg-gradient-to-r from-yellow-200 to-green-200 rounded-lg flex items-center justify-center">
          {/* Placeholder for the women at desk illustration */}
          <span className="text-gray-500 text-xs">Desk Scene</span>
         </div>
        </div>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-0">
       <CardHeader>
        <div className="flex items-center space-x-3">
         <div className="w-10 h-10 bg-main rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">❤️</span>
         </div>
         <CardTitle className="text-xl font-bold text-gray-900">
          Respect
         </CardTitle>
        </div>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-700 text-base">
         Respect is fundamental to our approach, as we honour each person&apos;s
         choices, privacy, and dignity, creating a safe and compassionate space
         for all.
        </CardDescription>
       </CardContent>
      </Card>
     </div>
    </div>
   </section>

   <footer className="bg-[#1A6B6B] text-white py-20">
    <div className="container mx-auto px-4">
     <div className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-6">
       Get the latest healthcare tips & updates
      </h2>
      <p className="text-xl text-gray-300 mb-12">
       The scheduling platform that transforms how professionals manage
       appointments and grow their business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
       <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
         placeholder="Enter your email address"
         className="pl-10 bg-[#2A7A7A] border-none text-white placeholder:text-gray-300"
        />
       </div>
       <Button className="bg-black hover:bg-gray-800 text-white px-8">
        Subscribe
       </Button>
      </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
       <h3 className="text-xl font-bold mb-4">Komfot Health</h3>
       <p className="text-gray-300 text-sm">
        The scheduling platform that transforms how professionals manage
        appointments and grow their business.
       </p>
      </div>

      <div>
       <h4 className="font-semibold mb-4">Company</h4>
       <ul className="space-y-2 text-gray-300">
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

      <div>
       <h4 className="font-semibold mb-4">Legal</h4>
       <ul className="space-y-2 text-gray-300">
        <li>
         <a href="#" className="hover:text-white">
          Terms
         </a>
        </li>
        <li>
         <a href="#" className="hover:text-white">
          Privacy & Cookies
         </a>
        </li>
       </ul>
      </div>

      <div>
       <div className="mb-4">
        <p className="text-gray-300">info@komfothealth.com</p>
        <p className="text-gray-300">San Francisco, CA</p>
       </div>
       <div className="flex space-x-4">
        <a
         href="#"
         className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
        >
         <Instagram className="w-5 h-5" />
        </a>
        <a
         href="#"
         className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
        >
         <Facebook className="w-5 h-5" />
        </a>
        <a
         href="#"
         className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
        >
         <Twitter className="w-5 h-5" />
        </a>
        <a
         href="#"
         className="w-10 h-10 bg-[#2A7A7A] rounded-full flex items-center justify-center hover:bg-[#1A6B6B]"
        >
         <Linkedin className="w-5 h-5" />
        </a>
       </div>
      </div>
     </div>

     <div className="border-t border-[#2A7A7A] mt-16 pt-8">
      <p className="text-gray-300 text-sm">© 2025 Barecal</p>
     </div>
    </div>
   </footer>
  </div>
 );
}
