import "./styles.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./GetUsers";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query getAllUsers {
        name
        url
      }
    `
  })
  .then((result) => console.log(result));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
}
