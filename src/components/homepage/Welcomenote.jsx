import React, { useRef } from "react";
import Headinglayout from "../layout/Headinglayout";
import { useInView } from "framer-motion";

const Welcomenote = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const Divv = ({ title, desc }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        <h1 className="text-lg font-bold text-primary">{title}</h1>
        <h1 className="text-base ">{desc}</h1>
      </div>
    );
  };

  const welcomenotes = [
    {
      title: "Welcome",
      desc: "We're stoked you're here! Our goal is to provide innovative software that helps businesses like yours succeed. Take a look around, and get ready to discover how our products can help you automate workflows, boost productivity, and delight your customers.",
    },
    {
      title: "Our Story",
      desc: "Our story began when our founders, Srikanth Sabade and Ravi Thuppal, met while working on a project together. They quickly discovered that they shared a vision for building software that would make a difference in people's lives.",
    },
    {
      title: "Our values",
      desc: "Our values are Authenticity, Integrity, and Excellence . We are committed to quality, transparency, and innovation. We take ownership of our actions and decisions, and hold ourselves accountable for delivering high-quality results.",
    },
    {
      title: "Our Team",
      desc: "Our team consists of professionals who are passionate about innovating. We are committed to building long-term relationships with our customers, partners, and stakeholders based on trust, transparency, and open communication. We are excited to work with you on our next project.",
    },
  ];

  return (
    <div>
      <div
        className="xs:block sm:block md:hidden lg:hidden xl:hidden"
        ref={ref}
      >
        <Headinglayout
          heading={"Welcome Note"}
          subheading={"We're thrilled to have you on board."}
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
          heading={"Welcome Note"}
          subheading={"We're thrilled to have you on board."}
          useinview={inview}
        />

        <div className="grid w-full  p-10 grid-cols-2 gap-4 ">
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

export default Welcomenote;
