import { useEffect } from 'react'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import { coinApi } from '@/core/api'
import { Button } from '@/components/button'
import { CopyrightFooter } from '@/components/copyright-footer'
import { Nav } from '@/components/navbar'

export default function Home() {
  const apiKey = 'E24B79D3-C2B3-4D74-9881-683F88A0B939'

  useEffect(() => {
    //coinApi.get('exchangerate/BTC/USD', {
    //  headers: {
    //    'X-CoinAPI-Key': apiKey
    //  }
    //});
  }, [])

  return (
    <>
      <Head>
        <title>Coinsynch</title>
        <meta name="description" content="Here you find all you need to learn about coins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Nav />
        <article className={styles.content}>
          <section id='presentation' className={styles.section}>
            Presentation
          </section>
          <section id='about-us' className={styles.section}>
            About us
          </section>
          <section id='top-cryptos' className={styles.section}>
            Top Cryptos
          </section>
        </article>
        <footer className={styles.footer}>
          <div className={styles.subscription}>
            <div className={styles.subscription__block}>
              <div className={styles.subscription__block__info}>
                <h3>Lorem ipsum</h3>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ut aliquam,
                  purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor
                </p>
              </div>
            </div>
            <div className={styles.subscription__block}>
              <form className={styles.subscription__form}>
                <div className={styles.subscription__form__group}>
                  <label>Email</label>
                  <input id='email'
                    className={styles.subscription__form__input}
                    name='email'
                    type='email'
                    placeholder='Email'/>
                </div>
                <Button label='Subscribe' shadow click={()=>{}}/>
              </form>
            </div>
          </div>
          <CopyrightFooter />
        </footer>
      </main>
    </>
  )
}
