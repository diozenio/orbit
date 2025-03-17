import { PropsWithChildren } from "react";
import { SidebarProvider } from "./SidebarProvider";
import { QueryProvider } from "./QueryProvider";
export function AppProvider({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </QueryProvider>
  );
}
