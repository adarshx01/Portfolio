"use client";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Boxes } from "./ui/background-boxes";

const Stack = {
  "Next.js": "https://nextjs.org",
  "Node.js": "https://nodejs.org",
  "TypeScript": "https://www.typescriptlang.org",
  "TailwindCSS": "https://tailwindcss.com",
  "PostgreSQL": "https://www.postgresql.org",
  "MongoDB": "https://www.mongodb.com",
  "GitHub": "https://github.com",
  "Docker": "https://www.docker.com",
  // Add more stack items as necessary
};

export function TechStack() {
  return (

    <div className="flex py-20 items-center justify-center bg-black antialiased ">
      <div className="grid grid-cols-3  md:grid-cols-5  lg:grid-cols-7 p-0 m-0 -p-24">
        {Object.keys(Stack).map((key,index) => (
          <CardSpotlight key={key} className="flex flex-col items-center justify-center p-4 m-1 w-32 h-24">
            
            {/* <a href={index} target="_blank" rel="noopener noreferrer">
              {index}
            </a> */}
            <p className="text-white z-9999 font-bold text-xl mt-4">{key}</p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}
