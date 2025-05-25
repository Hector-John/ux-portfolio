"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AuroraText } from "@/components/magicui/aurora-text";

const HeroSection = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-white overflow-hidden h-screen">
      {/* Framing lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute left-32 top-0 bottom-0 w-px bg-gray-200/80" />
        <div className="hidden sm:block absolute right-32 top-0 bottom-0 w-px bg-gray-200/80" />
        <div className="absolute top-10 left-0 right-0 h-px bg-gray-200/80" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gray-200/30" />

        <div className=" absolute left-1/2 -translate-x-40 top-0 bottom-0 w-px bg-gray-200/40" />
        <div className=" absolute left-1/2 translate-x-40 top-0 bottom-0 w-px bg-gray-200/40" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10  ">
        {/* Profile Image at top */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mb-8 group"
        >
          <div className="relative lg:mt-20 lg:w-36 lg:h-36 h-32 w-32 sm:w-32 sm:h-32 rounded-full border-5 border-white shadow-xl overflow-hidden bg-gradient-to-tr from-cyan-400 to-purple-500 p-0.5">
            <img
              src="/hero-image.png"
              alt="Hector John"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h2
          className="font-heading text-4xl md:text-6xl sm:text-5xl font-bold mb-6 text-gray-700 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm <AuroraText>Hector</AuroraText>
        </motion.h2>

        {/* Detailed description */}
        <motion.p
          className="text-md lg:text-lg text-gray-500 text-center max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I transform complex problems into intuitive, beautiful digital
          solutions. Specializing in UI/UX design for startups and small
          businesses, I create interfaces that don't just look good, they drive
          engagement, solve real user needs, and deliver measurable results for
          your business.
        </motion.p>

        {/* scroll */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects" className="group">
            <div className="flex flex-col items-center">
              {/* Animated mouse scroll indicator */}
              <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors">
                <motion.div
                  className="w-1 h-2 bg-gray-500 rounded-full mt-2 group-hover:bg-gray-700 transition-colors"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
