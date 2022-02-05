import Head from 'next/head'
import { About } from '../components/About'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Sobre | Salvando Vidas Maringá</title>
      </Head>
      <About />
    </div>
  )
}
