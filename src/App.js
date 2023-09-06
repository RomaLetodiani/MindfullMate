import { useState } from 'react';
import QuotesGenerator from './Components/QuotesGenerator';
import AdviceGenerator from './Components/AdviceGenerator';

function App() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className=" min-h-screen min-w-[280px] w-full bg-gradient-to-br from-[#73d6f7] to-[#2d25c9] flex justify-center items-center">
      <div className="flex flex-col gap-10 max-w-[500px] w-5/6">
        {isOn ? (
          <QuotesGenerator setIsOn={setIsOn} isOn={isOn} />
        ) : (
          <AdviceGenerator setIsOn={setIsOn} isOn={isOn} />
        )}
      </div>
    </div>
  );
}

export default App;
