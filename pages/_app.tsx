import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { Store } from "redux";
import withApollo from "../lib/withApollo";
import GlobalStyles from "../style/GlobalStyle";
import configureStore from "../store";
import { Post } from "../types/type";

interface IProps {
  apolloState: any;
  apollo: ApolloClient<NormalizedCacheObject>;
  store: Store<{ post: Post }>;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo, store } = this.props;
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
