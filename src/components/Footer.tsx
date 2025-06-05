"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hakheem67@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/+254769403162",
      color: "hover:text-green-500",
    },
    {
      name: "Call",
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+254769403162",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Connect Text */}
          <h2 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-white">
            Let's work together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            Reach out for collaborations or just to chat about design! ✨
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 mb-10">
            {contactLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-400 transition-all duration-300 p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Hakheem. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;