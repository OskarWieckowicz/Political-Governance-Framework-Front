import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const TaxBeneficient = (props: Props) => {
  const { name, value, onIncrement, onDecrement } = props;

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
