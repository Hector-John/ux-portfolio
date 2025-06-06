import type { Metadata } from "next";
import { Montserrat, Poetsen_One, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Montserrat 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// Poetsen One 
const poetsenOne = Poetsen_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

// Merriweather 
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Hakheem | UX Portfolio",
  description:
    "Innovative user experiences crafted with precision. Explore my UX design portfolio featuring cutting-edge interfaces and human-centered solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${poetsenOne.variable} ${merriweather.variable}`}
    >
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
