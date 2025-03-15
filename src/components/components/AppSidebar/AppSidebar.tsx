"use client";

import * as React from "react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { Groups, Logo, Toggle } from "./parts";
import { sidebarItems } from "./sidebarItems";

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Logo />
      <SidebarContent>
        <Groups groups={sidebarItems} />
      </SidebarContent>
      <Toggle />
    </Sidebar>
  );
}
