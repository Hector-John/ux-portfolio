"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-gray-50">
      {/* step 254 */}
      <section className="min-h-[100vh] bg-orange-200 flex">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[100vh]">
          <div className="relative h-full w-full overflow-hidden md:order-first">
            <img
              src="/slider1.png"
              alt="Sneaker E-Commerce App"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="flex flex-col justify-center space-y-6 px-12 py-16 md:order-last">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Step 254
                  </h2>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-lg text-gray-600 pr-4">
                    A mobile-first sneaker shopping app featuring streamlined
                    product discovery, personalized recommendations, and 24-hour
                    delivery. The platform offers a curated selection with size
                    matching tools and social sharing integration for sneaker
                    enthusiasts.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      E-Commerce
                    </span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      Mobile App
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button asChild className="w-fit mt-6 py-6 px-8">
                    <Link href="/projects/step-254">Explore Case Study</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="min-h-[100vh] bg-[#FFDC5E] flex">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[100vh]">
          <div className="flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="flex flex-col justify-center space-y-6 px-12 py-16">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Adventure Travel Portal
                  </h2>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-lg text-gray-600 pr-4">
                    An immersive travel platform featuring interactive
                    destination explorers, AI-powered personalized itineraries,
                    and a unique adventure score algorithm. The app combines
                    real-time availability with authentic user-generated content
                    to create a seamless trip planning experience.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      App Design
                    </span>
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      UX
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button asChild className="w-fit mt-6 py-6 px-16">
                    <Link href="/projects/travel-website">View Project</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="/slider1.png"
              alt="Adventure Travel Portal"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ngo website */}
      <section className="min-h-[100vh] bg-[#7CE577] flex">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[100vh]">
          <div className="relative h-full w-full overflow-hidden md:order-first">
            <img
              src="/slider1.png"
              alt="NGO Website Redesign"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="flex flex-col justify-center space-y-6 px-12 py-16 md:order-last">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    N.G.O Website Redesign
                  </h2>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-lg text-gray-600 pr-4">
                    Full digital overhaul for a non-profit, centered on
                    storytelling and donor engagement. Donation conversions rose
                    by 20%, volunteer sign-ups by 67%. Introduced impact
                    visualizations, and a flexible design system enabling
                    consistent yet regionally adaptable branding.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      Figma
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      React
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      HTML
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button asChild className="w-fit mt-6 py-6 px-16">
                    <Link href="/projects/ngo-redesign">View Project </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* school analytics dashboard */}
      <section className="min-h-[100vh] bg-blue-100 flex">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[100vh]">
          <div className="flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="flex flex-col justify-center  space-y-6 px-12 py-16">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Acadix
                  </h2>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-lg text-gray-600 pr-4">
                    Institution Management dashboard to track performance,
                    attendance, and operations. Includes real-time alerts,
                    predictive insights, and customizable reports.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      Figma
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button asChild className="w-fit mt-6 py-6 px-16">
                    <Link href="/projects/health-dashboard">View Project</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-full w-full overflow-hidden">
            <img
              src="/slider1.png"
              alt="Healthcare Analytics Dashboard"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
