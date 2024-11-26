import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";
import darklogo from "@/assets/logo/darkmodeonlylogo.png";

const Footer = () => {
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  return (
    <div className="w-full h-full p-10 border border-right-none">
      <img
        src={darkMode ? darklogo.src : logo.src}
        alt="logo"
        style={{ width: "100px", height: "auto" }}
      />
      <div>
        <h1 className="mt-4 text-lg font-bold">Sruvi Inc.</h1>
        <h1>
          Address: No 99, kathriguppe 4th main road, poornaprajna layout,
          Bengaluru, Karnataka -560085
        </h1>
        <h1>Phone: +91 9731171611</h1>
        <h1>Email: hello@sruvi.in</h1>
        <h1> © Copyrights 2023 Sruvi Inc</h1>
      </div>
    </div>
  );
};

export default Footer;
