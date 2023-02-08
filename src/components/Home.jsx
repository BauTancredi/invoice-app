import React from "react";

import InlineInvoice from "./InlineInvoice";

const Home = () => {
  return (
    <div className="h-screen">
      <h1>Home</h1>
      <div className="my-10 overflow-y-scroll max-h-[90%] ">
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
        <InlineInvoice />
      </div>
    </div>
  );
};

export default Home;
