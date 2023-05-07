import React from "react";

interface Props {
  name: string;
  value: number;
  address: string;
}

const TaxBeneficientPayment = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg">
      <div className="flex flex-row space-x-4">
        <p>{props.name}</p>
        <p>{props.value} ETH</p>
        <p>{props.address}</p>
        <button className="w-100 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          pay
        </button>
      </div>
    </div>
  );
};

export default TaxBeneficientPayment;
