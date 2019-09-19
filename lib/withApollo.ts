import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ ctx, headers, initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache().restore(initialState || {})
    // clientState: {
    //   defaults: { nightmode },
    //   resolvers: {
    //     Mutation: {
    //       OnNightmode: () => {
    //         cookie.set("nightmode", "on", { expires: 30 });
    //       },
    //       OffNightmode: () => {
    //         cookie.set("nightmode", "off", { expires: 30 });
    //       }
    //     }
    //   }
    // }
  });
});
