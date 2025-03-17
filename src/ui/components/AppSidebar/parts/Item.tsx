import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/primitives/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/primitives/sidebar";
import SubItem from "./SubItem";
import { ChevronRight } from "lucide-react";
import { ItemProps } from "../AppSidebar.types";
import Link from "next/link";
import { isItemActive } from "./isItemActive";
import { usePathname } from "next/navigation";

function SimpleItem({ Icon, title, isActive, url = "/" }: ItemProps) {
  return (
    <SidebarMenuItem>
      <Link href={url}>
        <SidebarMenuButton tooltip={title} isActive={isActive}>
          <Icon />
          <span>{title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}

function CollapsibleItem({ Icon, title, items, isActive }: ItemProps) {
  const pathname = usePathname();
  return (
    <Collapsible asChild defaultOpen={isActive} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={title} isActive={isActive}>
            <Icon />
            <span>{title}</span>
            {items && (
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items?.map((subItem) => (
              <SubItem
                key={subItem.title}
                {...subItem}
                isActive={isItemActive(subItem, pathname)}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function Item({ Icon, title, items, isActive, url }: ItemProps) {
  const hasItems = items && items.length > 0;
  return hasItems ? (
    <CollapsibleItem
      Icon={Icon}
      title={title}
      items={items}
      isActive={isActive}
    />
  ) : (
    <SimpleItem Icon={Icon} title={title} isActive={isActive} url={url} />
  );
}

export default Item;
