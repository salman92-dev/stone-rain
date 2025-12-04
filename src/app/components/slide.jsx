"use client";
import Marquee from "react-fast-marquee";

export default function Slide() {
  return (
    <div className="w-full bg-[#F2A41A] border-2 border-[#000] py-4 relative z-2 mt-[-22vw] md:mt-[-5vw]">
      <Marquee
        speed={50}        // increase for faster scroll
        gradient={false}  // removes fade edges (clean look)
        pauseOnHover={false}
        loop={0}          // infinite loop
      >
        <span className="font-bold text-xl sm:text-2xl md:text-4xl tracking-[4px] mama text-black mx-4">
          ● STONE RAIN DAN ● STONE RAIN DAN ● STONE RAIN DAN ● STONE RAIN DAN ● STONE RAIN DAN ● STONE RAIN DAN ●
        </span>
      </Marquee>
    </div>
  );
}
