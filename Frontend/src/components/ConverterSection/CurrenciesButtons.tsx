import { currencyList } from "../../helpers/currencyList";
import { Currency } from "../../types/CurrencyConverter";
import { CurrencyConverterDestinationProps } from "../ConverterSection";
import ButtonTab from "../UI/ButtonTab";

// const currenciesForBtns = currencyList.slice(0, 5);
// const currenciesForDropDown = currencyList.slice(5);

type Props = {
  selected: Currency;
  changeCurrency: (data: CurrencyConverterDestinationProps) => void;
};

function CurrenciesButtons({ selected, changeCurrency }: Props) {
  const clickHandler = (currency: Currency) => {
    changeCurrency({ currency });
  };

  return (
    <div className="flex flex-wrap justify-center gap whitespace-nowrap">
      {currencyList.map((currency) => (
        <ButtonTab
          key={currency.tokenID}
          onClick={() => clickHandler(currency)}
          isActive={currency.symbol == selected.symbol}
          title={currency.name}
        >
          {currency.symbol}
        </ButtonTab>
      ))}
    </div>
  );
}

export default CurrenciesButtons;
