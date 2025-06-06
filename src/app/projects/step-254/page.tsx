import { Button } from "@/components/ui/button";
import Image from "next/image";

const Step254 = () => {
  return (
    <div className="min-h-screen">
      {/* Image Section - Kept exactly as you had it */}
      <div className="h-[93vh]">
        <div className="relative w-full" style={{ height: "85vh" }}>
          <Image
            src="/slider1.png"
            alt="Step254"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Content Section  */}
      <div className="mx-auto">
        {/* Intro - */}
        <div className="max-w-3xl mx-auto lg:h-screen py-8 md:py-16 px-4">
          <h1 className="font-heading text-4xl font-bold mb-6">Step 254</h1>

          {/* Grid - Centered but text remains left-aligned */}
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overview Column */}
            <div className="space-y-4">
              <h1 className="font-light">OVERVIEW</h1>
              <p className="text-sm text-gray-600 leading-7">
                Step254 is an online shoe marketplace connecting Kenyans to
                high-quality thrifted and new shoes at unbeatable prices. By
                curating the best footwear and delivering nationwide, we
                eliminate the hassle of searching for affordable, stylish shoes.
              </p>
              <p className="text-sm text-gray-600 leading-7">
                With the growing demand for e-commerce and budget-friendly
                fashion, Step254 is redefining how Kenyans shop for
                shoes—conveniently, affordably, and with style.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 mt-4">
                See Prototype
              </Button>
            </div>

            {/* Role Column */}
            <div className="space-y-4">
              <h1 className="font-light">ROLE</h1>
              <h1 className="font-medium mb-2">Lead Designer and Researcher</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Product Strategy
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  UX Research
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Interaction
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Visual Design
                </span>
              </div>
              <p className="leading-7 mt-4">Ongoing</p>
            </div>
          </div>
        </div>

        {/* Yellow Background - Kept exactly as you had it */}
        <div className="min-h-screen bg-yellow-300">
          <div className="max-w-5xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Step254;
