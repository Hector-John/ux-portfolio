import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Step254 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Image - Full viewport height */}
      <div className="h-[90vh]">
        <div className="relative w-full h-full">
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

      {/* Content Sections */}
      <div className="mx-auto">
        {/* Intro Section - Minimum 90vh */}
        <div className="max-w-3xl mx-auto min-h-[90vh] flex flex-col justify-center py-12 md:py-20 px-4">
          <h1 className="text-4xl font-serif font-bold mb-6">Step 254</h1>
          <div className="flex flex-col gap-8">
            {/* Overview */}
            <div className="space-y-5">
              <h2 className="font-light text-gray-700 uppercase tracking-wider text-sm">
                Overview
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  Step254 revolutionizes Kenya's shoe market by bridging the gap between quality and affordability. 
                  Our platform offers carefully vetted new and pre-loved footwear, giving fashion-conscious 
                  Kenyans access to premium styles without the premium price tag.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By combining thrift culture with e-commerce convenience, we're creating a sustainable 
                  shopping alternative that delivers value straight to your doorstep.
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700 uppercase tracking-wider text-sm mb-5">
                Role
              </h2>
              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-700">
                  Lead Designer and Researcher
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Strategy",
                    "UX Research",
                    "Interaction",
                    "Visual Design",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="inline-block text-sm text-gray-600 after:content-[','] last:after:content-['']"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 py-1.5 px-3 bg-gray-50 text-xs font-medium w-fit rounded-full border border-gray-300 tracking-wider shadow-xs">
                  Ongoing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background - Minimum 100vh */}
        <div className="min-h-[100vh] bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 flex flex-col justify-center">
          <div className="max-w-3xl mx-auto py-16 px-4">
            <h1 className="font-serif text-4xl font-bold mb-8">Background</h1>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                In Kenya's bustling shoe market, finding affordable, quality footwear often feels like a treasure hunt. Step254 was born from this frustration - to create a one-stop platform where Kenyans can discover curated new and thrifted shoes at unbeatable prices, delivered right to their doorstep.
              </p>
              
              <div className="space-y-5 pl-5">
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Curated for Kenya:</span> Designed a filtering system that highlights locally popular styles while accommodating Kenya's diverse fashion tastes.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Thrift-first experience:</span> Created seamless flows for both thrift hunters and new shoe seekers, with visual indicators for condition ratings.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Nationwide trust:</span> Built a verification system for sellers and transparent review process that increased first-time buyer conversion by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding the Problem - Minimum 50vh */}
        <div className="min-h-[50vh] flex flex-col justify-center py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-6">
              Understanding the Problem
            </h1>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Through user research and market analysis, we identified key pain points in Kenya's shoe market:
              </p>
              
              <div className="space-y-4 pl-5">
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Limited access to quality footwear at affordable prices outside major urban centers
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Difficulty verifying authenticity and condition when shopping for secondhand shoes online
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Lack of centralized platforms offering both new and thrifted options with reliable delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Vision - Minimum 100vh */}
        <div className="min-h-[100vh] bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 flex flex-col justify-center">
          <div className="max-w-3xl mx-auto py-16 px-4">
            <h1 className="font-serif text-4xl font-bold mb-12">Product Vision</h1>
            
            <div className="space-y-10">
              <p className="text-gray-600 leading-relaxed text-lg">
                From our research findings, we established three core product objectives:
              </p>
              
              <div className="space-y-8 pl-6 border-l-2 border-amber-300">
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Accessibility First:</span> Ensure every Kenyan can find quality footwear regardless of location or budget
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Trust Through Transparency:</span> Build confidence in online thrift shopping with verification systems
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-amber-400"></div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">Sustainable Style:</span> Promote the environmental benefits of thrifting while maintaining fashion appeal
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <p className="text-gray-600 leading-relaxed mb-8">
                  We analyzed competitors across three categories to inform our solution:
                </p>
                
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-gray-800 mb-3">Local Marketplaces</h3>
                    <ul className="space-y-3 pl-5">
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        Copia's rural logistics
                      </li>
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        Jumia's payment options
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-gray-800 mb-3">Global Thrift Platforms</h3>
                    <ul className="space-y-3 pl-5">
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        Depop's social features
                      </li>
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        ThredUp's quality ratings
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-gray-800 mb-3">Fashion Communities</h3>
                    <ul className="space-y-3 pl-5">
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        Pinterest's discovery
                      </li>
                      <li className="text-gray-600 text-sm leading-relaxed relative before:content-['✓'] before:text-amber-500 before:mr-2">
                        Instagram's engagement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <p className="text-gray-600 leading-relaxed">
                  Through collaborative sketching sessions, we visualized solutions combining these insights with Kenya-specific needs:
                </p>
                {/* Placeholder for sketching session images */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-inner border border-gray-200 min-h-[200px] flex items-center justify-center text-gray-400">
                  [Sketching Session Outputs]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step254;