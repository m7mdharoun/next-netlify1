import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pastes.io!</title>
        <meta http-equiv="Refresh" content="0; url='https://pastes.io'" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pastes.io!" />
        <p className="description">
          You will redirect in 5 seconds to Pastes.io
        </p>
      </main>

      <Footer />
    </div>
  )
}
