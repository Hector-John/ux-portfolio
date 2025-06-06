"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleDownloadCV = () => {
    const cvUrl = "";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Hakheem_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center">
        <div className="flex items-center justify-center rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:bg-slate-900/80">
          <div className="flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full px-4 py-2 text-sm font-medium",
                  pathname === item.href
                    ? "bg-cyan-400/20 text-cyan-600 dark:text-cyan-400"
                    : "text-slate-700 hover:bg-cyan-400/10 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400",
                  "transition-colors duration-200"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Separator
              orientation="vertical"
              className="h-6 bg-cyan-900 dark:bg-cyan-900"
            />

            <button
              onClick={handleDownloadCV}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium",
                "bg-cyan-500 text-white hover:bg-cyan-400",
                "dark:bg-cyan-500 dark:hover:bg-cyan-400",
                "transition-colors duration-200 "
              )}
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed top-3 left-0 right-0 z-50 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex justify-between items-center rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:bg-slate-900/80">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button
              onClick={handleDownloadCV}
              className={cn(
                "cursor-pointer flex gap-1 rounded-full px-3 py-2 text-sm font-medium",
                "bg-cyan-400 text-white hover:bg-cyan-500",
                "dark:bg-cyan-500 dark:hover:bg-cyan-400",
                "transition-colors duration-200"
              )}
            >
              CV <Download size={16} />
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="mt-2 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur-md dark:bg-slate-900/80">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm font-medium",
                        pathname === item.href
                          ? "bg-cyan-400/20 text-cyan-600 dark:text-cyan-400"
                          : "text-slate-700 hover:bg-cyan-400/10 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400",
                        "transition-colors duration-200"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
