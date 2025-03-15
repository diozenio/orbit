import { ItemBaseProps, ItemProps } from "../AppSidebar.types";

export function isItemActive(
  item: ItemBaseProps | ItemProps,
  pathname: string
): boolean {
  if (item.url === pathname) {
    return true;
  }

  if ("items" in item && Array.isArray(item.items)) {
    return item.items.some((subItem) => subItem.url === pathname);
  }

  return false;
}
