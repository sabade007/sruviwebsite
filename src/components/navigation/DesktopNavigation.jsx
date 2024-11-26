import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  AboutIcon,
  BlogIcon,
  BusinessIcon,
  ContactIcon,
  HomeIcon,
  ProductsIcon,
  ServicesIcon,
} from "../icons";

const DesktopNavigation = ({ pathname }) => {
  const links = [
    {
      title: "Home",
      icon: (
        <HomeIcon
          className={`${
            pathname === "/"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/",
    },

    {
      title: "Solutions",
      icon: (
        <ProductsIcon
          className={`${
            pathname === "/products"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/products",
    },
    {
      title: "Services",
      icon: (
        <ServicesIcon
          className={`${
            pathname === "/services"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/services",
    },
    {
      title: "Consulting",
      icon: (
        <BusinessIcon
          className={`${
            pathname === "/consulting"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/consulting",
    },
    {
      title: "Blog",
      icon: (
        <BlogIcon
          className={`${
            pathname === "/blog"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/blog",
    },
    {
      title: "About",
      icon: (
        <AboutIcon
          className={`${
            pathname === "/about"
              ? "text-[#48c43c] dark:text-[#48c43c]"
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/about",
    },

    {
      title: "Get in touch",
      icon: (
        <ContactIcon
          className={`${
            pathname === "/getintouch"
              ? "text-[#48c43c] dark:text-[#48c43c] "
              : "text-black dark:text-neutral-300"
          } h-full w-full`}
        />
      ),
      href: "/getintouch",
    },
  ];
  return <FloatingDock items={links} desktopClassName={"z-999"} />;
};

export default DesktopNavigation;
