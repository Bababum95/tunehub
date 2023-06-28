import { FC } from 'react';
import styles from './styles/SongCard.module.scss';

interface SongCardProps {
    image: string
    title: string
    artist: string
    count: number
}

const SongCard: FC<SongCardProps> = ({ image, artist, title, count }) => {
  return (
    <div className={styles.song}>
      <button className={styles.play} />
      <p className={styles.count}>{count}</p>
      <img
        src={image}
        alt={`${title} cover`}
        className={styles.image} />
      <div className={styles.wrapper}>
        <p className={styles.name}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;