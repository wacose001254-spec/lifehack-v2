import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lifehackacademy.co.ke'),
  title: "Lifehack Academy | International Homeschooling Nairobi",
  description: "TSC Certified tutors providing Cambridge, IB, and Edexcel curricula.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}