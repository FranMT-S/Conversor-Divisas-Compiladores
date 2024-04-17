import Divider from "./ConverterSection/Divider";
import DestinationArea from "./ConverterSection/DestinationArea";
import {
  useCurrencyConverter,
  useCurrencyConverterDispatch,
} from "../contexts/CurrencyConverter.context";
import {
  CurrencyConverterDestination,
  destinations,
} from "../types/CurrencyConverter";
import { convertCurrency } from "../services/currencyConverter";
import { useEffect, useState } from "react";

export type CurrencyConverterDestinationProps =
  Partial<CurrencyConverterDestination>;

function ConverterSection() {
  const [fetcherAuxCounter, setFetcherAuxCounter] = useState(0);
  const currencyConverter = useCurrencyConverter();
  const currencyConverterDispatch = useCurrencyConverterDispatch();

  const changeCurrencyHandler = async (
    destination: destinations,
    data: CurrencyConverterDestinationProps
  ) => {
    if (destination == "origin") {
      currencyConverterDispatch({
        type: "changeOrigin",
        payload: {
          origin: {
            ...currencyConverter.origin,
            ...data,
          },
        },
      });
    } else if (destination == "target") {
      currencyConverterDispatch({
        type: "changeTarget",
        payload: {
          target: {
            ...currencyConverter.target,
            ...data,
          },
        },
      });
    }

    setFetcherAuxCounter((prev) => prev + 1);
  };

  const interChangeCurrenciesHandler = () => {
    currencyConverterDispatch({
      type: "changeBoth",
      payload: {
        origin: {
          ...currencyConverter.origin,
          currency: currencyConverter.target.currency,
        },
        target: {
          ...currencyConverter.target,
          currency: currencyConverter.origin.currency,
        },
      },
    });

    setFetcherAuxCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchConvertion = async () => {
      const convertResult = await convertCurrency(currencyConverter);

      currencyConverterDispatch({
        type: "changeTarget",
        payload: {
          target: {
            ...currencyConverter.target,
            amount: convertResult?.result ?? -1,
          },
        },
      });
    };

    fetchConvertion();
  }, [fetcherAuxCounter]);

  return (
    <div className="w-full rounded-xl gap-5 mb-14 bg-gray shadow-xl p-6 hover:rounded-2xl flex items-center">
      <DestinationArea
        destination="origin"
        currencyData={currencyConverter.origin}
        changeCurrency={(data: CurrencyConverterDestinationProps) =>
          changeCurrencyHandler("origin", data)
        }
      />

      <Divider interchangeCurrencies={interChangeCurrenciesHandler} />

      <DestinationArea
        destination="target"
        currencyData={currencyConverter.target}
        changeCurrency={(data: CurrencyConverterDestinationProps) =>
          changeCurrencyHandler("target", data)
        }
      />
    </div>
  );
}

export default ConverterSection;
