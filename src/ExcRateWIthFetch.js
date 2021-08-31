import React from "react";

const GET_ALL_RATES = `
query GetAllRates{
    rates(currency:"BDT"){
      name
      currency
      rate
    }
  }`;

const ExcRateWIthFetch = () => {
  fetch("https://48p1r2roz4.sse.codesandbox.io/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_ALL_RATES,
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log("res:", result));
  return <div>With Fetch</div>;
};

export default ExcRateWIthFetch;
/*
curl 'https://48p1r2roz4.sse.codesandbox.io/' 
-H 'Accept-Encoding: gzip, deflate, br' 
-H 'Content-Type: application/json' 
-H 'Accept: application/json' 
-H 'Connection: keep-alive' 
-H 'DNT: 1' 
-H 'Origin: https://48p1r2roz4.sse.codesandbox.io' 
--data-binary '{"query":"query GetExchangeRates {\n    rates(currency: \"AUD\") {\n      currency\n      rate\n  }\n  }\n  \n  \n  query RetrieveAllSchema{\n    __schema{\n      types{\n        name\n      }\n    }\n  }\n  \n  \n  query retrieveQuaryAndMutationType{\n  __schema{\n    queryType{\n      fields(includeDeprecated:true){\n        name\n        description\n        isDeprecated\n        deprecationReason\n      }\n    }\n  }\n}\n\nquery retrieveDirectives{\n  __schema{\n    directives{\n      name\n      description\n    }\n  }\n}\n\n\nquery\tgetSessions{\n  __schema{\n    \n  }\n}\n  \n"}' 
--compressed
*/
