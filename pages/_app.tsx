import type { AppProps } from 'next/app'
import Head from 'next/head'
import  GlobalStyle from '../styles/globals'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://user-images.githubusercontent.com/48860569/152653151-8a446d9d-52ae-4fa2-bef6-64f4f86d276f.png" />
      </Head>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
