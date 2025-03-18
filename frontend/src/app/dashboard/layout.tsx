import { PropsWithChildren } from "react";
import { AppSidebar } from "./_components/app-sibebar";

import { Separator } from "@/components/atoms/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/atoms/sidebar";

import { DynamicBreadcrumb } from "@/components/molecules/dynamic-breadcrumb";
import { ModeToggle } from "@/components/molecules/mode-toggle";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="px-4 sticky top-0  backdrop-blur-sm bg-background/40 z-40">
          <header className="flex h-16 shrink-0 items-center justify-between pr-4 gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DynamicBreadcrumb />
            </div>
            <ModeToggle />
          </header>
          <Separator className="px-2" />
        </div>

        <div className="flex flex-1 flex-col gap-4 px-2 py-4 md:px-4 md:py-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
