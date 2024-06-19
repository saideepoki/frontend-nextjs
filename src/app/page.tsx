import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.1] antialiased">
     <HeroSection/>
     <Courses/>
     <WhyChooseUs/>
    </main>
  );
}
