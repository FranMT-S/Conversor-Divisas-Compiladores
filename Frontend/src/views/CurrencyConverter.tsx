import AppConfigOptions from "../components/AppConfigOptions";
import ConverterSection from "../components/ConverterSection";
import HeaderSection from "../components/HeaderSection";

function CurrencyConverter() {
  return (
    <div className="max-w-4xl w-11/12 h-[80%] rounded-xl bg-secundary_dark shadow-xl hover:rounded-2xl">
      <AppConfigOptions />

      <section className="w-[85%] gap-7 flex flex-col justify-center items-center mx-auto mt-10">
        <HeaderSection />
        <ConverterSection />
      </section>
    </div>
  );
}

export default CurrencyConverter;
