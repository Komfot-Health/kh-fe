"use client";

import { ConnectToProviderLink } from "@/components/connect-to-provider-link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
   "If you are dealing with lower abdominal pain and smelly discharge after an unsafe abortion procedure, it could be PID.",
  img: "/pid-treatment.svg"
 },
 {
  title: "Contraceptive Services",
  description:
   "Stop the guesswork, our health providers will work with you to find the right kind of contraceptive that works for you with minimal side effects.",
  img: "/contraceptive-services.svg"
 },
 {
  title: "Cervical Cancer Screening & Vaccination",
  description:
   "Prevent cervical cancer by checking for pre-cancerous cells using visual inspection with acetic acid and get vaccinated against strains of HPV that causes oral, throat, anal, cervical, and vaginal cancers"
 },
 {
  title: "Mental Health Care",
  description:
   "For most people, miscarriage care ends with a hospital visit, but speak to trusted therapists who understand all of your emotions and get the care you deserve."
 },
 {
  title: "STI Testing and Treatment",
  description:
   "Dealing with a sexually transmitted infection can feel overwhelming, but try not to let shame or stigma get in the way. It's a health issue, just like any other, and it's much more common than you might think. Focus on getting the right information and the care you need."
 }
];

const postAbortionSteps = [
 {
  label: "Check if you're eligible",
  description:
   "Speak to a provider to know if you qualify for post abortion care.",
  img: "/eligibility.svg"
 },
 {
  label: "Get matched",
  description: "We pair you with a vetted provider who understands your needs",
  img: "/get-matched.svg"
 },
 {
  label: "Receive safe care",
  description: "From treatment to emotional healing",
  img: "/receive-safe-care.svg"
 },
 {
  label: "Stay supported",
  description: "We’re here even after your treatment",
  img: "/stay-supported.svg"
 }
];

const providers = [
 {
  label: "Responsive Care",
  desc:
   "We know timely care is vital for saving lives. We do this by eliminating barriers to seeking care, which saves time.",
  img: "/responsive-care.svg"
 },
 {
  label: "Patient-Centeredness",
  desc:
   "We put you at the heart of everything we do to ensure you feel supported, valued, and understood at every step.",
  img: "/patient-centric.svg"
 },
 {
  label: "Respect",
  desc:
   "We honour your choices, privacy, and dignity, because we want a safe and compassionate space for you to receive care.",
  img: "/protected-choices.svg"
 }
];

const testimonials = [
 {
  name: "Hirra",
  text:
   "When I am well rested, I’ll make a thread on how amazing Komfot Health services have been.",
  avatar: "",
  rating: 5
 },
 {
  name: "Bisi",
  text: "What you are doing is lifesaving, and I am thankful I found you",
  avatar: "",
  rating: 5
 },
 {
  name: "Mary",
  text:
   "Going through my miscarriage was a trying time for me. I am grateful I found Komfot Health on TikTok.",
  avatar: "",
  rating: 5
 },
 {
  name: "Aisha",
  text:
   "If I didn’t find Komfot Health, I didn’t know what would have happened. Even with the smell, I couldn’t go to the hospital because I was known in the community. Thank you for the referral to a provider who treated me with care.",
  avatar: "",
  rating: 5
 }
];

