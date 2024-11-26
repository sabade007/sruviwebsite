"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
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
  const idd = useRef("get");
  const pathname = useRouter().pathname;
  const ref = useRef(null);
  const ref2 = useRef(null);
  const inview = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const inview2 = useInView(ref2, { once: true, margin: "0px 0px -200px 0px" });
  const router = useRouter();

  const links = [
    {
      title: "Home",
      icon: (
        <HomeIcon
          className={`${
            pathname === "/"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/",
    },

    {
      title: "Solutions",
      icon: (
        <ProductsIcon
          className={`${
            pathname === "/products"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/products",
    },
    {
      title: "Services",
      icon: (
        <ServicesIcon
          className={`${
            pathname === "/services"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/services",
    },
    {
      title: "Consulting",
      icon: (
        <BusinessIcon
          className={`${
            pathname === "/consulting"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/consulting",
    },
    {
      title: "Blog",
      icon: (
        <BlogIcon
          className={`${
            pathname === "/blog"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/blog",
    },
    {
      title: "About",
      icon: (
        <AboutIcon
          className={`${
            pathname === "/about"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/about",
    },

    {
      title: "Get in touch",
      icon: (
        <ContactIcon
          className={`${
            pathname === "/getintouch"
              ? "text-[#48c43c] dark:text-[#48c43c] "
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/getintouch",
    },
  ];

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
