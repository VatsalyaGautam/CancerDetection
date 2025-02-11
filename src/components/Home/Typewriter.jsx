"use client";
import { TypeAnimation } from "react-type-animation";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Empowering you with cutting-edge AI technology for early cancer
        detection.
      </p>

      <div className="flex flex-wrap items-center gap-2 text-3xl font-bold">
        <span>Early</span> <span>Detection</span>
        <span> Saves</span>
        <TypeAnimation
          sequence={[
            "Lives",
            8000,
            "Hopes",
            4000,
            "Futures",
            4000,
            "Families",
            4000,
          ]}
          wrapper="span"
          speed={10}
          className="text-blue-500"
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl z-[1] bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl z-[1] bg-white text-black border border-black text-sm">
          Login
        </button>
      </div>
    </div>
  );
}
