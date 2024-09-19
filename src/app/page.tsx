import React from "react";
import { Project } from "@/components/Project";
import { MacbookScrolldemo } from "@/components/MacBookScroll";
import { Sparkles } from "@/components/Sparkles";
import { TechStack } from "@/components/TechStack";
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
      <Abouts/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
