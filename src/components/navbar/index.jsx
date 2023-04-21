import Link from "next/link";
import Image from "next/image";

import { Button } from "../button";

import styles from "./Navbar.module.css";

export function Nav() {
    return (
        <header data-testid='navbar' className={styles.header}>
          <div className={styles.navigation}>
            <Image width='124' height='21' src='/logo.svg' alt='Coinsynch' />
            <ul className={styles.links}>
              <li>
                <Link className={styles.link}
                    href='#about-us'>
                    About us
                </Link>
              </li>
              <li>
                <Link className={styles.link}
                    href='#top-cryptos'>
                    Top Cryptos
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <div className={styles.actions__crypto}>
              All cryptos
            </div>
            <div className={styles.actions__auth}>
              <Button label='Sign in' transparent small click={()=>{}}/>
              <Button label='Sign up' small click={()=>{}}/>
            </div>
          </div>
        </header>
    )
}
