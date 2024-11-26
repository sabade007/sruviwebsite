"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoiconsvg from "@/assets/logo/logoiconsvg.svg";
import darkmodeonlyicon from "@/assets/logo/darkmodeonlyicon.png";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { Button as BorderButton } from "@/components/ui/moving-border";
import {
  ContactIcon,
  DashboardIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../icons";
import { ThemeSwitch } from "../theme-switch";

const Header = ({ targetDivRef }) => {
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
    <div>
      <div className="w-full h-full p-4 md:block hidden">
        <div className="flex flex-row items-center justify-between">
          <Image
            src={darkMode ? darkmodeonlyicon : logoiconsvg}
            alt="logo"
            width={100}
            height={100}
            className="w-12 h-12"
          />

          <div className="flex flex-row items-center justify-center">
            <div className="ml-4 flex flex-row items-center">
              <ThemeSwitch />
              <h1 className="text-base ml-2">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </h1>
            </div>

            <div>
              <TwitterIcon className="ml-4 w-6 h-6" />
            </div>
            <div>
              <InstagramIcon className="ml-4 w-6 h-6" />
            </div>
            <div>
              <FacebookIcon className="ml-4 w-6 h-6" />
            </div>
            {/* <div className="ml-4">
              <Button
                variant="ghost"
                fullWidth
                size="lg"
                className=" rounded-full border "
                title="Dashboard"
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
              >
                <div className="flex flex-row items-center">
                  <DashboardIcon
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } w-5 h-5`}
                  />
                  <h1 className="text-sm ml-2">My Dashboard</h1>
                </div>
              </Button>
            </div> */}
            <div className="ml-4">
              <Button
                variant="ghost"
                fullWidth
                size="lg"
                className=" rounded-full border "
                title="Dashboard"
                onClick={handleScroll}
              >
                <div className="flex flex-row items-center">
                  <ContactIcon
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } w-5 h-5`}
                  />
                  <h1 className="text-sm ml-2">Get in touch</h1>
                </div>
              </Button>

              {/* <BorderButton
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <div className="flex flex-row items-center">
                  <ContactIcon
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } w-6 h-6`}
                  />
                  <h1 className="text-sm ml-2">Get in touch</h1>
                </div>
              </BorderButton> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full  xs:block sm:block md:hidden lg:hidden xl:hidden border-b border-slate-300 dark:border-slate-600 shadow-lg top-0 left-0  ">
        <div className="flex  flex-row items-center justify-between bg-white dark:bg-neutral-950 p-4 ">
          <Image
            src={darkMode ? darkmodeonlyicon : logoiconsvg}
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <div className="flex flex-row items-center">
            <ThemeSwitch />
            {/* <Button
              variant="ghost"
              fullWidth
              size="lg"
              className=" rounded-full border ml-4 "
              title="Dashboard"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              <div className="flex flex-row items-center">
                <DashboardIcon
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } w-5 h-5`}
                />
                <h1 className="text-sm ml-2">My Dashboard</h1>
              </div>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
