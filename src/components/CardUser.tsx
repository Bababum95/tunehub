import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/CardPlayList.module.scss';
import placeholder from '../asets/images/cover.jpg';

interface CardUserProps {
    image: string
    name: string
    id: number
}

const CardUser: FC<CardUserProps> = ({ image, name, id }) => {
  return (
    <div className={styles.card}>
      <Link to={`/playlist/select/${id}`}>
        <div className={styles.wrapper}>
          <img
            className={styles.image}
            src={image? image : placeholder}
            alt={name}
            style={{
              borderRadius: '50%',
            }} />
          <h3 className={styles.name}>{name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CardUser;