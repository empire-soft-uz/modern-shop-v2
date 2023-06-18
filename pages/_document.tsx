import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <Html lang="en">
      <Head >
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
