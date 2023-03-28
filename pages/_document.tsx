import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
import * as React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
          <Script src="https://cdn.jsdelivr.net/npm/react-three-fiber/dist/index.js" strategy="beforeInteractive" />
          <Script src="https://cdn.jsdelivr.net/npm/three/examples/js/loaders/GLTFLoader.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
