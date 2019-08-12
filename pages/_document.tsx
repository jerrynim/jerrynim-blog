import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { renderPage, req, res } = ctx;
    //for styled-components
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {
      ...initialProps,
      ...page,
      styles: (
        <>
          {initialProps.styles}
          {styleTags}
        </>
      )
    };
  }

  render() {
    return (
      <html>
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
