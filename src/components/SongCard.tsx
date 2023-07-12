import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { formatTime } from 'asets/funcations/formatTime';
import { useAppSelector } from 'core/hooks/redux-hook';
import styles from './styles/SongCard.module.scss';

interface SongCardProps {
    id: number
    image: string
    title: string
    artist: string
    album: string
    count: number
    duration: number
    playTrack: (count: number) => void
}

const SongCard: FC<SongCardProps> = ({ image, artist, title, count, duration, album, playTrack, id }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const currentTrackID = useAppSelector((state) => {
    if(!!state.playlist.currentTrackIndex) {
      return state.playlist.tracks[state.playlist.currentTrackIndex].id;
    }
  });
  const isPlaying = useAppSelector(state => state.playlist.isPlaying);

  useEffect(() => {
    currentTrackID === id? setIsActive(true) : setIsActive(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackID]);

  return (
    <div
      className={classNames(styles.song, {[styles.active]: isActive, [styles.playing]: isPlaying && isActive})}
      onClick={() => playTrack(count)} >
      <button className={styles.play} />
      <p className={styles.count}>{count + 1}</p>
      <div className={styles.equalizer}>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
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