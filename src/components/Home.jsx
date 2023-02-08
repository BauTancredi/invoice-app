import React from "react";

import Header from "./Header";
import InlineInvoice from "./InlineInvoice";

const Home = () => {
  return (
    <div>
      <Header />
      <InlineInvoice />
      <InlineInvoice />
      <InlineInvoice />
    </div>
  );
};

export default Home;
