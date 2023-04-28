import { useMemo } from 'react';
import styles from './ContentGroup.module.css';

export function ContentGroup({
    useBigGroup,
    subscribeStylesWith,
    subtitle,
    title,
    description
}) {
    const groupClass = useMemo(() => {
        return useBigGroup ? styles.biggroup : styles.group;
    }, [useBigGroup]);

    return (
        <div data-testid='content-group' className={groupClass}>
            {subtitle &&
                <h4 className={styles.group__subtitle}
                    style={subscribeStylesWith}>
                    {subtitle}
                </h4>
            }
            <h3 className={styles.group__title}
                style={subscribeStylesWith}>
                {title}
            </h3>
            <p className={styles.group__description}
                style={subscribeStylesWith}>
                {description}
            </p>
        </div>
    )
}
