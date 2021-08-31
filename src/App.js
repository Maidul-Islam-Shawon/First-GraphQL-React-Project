import React from "react";
import ExchangeRatePage from "./ExchangeRatePage";
import ExcRateWIthFetch from "./ExcRateWIthFetch";

function App() {
  return (
    <div>
      <h2 className="header">First GraphQL App with Apollo</h2>
      {/* <ExchangeRatePage /> */}
      <ExcRateWIthFetch />
    </div>
  );
}

export default App;
