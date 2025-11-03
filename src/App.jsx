import { CurrencyModal } from "./component";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <>
      <CurrencyProvider>
        <div className="h-screen  w-screen bg-[#102500] flex flex-col items-center">
          <h1 className="text-[#8ED164] mt-10 font-bold font-poppin text-4xl">
            CURRENCY CONVERTER
          </h1>
          <div className="h-full w-full flex flex-col items-center mt-20 gap-6">
            <CurrencyModal />
            <CurrencyModal />
          </div>
        </div>
      </CurrencyProvider>
    </>
  );
}

export default App;
