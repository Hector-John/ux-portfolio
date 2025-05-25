import type { Metadata } from "next";
import { Poppins, Poetsen_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Poppins (main font)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// Poetsen One ()
const poetsenOne = Poetsen_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
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
      className={`${poppins.variable} ${poetsenOne.variable}`}
    >
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
