import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrolldemo() {
  return (
    <div className="overflow-hidden  bg-gradient-to-b from-black from-1% via-lime-200 via-30% to-emerald-500 to-90% bg-lime-200 w-full ">
      
      <MacbookScroll
        title={
          <span className="">
           TechStack
          </span>
        }
        badge={
          <Link href="https://techorb.in">
            <Badge className="h-10 w-10 transform rounded-full rotate-12" />
          </Link>
        }
        src={`/vscode.jpg`}
        showGradient={false}
        
      />
      
    </div>
  );
}
// TechOrb logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <img src="/Techorb.png" className={className}/>
  );
};
