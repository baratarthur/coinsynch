import { useMemo } from 'react';
import styles from './Button.module.css';

export function Button(props) {
    let buttonStyles = useMemo(() => {
        let styledButton = `${styles.button}`;

        if(props.transparent) styledButton += ` ${styles.transparent}`;
        if(props.small) styledButton += ` ${styles.small}`;
        if(props.shadow) styledButton += ` ${styles.shadow}`;

        return styledButton
    }, [props]);
    
    const handleClick = () => {
        props.click();
    }

    return (
        <button data-testid='common-button'
            role='button'
            className={buttonStyles}
            onClick={handleClick}>
            {props.label}
        </button>
    )
}
