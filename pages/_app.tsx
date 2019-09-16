import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import withApollo from "../lib/withApollo";
import GlobalStyles from "../style/GlobalStyle";

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;
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
