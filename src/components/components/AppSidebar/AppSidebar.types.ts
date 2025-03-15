import { type LucideIcon } from "lucide-react";

export interface ItemBaseProps {
  title: string;
  url?: string;
  isActive?: boolean;
}

export type SubItemProps = ItemBaseProps;

export interface ItemProps extends ItemBaseProps {
  Icon: LucideIcon;
  items?: SubItemProps[];
}

export interface Group {
  label?: string;
  items: ItemProps[];
}

export interface GroupsProps {
  groups: Group[];
}
