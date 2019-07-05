import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // Returns an object like: { html, head, errorHtml, chunks, styles }
    const transform = (App) => {
      // Next.js gives us a `transformPage` function
      // to be able to hook into the rendering of a page
      // Step 1: Here we will generate the styles
      return sheet.collectStyles(<App />);
    };

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
