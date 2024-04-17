import { PropsWithChildren, useReducer } from "react";
import {
  CurrencyConverterContext,
  CurrencyConverterDispatchContext,
  useCurrencyConverter,
} from "../contexts/CurrencyConverter.context";
import {
  CurrencyConverter,
  CurrencyConverterAction,
} from "../types/CurrencyConverter";

const reducer = (state: CurrencyConverter, action: CurrencyConverterAction) => {
  switch (action.type) {
    case "changeOrigin":
      return {
        ...state,
        origin: action.payload.origin,
      } as CurrencyConverter;
      break;

    case "changeTarget":
      return {
        ...state,
        target: action.payload.target,
      } as CurrencyConverter;
      break;

    case "changeBoth":
      return {
        origin: action.payload.origin,
        target: action.payload.target,
      } as CurrencyConverter;
      break;

    default:
      return state;
      break;
  }
};

export const CurrencyConverterProvider = function ({
  children,
}: PropsWithChildren) {
  const currencyConverter = useCurrencyConverter();
  const [state, dispatch] = useReducer(reducer, currencyConverter);

  return (
    <CurrencyConverterContext.Provider value={state}>
      <CurrencyConverterDispatchContext.Provider value={dispatch}>
        {children}
      </CurrencyConverterDispatchContext.Provider>
    </CurrencyConverterContext.Provider>
  );
};
