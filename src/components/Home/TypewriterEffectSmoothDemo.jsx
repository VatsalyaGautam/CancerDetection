"use client";
import { TypewriterEffectSmooth} from "../ui/home/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Early",
    },
    {
      text: "Detection",
    },
    {
      text: "Saves",
    },
  
    {
      text: "Lives.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center   ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Empowering you with cutting-edge AI technology for early cancer detection.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl z-[1] bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button
          className="w-40 h-10 rounded-xl z-[1] bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>)
  );
}
