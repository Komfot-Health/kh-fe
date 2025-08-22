import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: siteConfig.termsOfService.name,
  description: siteConfig.termsOfService.description
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