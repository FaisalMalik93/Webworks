import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestMonCards from "@/components/TestMonCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import Instructors from "@/components/Instrutors";
import Footer from "@/components/Footer";



export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <TestMonCards />
          <UpcomingWeb />
          <Instructors />
          <Footer />
    </main>
  );
}
