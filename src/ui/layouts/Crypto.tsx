import { SidebarTrigger } from "@/primitives/sidebar";
import { i18n } from "@/i18n";
import { PortfolioTracker } from "@/components/Crypto/PortfolioTracker";
import { usePortfolioTracker } from "@/hooks/usePortfolioTracker";

export default function CryptoLayout() {
  const { assets } = usePortfolioTracker();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row gap-1 items-center">
        <SidebarTrigger className="flex md:hidden" />
        <h1 className="text-xl font-semibold">{i18n.t("crypto.title")}</h1>
      </div>
      <PortfolioTracker assets={assets} />
    </main>
  );
}
