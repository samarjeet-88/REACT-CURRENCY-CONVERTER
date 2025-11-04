import React, { useEffect, useState, useRef } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import useCurrencyInfo from "../hooks/useCurrency";
import { useCurrencyContext } from "../context";

function Countrymap({isConvertComp}) {

  const {currency,setCurrency,convertedCurrency,setConvertedCurrency}=useCurrencyContext()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentCurrency = isConvertComp?convertedCurrency:currency;

  const currencyToCountry = {
    USD: "US",
    AUD: "AU",
    BGN: "BG",
    BRL: "BR",
    CAD: "CA",
    CHF: "CH",
    CNY: "CN",
    CZK: "CZ",
    DKK: "DK",
    EUR: "EU",
    GBP: "GB",
    HKD: "HK",
    HRK: "HR",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    ISK: "IS",
    JPY: "JP",
    KRW: "KR",
    MXN: "MX",
    MYR: "MY",
    NOK: "NO",
    NZD: "NZ",
    PHP: "PH",
    PLN: "PL",
    RON: "RO",
    RUB: "RU",
    SEK: "SE",
    SGD: "SG",
    THB: "TH",
    TRY: "TR",
    ZAR: "ZA",
  };
  const countryToCurrency = {
    US: "USD",
    AU: "AUD",
    BG: "BGN",
    BR: "BRL",
    CA: "CAD",
    CH: "CHF",
    CN: "CNY",
    CZ: "CZK",
    DK: "DKK",
    EU: "EUR",
    GB: "GBP",
    HK: "HKD",
    HR: "HRK",
    HU: "HUF",
    ID: "IDR",
    IL: "ILS",
    IN: "INR",
    IS: "ISK",
    JP: "JPY",
    KR: "KRW",
    MX: "MXN",
    MY: "MYR",
    NO: "NOK",
    NZ: "NZD",
    PH: "PHP",
    PL: "PLN",
    RO: "RON",
    RU: "RUB",
    SE: "SEK",
    SG: "SGD",
    TH: "THB",
    TR: "TRY",
    ZA: "ZAR",
  };

  const changeCountry = (countryCurrency) => {
    console.log(countryCurrency)
    if (isConvertComp) {
      setConvertedCurrency(countryCurrency);
    } else {
      setCurrency(countryCurrency);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex gap-3 justify-center items-center">
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <img
            src={`https://flagsapi.com/${currencyToCountry[currentCurrency]}/flat/64.png`}
            className="w-full h-full object-cover"
            alt="flag"
          />
        </div>
        <p className="text-2xl font-bold text-gray-400">
          {currencyToCountry[currentCurrency]}
        </p>
        <ArrowDownIcon
          className="w-6 h-6"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </div>
      {isModalOpen && (
        <div
          className="absolute left-0 top-[120%] mt-2 w-full max-h-72 bg-[#1f1f1f] rounded-xl shadow-lg overflow-y-auto border border-gray-700 z-50"
          style={{ scrollbarColor: "#8ED164 #2c2c2c", scrollbarWidth: "thin" }}
        >
          {Object.keys(currencyToCountry).map((countryCurrency) => (
            // MAKE THIS ONCLICK TO ADD A FUNCTION TO SELECT THE COUNTRY
            <div
              key={countryCurrency}
              className="flex items-center gap-3 p-2 hover:bg-[#2c2c2c] cursor-pointer transition-colors"
              onClick={() => changeCountry(countryCurrency)}
            >
              <div className="rounded-full w-8 h-8 overflow-hidden">
                <img
                  src={`https://flagsapi.com/${currencyToCountry[countryCurrency]}/flat/64.png`}
                  className="w-full h-full object-cover"
                  alt="flag"
                />
              </div>
              <p className="text-2xl font-bold text-gray-400">{countryCurrency}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Countrymap;
