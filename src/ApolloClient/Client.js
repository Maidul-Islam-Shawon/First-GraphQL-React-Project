import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

//....playgrund for graphQL, this playground like postman to verify GraphQL Api...//
const httpLink = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

//....Initial Setup for Apollo Client...///
export const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
