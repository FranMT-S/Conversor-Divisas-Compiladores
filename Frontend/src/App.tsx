import CurrencyConverter from "./views/CurrencyConverter.js";
import MySVG from "./assets/bg.svg";

function App() {
  return (
    <div
      className="bg-primary_dark min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${MySVG})` }}
    >
      <CurrencyConverter />
    </div>
  );
}

export default App;
