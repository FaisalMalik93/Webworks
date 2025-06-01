import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Elevate Your Online Identity</h1>
            <p className="mt-12 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
I create modern, responsive websites that reflect your brand and help you stand out. Get a professional online presence built to impress. Fast delivery and ongoing support guaranteed.</p>
            <div className="mt-8">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore Here
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection