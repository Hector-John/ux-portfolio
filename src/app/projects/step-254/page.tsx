import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Step254 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-20 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Step 254</h1>
          <p className="text-xl text-gray-600 mb-8">Connecting Kenyan consumers with affordable, quality second-hand shoes</p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">UX Research</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Mobile App Design</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">E-Commerce</span>
          </div>
          <img 
            src="/shoe-app-hero.png" 
            alt="App showcase" 
            className="rounded-xl shadow-2xl mx-auto transition-transform hover:scale-[1.02] duration-300"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="mb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl animate-fade-in delay-100">
          <h3 className="font-semibold mb-2">My Role</h3>
          <p>Lead UX Designer & Researcher</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl animate-fade-in delay-200">
          <h3 className="font-semibold mb-2">Duration</h3>
          <p>6 months (Research to MVP)</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl animate-fade-in delay-300">
          <h3 className="font-semibold mb-2">Tools</h3>
          <p>Figma, Miro, Google Analytics</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">
          The Challenge
        </h2>
        
        <div className="bg-red-50 p-8 rounded-xl mb-8 animate-fade-in">
          <p className="text-lg">
            Kenya's mitumba shoe market faces critical pain points: inconvenient physical markets, 
            limited selection, quality uncertainty, and high retail prices creating accessibility barriers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-xl animate-fade-in">
            <h4 className="font-semibold mb-2">User Pain Points</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Time-consuming market visits</li>
              <li>Unreliable shoe conditions</li>
              <li>Limited size availability</li>
              <li>High retail store prices</li>
            </ul>
          </div>
          
          <div className="border p-6 rounded-xl animate-fade-in delay-100">
            <h4 className="font-semibold mb-2">Business Goals</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reduce cart abandonment</li>
              <li>Increase repeat purchases</li>
              <li>Build trust in mitumba market</li>
              <li>Expand to 3 cities in 1 year</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">
          Research & Discovery
        </h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 animate-fade-in">Key Findings</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm animate-fade-in">
              <p className="text-4xl font-bold text-blue-600 mb-2">65%</p>
              <p>of shoppers frustrated with market conditions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm animate-fade-in delay-100">
              <p className="text-4xl font-bold text-blue-600 mb-2">78%</p>
              <p>would pay 10% more for verified quality</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm animate-fade-in delay-200">
              <p className="text-4xl font-bold text-blue-600 mb-2">3/5</p>
              <p>abandon purchases due to sizing uncertainty</p>
            </div>
          </div>
        </div>

        {/* User Personas */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">User Personas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="bg-blue-100 w-16 h-16 rounded-full mb-4"></div>
              <h4 className="font-bold">The Student</h4>
              <p className="text-sm text-gray-600 mb-2">Ley, 22, University</p>
              <p>"I need affordable shoes without the market hassle"</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="bg-green-100 w-16 h-16 rounded-full mb-4"></div>
              <h4 className="font-bold">The Professional</h4>
              <p className="text-sm text-gray-600 mb-2">Michael, 30, Accountant</p>
              <p>"I want quality brands at reasonable prices"</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="bg-purple-100 w-16 h-16 rounded-full mb-4"></div>
              <h4 className="font-bold">The Fashionista</h4>
              <p className="text-sm text-gray-600 mb-2">Sarah, 25, Freelancer</p>
              <p>"I look for unique styles at mitumba prices"</p>
            </div>
          </div>
        </div>

        {/* Journey Map */}
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-4">User Journey Map</h3>
          <div className="bg-gray-50 p-8 rounded-xl">
            <img src="/slider1.png" alt="User journey map" className="w-full" />
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">
          Design Solution
        </h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 animate-fade-in">
            Key Features
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border animate-fade-in">
              <h4 className="font-bold mb-2">Verified Quality Assurance</h4>
              <p>Each shoe undergoes 5-point inspection with detailed condition reports</p>
            </div>
            <div className="bg-white p-6 rounded-xl border animate-fade-in delay-100">
              <h4 className="font-bold mb-2">Advanced Filtering</h4>
              <p>Search by size, brand, price range and condition grade</p>
            </div>
          </div>
        </div>

        {/* Wireframes */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">From Wireframes to High-Fidelity</h3>
          <div className="bg-gray-50 p-8 rounded-xl">
            <img src="/design-evolution.png" alt="Design process" className="w-full" />
          </div>
        </div>

        {/* Final Screens */}
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">Final Screens</h3>
          <div className="grid gap-8">
            <div>
              <h4 className="font-medium mb-4">Product Discovery</h4>
              <img 
                src="/discovery-screens.png" 
                alt="Discovery screens" 
                className="w-full rounded-lg shadow-md transition-transform hover:scale-[1.02] duration-300"
              />
            </div>
            <div>
              <h4 className="font-medium mb-4">Checkout Flow</h4>
              <img 
                src="/checkout-screens.png" 
                alt="Checkout screens" 
                className="w-full rounded-lg shadow-md transition-transform hover:scale-[1.02] duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">
          Impact & Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-xl animate-fade-in">
            <h3 className="font-bold text-xl mb-4">Quantitative Results</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">40% increase</p>
                <p>in conversion rate compared to traditional mitumba markets</p>
              </li>
              <li>
                <p className="font-semibold">28% reduction</p>
                <p>in cart abandonment after implementing quality badges</p>
              </li>
              <li>
                <p className="font-semibold">4.8/5</p>
                <p>average user rating for quality accuracy</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl animate-fade-in delay-100">
            <h3 className="font-bold text-xl mb-4">User Feedback</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p>"Finally I can trust mitumba shoes without visiting markets!"</p>
                <p className="text-sm text-gray-600">- Ley, University Student</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p>"The condition reports are so accurate - I got exactly what I expected"</p>
                <p className="text-sm text-gray-600">- Michael, Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      {/* <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">
          Lessons Learned
        </h2>
        
        <div className="bg-gray-50 p-8 rounded-xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">What Worked Well</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Detailed quality indicators built trust immediately</li>
                <li>M-Pesa integration boosted conversion by 35%</li>
                <li>Size filtering reduced returns by 60%</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Future Improvements</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>AR try-on feature for premium users</li>
                <li>Seller ratings system to enhance accountability</li>
                <li>Subscription model for frequent buyers</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="text-center animate-fade-in">
        <div>
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <Button asChild className="py-6 px-8 hover:scale-105 transition-transform">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}

export default Step254