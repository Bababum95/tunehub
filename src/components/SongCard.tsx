import { FC } from 'react';
import styles from './styles/SongCard.module.scss';
import { formatTime } from 'asets/funcations/formatTime';

interface SongCardProps {
    image: string
    title: string
    artist: string
    album: string
    count: number
    duration: number
    playTrack: (count: number) => void
}

const SongCard: FC<SongCardProps> = ({ image, artist, title, count, duration, album, playTrack }) => {
  return (
    <div
      className={styles.song}
      onClick={() => playTrack(count)} >
      <button className={styles.play} />
      <p className={styles.count}>{count + 1}</p>
      <img
        src={image}
        alt={`${title} cover`}
        className={styles.image} />
      <div className={styles.wrapper}>
        <p className={styles.name}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
      <p className={styles.album}>{album}</p>
      <span className={styles.time}>{formatTime(duration / 1000)}</span>
    </div>
  );
};

export default SongCard;