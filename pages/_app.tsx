import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";

import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";
import GlobalStyles from "../style/GlobalStyle";
import { ApolloProvider } from "react-apollo-hooks";
import withApolloClient from "../lib/with-apollo-client";

interface IProps {
  apolloClient: any;
}
class MyApp extends App<IProps> {
  render() {
    console.log(this.props);
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Head>
          <title>Jerrynim-Blog</title>
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
