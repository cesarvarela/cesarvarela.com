import type { AppProps } from 'next/app'
import { SessionProvider } from '@/hooks/session'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
} 