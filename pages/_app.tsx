import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../lib/with-apollo-client";
import GlobalStyles from "../style/GlobalStyle";
import { ThemeProvider } from "../style/typed-components";
import theme from "../style/theme";

interface AppProps {
  apolloClient: any;
}

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
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
