import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Home() {
 return (
  <div className="min-h-screen bg-white">
   {/* Header */}
   <header className="border-b border-gray-200 bg-white">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
     <div className="text-2xl font-bold text-gray-900">Komfot Health</div>
     <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-700 hover:text-gray-900">
       Home
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
       Services
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
       How it works
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
       About
      </a>
     </nav>
     <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white">
      Get Started
     </Button>
    </div>
   </header>

   {/* Hero Section */}
   <section className="bg-white py-20">
    <div className="container mx-auto px-4 text-center">
     <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-6">
      <span>Trusted by </span>
      <span className="text-[#2ECC71] font-semibold ml-1">1000+ Women</span>
     </div>

     <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
      Judgment-Free Post-Abortion & Sexual Health Care
     </h1>

     <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
      Whether you&apos;re recovering from an abortion or seeking guidance on
      contraception or mental wellness, Komfot Health is here to support you —
      without shame, without delay.
     </p>

     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-8 py-3 text-lg">
       Connect to a provider
      </Button>
      <Button
       variant="outline"
       className="border-gray-300 text-gray-700 px-8 py-3 text-lg"
      >
       Learn more
      </Button>
     </div>
    </div>
   </section>

   {/* Services Section */}
   <section className="bg-[#26A69A] py-20">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">
       Care That Centers You
      </h2>
      <p className="text-xl text-white/90 max-w-3xl mx-auto">
       Whether you&apos;re recovering from an abortion or seeking guidance on
       contraception or mental wellness, Komfot Health is here to support you —
       without shame, without delay.
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">Post Abortion Care</CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         Skip the search for a non-judgmental provider, we connect you to vetted
         health providers who offer evacuation services for an incomplete or
         missed abortion.
        </CardDescription>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">PID Treatment</CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         If you are dealing with lower abdominal pain and smelly discharge after
         an unsafe abortion procedure, it could be PID. Speak to our providers
         from the convenience of your home.
        </CardDescription>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">Contraceptive Services</CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         Stop the guesswork, our health providers will work with you to find the
         right kind of contraceptive that works for you with minimal side
         effects.
        </CardDescription>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">
         Cervical Cancer Screening
        </CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         Prevent cervical cancer by checking for pre-cancerous cells by visual
         inspection with acetic acid. Book a screening session from your phone.
        </CardDescription>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">Mental Health Care</CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         For most people, miscarriage care ends with a hospital visit, but speak
         to trusted therapists who understand all of your emotions and get the
         care you deserve.
        </CardDescription>
       </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
       <CardHeader>
        <CardTitle className="text-gray-900">HPV Vaccination</CardTitle>
       </CardHeader>
       <CardContent>
        <CardDescription className="text-gray-600">
         Get vaccinated against strains of HPV that cause oral, throat, anal and
         cervical cancers. Book a session to begin.
        </CardDescription>
       </CardContent>
      </Card>
     </div>
    </div>
   </section>

   {/* Values Section */}
   <section className="bg-white py-20">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Value</h2>
      <p className="text-xl text-gray-600">
       Putting the patient at the heart of everything we do ensures they
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center">
       <div className="w-12 h-12 bg-[#26A69A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold">1</span>
       </div>
       <h3 className="text-xl font-bold text-gray-900 mb-2">
        Check if you&apos;re eligible
       </h3>
       <p className="text-gray-600">
        Speak to a provider to know if you qualify for post abortion care.
       </p>
      </div>

      <div className="text-center">
       <div className="w-12 h-12 bg-[#26A69A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold">2</span>
       </div>
       <h3 className="text-xl font-bold text-gray-900 mb-2">Get matched</h3>
       <p className="text-gray-600">
        We pair you with a vetted provider who understands your needs
       </p>
      </div>

      <div className="text-center">
       <div className="w-12 h-12 bg-[#26A69A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold">3</span>
       </div>
       <h3 className="text-xl font-bold text-gray-900 mb-2">
        Receive safe care
       </h3>
       <p className="text-gray-600">From treatment to emotional healing</p>
      </div>

      <div className="text-center">
       <div className="w-12 h-12 bg-[#26A69A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold">4</span>
       </div>
       <h3 className="text-xl font-bold text-gray-900 mb-2">Stay supported</h3>
       <p className="text-gray-600">
        We&apos;re here even after your treatment
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* Footer */}
   <footer className="bg-[#1A6B6B] text-white py-20">
    <div className="container mx-auto px-4">
     {/* Newsletter Section */}
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

     {/* Footer Links */}
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
