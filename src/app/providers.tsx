"use client";

import { GlobalStyles } from "@/theme/global";
import { theme } from "@/theme/theme";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
