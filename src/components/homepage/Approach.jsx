import React, { useRef } from "react";
import Headinglayout from "../layout/Headinglayout";
import { useInView } from "framer-motion";

const Approach = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const welcomenotes = [
    {
      title: "User-Centric Design",
      desc: "We prioritize the end-user experience in every line of code and design element, ensuring intuitive and engaging interactions.",
    },
    {
      title: "Agile Methodology",
      desc: "We prioritize the end-user experience in every line of code and design element, ensuring intuitive and engaging interactions.",
    },
    {
      title: "Innovative Solutions",
      desc: "We leverage the latest technologies to provide forward-thinking solutions that address complex challenges.",
    },
    {
      title: "Collaborative Process",
      desc: "We work closely with clients to ensure their vision is realized, with transparency and communication at every step.",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing protocols are in place to guarantee the reliability and performance of our software products.",
    },

    {
      title: "Sustainable Practices",
      desc: "Our development process is mindful of future scalability and maintenance, ensuring long-term success.",
    },
  ];

  const Divv = ({ title, desc }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        <h1 className="text-lg font-bold text-primary">{title}</h1>
        <h1 className="text-base ">{desc}</h1>
      </div>
    );
  };

  return (
    <div>
      <div
        className="xs:block sm:block md:hidden lg:hidden xl:hidden"
        ref={ref}
      >
        <Headinglayout
          heading={"Approach"}
          subheading={"Our Craft in Creation"}
          useinview={inview}
        />

        <div className="grid w-full  p-10 grid-cols-1 gap-4 ">
          {welcomenotes.map((item, index) => {
            return (
              <Divv key={index} title={item.title} desc={item.desc}></Divv>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl hidden md:block mx-auto" ref={ref}>
        <Headinglayout
          heading={"Approach"}
          subheading={"Our Craft in Creation"}
          useinview={inview}
        />

        <div className="grid w-full  p-10 grid-cols-3 gap-4 ">
          {welcomenotes.map((item, index) => {
            return (
              <Divv key={index} title={item.title} desc={item.desc}></Divv>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Approach;
