import { useEffect, useState } from "react";
import {
  convertCurrency,
  getConvertCurrencyTree,
} from "../../../services/currencyConverter";
import { useCurrencyConverter } from "../../../contexts/CurrencyConverter.context";
import { CompilerResults } from "../../../types/CompilerResults";

function CompilerResultsContent() {
  const currencyConverter = useCurrencyConverter();
  const [results, setResults] = useState<CompilerResults | null>(null);
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      const convertionWithTokens = await convertCurrency(currencyConverter);
      const imageTreeBlob = await getConvertCurrencyTree(currencyConverter);

      if (convertionWithTokens?.isSuccess && imageTreeBlob) {
        setResults({
          tokens: convertionWithTokens?.tokens,
          tree: {
            data: convertionWithTokens?.tree,
            imgBlob: imageTreeBlob,
          },
        });
      }
    };

    fetchResults();
  }, [currencyConverter]);

  useEffect(() => {
    if (results?.tree.imgBlob)
      setImgURL(URL.createObjectURL(results?.tree.imgBlob));
  }, [results]);

  return (
    <div className="mt-2 flex h-[50vh]">
      <div className="basis-1/2">
        <h3 className="text-center font-semibold text-xl text-secundary_dark mb-4">
          Tokens
        </h3>

        <ul className="flex flex-col gap-2 items-center overflow-auto">
          {results?.tokens.map((token) => (
            <li className="list-disc" key={token.position}>
              <p className="block capitalize">
                <span className="font-semibold text-gray">posicion:</span>{" "}
                {token.position}
              </p>

              <p className="block capitalize">
                <span className="font-semibold text-gray">tipo:</span>{" "}
                {token.type}
              </p>

              <p className="block capitalize">
                <span className="font-semibold text-gray">valor:</span>{" "}
                {token.value}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="basis-1/2">
        <h3 className="text-center font-semibold text-xl text-secundary_dark mb-4">
          Arbol
        </h3>
        <img src={imgURL} />
      </div>
    </div>
  );
}

export default CompilerResultsContent;
