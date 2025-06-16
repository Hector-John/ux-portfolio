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
    title: "Acadix ",
    description:
      "Comprehensive UI/UX design for an online management system focusing on accessibility and engagement",
    image: "/slider1.png",
    caseStudyUrl: "/projects/acadix",
  },
  {
    title: "Step254 ",
    description:
      "Mobile-first e-commerce experience specializing in curated sneaker collections with seamless discovery",
    image: "/slider1.png",
    caseStudyUrl: "/projects/step-254",
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
              className="relative rounded-2xl overflow-hidden h-[500px] "
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

              {/* Animated Background Layer */}
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: hoveredProject === index ? "100%" : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/70 h-full" />
              </motion.div>

              {/* Content Container  */}
              <div className="absolute right-0 bottom-8 w-1/2 flex z-10">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    x: hoveredProject === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="p-8 text-white">
                    <motion.div>
                      <div>
                        <h3 className="font-serif text-4xl font-semibold mb-3">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                    <motion.div>
                      <div>
                        <p className="text-gray-200 mb-6">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div>
                      <div>
                        <Link href={project.caseStudyUrl}>
                          <Button className="px-8 py-5 bg-white text-black hover:bg-gray-100 cursor-pointer">
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
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
