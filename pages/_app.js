import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import GlobalStyles from "../style/GlobalStyle";
import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";
class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    console.log(apolloClient);
    return (
      <Container>
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
