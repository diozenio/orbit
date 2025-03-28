import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/primitives/sidebar";
import { Orbit } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="group-data-[state=collapsed]:bg-primary group-data-[state=collapsed]:hover:bg-primary"
            asChild
          >
            <Link href="/" className="flex items-center gap-3 w-full">
              <div className="flex aspect-square size-8 group-data-[state=collapsed]:w-full items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Orbit className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none group-data-[state=collapsed]:hidden">
                <span className="font-semibold">Orbit</span>
                <span className="text-xs text-muted-foreground">Workspace</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default Logo;
