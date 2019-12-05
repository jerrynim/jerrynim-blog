import withApollo from "next-with-apollo";
import cookie from "js-cookie";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";

export default withApollo(({ initialState }) => {
  //apollo cache 가져오기
  const cache = new InMemoryCache().restore(initialState || {});

  return new ApolloClient({
    link: createUploadLink({
      uri: process.env.NODE_ENV === "production" ? process.env.END_POINT : "http://localhost:4000/"
    }),
    cache,
    ssrMode: typeof window !== "undefined",
    resolvers: {
      Mutation: {
        toggleNightmode: (_, args) => {
          cookie.set("nightmode", `${!args.mode ? "on" : "off"}`, { expires: 365 });
          return null;
        }
      }
    }
  });
});
