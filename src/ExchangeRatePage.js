import React from "react";
import { useQuery, gql } from "@apollo/client";

//...GraphQL Query to get Exchange rate data list...//
const EXCHANGE_RATES = gql`
  query getExchangeRate {
    rates(currency: "BDT") {
      name
      currency
      rate
    }
  }
`;

const ExchangeRatePage = () => {
  //...fetching data by providing query...//

  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  //...function to map data...//
  function GetExchangeRate() {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    else
      return (
        <div className="exchangeRateTable">
          {data.rates.map((currency) => (
            <ul key={currency.currency}>
              <b>
                {currency.name}({currency.currency})
              </b>
              : {currency.rate}
            </ul>
          ))}
        </div>
      );
  }

  return <div>{GetExchangeRate()}</div>;
};

export default ExchangeRatePage;
