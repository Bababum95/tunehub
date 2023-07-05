import { useState, useRef, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/hooks/redux-hook';
import { setCurrentTrackIndex } from 'core/store/slices/playlistSlice';
import { ITrack } from 'core/interfeces/spotyfy.interfece';
import styles from './styles/MusicPlayer.module.scss';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import Song from './Song';
import VolumeBar from './VolumeBar';

interface MusicPlayerProps {
  tracks: {track: ITrack}[]
}

const MusicPlayer: FC<MusicPlayerProps> = ({tracks}) => {
  const dispatch = useAppDispatch();
  const trackIndex = useAppSelector(state => state.playlist.current_track_index);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<{track: ITrack}>(tracks[trackIndex]);
  const [repeatSong, setRepeatSong] = useState<boolean>(false);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      dispatch(setCurrentTrackIndex({count: 0}));
      setCurrentTrack(tracks[0]);
    } else {
      setCurrentTrack(tracks[0]);
      dispatch(setCurrentTrackIndex({count: trackIndex + 1}));
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

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
          setCurrentTrack,
          handleNext,
          repeatSong,
          setRepeatSong }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      </div>
      <VolumeBar {...{ audioRef }} />
    </div>
  );
};

export default MusicPlayer;
