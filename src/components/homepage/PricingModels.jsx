import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Headinglayout from "../layout/Headinglayout";

const PricingModels = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const BriefcaseDollarIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"currentColor"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 12H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 12L18 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const welcomenotes = [
    {
      title: "Fixed Price Model",
      desc: "The cost is agreed upon before the project starts and remains constant regardless of any changes or unforeseen challenges.",
    },
    {
      title: "Time & Material Model",
      desc: "Clients pay for the actual time and resources spent on the project. This model is flexible and allows for changes during the development process.",
    },
    {
      title: "Hybrid Model",
      desc: "Combines elements of fixed price and time and material models. Some parts of the project are fixed price, while others are billed on a time and material basis.",
    },
    {
      title: "Gain-Sharing Model",
      desc: "The service provider shares in the financial gains resulting from the project's success. Payments are tied to achieving specific performance metrics.",
    },
  ];

  const Divv = ({ title, desc }) => {
    return (
      <div className="p-4 w-full h-full border dark:border-slate-600  rounded-xl">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-primary">{title}</h1>
        </div>
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
          heading={"Pricing"}
          subheading={"Choose the plan that's right for you"}
          useinview={inview}
        />

        <div className="w-full h-full p-10 pb-0">
          <h1 className="mb-4">
            At our software development company, we understand that each project
            has unique requirements and constraints. We are open to discussing
            these pricing models with our clients to determine the best approach
            for their specific needs. By working together, we can create a
            customized pricing structure that ensures mutual success and
            satisfaction.
          </h1>
        </div>

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
          heading={"Pricing"}
          subheading={"Choose the plan that's right for you"}
          useinview={inview}
        />
        <div className="w-full h-full p-10 pb-0">
          <h1 className="mb-4">
            At our software development company, we understand that each project
            has unique requirements and constraints. We are open to discussing
            these pricing models with our clients to determine the best approach
            for their specific needs. By working together, we can create a
            customized pricing structure that ensures mutual success and
            satisfaction.
          </h1>
        </div>
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

export default PricingModels;
