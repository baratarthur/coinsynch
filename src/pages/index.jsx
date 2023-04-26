import { useContext, useEffect, useRef } from 'react'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import { Button } from '@/components/button'
import { CopyrightFooter } from '@/components/copyright-footer'
import { Nav } from '@/components/navbar'
import { Card } from '@/components/card'

import { CoinContext } from '@/core/context/coin-context'

import presentationInfoJson from '@/core/assets/presentation-info.json'
import aboutCardsJson from '@/core/assets/about-us-cards.json'
import aboutInfoJson from '@/core/assets/about-us-info.json'
import subscriptionInfoJson from '@/core/assets/subscription-info.json'

import { TopCoinsTable } from '@/components/table'
import { ContentGroup } from '@/components/content-group'
import Image from 'next/image'

export default function Home() {
  const alreadyFetchRef = useRef(false);
  const {fetchCoinsData, seeMoreCoins, coins} = useContext(CoinContext);

  useEffect(() => {
    if(alreadyFetchRef.current) return;

    fetchCoinsData().then(() => {
      alreadyFetchRef.current = true;
    });
  }, [fetchCoinsData])

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
          <section id='presentation'
            className={`${styles.section} ${styles.presentation}`}>
            <div className={styles.presentation__content}>
              <div className={styles.presentation__info}>
                <div className={styles.info__signupcapaign}>
                  <div className={styles.info__titles}>
                    <h1 className={styles.info__title}>
                      {presentationInfoJson.title}
                    </h1>
                    <p className={styles.info__description}>
                      {presentationInfoJson.description}
                    </p>
                  </div>
                  <Button style={{width: '280px', fontSize: '16px'}}
                    label="SIGN UP NOW ->"
                    click={() => {}}/>
                </div>
                <ul className={styles.info__keynames}>
                  <li className={styles.info__keyname}>Cryptos</li>
                  <li className={styles.info__keyname}>NFTs</li>
                  <li className={styles.info__keyname}>Games</li>
                </ul>
              </div>
              <div className={styles.presentation__carousel}>
                <Image fill
                  src='/landing/carousel/carousel_img_1.webp'
                  alt='carousel_img_1'/>
              </div>
            </div>
            <div className={styles.wave}></div>
          </section>
          <section id='about-us'
            className={`${styles.section} ${styles.about}`}>
            <div className={styles.about__grid}>
              {aboutCardsJson.map((item, i) => (
                <Card key={`${item.title} - ${i}`}
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}/>
              ))}
            </div>
            <div className={styles.about__signup}>
              <div className={styles.about__signup__group}>
                <ContentGroup useBigGroup
                  title={aboutInfoJson.title}
                  subtitle={aboutInfoJson.subtitle}
                  description={aboutInfoJson.description}/>
                <Button style={{maxWidth: '180px', fontSize: '16px'}}
                  label="Sign up now"
                  click={() => {}}/>
              </div>
            </div>
          </section>
          <section id='top-cryptos'
            className={`${styles.section} ${styles.section__topcryptos}`}>
            <h3 className={styles.section__topcryptos__title}>
                Top Cryptos
            </h3>
            <TopCoinsTable data={coins.topCoins}
              seeMoreHandler={seeMoreCoins}/>
          </section>
        </article>
        <footer className={styles.footer}>
          <div className={styles.subscription}>
            <div className={styles.subscription__block}>
              <ContentGroup useBigGroup
                subscribeStylesWith={{color: 'var(--color-white)'}}
                title={subscriptionInfoJson.title}
                subtitle={subscriptionInfoJson.subtitle}
                description={subscriptionInfoJson.description}/>
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
                <Button shadow
                  label='Subscribe'
                  style={{fontSize: '16px'}}
                  click={()=>{}}/>
              </form>
            </div>
          </div>
          <CopyrightFooter />
        </footer>
      </main>
    </>
  )
}
