"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
    "linear-gradient(to bottom right, #10b981, #06b6d4)",
    "linear-gradient(to bottom right, #f97316, #ec4899)",
    "linear-gradient(to bottom right, #0ea5e9, #3b82f6)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="relative">
      <motion.div
        className="relative flex max-h-[20rem] justify-center space-x-10 overflow-y-auto custom-scrollbar rounded-lg p-6"
        ref={ref}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-16">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    color: activeCard === index ? "#1e293b" : "#64748b",
                  }}
                  className="text-2xl font-bold"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    color: activeCard === index ? "#334155" : "#94a3b8",
                  }}
                  className="mt-4 max-w-md text-lg leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            {/* Extra space at bottom to ensure last item is reachable */}
            <div className="h-12" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-8 hidden h-64 w-80 overflow-hidden rounded-xl shadow-lg lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </div>
  );
};
