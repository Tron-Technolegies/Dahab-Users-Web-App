export const base_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/mining"
    : "https://api.dahabminers.com/api/mining";
