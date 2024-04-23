"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 opacity-60 xl:opacity-100 lg:opacity-100 lg:h-full lg:w-1/2 relative">
        <Image src="/hero_anime.png" alt="hero" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <div className="z-10 border-white mix-blend-difference">
          <h1 className="text-4xl md:text-6xl font-bold py-2">Hi, I&apos;m Pavan Kumar Kandapagari</h1>
          <h1 className="text-3xl md:text-4xl py-2">A Deep Learning Engineer/Software Developer</h1>
        </div>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          A Deep Learning engineer with specialization in Computer vision and large foundation model software development. An aspiring Full stack Deep Learning Engineer.      </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 pb-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>;
  </motion.div>
};

export default Homepage;
