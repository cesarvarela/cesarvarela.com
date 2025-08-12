import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeScript } from '@/lib/themeScript'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} 