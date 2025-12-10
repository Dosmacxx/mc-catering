import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon actualizado para forzar que se cargue en todos los dominios */}
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

