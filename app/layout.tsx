import "./globals.css";
import type { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Dwaith InfoTech | Digital Transformation Partner",
  description: "Dwaith InfoTech – Software, Cloud & Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
