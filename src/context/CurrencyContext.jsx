import {  createContext, useContext, useState } from "react";
import useCurrencyInfo from "../hooks/useCurrency.js";

const currencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(10);

  const [convertedCurrenncy, setConvertedCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(
    useCurrencyInfo(currency)[convertedCurrenncy] * amount
  );

  return (
    <currencyContext.Provider
      value={{
        amount,
        setAmount,
        convertedAmount,
        setConvertedAmount,
        currency,
        setCurrency,
        convertedCurrenncy,
        setConvertedCurrency,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
};


export const useCurrencyProvider=()=>useContext(currencyContext)