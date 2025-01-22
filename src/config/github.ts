export const GITHUB_CONFIG = {
  token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "",
  username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "",
  apiUrl:
    process.env.NEXT_PUBLIC_GITHUB_API_URL || "https://api.github.com/graphql",
};
