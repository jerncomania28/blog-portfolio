import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // using layout component for consistent looks across all pages.
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
