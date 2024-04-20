import DestinationTitle from "./DestinationTitle";
import CurrenciesButtons from "./CurrenciesButtons";
import CurrencyInput from "./CurrencyInput";
import {
  CurrencyConverterDestination,
  destinations,
} from "../../types/CurrencyConverter";
import { CurrencyConverterDestinationProps } from "../ConverterSection";

const destinationsTitles = {
  origin: "origen",
  target: "destino",
};

type Props = {
  destination: destinations;
  currencyData: CurrencyConverterDestination;
  changeCurrency: (data: CurrencyConverterDestinationProps) => void;
};

function DestinationArea({ destination, currencyData, changeCurrency }: Props) {
  return (
    <div className="grow flex flex-col justify-start gap-5">
      <DestinationTitle selectedCurrency={currencyData.currency.name}>
        {destinationsTitles[destination]}
      </DestinationTitle>

      <CurrenciesButtons
        selected={currencyData.currency}
        changeCurrency={changeCurrency}
      />

      <CurrencyInput
        destination={destination}
        amount={currencyData.amount}
        changeCurrency={changeCurrency}
        disabled={destination == "target"}
      />
    </div>
  );
}

export default DestinationArea;
