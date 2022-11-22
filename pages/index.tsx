import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>André Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-blue-700 min-h-screen">
          <h1>
            Welcome to my page!
          </h1>
        </section>
      </main>
    </div>
  )
}
