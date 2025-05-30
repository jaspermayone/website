import Image from "next/image"

import jm from "@public/images/profiles/jm.png"
import dark from "@public/images/profiles/jmdark-min.jpeg"
import lite from "@public/images/profiles/jmlite-min.jpeg"
import circus from "@public/images/profiles/circus.jpg"
import waves from "@public/images/profiles/waves.png"
import AnimatedTitle from "@/components/AnimatedTitle"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PFPs",
    description: "All the profile photos I've used over the years.",
  };

export default function PFP() {

let paths = [
    jm,
    dark,
    lite,
    circus,
    waves,
]
    
    
    return (
        <div className="m-3.5">
        <AnimatedTitle firstWord="PFPs"/>
        <p>Here's all the profile photos I've used over the years</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {paths.map((path, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-[10%]">
            <Image 
                src={path} 
                alt="one of jasper's previous profile photos" 
                width={100} 
                height={100} 
                aria-label="one of jasper's previous profile photos" 
                placeholder="blur" 
                priority={true} 
                className="w-full h-full object-cover object-top" // or object-center, object-bottom
            />
        </div>
    ))}
</div>


        </div>
    );
}