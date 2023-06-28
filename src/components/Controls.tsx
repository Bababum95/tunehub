import { useState, RefObject, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles/Controls.module.scss';
import { ISong } from '../core/interfeces/song.interfece';

interface ControlsProps {
    audioRef: RefObject<HTMLAudioElement>;
    progressBarRef: RefObject<HTMLInputElement>;
    duration: number;
    setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
    tracks: ISong[];
    trackIndex: number;
    setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
    setCurrentTrack: React.Dispatch<React.SetStateAction<ISong>>;
    handleNext: () => void;
    repeatSong: boolean;
    setRepeatSong: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = ({
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
  setRepeatSong,
}: ControlsProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const playAnimationRef = useRef<number>(0);

  const repeat = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = String(currentTime);
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(Number(progressBarRef.current.value) / duration) * 100}%`,
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const handlePrevious = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  return (
    <div className={styles.controller}>
      <button
        className={classNames(styles.shuffle, { [styles.active]: shuffle })}
        onClick={() => setShuffle(!shuffle)} />
      <button
        className={styles.prev}
        onClick={handlePrevious} />
      <button
        className={classNames(styles.play, { [styles.active]: isPlaying })}
        onClick={() => setIsPlaying(!isPlaying)} />
      <button
        className={styles.next}
        onClick={handleNext} />
      <button
        className={classNames(styles.repeat, { [styles.active]: repeatSong })}
        onClick={() => setRepeatSong(!repeatSong)} />
    </div>
  );
};

export default Controls;