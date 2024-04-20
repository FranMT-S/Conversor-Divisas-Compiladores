import { FormEvent, InputHTMLAttributes } from "react";
import { CurrencyConverterDestinationProps } from "../ConverterSection";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  amount: number | string;
  changeCurrency: (data: CurrencyConverterDestinationProps) => void;
  destination:string
}

function CurrencyInput({ amount, changeCurrency, destination, ...inputProps }: Props) {
  const onInputHandler = (evt: FormEvent<HTMLInputElement>) => {
    const inputVal: string = evt.currentTarget.value;

    if (isNaN(+inputVal) || +inputVal < 0) return;

    changeCurrency({ amount: inputVal });
  };

const formatNumber = (amount:number|string) =>{

    if(amount == "") 
      return amount

    if(destination == 'target')
      return amount == -1 ? 0 : Number(amount).toFixed(2)
    else
      return amount == -1 ? 0 : amount

} 


  return (
    <div>
      <input
        placeholder="Ingresa una cantidad..."
        type="text"
        onInput={onInputHandler}
        value={formatNumber(amount)}
        className={`
            block
            mt-2
            w-full
            placeholder-gray-400/70rounded-lg
            border
            border-deep_coral
            rounded-lg
            px-4
            h-32
            py-2.5
            focus:border-deep_coral
            focus:outline-none
            focus:ring
            focus:ring-deep_coral
            focus:ring-opacity-5
            bg-gray
            text-slate-200
            resize-none
            text-5xl
        `}
        {...inputProps}
      />
    </div>
  );
}

export default CurrencyInput;
