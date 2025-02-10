"use client"; // Add this if you're using Next.js app router

import React from "react";
import { motion } from "framer-motion";
import { Brain, Microscope, ScanEye } from "lucide-react";

export default function AboutOfHome() {  
  // Features section with new content
  const features = React.useMemo(() => [
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
  ], []);

  return (
    <section
      id="about"
      className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}  
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl p-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 mb-6"
          >
            About Multimodal Cancer Detection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-blue-700 mb-8 leading-relaxed"
          >
            Our AI-powered system leverages multimodal deep learning to analyze brain, lung, and skin cancers  
            through a combination of MRI, CT, and dermoscopic imaging. This holistic approach ensures early detection,  
            increasing survival chances and enhancing diagnostic precision.
          </motion.p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features?.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 15px 25px rgba(0, 90, 255, 0.4)",
                backgroundColor: "rgba(0, 90, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 ease-out transform hover:bg-blue-900"
            >
              {/* Floating Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 rounded-xl blur-xl transition-opacity duration-300"
                whileHover={{ opacity: 0.3 }}
              />

              {/* Icon */}
              <motion.div
                className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto text-blue-600 transition-colors duration-300 group-hover:text-black"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center transition-colors duration-300 group-hover:text-black">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-neutral-800">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden"
        >
          <div className="bg-blue-50 border border-blue-200 p-4">
            <p className="text-sm text-gray-600 italic text-center">
              Note: This AI model assists in cancer detection, but medical decisions should  
              always be verified by healthcare professionals.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}