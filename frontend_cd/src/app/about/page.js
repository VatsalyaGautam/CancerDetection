import { TimelineDemo } from "@/components/About/TimelineDemo";
import Heading from "@/components/Heading";
import { AnimatedTooltip } from "@/components/ui/About/animated-tooltip";
import { people } from "@/lib/config";
export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-black font-ubuntu">
        <div className="bg-slate-50  dark:bg-black px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex flex-col gap-36 mt-28">
            <TimelineDemo />
            <div className=" pb-32 flex flex-col justify-center items-center">
              <Heading
                title="Built by"
                color={300}
                description="Team DeepCode-R"
              />
              <div className="flex flex-row items-center justify-center  w-full">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
