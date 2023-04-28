import styles from '@/styles/common.module.css'

export const formatDollar = (value) => {
    return Number(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}

export const formatPercentage = (value) => {
    if(value > 0) return `+${value}%`;

    return `${value}%`;
}

export const getChangeClass = (value) => {
    if(value < 0) return styles.negative;

    return styles.positive;
}

