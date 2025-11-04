import React from 'react'
import {FaArrowDown,FaArrowUp} from "react-icons/fa"
import { useCurrencyContext } from '../context'

function Swapcomponent() {
    const {amount,setAmount,convertedAmount,setConvertedAmount,currency,setCurrency,convertedCurrency,setConvertedCurrency}=useCurrencyContext()
    console.log(amount)
    const swapValue=()=>{
        const tempAmount=amount;
        setAmount(convertedAmount)
        setConvertedAmount(tempAmount)

        const tempCurrency=currency
        setCurrency(convertedCurrency)
        setConvertedCurrency(tempCurrency)
    }
  return (
    <>
        <div className='w-full h-full flex justify-center items-center gap-2 hover:cursor-pointer' onClick={swapValue}>
            <FaArrowDown className='text-white text-2xl'/>
            <FaArrowUp className='text-white text-2xl'/>
        </div>
    </>
  )
}

export default Swapcomponent