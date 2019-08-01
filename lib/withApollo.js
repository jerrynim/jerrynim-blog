import withApollo from "next-with-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default withApollo(({ ctx, headers, initialState }) => {
  const link = new createHttpLink({
    uri: "https://r3opu0bny9.execute-api.ap-northeast-2.amazonaws.com/dev"
  });
  const cache = new InMemoryCache();

  return new ApolloClient({
    ssrMode: true,
    link,
    cache
  });
});
