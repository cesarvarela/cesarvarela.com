import type { AppProps } from 'next/app'
import { SessionProvider } from '@/hooks/session'
import '@fontsource/inconsolata'
import '@fontsource/inter'
import '@/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
} 