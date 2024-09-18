import BlockBox from "@/components/Boxes";
import { FloatingDockDemo } from "@/components/FloatDock";
import GlobeCard from "@/components/GlobeCard";
import { Project } from "@/components/Project";
import { HeroParallaxEffect } from "@/components/HeroParallaxEffect";
import { MacbookScrolldemo } from "@/components/MacBookScroll";
import { Sparkles, SparklesCore, SparklesPreview } from "@/components/Sparkles";
import { TechStack } from "@/components/TechStack";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { ServicesOffered } from "@/components/Services";
import { Abouts } from "@/components/Abouts";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <Sparkles/>
      <MacbookScrolldemo/>
      <TechStack/>
      <Project/>
    </div>
    <ServicesOffered/>
    <div className="overflow-hidden">
      <section id="about"><Abouts/></section>
      {/* <GlobeCard/> */}
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
