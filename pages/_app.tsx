import '../styles/globals.css'
import type { AppProps } from 'next/app'

import AppProvider from '../context/AppContext'

import Layout from '../components/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // using layout component for consistent looks across all pages.
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
