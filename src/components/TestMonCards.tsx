'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const WebTestMon = [
  {
    quote:
      'Hiring this team transformed our company website — the design is sleek, and the performance is incredible. Our online presence has never been stronger!',
    name: 'Ahmed Raza',
    title: 'CEO, Digital Dynamics',
  },
  {
    quote:
      "The support and expertise provided made launching my portfolio website seamless. They truly understood my vision and brought it to life beautifully.",
    name: 'Ayesha Khan',
    title: 'Freelance Graphic Designer',
  },
  {
    quote:
      "Their custom web app development gave my business the tools to manage clients efficiently. The process was smooth and the results exceeded my expectations.",
    name: 'Bilal Ahmad',
    title: 'Founder, SmartTech Solutions',
  },
  {
    quote:
      'Working with this team was a game changer. They revamped our outdated site with a modern, responsive design that our customers love.',
    name: 'Fatima Sheikh',
    title: 'Marketing Head, PakMart',
  },
  {
    quote:
      'Thanks to their SEO and performance optimization services, our website traffic and conversion rates have improved dramatically. Highly recommended!',
    name: 'Usman Tariq',
    title: 'Owner, TrendyCollections.pk',
  },
];

function WebTestM() {
  return (
<div className="h-[40rem] w-full dark:bg-purple-950 dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
              <h2 className="text-3xl font-bold text-center mb-8 z-10">What Our Clients Say: Digital Transformations That Speak</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={WebTestMon}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default WebTestM