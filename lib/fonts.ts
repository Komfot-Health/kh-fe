import {
 DM_Sans as FontSans,
 DM_Serif_Text as FontSerif
} from "next/font/google";

export const fontSans = FontSans({
 weight: ["400", "500", "600", "700"],
 subsets: ["latin"],
 variable: "--font-sans"
});

export const fontSerif = FontSerif({
 weight: "400",
 subsets: ["latin"],
 variable: "--font-serif"
});
