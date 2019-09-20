import withApollo from "next-with-apollo";
import cookie from "js-cookie";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ ctx, headers, initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache().restore(initialState || {}),
    clientState: {
      defaults: { nightmode: false },
      resolvers: {
        Mutation: {
          toggleNightmode: (_, args) => {
            cookie.set("nightmode", `${!args.mode ? "on" : "off"}`, { expires: 30 });
            return null;
          }
        }
      }
    }
  });
});
