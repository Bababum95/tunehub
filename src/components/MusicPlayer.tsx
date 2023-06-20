import { useState, useRef } from 'react';
import { tracks } from '../core/services/tracks.service';
import { ISong } from '../core/interfeces/song.interfece';
import styles from './styles/MusicPlayer.module.scss';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import Song from './Song';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
  const progressBarRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<ISong>(tracks[trackIndex]);
  const [repeatSong, setRepeatSong] = useState<boolean>(false)


  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
    } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(tracks[trackIndex + 1]);
    }
}

  return (
    <div className={styles.body}>
      <Song {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext, repeatSong }} />
      <div className={styles.main}>
        <Controls {...{
          audioRef,
          progressBarRef,
          duration,
          setTimeProgress,
          tracks,
          trackIndex,
          setTrackIndex,
          setCurrentTrack,
          handleNext,
          repeatSong,
          setRepeatSong }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      </div>
          <VolumeBar  {...{ audioRef }} />
    </div>
  )
}

export default MusicPlayer