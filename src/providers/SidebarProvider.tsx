"use client";

import { AppSidebar } from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider as SidebarProviderUI,
} from "@/primitives/sidebar";
import { PropsWithChildren } from "react";

export function SidebarProvider({ children }: PropsWithChildren) {
  return (
    <SidebarProviderUI>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProviderUI>
  );
}
