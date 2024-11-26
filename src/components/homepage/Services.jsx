import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Headinglayout from "../layout/Headinglayout";
import { useTheme } from "next-themes";
import businesss from "@/assets/copilot/business.jpeg";
import cloud from "@/assets/copilot/cloud.jpeg";
import databasee from "@/assets/copilot/database.jpeg";
import customsofware from "@/assets/copilot/customsoftware.jpeg";
import digitall from "@/assets/copilot/digital.jpeg";
import seoo from "@/assets/copilot/seo.jpeg";
import mobileapp from "@/assets/copilot/mobileapp.jpeg";
import websiter from "@/assets/copilot/website.jpeg";

const Services = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const Divv = ({ title, desc, tt, img }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        {!darkMode && <img src={img} alt="" style={{ maxWidth: "50%" }} />}
        <h1 className="text-lg font-bold text-orange">{tt}</h1>
        <h1 className="text-xl font-bold text-primary">{title}</h1>
        <h1 className="text-base ">{desc}</h1>
      </div>
    );
  };

  const welcomenotes = [
    {
      ig: websiter,
      tt: "Web Development",
      title: "Where Pixels Dance with Purpose!",
      desc: "We believe that a website is more than just code—it's your online storefront, your brand's voice, and your connection to the world. Our web development wizards work tirelessly to create pixel-perfect designs, smooth navigation, and lightning-fast load times",
    },
    {
      tt: "Mobile Development",
      title: "Apps That Ignite Possibilities!",
      desc: "We understand that your business is always on the move. That's why we specialize in crafting mobile apps that seamlessly integrate into your customers' lives. Whether it's a sleek iOS app for Apple enthusiasts or an Android app that reaches a wider audience.",
      ig: mobileapp,
    },
    {
      tt: "Custom Software Development",
      title: "Tailored Solutions, Infinite Possibilities",
      desc: "We're architects of the virtual world, crafting desktop applications that empower your business. We specialize in crafting desktop apps with an eye for elegance and ease of use. Whether you're targeting Windows, macOS, or both, we'll help you bring your vision to life.",
      ig: customsofware,
    },
    {
      tt: "Database Management",
      title: "Guardians of Data Harmony!",
      desc: "Your data is the lifeblood of your business. Our database management services ensure that your data is secure, organized, and accessible. We specialize in various database management systems, including MySQL, PostgreSQL, MongoDB, and more.",
      ig: databasee,
    },
    {
      tt: "Cloud & DevOps",
      title: "Code in the Cloud, Deploy with DevOps Magic!",
      desc: "We're the architects of agility. DevOps and cloud are our secret ingredients for transforming businesses. What does that mean for you? It means seamless deployments, automated workflows, and scalability that defies limits",
      ig: cloud,
    },
    {
      tt: "Seo & Digital marketing",
      title: "Navigating the Digital Currents!",
      desc: "Reach your audience across the globe. Our digital marketing services blend creativity, technology, and strategy to drive your online presence. We specialize in various digital marketing channels, including social media, email marketing, Google Ads, and more.",
      ig: seoo,
    },
  ];
  return (
    <div>
      <div
        className="xs:block sm:block md:hidden lg:hidden xl:hidden"
        ref={ref}
      >
        <Headinglayout
          heading={"Services"}
          subheading={"We craft exceptional software solutions."}
          useinview={inview}
        />

        <div className="grid w-full  p-10 grid-cols-1 gap-4 ">
          {welcomenotes.map((item, index) => {
            return (
              <Divv
                key={index}
                title={item.title}
                desc={item.desc}
                tt={item.tt}
                img={item.ig.src}
              ></Divv>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl hidden md:block mx-auto" ref={ref}>
        <Headinglayout
          heading={"Services"}
          subheading={"We craft exceptional software solutions."}
          useinview={inview}
        />

        <div className="grid w-full  p-10 grid-cols-2 gap-10 ">
          {welcomenotes.map((item, index) => {
            return (
              <Divv
                key={index}
                title={item.title}
                desc={item.desc}
                tt={item.tt}
                img={item.ig.src}
              ></Divv>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
