import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrencyConverterProvider } from "./providers/CurrencyConverter.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrencyConverterProvider>
      <App />
    </CurrencyConverterProvider>
  </React.StrictMode>
);
