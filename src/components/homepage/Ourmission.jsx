import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Headinglayout from "../layout/Headinglayout";
import { useTheme } from "next-themes";
import mission from "@/assets/copilot/mission.jpeg";
import vision from "@/assets/copilot/vision.jpeg";

const Ourmission = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const Divv = ({ title, desc, tt }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600 rounded-xl">
        {darkMode ? (
          <div>
            <h1 className="text-lg font-bold text-orange">{tt}</h1>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <h1 className="text-base ">{desc}</h1>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-4 gap-10">
            <div className="col-span-1 h-full">
              <img src={mission.src} alt="" />
            </div>
            <div className="col-span-3 flex flex-col justify-center h-full">
              <h1 className="text-lg font-bold text-orange">{tt}</h1>
              <h1 className="text-xl font-bold text-primary">{title}</h1>
              <h1 className="text-base ">{desc}</h1>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Divv2 = ({ title, desc, tt }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        {darkMode ? (
          <div>
            <h1 className="text-lg font-bold text-orange">{tt}</h1>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <h1 className="text-base ">{desc}</h1>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-4 gap-10">
            <div className="col-span-1 h-full">
              <img src={vision.src} alt="" />
            </div>
            <div className="col-span-3 flex flex-col justify-center h-full">
              <h1 className="text-lg font-bold text-orange">{tt}</h1>
              <h1 className="text-xl font-bold text-primary">{title}</h1>
              <h1 className="text-base ">{desc}</h1>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MDivv = ({ title, desc, tt }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600 rounded-xl">
        {darkMode ? (
          <div>
            <h1 className="text-lg font-bold text-orange">{tt}</h1>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <h1 className="text-base ">{desc}</h1>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-4 gap-10">
            <div className="col-span-4 h-full flex justify-center   items-center">
              <img src={mission.src} alt="" style={{ maxWidth: "50%" }} />
            </div>
            <div className="col-span-4 flex flex-col justify-center h-full">
              <h1 className="text-lg font-bold text-orange">{tt}</h1>
              <h1 className="text-xl font-bold text-primary">{title}</h1>
              <h1 className="text-base ">{desc}</h1>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MDivv2 = ({ title, desc, tt }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        {darkMode ? (
          <div>
            <h1 className="text-lg font-bold text-orange">{tt}</h1>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <h1 className="text-base ">{desc}</h1>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-4 gap-10">
            <div className="col-span-4 h-full flex justify-center   items-center">
              <img src={vision.src} alt="" style={{ maxWidth: "50%" }} />
            </div>
            <div className="col-span-4 flex flex-col justify-center h-full">
              <h1 className="text-lg font-bold text-orange">{tt}</h1>
              <h1 className="text-xl font-bold text-primary">{title}</h1>
              <h1 className="text-base ">{desc}</h1>
            </div>
          </div>
        )}
      </div>
    );
  };

  const mi = [
    {
      tt: "Our Mission",
      title: "Empowering Innovation, Enriching Lives",
      desc: "Our mission is to revolutionize the way people work and live by providing cutting-edge software solutions that simplify complex problems, increase efficiency, and enhance overall quality of life. We believe that technology has the power to bring people together, drive progress, and create a better future for all.",
    },
  ];

  const vi = [
    {
      tt: "Our Vision",
      title: "Transforming Tomorrow, Today",
      desc: "Our vision is to be a leading software company that enables a world where technology is harnessed to bring about positive change. We envision a future where our software solutions are used by individuals and organizations to drive innovation, improve lives, and make the world a better place.",
    },
  ];

  return (
    <div>
      <div
        className="xs:block sm:block md:hidden lg:hidden xl:hidden"
        ref={ref}
      >
        <Headinglayout
          heading={"Mission & Vision"}
          subheading={"Sruvi's Eagle Eye"}
          useinview={inview}
        />

        <div className=" w-full  p-10  gap-4 ">
          <div className="grid grid-cols-1  gap-20">
            <div className="col-span-1">
              <MDivv
                tt={mi[0].tt}
                title={mi[0].title}
                desc={mi[0].desc}
              ></MDivv>
            </div>
            <div className="col-span-1">
              <MDivv2
                tt={vi[0].tt}
                title={vi[0].title}
                desc={vi[0].desc}
              ></MDivv2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl hidden md:block mx-auto" ref={ref}>
        <Headinglayout
          heading={"Mission & Vision"}
          subheading={"Sruvi's Eagle Eye"}
          useinview={inview}
        />

        <div className=" w-full  p-10  gap-4 ">
          <div className="grid grid-cols-1  gap-20">
            <div className="col-span-1">
              <Divv tt={mi[0].tt} title={mi[0].title} desc={mi[0].desc}></Divv>
            </div>
            <div className="col-span-1">
              <Divv2
                tt={vi[0].tt}
                title={vi[0].title}
                desc={vi[0].desc}
              ></Divv2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmission;
