import React from "react";
import RightArrow from "./icons/RightArrow";

const InlineInvoice = () => {
  const invoice = {
    invoiceID: "#RT3080",
    invoiceDate: "Due 19 Aug 2021",
    invoiceSender: "Jensen Huang",
    invoiceAmount: "$1,800.00",
    invoiceStatus: "Paid",
  };

  return (
    <div className="inline-hover my-5 flex items-center justify-between bg-white px-3 w-full p-6 rounded-lg shadow-sm cursor-pointer border border-transparent hover:border-primary-500">
      <p className="font-bold">{invoice.invoiceID}</p>
      <p>{invoice.invoiceDate}</p>
      <p>{invoice.invoiceSender}</p>
      <p className="font-bold">{invoice.invoiceAmount}</p>
      <p className="text-green-500">&#x2022;{invoice.invoiceStatus}</p>
      <RightArrow />
    </div>
  );
};

export default InlineInvoice;