"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children, themeProps }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider
        disableTransitionOnChange
        {...themeProps}
        attribute="class"
        defaultTheme="light"
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
