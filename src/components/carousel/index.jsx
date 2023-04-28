import { useContext, useEffect, useState } from 'react'

import { CoinContext } from '@/core/context/coin';
import { formatDollar, formatPercentage, getChangeClass } from '@/core/utils/transformers';

import styles from './Carousel.module.css'

export function Carousel() {
    const context = useContext(CoinContext);
    const displayCoins = context.coins.allCoins.slice(0, 10);
    const coinsSize = displayCoins.length;

    const [activeIndex, setActiveIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
              const newIndex = (prevIndex + 1) % coinsSize;
              if (newIndex === 0) {
                setTranslateValue(0);
              } else {
                setTranslateValue((prevValue) => prevValue - 5);
              }
              return newIndex;
            });
        }, 7000);
    
        return () => clearInterval(interval);
    }, [coinsSize]);

    return (
        <div data-testid='carousel'
            className={styles.carousel}>
            <ul className={styles.carousel__slides}
                style={{ transform: `translateX(${translateValue}%)` }}>
                {displayCoins.map((c, i) => (
                    <li key={c.id} className={styles.carousel__item}>
                        <span>{c.symbol}</span>
                        <span>US{formatDollar(c.quotes.USD.price)}</span>
                        <span className={getChangeClass(c.quotes.USD.percent_change_24h)}>
                            {formatPercentage(c.quotes.USD.percent_change_24h)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
