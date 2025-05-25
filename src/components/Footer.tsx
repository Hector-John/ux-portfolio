import Link from "next/link";
import { Github, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com/yourprofile",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/yourprofile",
      color: "hover:text-blue-400 dark:hover:text-blue-300",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/yourprofile",
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      href: "https://youtube.com/yourchannel",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Branding */}
          <div className="md:col-span-2 flex flex-col gap-2 max-w-sm">
            <Link href="/" className="text-2xl font-bold transition">
              <AuroraText>Hakheem</AuroraText>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Crafting pixel-perfect interfaces and seamless user journeys.
              Let's collaborate to bring your digital vision to life.
            </p>

            {/* Social links with brand colors */}
            <div className="flex flex-wrap gap-3 mt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Explore
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Contact
              </Link>
              <Link
                href=""
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Resume
              </Link>
              <Link
                href=""
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Legal
            </h3>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Terms
              </Link>
              <Link
                href=""
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} Hakheem Design Portfolio. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
