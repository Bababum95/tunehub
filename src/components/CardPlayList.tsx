import { FC } from 'react'
import styles from './styles/CardPlayList.module.scss';

interface CardPlayListProps {
    image: string
    name: string
    description: string
}

const CardPlayList: FC<CardPlayListProps> = ({ image, name, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={image} alt="name" />
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default CardPlayList