import { useState } from "react";
import CompilerResults from "./Modal/CompilerResults";
import Button from "./UI/Button";
import CPUIcon from "./Icons/CPUIcon";
import CashIcon from "./Icons/CashIcon";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section className="converter-info w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-deep_coral flex items-center gap-1">
            Conversor de Divisas
            <CashIcon variant="outline" />
          </h1>

          <Button
            type="button"
            variant="text"
            onClick={openModal}
            className="text-sm font-semibold"
          >
            Compilador
            <CPUIcon variant="outline" />
          </Button>
        </div>

        <p className="converter-description font-light text-md text-gray-400 text-left text-slate-200">
          Selecciona la moneda de origen y la moneda de destino de la lista.
        </p>
      </section>

      <CompilerResults isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default HeaderSection;
