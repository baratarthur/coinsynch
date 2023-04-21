import Image from 'next/image';

import styles from './CopyrightFooter.module.css';

export function CopyrightFooter() {
    return (
        <div className={styles.license} data-testid="copy-footer">
            <p>Copyright © 2022 - All rights reserved</p>
            <Image width='94' height='16' src='/logo.svg' alt='Coinsynch'/>
        </div>
    )
}
