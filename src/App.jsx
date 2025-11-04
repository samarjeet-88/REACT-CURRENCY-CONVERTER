import { CurrencyModal, Swapcomponent } from "./component";
import { CurrencyProvider, useCurrencyContext } from "./context";

function App() {
  return (
    <>
      <CurrencyProvider>
        <div className="h-screen  w-screen bg-[#102500] flex flex-col items-center relative">
          <h1 className="text-[#8ED164] mt-10 font-bold font-poppin text-4xl">
            CURRENCY CONVERTER
          </h1>
          <div className="h-full w-full flex flex-col items-center mt-20 gap-6">
            <CurrencyModal isConvertComp={false} />
            <CurrencyModal isConvertComp={true} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-16 h-16">
            <Swapcomponent/>
          </div>
          
        </div>
      </CurrencyProvider>
    </>
  );
}

export default App;
