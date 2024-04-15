import MySVG from "../assets/bg.svg";
import CurrencyButtonContainer from "../components/CurrencyButtonContainer";
import HeaderSection from '../components/HeaderSection'
function CurrencyConverter() {
  return (
    <>
      <div className="bg-primary_dark h-screen flex flex-row items-center justify-center" style={{ backgroundImage: `url(${MySVG})` }}>
        <div className="gap-3 flex flex-col justify-center items-center w-[60%] h-[80%] rounded-xl bg-secundary_dark  shadow-xl hover:rounded-2xl">
          <div className="w-[100%] h-[8%]  border-b-[1px] text-right border-slate-700"></div>
          <HeaderSection/>
          <CurrencyButtonContainer/>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
