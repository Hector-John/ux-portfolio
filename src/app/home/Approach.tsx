"use client";

import { motion } from "framer-motion";

const approachContent = [
  {
    title: "Discover",
    description:
      "I begin by understanding user needs through research, interviews, and market analysis to identify pain points and opportunities.",
    color: "bg-yellow-300",
  },
  {
    title: "Define",
    description:
      "Translating insights into clear problem statements and user personas that guide the design process and keep solutions user-centered.",
    color: "bg-orange-300",
  },
  {
    title: "Design",
    description:
      "Creating wireframes, prototypes, and visual designs that balance aesthetics with functionality through iterative testing.",
    color: "bg-blue-300",
  },
  {
    title: "Deliver",
    description:
      "Collaborating with developers to ensure faithful implementation while maintaining design integrity and user experience.",
    color: "bg-purple-300",
  },
];

const Approach = () => {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-2xl md:text-4xl sm:text-3xl my-10 font-semibold text-gray-800 text-center"
        >
          My Approach
        </motion.h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {approachContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.color} min-h-[30vh] rounded-xl p-6 shadow-md flex flex-col justify-between`}
            >
              <div>
                <motion.h1 className="font-serif text-lg md:text-2xl sm:text-xl font-medium text-gray-800 mb-4">
                  {item.title}
                </motion.h1>
                <motion.p className="text-gray-600 leading-7 pt-2">
                  {item.description}
                </motion.p>
              </div>
              <motion.div
                className="mt-4 text-right text-gray-700 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {index + 1}/{approachContent.length}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 text-sm font-medium ">
            *This iterative process ensures solutions are both beautiful and
            functional, meeting real user needs while achieving business goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;
