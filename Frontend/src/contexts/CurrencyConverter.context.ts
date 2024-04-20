import { Dispatch, createContext, useContext } from "react";
import {
  CurrencyConverter,
  CurrencyConverterAction,
} from "../types/CurrencyConverter";
import { currencyList } from "../helpers/currencyList";

const defaultValues: CurrencyConverter = {
  origin: { currency: currencyList[0], amount: 0 },
  target: { currency: currencyList[1], amount: 0 },
};

export const CurrencyConverterContext =  createContext<CurrencyConverter>(defaultValues);

export const CurrencyConverterDispatchContext = createContext<Dispatch<CurrencyConverterAction>>(() => {});

export const useCurrencyConverter = function () {
  return useContext(CurrencyConverterContext);
};

export const useCurrencyConverterDispatch = function () {
  return useContext(CurrencyConverterDispatchContext);
};
