"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  caseStudyUrl: string;
}

const projects: Project[] = [
  {
    title: "Acadix Education Platform",
    description: "Comprehensive UI/UX redesign for an online learning management system focusing on accessibility and engagement",
    image: "/slider1.png",
    caseStudyUrl: "/projects/acadix",
  },
  {
    title: "Step254 Sneaker Marketplace",
    description: "Mobile-first e-commerce experience specializing in curated sneaker collections with seamless discovery",
    image: "/slider1.png",
    caseStudyUrl: "/projects/step254",
  },
];

const SelectedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative rounded-2xl overflow-hidden h-[500px] cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              {/* Gradient Overlay - Full width but only covers bottom 50% */}
              <motion.div
                initial={{ height: "0%" }}
                animate={{
                  height: hoveredProject === index ? "50%" : "0%",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)"
                }}
              />
              <div className="absolute bottom-0 left-0 right-0">

              {/* Content Container - Slides up from same side as gradient */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: hoveredProject === index ? 1 : 0,
                  y: hoveredProject === index ? 0 : 100
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-full">
                  <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: hoveredProject === index ? 0 : -20 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-medium mb-3">
                      {project.title}
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: hoveredProject === index ? 0 : -20 }}
                    transition={{ delay: 0.25 }}
                  >
                    <p className="text-gray-200 mb-6">
                      {project.description}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href={project.caseStudyUrl}>
                      <Button className="px-6 py-4 bg-white text-black hover:bg-gray-100 cursor-pointer">
                        View Case Study
                      </Button>
                    </Link>
                  </motion.div>
                </div>
                </div>
              </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
