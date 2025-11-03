import React, { useEffect, useState, useRef } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function Countrymap() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("USD");
  //   pass the currency as prop

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

  const changeCountry=(countryCode)=>{
    setCurrentCountry(countryCode)
    setIsModalOpen(false)
  }


  return (
    <>
      <div className="w-full h-full flex gap-3 justify-center items-center">
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <img
            src={`https://flagsapi.com/${currencyToCountry[currentCountry]}/flat/64.png`}
            className="w-full h-full object-cover"
            alt="flag"
          />
        </div>
        <p className="text-2xl font-bold text-gray-400">{currentCountry}</p>
        <ArrowDownIcon
          className="w-6 h-6"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </div>
      {isModalOpen && (
        <div className="absolute left-0 top-[120%] mt-2 w-full max-h-72 bg-[#1f1f1f] rounded-xl shadow-lg overflow-y-auto border border-gray-700 z-50"
        style={{scrollbarColor:"#8ED164 #2c2c2c",scrollbarWidth:"thin"}}>
          {Object.keys(currencyToCountry).map((countryCode) => (
            // MAKE THIS ONCLICK TO ADD A FUNCTION TO SELECT THE COUNTRY
            <div key={countryCode} className="flex items-center gap-3 p-2 hover:bg-[#2c2c2c] cursor-pointer transition-colors" onClick={()=>changeCountry(countryCode)}>
              <div className="rounded-full w-8 h-8 overflow-hidden"
              
              >
                <img
                  src={`https://flagsapi.com/${currencyToCountry[countryCode]}/flat/64.png`}
                  className="w-full h-full object-cover"
                  alt="flag"
                />
              </div>
              <p className="text-2xl font-bold text-gray-400">
                {countryCode}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Countrymap;
