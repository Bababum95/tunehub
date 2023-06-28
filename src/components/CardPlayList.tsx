import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/CardPlayList.module.scss';
import placeholder from '../asets/images/cover.jpg';

interface CardPlayListProps {
    image: string
    name: string
    description: string
    id: string
}

const CardPlayList: FC<CardPlayListProps> = ({ image, name, id, description }) => {
  return (
    <div className={styles.card}>
      <Link to={`/playlist/select/${id}`}>
        <div className={styles.wrapper}>
          <img
            className={styles.image}
            src={image? image : placeholder}
            alt={name} />
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardPlayList;