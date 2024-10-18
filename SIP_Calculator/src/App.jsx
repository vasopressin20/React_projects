import { useState } from "react";
import Slider from "@mui/material/Slider";

function App() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [interestRate, setInterestRate] = useState(6);
  const [years, setYears] = useState(10);

  const handleMonthlyChange = (e) => {
    const monthlySlider = e.target.value;
    setMonthlyInvestment(monthlySlider * 10000);
  };

  const handleInterestChange = (e) => {
    const interestSlider = e.target.value;
    setInterestRate(interestSlider);
  };

  const handleYearsChange = (e) => {
    const yearSlider = e.target.value;
    setYears(yearSlider);
  };

  const calculateTotalAmount = () => {
    const months = years * 12;
    const interest = interestRate / 100;
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + interest, months) - 1) / interest);
    const totalAmount = futureValue.toFixed(2);
    const estimatedReturns = (totalAmount - monthlyInvestment * months).toFixed(
      2
    );
    return { totalAmount, estimatedReturns };
  };

  const { totalAmount, estimatedReturns } = calculateTotalAmount();

  return (
    <>
      <div className="bg-gray-300 px-8 py-6">
        <h1 className="justify-center text-black mb-8 mt-6 font-extrabold text-3xl">
          SIP Calculator
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="border border-slate-400 rounded-lg min-h-[80vh] min-w-[60w] p-8">
          <div className="flex gap-80">
            <div className="font-semibold">Monthly Investment</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              ₹ <span className="ml-2">{monthlyInvestment}</span>
            </div>
          </div>
          <div>
            <Slider
              size="small"
              defaultValue={monthlyInvestment / 10000}
              aria-label="Monthly Investment"
              onChange={handleMonthlyChange}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex gap-96 mt-12">
            <div className="font-semibold">Interest Rate (per annum)</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              <span className="ml-2">{interestRate}</span>%
            </div>
          </div>
          <div>
            <Slider
              size="small"
              defaultValue={interestRate}
              aria-label="Interest Rate"
              onChange={handleInterestChange}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex gap-x-96 mt-12">
            <div className="font-semibold">Time Period</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              <span className="ml-2">{years}</span> years
            </div>
          </div>
          <div>
            <Slider
              size="small"
              defaultValue={years}
              aria-label="Time Period"
              onChange={handleYearsChange}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex mt-12 justify-between">
            <div className="font-semibold">Total Invested</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              ₹ <span className="ml-2">{monthlyInvestment * years * 12}</span>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="font-semibold">Estimated Returns</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              ₹ <span className="ml-2">{estimatedReturns}</span>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="font-semibold">Total Amount</div>
            <div className="bg-sky-300 text-blue-950 rounded-md px-2 py-1">
              ₹ <span className="ml-2">{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
