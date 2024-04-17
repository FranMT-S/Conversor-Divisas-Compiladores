import { PropsWithChildren } from "react";

type Props = {
  selectedCurrency: string;
};

function DestinationTitle({
  children,
  selectedCurrency,
}: PropsWithChildren<Props>) {
  return (
    <h2 className="text-white text-left mr-auto capitalize">
      {children}: {selectedCurrency}
    </h2>
  );
}

export default DestinationTitle;
