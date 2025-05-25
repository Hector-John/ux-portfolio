"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PARTNERS = [
  { id: 1, image: "/ablixa.png", name: "Ablixa" },
  { id: 2, image: "/lucky7insurance.png", name: "Lucky 7 Insurance" },
  { id: 3, image: "/dubaiair.png", name: "Dubai Air" },
  { id: 4, image: "/davisandmain.png", name: "Davis & Main" },
  { id: 5, image: "/yonga.png", name: "Blaze na Yonga" },
  { id: 6, image: "/myto.png", name: "Milango ya Tumaini" },
  { id: 7, image: "/iyf.png", name: "International Youth Foundation" },
  { id: 8, image: "/eastside.png", name: "Eastside Street Wear" },
];

interface PartnerCardProps {
  image: string;
  name: string;
}

const PartnerCard = ({ image, name }: PartnerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isHovered) {
      setShowTooltip(true);
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    } else {
      setShowTooltip(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className={cn(
        "relative h-28 w-48 cursor-pointer overflow-hidden p-4",
        "mx-4 lg:mx-8"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={`${name} logo`}
          fill
          className="object-contain grayscale transition-all duration-500 hover:grayscale-0"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 25vw"
        />
      </div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2"
          >
            <div className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              {name}
              <motion.div 
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="relative w-full flex justify-center py-12 px-4">
      <div className="w-[80%] relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} image={partner.image} name={partner.name} />
          ))}
        </Marquee>

        {/* Gradient fade effects - adjusted for larger spacing */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
};

export default Partners;