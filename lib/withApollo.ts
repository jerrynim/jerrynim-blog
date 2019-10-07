import withApollo from "next-with-apollo";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";

export default withApollo(({ ctx, headers, initialState }) => {
  const cache = new InMemoryCache().restore(initialState || {});
  const { nightmode } = nextCookie(ctx);
  if (nightmode === "on") {
    cache.writeData({ data: { nightmode: true } });
  } else {
    cache.writeData({ data: { nightmode: false } });
  }
  return new ApolloClient({
    link: createUploadLink({ uri: process.env.API_ENDPOINT }),
    cache,
    ssrMode: typeof window !== "undefined",
    resolvers: {
      Mutation: {
        toggleNightmode: (_, args) => {
          cookie.set("nightmode", `${!args.mode ? "on" : "off"}`, { expires: 30 });
          return null;
        }
      }
    }
  });
});
