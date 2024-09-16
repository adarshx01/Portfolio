"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TextHoverEffect } from "./text-hover-effect";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
            <div className="h-[15rem] flex items-center justify-center">
              <TextHoverEffect text="ABOUT ME" />
            </div>
      <div className="flex shadow-2xl shadow-green-500">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          {/* <h1 className="lg:text-7xl font-normal font-mono md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            About me

          </h1> */}
          <p className="text-neutral-700 dark:text-neutral-300 text-xl md:text-xl max-w-3xl mt-12">
            I'm Adarsh Vishwakarma, a passionate tech innovator and national-level hackathon winner with a strong academic foundation in Computer Science. 
            Currently pursuing my B.Tech at Cochin University, I excel in full-stack development, machine learning, and backend systems.
            My journey has been fueled by a love for solving complex challenges and staying ahead of emerging technologies. 
            With multiple hackathon victories under my belt, I’m constantly evolving, pushing boundaries,
            and applying my expertise to make an impact in the tech world.
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10  w-[30rem]">
          <img className="w-full shadow-2xl shadow-green-500" src="/Adarsh_nobg.png" width={1000} height={1000}></img>
        </div>
      </div>
      <p className="text-center text-2xl text-neutral-600 mt-16">Here's the Timeline of my Journey</p>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
