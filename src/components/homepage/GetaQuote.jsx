import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Headinglayout from "../layout/Headinglayout";
import { Button, Input, Textarea } from "@nextui-org/react";

const GetaQuote = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const [nam, setNam] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [mobile, setMobile] = useState("");
  const [submit, setSubmit] = useState(false);

  const submitt = () => {
    if (nam.length <= 2) {
      alert("Please enter a valid name");
      return;
    }

    if (email.length <= 5) {
      alert("Please enter a valid email");
      return;
    }

    if (requirements.length <= 5) {
      alert("Please enter a valid requirements");
      return;
    }

    if (mobile.length != 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    setSubmit(true);
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
        <div className=" w-full    p-4  gap-4 ">
          <div className="p-4 border dark:border-slate-600 rounded-xl">
            <h1 className="text-lg font-bold">
              Fill up your details and we will get in touch with you.
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-2">
                <Input
                  label="Name"
                  value={nam}
                  onChange={(e) => setNam(e.target.value)}
                  placeholder="Enter your Full Name"
                />
              </div>

              <div className="col-span-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="col-span-2">
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="col-span-2">
                <Textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  label="Requirements"
                  placeholder="Enter your Requirements"
                />
              </div>
            </div>
            {submit ? (
              <h1 className="text-lg font-bold mt-8">
                Your Quote has been submited
              </h1>
            ) : (
              <Button variant="ghost" className="mt-4" onClick={submitt}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl hidden md:block mx-auto" ref={ref}>
        <Headinglayout
          heading={"Quote"}
          subheading={"Get a Quote"}
          useinview={inview}
        />

        <div className=" w-full    p-10  gap-4 ">
          <div className="p-4 border dark:border-slate-600 rounded-xl">
            <h1 className="text-lg font-bold">
              Fill up your details and we will get in touch with you.
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-2">
                <Input
                  label="Name"
                  value={nam}
                  onChange={(e) => setNam(e.target.value)}
                  placeholder="Enter your Full Name"
                />
              </div>

              <div className="col-span-1">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="col-span-1">
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="col-span-2">
                <Textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  label="Requirements"
                  placeholder="Enter your Requirements"
                />
              </div>
            </div>
            {submit ? (
              <h1 className="text-lg font-bold mt-8">
                Your Quote has been submited
              </h1>
            ) : (
              <Button variant="ghost" className="mt-4" onClick={submitt}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetaQuote;
