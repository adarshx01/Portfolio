"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FloatingDock } from "./ui/floating-dock";
import { ChevronRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  IconBrandGithub,
} from "@tabler/icons-react";
import {Linkedin, Youtube,Mail,User , Wrench } from 'lucide-react'
import Link from "next/link";
const links = [
  // {
  //   title: "Home",
  //   icon: (
  //     <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "/",
  // },

  {
    title: "About",
    icon: (
      <User  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#Abouts",
  },
  {
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:vish.adarsh01@gmail.com",
  },
  // {
  //   title: "Skills",
  //   icon: (
  //     <Wrench className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "#TechStack",
  // },
  {
    title: "Youtube",
    icon: (
      <Youtube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.youtube.com/@techorbin",
  },

  {
    title: "LinkedIn",
    icon: (
      <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/adarshx01/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.github.com/adarshx01",
  },
];
const words = [
  {
    text: "I build",
    className:"text-white"
  },
  {
    text: "web-apps",
    className:"text-white"
  },
  {
    text: "&",
    className:"text-white"
  },
  {
    text: "AI-ML models",
    className: "text-blue-500 dark:text-blue-500",
  },
];
export function Sparkles() {
  return (
    <div id="LandingPage" className="xl:h-[70rem] md:h-[65rem] h-[58rem]  pt-20 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md ">
      <h1 className="md:text-5xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20">
        Hi!👋 I'm Adarsh
      </h1>
      
      <h2 className="md:text-8xl text-6xl lg:text-9xl"><TypewriterEffectSmooth className="text-6xl"  words={words}/></h2>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(340px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex flex-col-reverse mx-auto lg:mt-28 md:mt-28 ">
        <FloatingDock
          // mobileClassName="translate-y-20" 
          desktopClassName=""
          items={links}
        />
        
        <Button variant="outline" size="icon" className=" right-44 mx-auto my-8 w-24  ">
          <Link href="https://drive.google.com/file/d/1mwwralzblzrqYsKYyEcRe6YsW208toS-/view?usp=sharing  " className="flex"><p>Resume</p><ChevronRight className="h-4 w-4 mt-0.5" /></Link>
        </Button>
      </div>
    </div>
  );
}
