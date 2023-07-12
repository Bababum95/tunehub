import { useState, RefObject, useEffect, FC } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'core/hooks/redux-hook';
import { addAudio, nextTrack } from 'core/store/slices/playlistSlice';
import { SoundCloudService } from 'core/services/soundcloud.service';
import styles from './styles/Song.module.scss';

interface SongProps {
    audioRef: RefObject<HTMLAudioElement>
    setDuration: React.Dispatch<React.SetStateAction<number>>
    progressBarRef: RefObject<HTMLInputElement>
    repeatSong: boolean
}

const Song: FC<SongProps> = ({ audioRef, setDuration, progressBarRef, repeatSong }) => {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector(state => state.playlist.tracks[state.playlist.currentTrackIndex]);
  const [like, setLike] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchTrack = async () => {
      const data = await SoundCloudService.getTrack(String(currentTrack.id));
      dispatch(addAudio({audio: data.audio[0].url}));
    };
    if(!currentTrack.audio){
      fetchTrack();
    }
  }, [currentTrack, dispatch]);

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    setDuration(seconds || 0);
    progressBarRef.current?.setAttribute('max', String(seconds));
  };
  const onEnded = () => {
    repeatSong? audioRef.current?.play() : handleNext();
  };

  return (
    <div className={classNames(styles.song, {[styles.load]: !currentTrack.audio})}>
      {currentTrack.audio && (
        <audio
          className={styles.audio}
          src={currentTrack.audio}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={onEnded}
          controls />
      )}
      <img
        className={styles.cover}
        src={currentTrack.artworkUrl}
        alt={`${currentTrack.title} audio avatar`} />
      <div>
        <h3 className={styles.title}>{currentTrack.title}</h3>
        <p className={styles.musician}>{currentTrack.publisher.artist}</p>
      </div>
      <button
        className={classNames(styles.like, { [styles.active]: like })}
        onClick={() => setLike(!like)} />
    </div>
  );
};

export default Song;
