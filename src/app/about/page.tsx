"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { buttonVariants, Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Approach from "../home/Approach";

const AboutPage = () => {
  return (
    <div>
      <div className="mx-auto min-h-screen px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-3xl mx-auto pt-[20vh] pb-12">
          {/* Text content first */}
          <div className=" mb-20">
            <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-6 leading-relaxed tracking-relaxed">
              A little bit about myself
            </h1>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                My name is Hector John, and I care deeply about improving the
                lives of others through thoughtful design. I bring a
                user-focused, detail-driven approach that helps turn complex
                problems into clear, usable solutions.
              </p>

              <p className="text-gray-600 leading-relaxed ">
                I'm a{" "}
                <span className="text-blue-500 font-medium">self-taught</span>{" "}
                designer, having explored the principles of UX/UI and product
                design through hands-on projects, workshops, and continuous
                reading. I’m a big-picture thinker who enjoys working across the
                full product journey, from early concepts to final handoff.
                Along the way, my experience with frontend development helps me
                design with implementation in mind.
              </p>
              <p className="text-gray-600 leading-relaxed ">
                Outside of design, I unwind through gaming, hitting the road for
                some leisure driving, and occasionally step into the ring for a
                boxing session. These hobbies keep me sharp, curious, and always
                ready for the next challenge.
              </p>
            </div>
          </div>

          {/* Image below text */}
          <div className="flex justify-center">
            <div className=" overflow-hidden w-full h-[500px] rounded-xl ">
              <Image
                src="/slider1.png"
                alt="Hector"
                width={7000}
                height={500}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>

      {/* my values */}
      <div className="bg-[#fff9dd] min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="font-serif text-3xl font-semibold text-gray-800 leading-relaxed tracking-relaxed my-10">
            My Values
          </h1>

          {/* Value 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-gray-900">
              😍 Passion is everything.
            </h3>
            <p className="text-base text-gray-800 leading-7">
              I work best when I care deeply about what I’m building. Passion
              gives me the drive to stay up late solving design puzzles,
              refining flows, or simply learning something new. If I ever stop
              feeling excited about what I’m doing, that’s my cue to pivot, not
              settle.
            </p>
          </div>

          {/* Value 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-gray-900">
              🤓 Always be learning.
            </h3>
            <p className="text-base text-gray-800 leading-7">
              I believe learning should never stop, not just for skill-building,
              but for perspective. Whether it’s a new design principle, a dev
              tool, or a conversation that shifts my thinking, I stay curious.
              Learning keeps me humble, hungry, and constantly evolving.
            </p>
          </div>

          {/* Value 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-gray-900">
              🎨 Embrace your creativity.
            </h3>
            <p className="text-base text-gray-800 leading-7">
              Creativity isn’t just a skill, it’s how I approach problems. From
              sketching messy ideas to building high-fidelity prototypes, I lean
              into experimentation. I don’t wait for inspiration; I create space
              for it by being playful, curious, and open to unexpected
              solutions.
            </p>
          </div>

          {/* Value 4 */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-gray-900">
              🙏 Stay humble.
            </h3>
            <p className="text-base text-gray-800 leading-7">
              There’s always more to learn, and I try to approach every project
              with that mindset. I listen carefully, take feedback seriously,
              and ask questions, even when I think I know the answer. For me,
              humility isn’t a weakness; it’s how I grow stronger.
            </p>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="min-h-screen py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <div className="pt-8">
              <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-8 leading-relaxed tracking-relaxed">
                Testimonial
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-7">
                I've worked with Hector for 3 years now, and his impact on our
                digital presence has been remarkable. Hector first designed and
                developed our NGO's website, then later redesigned it with
                significant improvements. His work doesn't just look good, it
                drives results, increasing our online engagement by 47%.
              </p>

              <p className="text-gray-600 leading-7">
                What sets Hector apart is his ability to understand exactly what
                we need before we do. When I launched Blaze Na Yonga, he created
                both website and mobile solutions that transformed our
                operations. Our sales improved by 53% and customer service
                efficiency doubled within months of implementation.
              </p>

              <p className="text-gray-600 leading-7">
                Hector combines technical skill with business acumen, he doesn't
                just deliver designs, he delivers solutions that work. His
                iterative approach means we're always improving, and his
                development background ensures everything he designs is
                practical to implement. In our fast-paced environment, having
                someone who can both design and develop has been invaluable.
              </p>

              <p className="text-gray-600 leading-7">
                Working with Hector has been one of our best decisions. He's
                become more than a designer, he's a strategic partner who
                genuinely cares about our success. Any organization would be
                lucky to have him.
              </p>
            </div>

            <div className="pb-12 text-end ">
              <p className="text-gray-600 leading-7 text-sm ">
                — Cynthia Yonga,
                <br />
                Founder of Blaze Na Yonga
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More about */}
      <div className=" max-w-[80%] min-h-[70vh] mx-auto">
        <div className="border-t-3 pt-12 border-gray-300">
          <p className="text-2xl font-semibold text-center text-gray-700 mb-12">
            More About Me
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Websites Card */}
            <a
              href="https://hector-john.vercel.app"
              target="_blank"
              className="group relative block h-64 rounded-lg overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0  bg-black/70 z-10"></div>
              <Image
                src="/slider1.png"
                alt="Website Projects"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-2xl font-bold text-white">Websites</h3>
                <p className="text-gray-200">View my development projects</p>
              </div>
            </a>

            {/* Gallery Card */}
            <Link
              href="/gallery"
              className="group relative block h-64 rounded-lg overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0  bg-black/70 z-10"></div>
              <Image
                src="/slider1.png"
                alt="Design Gallery"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-2xl font-bold text-white">Gallery</h3>
                <p className="text-gray-200">
                  Random photos of me and my projects
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
