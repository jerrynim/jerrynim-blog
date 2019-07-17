import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";

import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";
import GlobalStyles from "../style/GlobalStyle";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo-hooks";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <Head>
          <title>Jerrynim-Blog</title>
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
