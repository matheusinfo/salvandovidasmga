import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Body } from '../components/Home/Body'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Inicio | Salvando Vidas Maringá</title>
      </Head>
      <Body />
      <Footer />
    </div>
  )
}
