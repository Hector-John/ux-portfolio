"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/stickyScroll";

const approachContent = [
  {
    title: "1. Discover & Define",
    description:
      "First, I'll sit down with you to really understand your business goals and users. Through research and conversations, we'll pinpoint exactly what problems we need to solve together.",
    content: (
      <div className="p-6 text-white">
        <h3 className="mb-3 text-lg font-semibold">What we'll do:</h3>
        <ul className="space-y-2">
          <li>• Discovery session</li>
          <li>• User insights</li>
          <li>• Market analysis</li>
          <li>• Problem framing</li>
          <li>• Success metrics</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2. Ideate & Prototype",
    description:
      "Now the fun begins! I'll sketch out multiple solutions and create quick prototypes. This is where we test ideas fast and fail early to find the best approach for your users.",
    content: (
      <div className="p-6 text-white">
        <h3 className="mb-3 text-lg font-semibold">What we'll create:</h3>
        <ul className="space-y-2">
          <li>• User flows</li>
          <li>• Interactive prototypes</li>
          <li>• Usability tests</li>
          <li>• Quick cycles</li>
          <li>• Feedback loops</li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. Design & Refine",
    description:
      "With the right direction, I'll craft beautiful, functional interfaces. Every pixel will be intentional, from typography to micro-interactions, ensuring your product feels amazing to use.",
    content: (
      <div className="p-6 text-white">
        <h3 className="mb-3 text-lg font-semibold">Design elements:</h3>
        <ul className="space-y-2">
          <li>• Final designs</li>
          <li>• Design system</li>
          <li>• Accessibility review</li>
          <li>• UI animation</li>
          <li>• Visual polish</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Deliver & Support",
    description:
      "I don't just throw designs over the fence. I'll work closely with your developers to ensure perfect implementation and stay involved to refine based on real user feedback.",
    content: (
      <div className="p-6 text-white">
        <h3 className="mb-3 text-lg font-semibold">Final deliverables:</h3>
        <ul className="space-y-2">
          <li>• Dev handoff</li>
          <li>• Design specs</li>
          <li>• Visual QA</li>
          <li>• Ongoing support</li>
          <li>• Feedback review</li>
        </ul>
      </div>
    ),
  },
];

const Approach = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl sm:text-4xl mb-6 font-bold text-gray-800 text-center">
          My Approach
        </h1>
        <StickyScroll content={approachContent} />
      </div>
    </div>
  );
};

export default Approach;
