import { useState, RefObject } from 'react';
import classNames from 'classnames';
import styles from './styles/Song.module.scss';
import { ISong } from '../core/interfeces/song.interfece';

interface SongProps {
    currentTrack: ISong
    audioRef: RefObject<HTMLAudioElement>
    setDuration: React.Dispatch<React.SetStateAction<number>>
    progressBarRef: RefObject<HTMLInputElement>
    handleNext: () => void;
    repeatSong: boolean
}

const Song = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext, repeatSong }: SongProps) => {
  const [like, setLike] = useState<boolean>(false);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    setDuration(seconds || 0);
    progressBarRef.current?.setAttribute('max', String(seconds));
  };
  const onEnded = () => {
    repeatSong? audioRef.current?.play() : handleNext();
  };

  return (
    <div className={styles.song}>
      <audio
        className={styles.audio}
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        controls />
      <img className={styles.cover} src={currentTrack.thumbnail} alt={`${currentTrack.title} audio avatar`} />
      <div>
        <h3 className={styles.title}>{currentTrack.title}</h3>
        <p className={styles.musician}>{currentTrack.author}</p>
      </div>
      <button
        className={classNames(styles.like, { [styles.active]: like })}
        onClick={() => setLike(!like)} />
    </div>
  );
};

export default Song;