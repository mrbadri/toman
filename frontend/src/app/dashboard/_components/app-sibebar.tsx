"use client";

import {
  AudioWaveform,
  BarChart,
  Command,
  CreditCard,
  FileText,
  GalleryVerticalEnd,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Wallet,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/atoms/sidebar";

import { Separator } from "@/components/atoms/separator";
import NavLogo from "./nav-logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  user: {
    name: "Mohammad Reza Badri",
    email: "mrbadri.dev@gmail.com",
    avatar: "/images/profile.jpg",
  },
  teams: [
    {
      name: "divar.com",
      logo: GalleryVerticalEnd,
      plan: "Growth plan",
    },
    {
      name: "Google.com",
      logo: AudioWaveform,
      plan: "Startup plan",
    },
    {
      name: "Pixel.com",
      logo: Command,
      plan: "Free Plan",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Payments",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Send Payment",
          url: "#",
        },
        {
          title: "Receive Payment",
          url: "#",
        },
        {
          title: "Scheduled Payments",
          url: "#",
        },
        {
          title: "Payment list",
          url: "/dashboard/payments",
        },
      ],
    },
    {
      title: "Invoices",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Create Invoice",
          url: "#",
        },
        {
          title: "Manage Invoices",
          url: "#",
        },
        {
          title: "Recurring Invoices",
          url: "#",
        },
      ],
    },
    {
      title: "Payouts",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Bank Transfers",
          url: "#",
        },
        {
          title: "Wire Transfers",
          url: "#",
        },
        {
          title: "Scheduled Payouts",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics & Reports",
      url: "#",
      icon: BarChart,
      items: [
        {
          title: "Transaction Reports",
          url: "#",
        },
        {
          title: "Revenue Insights",
          url: "#",
        },
        {
          title: "Tax Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Customer List",
          url: "#",
        },
        {
          title: "Add New Customer",
          url: "#",
        },
      ],
    },
    {
      title: "Disputes & Chargebacks",
      url: "#",
      icon: ShieldAlert,
      items: [
        {
          title: "View Disputes",
          url: "#",
        },
        {
          title: "Resolution Center",
          url: "#",
        },
      ],
    },
  ],
  projects: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="bg-muted" {...props}>
      <SidebarHeader>
        <NavLogo />
        <Separator hidden={!open} />
        <TeamSwitcher teams={data.teams} />
        <Separator hidden={!open} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
