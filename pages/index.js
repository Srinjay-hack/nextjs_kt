import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is Home Page</h1>
      <Link href="/posts/first-post">Back to home</Link>

      </div>
  )
}