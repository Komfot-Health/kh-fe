import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";

export default function Privacy() {
 return (
  <div className="z-[4] relative">
   <section className="py-20 w-full bg-center h-screen bg-no-repeat" id="hero">
    <div className="container max-w-7xl mx-auto px-4 text-center">
     <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6">
      <span>Trusted by </span>
      <span className="inline">
       <span className="text-main font-medium mx-1">1000+</span>
       Women
      </span>
     </div>

     <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight text-center">
      <h1 className="md:max-w-4xl mx-auto">
       <Balancer>Privacy and Policy</Balancer>
      </h1>
     </h1>

     <p className="md:text-lg text-md mb-8 max-w-3xl mx-auto">
      Whether you're recovering from an abortion or seeking guidance on
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
   <section id="privacy" className="z-[4] relative min-h-screen">
    <div className="container max-w-7xl mx-auto px-4">
     <h2>1. Term and Termination</h2>
     This Terms of Service Agreement (“Agreement”) governs your use of all
     services provided by Komfot Digital Health Limited (“Komfot Health,” “we,”
     “us,” or “our”), including but not limited to our website
     (www.komfothealth.com), mobile and web-based applications, and any
     associated tools, content, communication features, counseling services,
     scheduling interfaces, documentation, software, and other technologies
     offered via these platforms (collectively, the “Services”). By accessing or
     using our Services, you agree to be legally bound by this Agreement, our
     Privacy Policy, and any additional guidelines, rules, or terms that may
     apply to specific offerings made available through our Services. If you do
     not agree to this Agreement, please do not use the Services. Disclaimer:
     The Komfot Health Services are not intended for emergency situations or
     life-threatening health conditions. If you believe you are experiencing an
     emergency, call your local emergency number or go to the nearest hospital
     immediately.
    </div>
   </section>
  </div>
 );
}
