import withApollo from "next-with-apollo";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";

export default withApollo(({ ctx, initialState }) => {
  //apollo cache 가져오기
  const cache = new InMemoryCache().restore(initialState || {});
  const cookies = ctx && ctx.req && nextCookie(ctx);
  //nightmode 값 확인하기
  if (cookies && cookies.nightmode === "on") {
    //nightmode 가 on이라면
    cache.writeData({ data: { nightmode: true } });
  } else if (cookies && cookies.nightmode === "off") {
    //nightmode 가 off이라면
    cache.writeData({ data: { nightmode: false } });
  } else {
    //cookie에 nightmode가없다면
    cache.writeData({ data: { nightmode: false } });
  }
  return new ApolloClient({
    link: createUploadLink({
      uri: process.env.NODE_ENV === "production" ? process.env.END_POINT : process.env.END_POINT
    }),
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
