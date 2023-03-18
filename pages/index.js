import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Home server</title>
        <meta name="description" content="Page d'accueil du home server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href={"/musics"} >Music</Link>
          <Link href={"/videos"} >Videos</Link>
      </main>
    </div>
  )
}
