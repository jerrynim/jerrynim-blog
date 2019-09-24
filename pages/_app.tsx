import React from "react";
import App, { AppContext } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import nextCookie from "next-cookies";
import withApollo from "../lib/withApollo";
import GlobalStyles from "../style/GlobalStyle";

interface IProps {
  apolloState: any;
  apollo: ApolloClient<NormalizedCacheObject>;
  nightmode?: string;
}

class MyApp extends App<IProps> {
  static getInitialProps = async ({
    ctx,
    Component
  }: AppContext & { ctx: { apolloClient: any } }) => {
    let pageProps = {};

    const { nightmode } = nextCookie(ctx);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (typeof nightmode === "undefined") {
      return { pageProps };
    }
    return { pageProps, nightmode };
  };

  render() {
    const { Component, pageProps, apollo, nightmode } = this.props;
    console.log(nightmode);
    if (nightmode === "on") {
      apollo.writeData({ data: { nightmode: true } });
    }
    return (
      <>
        <GlobalStyles />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
