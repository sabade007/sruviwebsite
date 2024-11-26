import React, { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useInView } from "framer-motion";
import Headinglayout from "../layout/Headinglayout";

const Testimonials = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const testimonials = [
    {
      quote:
        "I just wanted to say thank you to all the people who have been a part of our journey. I am so happy that I am able to work with them.",
      name: "Shalini",
      title: "Entreprenuer",
    },
    {
      quote:
        "Your commitment to data security is unmatched. Our sensitive information sleeps soundly at night, thanks to your vigilant watch.",
      name: "Shreya",
      title: "Surya Tech, CEO",
    },
    {
      quote:
        "Your integration services turned our tech stack into a harmonious symphony. Our team now hums along happily—no more discordant notes!",
      name: "Vandana",
      title: "Study & Shine, CEO",
    },
    {
      quote:
        "From inception to implementation, your team has been our unwavering support. Quick responses, personalized attention, and brilliant problem-solving—what more could we ask for?",
      name: "John Lewis",
      title: "Australia Traffic Dept.",
    },
  ];

  return (
    <div>
      <div
        className="xs:block sm:block md:hidden lg:hidden xl:hidden"
        ref={ref}
      >
        <Headinglayout
          heading={"Testimonials"}
          subheading={"What our clients say|"}
          useinview={inview}
        />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover
          autoPlay
        />
      </div>

      <div className="max-w-7xl hidden md:block mx-auto" ref={ref}>
        <Headinglayout
          heading={"Testimonials"}
          subheading={"What our clients say|"}
          useinview={inview}
        />

        <div className="p-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
