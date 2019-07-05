import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import GlobalStyles from "../style/GlobalStyle";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Jerrynim-Blog</title>
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
