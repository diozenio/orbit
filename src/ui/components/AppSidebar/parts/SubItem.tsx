import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/primitives/sidebar";
import Link from "next/link";
import { SubItemProps } from "../AppSidebar.types";

function SubItem({ title, url = "/", isActive }: SubItemProps) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={isActive}>
        <Link href={url}>
          <span>{title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

export default SubItem;
