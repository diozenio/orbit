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
