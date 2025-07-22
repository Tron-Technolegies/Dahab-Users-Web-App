export const calculateElectricity = (miners, hostingPeriod) => {
  return parseFloat(
    (3.55 * 24 * miners * 365 * hostingPeriod * 0.051).toFixed(3)
  );
};

export const calculateMinerPrice = (miners, price) => {
  return parseInt(miners * price);
};

export const totalInvestment = (minerPrice, electricity) => {
  return parseFloat((minerPrice + electricity).toFixed(3));
};

export const btcEarned1 = (investment, btcPrice) => {
  return parseFloat((investment / btcPrice).toFixed(3));
};

export const calculateBtcEarnedByMining = (miners, hostingPeriod) => {
  return parseFloat(
    (0.00000075 * 100 * miners * 365 * hostingPeriod).toFixed(3)
  );
};

export const calculateBtcValue = (expectedPrice, yourCoins) => {
  return parseFloat((expectedPrice * yourCoins).toFixed(3));
};

export const CalculateNetProfit = (yourValue, investment) => {
  return parseFloat((yourValue - investment).toFixed(3));
};

export const calculateROI = (yourValue, investment) => {
  return parseFloat((yourValue / investment).toFixed(2));
};

export const CalculateProfitRatio = (netProfit, investment) => {
  return parseFloat((netProfit / investment).toFixed(2));
};
