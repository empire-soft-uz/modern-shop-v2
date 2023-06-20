import Aos from 'aos'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
