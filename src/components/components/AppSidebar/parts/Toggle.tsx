import { SidebarRail } from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";

function Toggle() {
  return (
    <SidebarRail>
      <div className="absolute inset-0 flex items-center justify-center z-10 group/toggle">
        <div className="py-2 rounded bg-muted opacity-0 group-hover/toggle:opacity-100 transition-opacity duration-200 ease-in-out">
          <ChevronLeft
            size={16}
            className="group-data-[state=collapsed]:rotate-180  transition-transform duration-200 ease-in-out"
          />
        </div>
      </div>
    </SidebarRail>
  );
}

export default Toggle;
