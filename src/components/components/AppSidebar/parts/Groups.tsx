import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Item from "./Item";
import { GroupsProps } from "../AppSidebar.types";
import { usePathname } from "next/navigation";
import { isItemActive } from "./isItemActive";

function Groups({ groups }: GroupsProps) {
  const pathname = usePathname();

  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.label ?? `group-${group.items[0]?.title}`}>
          {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
          <SidebarMenu>
            {group.items.map((item) => {
              return (
                <Item
                  key={item.title}
                  {...item}
                  isActive={isItemActive(item, pathname)}
                />
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}

export default Groups;
