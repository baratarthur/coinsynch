
import Image from "next/image";
import styles from "./Card.module.css";
import { ContentGroup } from "../content-group";

export function Card(props) {
    const { img, title, subtitle, description } = props

    return (
        <div data-testid='card' className={styles.card}>
            <Image width='51' height='51' src={img} alt={title} />
            <ContentGroup title={title}
                subtitle={subtitle}
                description={description}/>
        </div>
    )
}
