import { FC, PropsWithChildren } from "react";
import ReactQueryProvider from "./service-provider";
import { ThemeProvider } from "./theme-provider";
import { NuqsProvider } from "./nuqs-provider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <NuqsProvider>{children}</NuqsProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
