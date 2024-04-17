export type Currency = {
  tokenID: string;
  symbol: string;
  name: string;
};

export type CurrencyConverterDestination = {
  currency: Currency;
  amount: number;
};

export type CurrencyConverter = {
  origin: CurrencyConverterDestination;
  target: CurrencyConverterDestination;
};

export type CurrencyConverterAction = {
  type: "changeOrigin" | "changeTarget" | "changeBoth";
  payload: Partial<CurrencyConverter>;
};

export type destinations = "origin" | "target";

// export type CurrencyConverterAction = {
//   type:
//     | "changeOriginCurrency"
//     | "changeOriginAmount"
//     | "changeTargetCurrency"
//     | "changeTargetAmount";
//   payload: Partial<CurrencyConverter>;
// };
