import { SidebarTrigger } from "@/primitives/sidebar";
import { PropsWithChildren } from "react";

interface ScaffoldProps {
  title: string;
  actions?: React.ReactNode;
}

export default function Scaffold({
  children,
  title,
  actions,
}: PropsWithChildren<ScaffoldProps>) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 @container/main">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <SidebarTrigger className="flex md:hidden" />
          <h1 className="text-xl xl:text-2xl font-semibold">{title}</h1>
        </div>
        {actions}
      </div>
      {children}
    </main>
  );
}
