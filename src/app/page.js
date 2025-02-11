
import { Typewriter } from "@/components/Home/Typewriter";
import { GridPattern } from "@/components/ui/grid-pattern";
import Spline from "@splinetool/react-spline/next";
import { cn } from "@/lib/utils";
import AboutofHome from "@/components/Home/AboutofHome";
import { FileUploadDemo } from "@/components/Home/FileUploadDemo";
import Heading from "@/components/Heading";
import { TypesOfCancers } from "@/components/Home/TypesOfCancers";
import { Marquee3D } from "@/components/Home/Marquee3D";
export default function Home() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-black font-ubuntu">
        <div className="bg-slate-50  dark:bg-black px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex gap-12 mt-8">
            <div className="w-full lg:w-3/5 flex justify-center h-[30rem]">
              <Typewriter />
            </div>
            <div className="hidden lg:block w-2/5 h-[30rem] ">
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
          <div className="pt-20 pb-16">
            <AboutofHome />
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-black font-ubuntu">
        <div className="bg-slate-50  dark:bg-black px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="pt-20 pb-20 flex flex-col gap-16">
            <Heading
              title="Ready to Take Control of Your Health?"
              description="Our AI-driven system integrates MRI, CT, and dermoscopic imaging to detect brain, lung, skin, and bladder cancers with precision."
              color={300}
            />
            <FileUploadDemo />
          </div>
        </div>
      </div>
      <div className="bg-slate-50 font-ubuntu">
        <div className="bg-slate-50  px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="pt-20 pb-16 flex flex-col gap-16">
            <Heading
              title="Understanding Cancer Types"
              description="Harnessing advanced AI, our system analyzes MRI, CT, and dermoscopic imaging to accurately detect brain, lung, skin, and bladder cancers—enabling early diagnosis and precision-driven care."
              color={700}
            />
            <TypesOfCancers />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(10,10,10)] font-ubuntu">
        <div className="bg-[rgb(10,10,10)] px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="pt-20 pb-32 flex flex-col gap-16">
            <Heading
              title="What Patients & Doctors Say About Our AI"
              description="Hear from real patients and medical professionals about how our AI-powered system is transforming cancer detection for brain, lung, skin, and bladder cancers."
              color={300}
            />
            <Marquee3D />
          </div>
        </div>
      </div>
    </>
  );
}
