import Divider from "./Divider";

// Divisas: Dolar(USD), Euro(EUR), Lempira(HNL), Quetzal(GTQ), Libra Esterlina(GBP), Balboas(PAB), Yen(JPY) y Rupias(INR)

function CurrencyButtonContainer() {
  return (
    <>
      <div className="w-[85%] h-[80%] rounded-xl gap-5 mb-14 bg-gray shadow-xl py-6 hover:rounded-2xl flex">
        
        <div className="w-1/2 flex flex-col justify-start items-center gap-5">
          <h2 className="text-white text-left mr-auto pl-10">Origen</h2>
          <div className="flex overflow-x-auto whitespace-nowrap">
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              USD
            </button>
            <button className="inline-flex items-center h-8 text-center  text-xs px-2 font-semibold bg-deep_coral rounded-t-md text-slate-800 bg-transparent border-b border-gray-300  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              EUR
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              HNL
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              GTQ
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              QTQ
            </button>
          </div>
          <div>
            <textarea
              placeholder="Ingresa una cantidad..."
              className="block  mt-2 w-full placeholder-gray-400/70rounded-lg border border-deep_coral rounded-lg  px-4 h-32 py-2.5  focus:border-deep_coral focus:outline-none focus:ring focus:ring-deep_coral focus:ring-opacity-5  bg-gray text-slate-200 "
            ></textarea>
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div> 
        </div>

        <Divider />

        <div className="w-1/2 flex flex-col justify-start items-center gap-5">
          <h2 className="text-white text-left mr-auto pl-10">Destino</h2>
          <div className="flex overflow-x-auto whitespace-nowrap">
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              GBP
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2  font-semibold bg-deep_coral rounded-t-md text-slate-800   bg-transparent border-b border-gray-300  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              PAB
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              JPY
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              INR
            </button>
            <button className="inline-flex items-center h-8 text-center text-xs px-2 text-slate-100 bg-transparent border-b border-gray-300 sm:px-4   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
              INR
            </button>
          </div>
          <div>
            <textarea readOnly className="block  mt-2 w-full  dark:placeholder-gray-500 rounded-lg border border-deep_coral px-4 h-32 py-2.5  focus:border-deep_coral focus:outline-none focus:ring focus:ring-deep_coral focus:ring-opacity-5  bg-gray text-gray-300 "></textarea>
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default CurrencyButtonContainer;
