import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import TaxBeneficient from "@/components/TaxBeneficient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [education, setEducation] = useState(30);
  const [healthCare, setHealthCare] = useState(50);
  const [ue, setUE] = useState(20);

  const total = education + healthCare + ue;

  const handleIncrement = (setter) => {
    if (total < 100) {
      setter((prevValue) => prevValue + 1);
    }
  };

  const handleDecrement = (setter) => {
    if (total > 0) {
      setter((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center p-20">
        <p className="text-lg">{total}%</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex space-x-4">
          <TaxBeneficient
            name="Education"
            value={education}
            onIncrement={() => handleIncrement(setEducation)}
            onDecrement={() => handleDecrement(setEducation)}
          />
          <TaxBeneficient
            name="Health Care"
            value={healthCare}
            onIncrement={() => handleIncrement(setHealthCare)}
            onDecrement={() => handleDecrement(setHealthCare)}
          />
          <TaxBeneficient
            name="UE"
            value={ue}
            onIncrement={() => handleIncrement(setUE)}
            onDecrement={() => handleDecrement(setUE)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="w-100 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
