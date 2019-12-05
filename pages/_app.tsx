import React from "react";
import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import nextCookie from "next-cookies";
import { Store } from "redux";
import withApollo from "../lib/withApollo";
import GlobalStyles from "../style/GlobalStyle";
import configureStore from "../store";
import { AddPost } from "../types/type";

interface IProps {
  apolloState: any;
  apollo: ApolloClient<NormalizedCacheObject>;
  store: Store<{ addPost: AddPost }>;
}

class MyApp extends App<IProps> {
  static getInitialProps = async ({ ctx, Component }: AppContext & { ctx: { apolloClient: any } }) => {
    let pageProps = {};
    //쿠키 받아오기
    const cookies = ctx && ctx.req && nextCookie(ctx);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //props로 cookie전달
    Object.assign(pageProps, { cookies });
    return { pageProps };
  };

  render() {
    const { Component, pageProps, apollo, store } = this.props;
    const { cookies } = pageProps;
    if (typeof window === "undefined") {
      if (cookies.nightmode && cookies.nightmode === "on") {
        //쿠키에 nightmode가 있고 'on'이라면
        console.log(cookies.nightmode);
        apollo.writeData({ data: { nightmode: true } });
      } else {
        apollo.writeData({ data: { nightmode: false } });
      }
    }
    return (
      <Provider store={store}>
        <GlobalStyles />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withApollo(MyApp));
