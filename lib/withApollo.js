import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: "https://r3opu0bny9.execute-api.ap-northeast-2.amazonaws.com/dev",
      cache: new InMemoryCache().restore(initialState || {})
    })
);
