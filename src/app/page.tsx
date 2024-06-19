import HeroSection from "@/components/HeroSection";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.1] antialiased">
     <HeroSection/>
     <Courses/>
     <WhyChooseUs/>
     <Testimonials/>
     <Webinars/>
     <Instructors/>
    </main>
  );
}
