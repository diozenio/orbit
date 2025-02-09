import { CryptoAsset } from "@/components/components/crypto";

const mockData: CryptoAsset[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 48235.12,
    changes: {
      "1h": 0.5,
      "12h": 1.2,
      "24h": -2.1,
      "7d": 5.3,
      "30d": 15.7,
    },
    amount: 0.5,
    value: 24117.56,
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2312.45,
    changes: {
      "1h": -0.3,
      "12h": 0.8,
      "24h": 1.5,
      "7d": -3.2,
      "30d": 8.9,
    },
    amount: 3.2,
    value: 7399.84,
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.54,
    changes: {
      "1h": 1.2,
      "12h": -0.5,
      "24h": 3.2,
      "7d": 7.8,
      "30d": -5.4,
    },
    amount: 5000,
    value: 2700,
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 102.45,
    changes: {
      "1h": 2.1,
      "12h": 3.5,
      "24h": 5.2,
      "7d": 12.8,
      "30d": 25.4,
    },
    amount: 10,
    value: 1024.5,
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 7.23,
    changes: {
      "1h": -1.2,
      "12h": -2.5,
      "24h": 1.8,
      "7d": -4.2,
      "30d": 3.7,
    },
    amount: 150,
    value: 1084.5,
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
  },
];

export function usePortfolioTracker() {
  return {
    assets: mockData,
  };
}
