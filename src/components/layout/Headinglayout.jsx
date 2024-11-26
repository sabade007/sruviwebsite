"use client";
import React, { useEffect, useState } from "react";
import bg from "@/assets/background/bg.png";
import hg from "@/assets/background/hg.png";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useTheme } from "next-themes";
import { Button, LinkIcon } from "@nextui-org/react";
import { motion } from "framer-motion";
import { LinkSquare01Icon, SunFilledIcon } from "../icons";

const Headinglayout = ({
  heading,
  subheading,
  useinview,
  buton,
  oniconclick,
}) => {
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="w-full h-full z-10">
      <div className="xs:block sm:block md:hidden lg:hidden xl:hidden">
        <div className="mt-10 max-w-7xl mx-auto p-4">
          <div className="w-full h-full">
            <div className="h-full flex items-center justify-center w-full  relative">
              <div
                style={{
                  backgroundImage: `url(${darkMode ? bg.src : hg.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "right",
                  backgroundPosition: "center",
                }}
                className="w-full h-[50%] flex items-center  absolute border border-slate-300 dark:border-slate-600 rounded-xl  "
              ></div>

              <div className="h-full w-[80%] border border-slate-300 dark:border-slate-900 p-2 flex flex-col justify-center dark:bg-[#060607]  items-center   z-50 rounded-2xl bg-white dark:bg-[#060607] ">
                <div className="w-full flex items-center justify-center flex-row">
                  <h1 className="text-xl font-bold text-primary">{heading}</h1>
                  {buton && (
                    <div onClick={oniconclick}>
                      <LinkSquare01Icon className="text-primary h-4 w-4 ml-2" />
                    </div>
                  )}
                </div>

                <h1 className="text-center">{subheading}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden">
        <div className="mt-10 max-w-7xl mx-auto p-10">
          <div className="w-full h-full">
            <div className="h-full flex items-center  w-full  relative">
              <div
                style={{
                  backgroundImage: `url(${darkMode ? bg.src : hg.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "right",
                  backgroundPosition: "start",
                }}
                className="w-full h-[50%] flex items-center justify-end absolute border border-slate-300 dark:border-slate-600 rounded-xl  "
              >
                <div className="w-[70%] flex items-center h-full">
                  <div className="w-full h-full flex flex-row items-center">
                    <div className="grid grid-cols-12 w-full">
                      <div className="col-span-10 flex items-center">
                        <TextGenerateEffect filter={false} words={subheading} />
                      </div>
                      <div className="col-span-2 flex justify-end mr-4">
                        {buton && (
                          <Button
                            isIconOnly
                            variant="ghost"
                            color="primary"
                            aria-label="Take a photo"
                            size="sm"
                            onClick={oniconclick}
                            onMouseEnter={() => setMouseEnter(true)}
                            onMouseLeave={() => setMouseEnter(false)}
                          >
                            <LinkSquare01Icon
                              className={`${
                                mouseEnter ? "text-white" : "text-primary "
                              }`}
                            />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-full w-[25%] border border-slate-300 dark:border-slate-900 p-8 flex flex-col justify-center dark:bg-[#060607] items-center  ml-10 z-50 rounded-2xl bg-white dark:bg-[#060607] ">
                <h1 className="text-xl font-bold text-primary">{heading}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headinglayout;
