import {createContext, useContext, useEffect, useState} from "react"
import useCurrencyInfo from "../hooks/useCurrency"


const currencyContext=createContext()

export const CurrencyProvider=({children})=>{
    const [amount,setAmount]=useState(10)
    const [convertedAmount,setConvertedAmount]=useState(0)

    const [currency,setCurrency]=useState('USD')
    const [convertedCurrency,setConvertedCurrency]=useState('INR')

    const allConvertedAmount=useCurrencyInfo(currency.toLowerCase())
    // console.log(allConvertedAmount)
    useEffect(()=>{
        setConvertedAmount(Number(allConvertedAmount[convertedCurrency.toLowerCase()]*amount).toFixed(2))
        
    },[allConvertedAmount,amount,convertedCurrency])

    return(
        <currencyContext.Provider value={{amount,setAmount,convertedAmount,setConvertedAmount,currency,setCurrency,convertedCurrency,setConvertedCurrency}}>
            {children}
        </currencyContext.Provider>
    )
}

export const useCurrencyContext=()=>useContext(currencyContext)