import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: siteConfig.privacyPolicy.name,
  description: siteConfig.privacyPolicy.description
 };

 export default function RootLayout({
  children
 }: Readonly<{
  children: ReactNode;
 }>) {
  return (
   <html>
    <body>

     {children}

    </body>
   </html>
  );
 }