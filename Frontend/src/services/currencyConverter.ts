import { CurrencyConverter } from "../types/CurrencyConverter";
import { ResponseModel, TreeImg } from "../types/CurrencyConverterHttp";

const apiUrl = import.meta.env.VITE_API_URL;

export const convertCurrency = async function (data: CurrencyConverter) {
  try {
    const resp = await fetch(apiUrl + "/currencies", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cur_input: data.origin.currency.tokenID,
        value: data.origin.amount,
        cur_output: data.target.currency.tokenID,
      }),
    });

    if (resp.status != 200) throw new Error("Algo salio mal");

    const result: ResponseModel = await resp.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getConvertCurrencyTree = async function (data: CurrencyConverter) {
  try {
    const resp = await fetch(apiUrl + "/currencies/tree", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cur_input: data.origin.currency.tokenID,
        value: data.origin.amount,
        cur_output: data.target.currency.tokenID,
      }),
    });

    if (resp.status != 200) throw new Error("Algo salio mal");

    const result: TreeImg = await resp.blob();

    return result;
  } catch (error) {
    console.log(error);
  }
};
