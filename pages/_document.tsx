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
      <Html lang="ko">
        <Head>
          <meta name="description" content="Jerrynim Blog consider trendy tech about web development" />
          <link rel="manifest" href="/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_TAG_MANAGER_ID}');
              `
            }}
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
