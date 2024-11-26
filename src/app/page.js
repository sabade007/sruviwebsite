"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import Welcomenote from "@/components/homepage/Welcomenote";
import {
  AboutIcon,
  BlogIcon,
  BusinessIcon,
  ContactIcon,
  HomeIcon,
  ProductsIcon,
  ServicesIcon,
} from "@/components/icons";
import Ourmission from "@/components/homepage/Ourmission";
import Approach from "@/components/homepage/Approach";
import Services from "@/components/homepage/Services";
import PricingModels from "@/components/homepage/PricingModels";
import Testimonials from "@/components/homepage/Testimonials";
import GetaQuote from "@/components/homepage/GetaQuote";
import Footer from "@/components/homepage/Footer";

export default function Home({}) {
  const targetDivRef = useRef(null);

  return (
    <div className="h-full w-full ">
      <div className="z-10 ">
        <Header targetDivRef={targetDivRef} />
        <Hero
          title={"Hey There ! We're thrilled to have you on board. "}
          subtitle={
            "Crafting Cutting-Edge Code, Cultivating Innovation.  Success. Dreams."
          }
          image={true}
          description={
            " We're dreamers, problem-solvers, and creators. Our mission? To craft software that transforms businesses, enhances user experiences, and shapes the future."
          }
          targetDivRef={targetDivRef}
        />

        <Welcomenote />
        <Ourmission />
        <Approach />
        <Services />
        <PricingModels />
        <Testimonials />
        <div ref={targetDivRef}>
          <GetaQuote />
        </div>

        <Footer />
      </div>
    </div>
  );
}
