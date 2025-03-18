"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="ligth">
      {children}
    </NextThemeProvider>
  );
};
