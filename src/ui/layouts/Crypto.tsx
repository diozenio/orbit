import { i18n } from "@/i18n";
import { PortfolioTracker } from "@/components/Crypto/PortfolioTracker";
import { usePortfolioTracker } from "@/hooks/usePortfolioTracker";
import { Scaffold } from "@/components/Scaffold";

export default function CryptoLayout() {
  const { assets } = usePortfolioTracker();

  return (
    <Scaffold title={i18n.t("crypto.title")}>
      <PortfolioTracker assets={assets} />
    </Scaffold>
  );
}
