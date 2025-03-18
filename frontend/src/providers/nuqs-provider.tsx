"use client";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { FC, PropsWithChildren } from "react";

export const NuqsProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};
