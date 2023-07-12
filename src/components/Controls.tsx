import { useState, RefObject, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'core/hooks/redux-hook';
import { nextTrack, previousTrack, setIsPlaying } from 'core/store/slices/playlistSlice';
import styles from './styles/Controls.module.scss';

interface ControlsProps {
    audioRef: RefObject<HTMLAudioElement>;
    progressBarRef: RefObject<HTMLInputElement>;
    duration: number;
    setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
    repeatSong: boolean;
    setRepeatSong: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  repeatSong,
  setRepeatSong,
}: ControlsProps) => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector(state => state.playlist.isPlaying);
  const currentTrack = useAppSelector(state => state.playlist.tracks[state.playlist.currentTrackIndex]);
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
    if(!currentTrack.audio) return;
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, currentTrack.audio]);

  return (
    <div className={styles.controller}>
      <button
        className={classNames(styles.shuffle, { [styles.active]: shuffle })}
        onClick={() => setShuffle(!shuffle)} />
      <button
        className={styles.prev}
        onClick={() => dispatch(previousTrack())} />
      <button
        className={classNames(styles.play, { [styles.active]: isPlaying })}
        onClick={() => dispatch(setIsPlaying(!isPlaying))} />
      <button
        className={styles.next}
        onClick={() => dispatch(nextTrack())} />
      <button
        className={classNames(styles.repeat, { [styles.active]: repeatSong })}
        onClick={() => setRepeatSong(!repeatSong)} />
    </div>
  );
};

export default Controls;