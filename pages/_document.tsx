import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const { renderPage } = ctx; // for styled-components
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styles = sheet.getStyleElement();
    return {
      ...page,
      styles
    };
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            href="https://highlightjs.org/static/demo/styles/atom-one-dark.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
