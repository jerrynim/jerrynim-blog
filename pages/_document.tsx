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
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="icon" sizes="192x192" href="icon_192.png" />
          <link rel="apple-touch-icon" href="icon_192.png" />
          <meta name="msapplication-square310x310logo" content="icon_192.png" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
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
