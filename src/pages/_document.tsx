import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta
            name="description"
            content="Muhammad Fahmi Rasyid Personal Website | Backend developer - UI / UX Designer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rasyid.dev/" />
          <meta
            property="og:title"
            content="Muhammad Fahmi Rasyid | Backend developer - UI / UX De
            signer"
          />
          <meta property="og:image" content="/meta-image.png" />

          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta
            name="description"
            content="Muhammad Fahmi Rasyid Personal Website | Backend developer - UI / UX Designer"
          />
          <meta name="keywords" content="Backend, Frontend, Portfolio" />

          <meta name="theme-color" content="#1A202C" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta
            name="apple-mobile-web-app-title"
            content="Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="msapplication-navbutton-color" content="#1A202C" />
          <meta name="msapplication-TileColor" content="#1A202C" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />

          <meta name="application-name" content="RasyidDev" />
          <meta
            name="msapplication-tooltip"
            content="Rasyid Personal Website"
          />
          <meta name="msapplication-starturl" content="/" />

          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          <meta name="nightmode" content="enable" />

          <meta name="layoutmode" content="standard"></meta>
          <meta name="imagemode" content="force"></meta>
          <meta name="screen-orientation" content="landscape"></meta>
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
