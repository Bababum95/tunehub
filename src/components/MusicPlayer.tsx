import { useState, useRef, FC } from 'react';
import styles from './styles/MusicPlayer.module.scss';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import Song from './Song';
import VolumeBar from './VolumeBar';

const MusicPlayer: FC = () => {
  const progressBarRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [repeatSong, setRepeatSong] = useState<boolean>(false);

  return (
    <div className={styles.body}>
      <Song {...{ audioRef, setDuration, progressBarRef, repeatSong }} />
      <div className={styles.main}>
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            repeatSong,
            setRepeatSong,
          }}
        />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      </div>
      <VolumeBar {...{ audioRef }} />
    </div>
  );
};

export default MusicPlayer;
