import TaxBeneficientPayment from "@/components/TaxBeneficientPayment";
import React from "react";

interface Summary {
  name: string;
  value: number;
  address: string;
}

const Payment = () => {
  const paymentSummaries: Summary[] = [
    {
      name: "Education",
      value: 0.3,
      address: "0x13ikjfio131ji1o13i41i14j",
    },
    {
      name: "Health Care",
      value: 0.5,
      address: "0x23ikjfio1ad1o13i41i14a",
    },
    {
      name: "UE",
      value: 0.2,
      address: "0x413ikjfio1ado13i41i14x",
    },
  ];
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center p-20 space-y-4">
        {paymentSummaries.map((summary) => (
          <TaxBeneficientPayment
            key={summary.name}
            name={summary.name}
            value={summary.value}
            address={summary.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Payment;
