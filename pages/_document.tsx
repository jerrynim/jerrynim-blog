import React from "react";
import Document, { Main, NextScript, Html, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";

class RootDocument extends Document {
  static getInitialProps = context => {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styles = sheet.getStyleElement();
    return {
      ...page,
      styles
    };
  };

  public render() {
    return (
      <Html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
