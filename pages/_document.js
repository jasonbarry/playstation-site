import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="js-focus-visible"
      dir="ltr"
      lang="en-US"
      style={{ "--scrollbar-width": 0 }}
    >
      <Head />
      <body className="homepage basepage page basicpage">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
