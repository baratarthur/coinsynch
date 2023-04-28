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
        if(props.click) props.click();
    }

    return (
        <button data-testid='common-button'
            role={props.role || 'button'}
            disabled={props.disabled}
            className={buttonStyles}
            style={props.style || {}}
            onClick={handleClick}>
            {props.label}
        </button>
    )
}
