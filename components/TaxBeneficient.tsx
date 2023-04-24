import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const TaxBeneficient = (props) => {
  const { name, value, onIncrement, onDecrement } = props;
  // const MinusIcon = () => {
  //   return (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-6 h-6"
  //     >
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  //     </svg>
  //   );
  // };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4 text-center">{name}</h2>
      <div className="flex justify-between">
        <button onClick={onDecrement}>
          <MinusIcon className="block h-6 w-6" />
        </button>
        <p className="text-gray-500 text-lg text-center">{value}%</p>
        <button onClick={onIncrement}>
          <PlusIcon className="block h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TaxBeneficient;
