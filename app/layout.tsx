import type { Metadata } from "next";
import "./globals.css";
import { fontSans, fontSerif } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
  <html lang="en">
   <body className={`${fontSans.className} ${fontSerif.variable} antialiased`}>
    <SiteHeader />
    {children}
    <SiteFooter />
   </body>
  </html>
 );
}
