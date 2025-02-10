import { TypewriterEffectSmoothDemo } from "@/components/Home/TypewriterEffectSmoothDemo";
import { GridPattern } from "@/components/ui/grid-pattern";
import Spline from "@splinetool/react-spline/next";
import { cn } from "@/lib/utils";
import AboutofHome from "@/components/Home/AboutofHome";
export default function Home() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-black font-ubuntu">
        <div className="bg-slate-50  dark:bg-black px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex gap-12 mt-8">
            <div className="w-3/5 flex justify-center">
              <TypewriterEffectSmoothDemo />
            </div>
            <div className="w-2/5 h-[30rem]">
              <div className="w-full h-full relative flex justify-center">
                <Spline
                  className="spline-div rounded-2xl absolute !w-[68%]"
                  scene="https://prod.spline.design/DUsonSpAK6trNQLe/scene.splinecode"
                />
              </div>
            </div>

            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-blue-50 font-ubuntu">
        <div className="bg-gradient-to-b from-white to-blue-50   px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <AboutofHome />
        </div>
      </div>
    </>
  );
}
