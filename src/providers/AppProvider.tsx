"use client";

import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/primitives/sidebar";

interface RootProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: RootProviderProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
