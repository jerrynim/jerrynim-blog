import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createUploadLink } from "apollo-upload-client";
import fetch from "isomorphic-fetch";

let apolloClient = null;

function create(initialState) {
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: createUploadLink({
      uri: fetch("http://localhost:4000/")
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
