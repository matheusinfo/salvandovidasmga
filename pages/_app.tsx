import type { AppProps } from 'next/app'
import Head from 'next/head'
import  GlobalStyle from '../styles/globals'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://user-images.githubusercontent.com/48860569/152652976-4c200db2-6222-4b7c-8f8b-2548e2408d8d.svg" />
      </Head>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
