import React, { useEffect, useRef, useState } from "react";
import Countrymap from "./Countrymap";


// pass if this component the converted component ot not
function CurrencyModal() {
  const [isActive, setIsActive] = useState(false);
  //pass this amount as prop but only of the first modal
  const [currentAmount,setCurrentAmount]=useState(1);
  const borderRef = useRef(null);

  const changeCurrentAmount=(val)=>{
    const amt=Number(val);
    if(!isNaN(amt)) setCurrentAmount(amt)
  }

  useEffect(() => {
    const hanleClickOutside = (event) => {
      if (borderRef.current && !borderRef.current.contains(event.target))
        setIsActive(false);
    };
    document.addEventListener("click", hanleClickOutside);
    return () => {
      document.removeEventListener("click", hanleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="w-[70%] h-[30%] bg-[#161718] flex flex-col items-center justify-center relative ">
        <p className="text-white font-bold absolute left-7 top-3">AMOUNT:</p>
        <div
          ref={borderRef}
          className={`w-[95%] h-[50%] border-2 rounded-2xl transition-all flex p-2 hover:cursor-pointer gap-2 ${
            !isActive ? "border-white" : "border-red-500"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(true);
          }}
        >
            <input type="text" className=" w-[60%] text-white border-none outline-none text-2xl tracking-wider" value={currentAmount} onChange={(e)=>changeCurrentAmount(e.target.value)}/>
            <div className="w-[40%] relative">
                <Countrymap/>
            </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyModal;
