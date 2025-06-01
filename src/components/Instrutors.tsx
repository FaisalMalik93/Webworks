'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Faisal Malik',
      designation: 'Founder & Lead Web Developer',
      image:
        '/images/3.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Younas',
      designation: 'Project Manager',
      image:
        '/images/5.jpg',
    },
    {
      id: 3,
      name: 'Shahab Nasir',
      designation: 'UI/UX Designer',
      image:
        '/images/4.jpg',
    },
    {
      id: 4,
      name: 'Pervaiz Bilal',
      designation: 'Frontend Developer',
      image:
        '/images/6.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Web Design that Works for You</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">From idea to launch, we create websites that convert and impress</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors