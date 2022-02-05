import type { AppProps } from 'next/app'
import Head from 'next/head'
import  GlobalStyle from '../styles/globals'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://user-images.githubusercontent.com/48860569/128648996-f92114fc-c834-468c-94e2-b5e66f2a5703.jpeg" />
      </Head>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
