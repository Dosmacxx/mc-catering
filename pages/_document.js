import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />

        {/* SEO opcional */}
        <meta
          name="description"
          content="MC Catering - Viandas corporativas y servicios gastronómicos"
        />
        <meta name="theme-color" content="#7a0000" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
