import React from "react";
import App, { AppContext } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject, gql } from "apollo-boost";
import nextCookie from "next-cookies";
import { GET_NIGHTMODE } from "../queries";
import withApollo from "../lib/withApollo";
import GlobalStyles from "../style/GlobalStyle";
import NightGlobalStyle from "../style/NightGlobalStyle";
import nightTheme from "../style/nightTheme";
import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";

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
    if (nightmode === "on") {
      apollo.writeData({ data: { nightmode: true } });
    }

    const { nightmode: option } = apollo.cache.readQuery({ query: GET_NIGHTMODE });
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={option ? nightTheme : theme}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
