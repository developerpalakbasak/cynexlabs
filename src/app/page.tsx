import React from "react";
import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Results from "@/components/section/Results";
import Reviews from "@/components/section/Reviews";
import Pricing from "@/components/section/Pricing";
import Contact from "@/components/section/Contact";
import WorkFlows from "@/components/section/Workflow";

export default function Home() {
  return (
    <div className="w-full bg-background overflow-hidden">
      <Hero />
      <Services />
      <Results />
      <WorkFlows />
      <Reviews />
      <Pricing />
      <Contact />
    </div>
  );
}
