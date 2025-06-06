import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Acadix = () => {
  return (
    <div className="min-h-screen">
      <div className="lg:h-screen h-[350px] relative w-full">
        <div className="absolute inset-0">
          <Image
            src="/slider1.png" 
            alt="Acadix"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className='lg:h-[80vh]'
          />
        </div>
        
        {/* contents div */}
        <div className="relative z-10 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          {/* intro */}
          <div className="min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Acadix</h1>
              
              <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mt-12">
                <div className="space-y-6">
                  <div className="flex gap-8">
                    <h1 className="font-light font-serif text-lg min-w-[100px]">OVERVIEW</h1>
                    <div className="space-y-6">
                      <p className='leading-relaxed text-gray-700'>
                        Leaf is a mobile application designed to raise awareness of your carbon footprint on the environment.
                      </p> 
                      <p className='leading-relaxed text-gray-700'>
                        This was created as part of a weekend hackathon organised by Girl Geek Sydney and Canva, with the objective being to come up with an idea to solve for the theme 'Write the Future'.
                      </p> 
                      <Button className='bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 text-white'>
                        See Prototype
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8">
                  <h1 className="font-light font-serif text-lg min-w-[100px]">ROLE</h1>
                  <div className="space-y-6">
                    <h1 className="font-medium text-gray-900">Product Designer</h1>
                    <p className='leading-relaxed text-gray-700'>
                      Product Strategy, User Research, Interaction, Visual design, Prototyping & Testing, Pitching
                    </p> 
                    <p className='leading-relaxed text-gray-700'>
                      Ongoing
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acadix