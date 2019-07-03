import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import GlobalStyles from "../style/GlobalStyle";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
