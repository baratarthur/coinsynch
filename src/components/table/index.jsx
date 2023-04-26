import { useMemo, useState } from "react";
import { Button } from "../button";

import styles from './Table.module.css'

export function TopCoinsTable({ data, seeMoreHandler }) {
    const [viewMore, setViewMore] = useState(false);

    const getChangeClass = (value) => {
        if(value < 0) return styles.negative;
    
        return styles.positive;
    }

    const getBackground = (index) => {
        if(index % 2 !== 0) return styles.accentbackground;

        return '';
    }

    const formatDollar = (value) => {
        return Number(value).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }

    const formatPercentage = (value) => {
        if(value > 0) return `+${value}%`;

        return `${value}%`;
    }

    const viewMoreHandler = () => {
        seeMoreHandler(viewMore ? 4 : 10);
        setViewMore(!viewMore);
    }

    const seeMoreLabel = useMemo(() => viewMore ? 'View less' : 'View more +', [viewMore]);

    return (
        <>
            <table className={styles.topcryptos__table}>
                <thead>
                    <tr>
                        <td className={styles.topcryptos__table__header}>
                            #
                        </td>
                        <td className={styles.topcryptos__table__header}>
                            Crypto
                        </td>
                        <td className={styles.topcryptos__table__header}>
                            Price
                        </td>
                        <td className={styles.topcryptos__table__header}>
                            Change
                        </td>
                        <td className={styles.topcryptos__table__header}>
                            Trade
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((c, index) => (
                        <tr key={`${c.id} - ${index}`}
                            className={getBackground(index)}>
                            <td className={styles.topcryptos__table__data}>
                                {index + 1}
                            </td>
                            <td className={styles.topcryptos__table__data}>
                                {c.name}
                            </td>
                            <td className={styles.topcryptos__table__data}>
                                US{formatDollar(c.quotes.USD.price)}
                            </td>
                            <td className={`${
                                    styles.topcryptos__table__data
                                } ${
                                    getChangeClass(c.quotes.USD.percent_change_24h)
                                }`}>
                                {formatPercentage(c.quotes.USD.percent_change_24h)}
                            </td>
                            <td className={styles.topcryptos__table__data}>
                                <Button label='buy'
                                    style={{ backgroundColor: 'var(--color-tertiary-700)'}}
                                    click={() => {}} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.topcryptos__table__viewmore}>
                <Button transparent
                    style={{fontSize: '16px'}}
                    label={seeMoreLabel}
                    click={viewMoreHandler}/>
            </div>
        </>
    )
}