export default function Home() {
 return (
  <div className="min-h-screen bg-white [&_h2]:tracking-[-1.94px]">
   <section
    className="py-20 bg-[url(/hero.png)] w-full bg-center h-[900px] bg-no-repeat"
    id="hero"
   >
    <div className="container max-w-7xl mx-auto px-4 text-center">
     <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6">
      <span className="trust">Trusted by </span>
      <span className="inline">
       <span className="text-main font-medium mx-1">1000+</span>
       Women
      </span>
     </div>

     <div className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight text-center">
      <h1 className="md:max-w-3xl mx-auto -tracking-[-2%]">
       <Balancer>Judgment-Free Post-Abortion & Sexual Health Care</Balancer>
      </h1>
     </div>

     <p className="md:text-lg text-md mb-8 max-w-3xl mx-auto">
      Whether you&apos;re recovering from an abortion or seeking guidance on
      contraception, sexual health and mental wellness, Komfot Health is here to
      support you — without shame, without delay.
     </p>

     <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
       href="https://api.whatsapp.com/send?phone=2348109938925&text=Hi"
       target="_blank"
       rel="noopener noreferrer"
      >
       <Button size="lg" className="md:w-48 w-full">
        Connect to a provider
       </Button>
      </a>
      <Button size="lg" className="md:w-48 w-full" variant="white">
       Learn more
      </Button>
     </div>
    </div>
   </section>

   <section className="bg-main py-20" id="care-that-centers-you">
    <div className="container mx-auto px-4 max-w-7xl">
     <div className="text-center mb-16">
      <h2 className="md:text-6xl text-4xl font-medium mb-4">
       Care That Centers You
      </h2>
      <p className="md:text-lg text-md">
       <Balancer>
        Whether you&apos;re recovering from an abortion or seeking guidance on
        contraception or mental wellness, Komfot Health is here to support you —
        without shame, without delay.
       </Balancer>
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
         <CardFooter className="flex justify-between items-center mt-auto px-0 rounded-full">
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

   <section className="bg-white py-20" id="our-value">
    <div className="container max-w-7xl mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="md:text-6xl text-4xl font-medium mb-4">Our Values</h2>
      <p className="md:text-lg text-md">Centering you in everything we do.</p>
     </div>

     <div>
      <div className="bg-gray-100 rounded-3xl mb-12">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col p-10">
         <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <svg
           width="28"
           height="28"
           viewBox="0 0 28 28"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9972 0.666748C6.41237 1.15499 1.1549 6.41246 0.666656 12.9973H4.64073C5.19455 12.9973 5.64351 13.4463 5.64351 14.0001C5.64351 14.5539 5.19455 15.0029 4.64073 15.0029H0.666656C1.1549 21.5877 6.41237 26.8452 12.9972 27.3334V23.3593C12.9972 22.8055 13.4462 22.3566 14 22.3566C14.5538 22.3566 15.0028 22.8055 15.0028 23.3593V27.3334C21.5876 26.8452 26.8451 21.5877 27.3333 15.0029H23.3592C22.8054 15.0029 22.3565 14.5539 22.3565 14.0001C22.3565 13.4463 22.8054 12.9973 23.3592 12.9973H27.3333C26.8451 6.41246 21.5876 1.15499 15.0028 0.666748V4.64082C15.0028 5.19464 14.5538 5.6436 14 5.6436C13.4462 5.6436 12.9972 5.19464 12.9972 4.64082V0.666748ZM10.3231 14.0001C10.3231 13.4463 10.7721 12.9973 11.3259 12.9973H12.9972V11.326C12.9972 10.7722 13.4462 10.3232 14 10.3232C14.5538 10.3232 15.0028 10.7722 15.0028 11.326V12.9973H16.6741C17.2279 12.9973 17.6768 13.4463 17.6768 14.0001C17.6768 14.5539 17.2279 15.0029 16.6741 15.0029H15.0028V16.6742C15.0028 17.228 14.5538 17.6769 14 17.6769C13.4462 17.6769 12.9972 17.228 12.9972 16.6742V15.0029H11.3259C10.7721 15.0029 10.3231 14.5539 10.3231 14.0001Z"
            fill="#14B8A6"
           />
          </svg>
         </div>
         <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
           Our mission is to make post abortion care, and sexual and
           reproductive services in general, easy to access.
          </p>
         </div>
        </div>
        <Image
         src="/mission.svg"
         alt="women holding hands"
         width={830}
         height={324}
         className="w-full object-cover"
        />
       </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4 items-stretch">
       <div className="bg-gray-100 rounded-3xl mb-12 md:col-span-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="flex flex-col p-10">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
           <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           >
            <path
             fillRule="evenodd"
             clipRule="evenodd"
             d="M12.9972 0.666748C6.41237 1.15499 1.1549 6.41246 0.666656 12.9973H4.64073C5.19455 12.9973 5.64351 13.4463 5.64351 14.0001C5.64351 14.5539 5.19455 15.0029 4.64073 15.0029H0.666656C1.1549 21.5877 6.41237 26.8452 12.9972 27.3334V23.3593C12.9972 22.8055 13.4462 22.3566 14 22.3566C14.5538 22.3566 15.0028 22.8055 15.0028 23.3593V27.3334C21.5876 26.8452 26.8451 21.5877 27.3333 15.0029H23.3592C22.8054 15.0029 22.3565 14.5539 22.3565 14.0001C22.3565 13.4463 22.8054 12.9973 23.3592 12.9973H27.3333C26.8451 6.41246 21.5876 1.15499 15.0028 0.666748V4.64082C15.0028 5.19464 14.5538 5.6436 14 5.6436C13.4462 5.6436 12.9972 5.19464 12.9972 4.64082V0.666748ZM10.3231 14.0001C10.3231 13.4463 10.7721 12.9973 11.3259 12.9973H12.9972V11.326C12.9972 10.7722 13.4462 10.3232 14 10.3232C14.5538 10.3232 15.0028 10.7722 15.0028 11.326V12.9973H16.6741C17.2279 12.9973 17.6768 13.4463 17.6768 14.0001C17.6768 14.5539 17.2279 15.0029 16.6741 15.0029H15.0028V16.6742C15.0028 17.228 14.5538 17.6769 14 17.6769C13.4462 17.6769 12.9972 17.228 12.9972 16.6742V15.0029H11.3259C10.7721 15.0029 10.3231 14.5539 10.3231 14.0001Z"
             fill="#14B8A6"
            />
           </svg>
          </div>
          <div className="">
           <h3 className="text-2xl font-bold mb-4">Patient-centeredness</h3>
           <p className="text-lg leading-relaxed">
            We put you at the heart of everything we do to ensure you feel
            supported, valued, and understood at every step
           </p>
          </div>
         </div>
         <div className="rounded-br-full">
          <Image
           src="/mission.svg"
           alt="patient interacting with a non judgemental provider"
           width={460}
           height={324}
           className="w-full object-cover h-full"
          />
         </div>
        </div>
       </div>
       <div className="bg-gray-100 rounded-3xl mb-12 md:col-span-5">
        <div className="gap-8 items-center">
         <div className="flex flex-col p-10">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
           <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           >
            <path
             d="M8.34662 28.5178H8.00004C6.74296 28.5178 6.11442 28.5178 5.7239 28.1273C5.33337 27.7368 5.33337 27.1083 5.33337 25.8512V24.3686C5.33337 23.6772 5.33337 23.3316 5.51095 23.0229C5.68852 22.7142 5.9564 22.5584 6.49218 22.2468C10.0195 20.1953 15.0288 19.0404 18.3721 21.0345C18.5968 21.1685 18.7988 21.3302 18.9714 21.5242C19.7156 22.36 19.6613 23.6215 18.8037 24.37C18.6226 24.5281 18.4296 24.6479 18.2352 24.6896C18.3949 24.6711 18.548 24.6499 18.6941 24.6265C19.9093 24.4327 20.9294 23.7834 21.8633 23.0779L24.2729 21.2577C25.1223 20.616 26.3831 20.6159 27.2327 21.2574C27.9976 21.8349 28.2315 22.7859 27.7479 23.561C27.184 24.4649 26.3895 25.6213 25.6266 26.3279C24.8626 27.0355 23.7252 27.6672 22.7967 28.1154C21.7681 28.6118 20.6318 28.8979 19.476 29.085C17.1318 29.4645 14.6888 29.4065 12.3685 28.9285C11.0567 28.6583 9.69443 28.5178 8.34662 28.5178Z"
             fill="#14B8A6"
            />
            <path
             d="M14.4816 4.48455C15.1572 3.27268 15.495 2.66675 16 2.66675C16.505 2.66675 16.8427 3.27268 17.5183 4.48455L17.693 4.79807C17.885 5.14245 17.981 5.31463 18.1307 5.42825C18.2803 5.54186 18.4667 5.58403 18.8395 5.66837L19.1789 5.74516C20.4907 6.04198 21.1466 6.19038 21.3027 6.6922C21.4587 7.19402 21.0116 7.71692 20.1172 8.76271L19.8859 9.03327C19.6317 9.33045 19.5047 9.47904 19.4475 9.66286C19.3903 9.84669 19.4095 10.0449 19.448 10.4414L19.4829 10.8024C19.6182 12.1977 19.6858 12.8954 19.2772 13.2055C18.8687 13.5157 18.2545 13.2329 17.0263 12.6674L16.7085 12.5211C16.3595 12.3604 16.1849 12.28 16 12.28C15.815 12.28 15.6405 12.3604 15.2914 12.5211L14.9737 12.6674C13.7454 13.2329 13.1313 13.5157 12.7227 13.2055C12.3142 12.8954 12.3818 12.1977 12.517 10.8024L12.552 10.4414C12.5904 10.0449 12.6096 9.84669 12.5524 9.66286C12.4953 9.47904 12.3682 9.33045 12.114 9.03327L11.8827 8.76271C10.9884 7.71692 10.5412 7.19402 10.6972 6.6922C10.8533 6.19038 11.5092 6.04198 12.821 5.74516L13.1604 5.66837C13.5332 5.58403 13.7196 5.54186 13.8693 5.42825C14.0189 5.31463 14.1149 5.14245 14.3069 4.79807L14.4816 4.48455Z"
             fill="#14B8A6"
            />
            <path
             d="M25.9075 10.2423C26.2452 9.63638 26.4141 9.33341 26.6666 9.33341C26.9191 9.33341 27.088 9.63638 27.4258 10.2423L27.5132 10.3991C27.6092 10.5713 27.6571 10.6574 27.732 10.7142C27.8068 10.771 27.9 10.7921 28.0864 10.8342L28.2561 10.8726C28.912 11.021 29.24 11.0952 29.318 11.3461C29.396 11.5971 29.1724 11.8585 28.7253 12.3814L28.6096 12.5167C28.4825 12.6653 28.419 12.7396 28.3904 12.8315C28.3618 12.9234 28.3714 13.0225 28.3906 13.2208L28.4081 13.4013C28.4757 14.0989 28.5095 14.4477 28.3053 14.6028C28.101 14.7579 27.7939 14.6165 27.1798 14.3337L27.0209 14.2606C26.8464 14.1802 26.7591 14.14 26.6666 14.14C26.5741 14.14 26.4869 14.1802 26.3124 14.2606L26.1535 14.3337C25.5393 14.6165 25.2323 14.7579 25.028 14.6028C24.8237 14.4477 24.8575 14.0989 24.9251 13.4013L24.9426 13.2208C24.9618 13.0225 24.9714 12.9234 24.9429 12.8315C24.9143 12.7396 24.8507 12.6653 24.7237 12.5167L24.608 12.3814C24.1608 11.8585 23.9372 11.5971 24.0153 11.3461C24.0933 11.0952 24.4213 11.021 25.0772 10.8726L25.2469 10.8342C25.4333 10.7921 25.5264 10.771 25.6013 10.7142C25.6761 10.6574 25.7241 10.5713 25.8201 10.3991L25.9075 10.2423Z"
             fill="#14B8A6"
            />
            <path
             d="M4.57414 10.2423C4.91191 9.63638 5.0808 9.33341 5.33329 9.33341C5.58579 9.33341 5.75468 9.63638 6.09245 10.2423L6.17983 10.3991C6.27582 10.5713 6.32381 10.6574 6.39864 10.7142C6.47347 10.771 6.56667 10.7921 6.75306 10.8342L6.92275 10.8726C7.57866 11.021 7.90662 11.0952 7.98465 11.3461C8.06267 11.5971 7.83909 11.8585 7.39193 12.3814L7.27625 12.5167C7.14918 12.6653 7.08564 12.7396 7.05706 12.8315C7.02848 12.9234 7.03809 13.0225 7.0573 13.2208L7.07479 13.4013C7.14239 14.0989 7.17619 14.4477 6.97192 14.6028C6.76765 14.7579 6.46058 14.6165 5.84645 14.3337L5.68756 14.2606C5.51305 14.1802 5.42579 14.14 5.33329 14.14C5.2408 14.14 5.15354 14.1802 4.97902 14.2606L4.82014 14.3337C4.20601 14.6165 3.89894 14.7579 3.69467 14.6028C3.49039 14.4477 3.52419 14.0989 3.5918 13.4013L3.60929 13.2208C3.6285 13.0225 3.63811 12.9234 3.60952 12.8315C3.58094 12.7396 3.51741 12.6653 3.39034 12.5167L3.27465 12.3814C2.82749 11.8585 2.60391 11.5971 2.68194 11.3461C2.75996 11.0952 3.08792 11.021 3.74384 10.8726L3.91353 10.8342C4.09992 10.7921 4.19311 10.771 4.26794 10.7142C4.34277 10.6574 4.39077 10.5713 4.48675 10.3991L4.57414 10.2423Z"
             fill="#14B8A6"
            />
           </svg>
          </div>
          <div>
           <h3 className="text-2xl font-bold mb-4">Respect</h3>
           <p className="text-lg leading-relaxed">
            We honour your choices, privacy, and dignity, because we want a safe
            and compassionate space for you to receive care.
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   <section id="how-we-make-post-abortion-care-accessible" className="py-20">
    <div className="container mx-auto max-w-7xl px-4 space-y-14">
     <h2 className="md:text-6xl text-4xl font-medium">
      <Balancer>How We Make Post Abortion Care Accessible To You</Balancer>
     </h2>
     <div className="grid md:grid-cols-4 gap-8">
      {postAbortionSteps.map((step, i) => (
       <div key={i}>
        <Image
         src={step.img}
         alt={step.label}
         width={32}
         height={32}
         className="w-8 h-8 mb-6"
        />
        <div className="space-y-3">
         <h3 className="text-lg font-medium">{step.label}</h3>
         <p className="text-base font-normal">{step.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
   <section className="bg-white py-20 z-[4] relative" id="we-dont-judge">
    <div className="container max-w-7xl mx-auto px-4">
     <div className="mb-16">
      <h2 className="md:text-6xl text-4xl font-medium mb-4">We Don’t Judge</h2>
      <p className="md:text-lg text-md">
       We pair you with a vetted provider who understands your needs.
      </p>
     </div>

     <div>
      <div className="mb-12">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {providers.map((provider, i) => (
         <div key={i} className="bg-gray-100 rounded-3xl md:h-[450px]">
          <div className="flex flex-col p-10">
           <div className="space-y-1">
            <h3 className="text-2xl font-medium">{provider.label}</h3>
            <p className="text-lg leading-relaxed text-secondary-foreground">
             {provider.desc}
            </p>
           </div>
          </div>
          <Image
           src={provider.img}
           alt="women holding hands"
           width={306}
           height={155}
           className="w-full object-cover mt-auto"
          />
         </div>
        ))}
       </div>
      </div>
     </div>
     <div className="flex justify-center">
      <ConnectToProviderLink>
       <Button size="lg">Get Started</Button>
      </ConnectToProviderLink>
     </div>
    </div>
   </section>

   <section id="testimonial" className="py-20 bg-white z-[2] relative">
    <div className="container max-w-6xl mx-auto px-4">
     <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
       768: { slidesPerView: 2 },
       1024: { slidesPerView: 3 }
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      grabCursor
     >
      {testimonials.map((t, i) => (
       <SwiperSlide key={i}>
        <div className="p-6 h-full flex flex-col justify-between">
         <div className="flex items-center gap-4 mb-4">
          <Avatar>
           <AvatarImage src="" />
           <AvatarFallback>{t.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h4 className="font-semibold text-gray-900">{t.name}</h4>
         </div>
         <p className="text-gray-600 text-base leading-relaxed mb-4">
          {t.text}
         </p>
         <div className="flex gap-1">
          {Array.from({ length: t.rating }).map((_, idx) => (
           <span key={idx} className="text-yellow-500 text-xl">
            ★
           </span>
          ))}
         </div>
        </div>
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </section>
  </div>
 );
}
