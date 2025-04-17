"use client";

import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-1/3 -right-24">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md mb-4 z-10">
          ABOUT ME
        </span>
        <span className="h-48 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div
            className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden transition-all duration-1000 hover:scale-110 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={personalData.profile}
              width={400}
              height={400}
              alt="Saqib Ur Rehman"
              className="w-full h-full object-cover transition-all duration-500"
              style={{
                filter: isHovered ? "grayscale(0%)" : "grayscale(50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
