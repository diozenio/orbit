import { i18n } from "@/i18n";
import { Bitcoin, Home } from "lucide-react";
import { Group as AppSidebarItems } from "./AppSidebar.types";

export const sidebarItems: AppSidebarItems[] = [
  {
    items: [
      {
        title: i18n.t("sidebar.home"),
        url: "/",
        Icon: Home,
      },
    ],
  },
  {
    label: i18n.t("sidebar.finances.label"),
    items: [
      {
        title: i18n.t("sidebar.finances.crypto"),
        url: "/crypto",
        Icon: Bitcoin,
      },
    ],
  },
];
