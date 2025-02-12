"use client";
import React from "react";
import { Timeline } from "@/components/ui/About/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023: Identifying the Problem",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            The Challenge of Early Cancer Detection
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Cancer diagnosis often comes too late, reducing survival rates. The
            need for faster, more accurate detection methods led our research
            team, led by <strong>Mr. Rajendra K. Pandey</strong> under{" "}
            <strong>DeepCode-R</strong>, to explore AI-driven solutions that
            leverage deep learning for early-stage cancer detection.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2024: Laying the AI Foundation",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Multimodal Data Integration
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Traditional cancer screenings rely on isolated diagnostic methods.
            Our AI model integrates <strong>multimodal data</strong>, including
            <strong>
              medical imaging, pathology reports, and genetic markers
            </strong>
            , to improve diagnostic accuracy and reduce false positives.
          </p>
        </div>
      ),
    },
    {
      title: "Mid 2024: Model Development & Testing",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Building & Training the Model
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Using state-of-the-art deep learning architectures, we trained our
            model on <strong>thousands of annotated medical datasets</strong>.
            The focus is on{" "}
            <strong>feature extraction, pattern recognition</strong>, and
            improving sensitivity for detecting early cancerous changes.
          </p>
        </div>
      ),
    },
    {
      title: "Late 2024: Clinical Validation & Refinement",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Improving Accuracy & Real-World Application
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            We are conducting{" "}
            <strong>model validation using real-world clinical data</strong>,
            working with healthcare professionals to fine-tune accuracy and
            ensure our system aligns with medical standards.
          </p>
        </div>
      ),
    },
    {
      title: "2025: Towards Deployment",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Ethical AI & Responsible Deployment
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            AI in healthcare must be{" "}
            <strong>explainable, ethical, and accessible</strong>. Our team is
            ensuring compliance with regulatory standards, prioritizing
            <strong>
              patient privacy, transparency, and unbiased model predictions
            </strong>
            .
          </p>
        </div>
      ),
    },
    {
      title: "Future: Expanding AI in Healthcare",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Beyond Cancer Detection
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            While our primary focus is <strong>cancer detection</strong>, this
            research has the potential to{" "}
            <strong>revolutionize AI-driven diagnostics</strong>
            for multiple diseases. We are committed to continuous innovation,
            expanding our model's capabilities to support medical professionals
            worldwide.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full pt-8 font-ubuntu">
      <Timeline
        data={data}
        className="timeline transition-all ease-in-out duration-300"
      />
    </div>
  );
}
