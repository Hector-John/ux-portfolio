"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Redesign",
    description: "Revamped user experience for a fashion retailer resulting in 35% increased conversions",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "/slider1.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Step254",
    description: "Mobile marketplace app specializing in curated second-hand footwear collections",
    tags: ["Mobile Design", "User Testing", "E-commerce"],
    image: "/slider1.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "School Management Dashboard",
    description: "Streamlined administrative interface for educators with real-time student analytics",
    tags: ["Responsive Design", "Data Visualization", "B2B"],
    image: "/slider1.png",
    liveUrl: "#",
    codeUrl: "#",
  },
];

const SelectedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header section remains unchanged */}
        <h1 className="text-center text-4xl">My Selected Work</h1>
        <p className="text-center text-muted-foreground">Some p text</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container - Now fully visible by default */}
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlay - Appears on hover from bottom to top */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === index ? "100%" : "0%",
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Title and Tags - Slide up on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 p-6 w-full"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 100,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, i: number) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <Link href={project.codeUrl} className="block">
                  <Button className="w-full px-4 py-3 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 text-white font-medium flex items-center justify-center cursor-pointer">
                    <MdOutlineDesignServices className="mr-2" />
                    View Case Study
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button - No animations as requested */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <Button className=" px-8 py-6 bg-gray-900 text-white font-medium cursor-pointer ">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;