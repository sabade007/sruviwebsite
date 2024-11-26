"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import logo from "@/assets/logo/logo.png";
import darklogo from "@/assets/logo/darkmodeonlylogo.png";
import { Button } from "@nextui-org/react";
import { Spotlight } from "../ui/spolight";
import bg from "@/assets/background/bg.png";
import { useTheme } from "next-themes";

const Hero = ({
  animationData,
  image,
  title,
  subtitle,
  description,
  targetDivRef,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const handleScroll = () => {
    if (targetDivRef && targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full md:hidden block p-4 ">
        <div className="w-full rounded-2xl dark:shadow-slate-950  bg-white dark:bg-[#060607] dark:border dark:border-slate-900">
          <div className="grid grid-cols-12 h-full w-full">
            <div className="col-span-12 flex items-center justify-center h-full w-full">
              <Lottie
                animationData={require("../../assets/lottie/landingAnimation.json")}
                loop={true}
                style={{
                  height: "40vh",
                  width: "auto",
                  maxWidth: "80%",
                  padding: "2%",
                }}
              />
            </div>
            <div className="col-span-12 flex   justify-end h-full w-full">
              <div className="w-full p-4 h-full flex   items-center justify-center flex-col ">
                {/* <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="#48c43c"
                /> */}

                {image && (
                  <img
                    src={darkMode ? darklogo.src : logo.src}
                    alt="logo"
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
                <h1 className="text-xl font-bold text-primary mt-4">{title}</h1>
                <h1 className="text-base font-bold mt-4">{subtitle}</h1>
                <h1 className="mt-2">{description}</h1>
                <div className="w-full">
                  <Button
                    color="secondary"
                    variant="ghost"
                    size="md"
                    fullWidth
                    className="mt-4"
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    onClick={handleScroll}
                  >
                    <h1 className="text-black dark:text-white">
                      {"Get Started"}
                    </h1>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:block hidden p-10 pt-2">
        <div className="w-full h-[50vh] shadow-2xl rounded-2xl dark:shadow-slate-950  bg-white dark:bg-[#060607] dark:border dark:border-slate-900">
          <div className="grid grid-cols-12 h-full w-full">
            <div className="col-span-7 flex   justify-end h-full w-full">
              <div className="w-[80%] h-full flex  justify-center flex-col ">
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="#48c43c"
                />

                {image && (
                  <img
                    src={darkMode ? darklogo.src : logo.src}
                    alt="logo"
                    style={{ width: "150px", height: "auto" }}
                  />
                )}
                <h1 className="text-3xl font-bold text-primary mt-4">
                  {title}
                </h1>
                <h1 className="text-xl font-bold mt-4">{subtitle}</h1>
                <h1 className="mt-2">{description}</h1>
                <div>
                  <Button
                    color="secondary"
                    variant="ghost"
                    size="md"
                    className="mt-4"
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    onClick={handleScroll}
                  >
                    <h1
                      className={`${
                        mouseEnter ? "text-white" : "text-secondary"
                      }`}
                    >
                      {"Get Started"}
                    </h1>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center h-full w-full">
              <Lottie
                animationData={require("../../assets/lottie/landingAnimation.json")}
                loop={true}
                style={{
                  height: "40vh",
                  width: "auto",
                  maxWidth: "80%",
                  padding: "2%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
