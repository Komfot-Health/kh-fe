import type { Metadata } from "next";
import "./globals.css";
import { fontSans, fontSerif } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script";

export const metadata: Metadata = {
 title: siteConfig.name,
 description: siteConfig.description
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className="scroll-smooth">
   <body className={`${fontSans.className} ${fontSerif.variable} antialiased`}>
    <SiteHeader />
    {children}
    <SiteFooter />

    <Script
     async
     src="https://www.googletagmanager.com/gtag/js?id=G-SENQWBX6LW"
     strategy="afterInteractive"
    ></Script>
    <Script strategy="afterInteractive" id="gtm-script">
     {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SENQWBX6LW');`}
    </Script>
   </body>
  </html>
 );
}
