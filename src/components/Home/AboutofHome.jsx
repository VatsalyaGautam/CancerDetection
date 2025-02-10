"use client";

import React from "react";

import { Brain, Microscope, ScanEye } from "lucide-react";
import Heading from "../Heading";
import { HoverEffect } from "../ui/Home/card-hover-effect";
export default function AboutOfHome() {
  // Features section with new content
  const features = React.useMemo(
    () => [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Multimodal AI Model",
        description:
          "Integrates multiple imaging techniques to detect brain, lung, and skin cancers with high accuracy.",
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Comprehensive Screening",
        description:
          "Combines CT scans, MRIs, and dermoscopic images to analyze cancer patterns effectively.",
      },
      {
        icon: <ScanEye className="w-6 h-6" />,
        title: "Early & Accurate Detection",
        description:
          "Uses deep learning to identify cancer in its earliest stages, improving survival rates significantly.",
      },
    ],
    []
  );

  return (
  
    <section
      id="about"
      className=" bg-gradient-to-b from-white to-blue-50"
    >
     
       <Heading title="About Multimodal Cancer Detection" description="Our AI-powered system leverages multimodal deep learning to analyze
      brain, lung, and skin cancers through a combination of MRI, CT, and
      dermoscopic imaging. This holistic approach ensures early detection,
      increasing survival chances and enhancing diagnostic precision." color={700}/>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={features} />
        </div>

       
          <div className="bg-blue-50 border border-blue-200 p-4">
            <p className="text-sm text-gray-600 italic text-center">
              Note: This AI model assists in cancer detection, but medical
              decisions should always be verified by healthcare professionals.
            </p>
          </div>
     
    </section>
    
  );
}
