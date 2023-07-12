import { FC } from 'react';
import { useAppDispatch } from 'core/hooks/redux-hook';
import { setIsPlaying, setPlaylist } from 'core/store/slices/playlistSlice';
import { IPlaylist, ITrack } from 'core/interfeces/soundcloud.interfece';
import SongCard from './SongCard';
import styles from './styles/TracksList.module.scss';

interface TracksListProps {
  playList: ITrack[]
  playListData: IPlaylist
}

const TracksList: FC<TracksListProps> = ({ playListData, playList }) => {
  const dispatch = useAppDispatch();
  const playTrack = (count: number) => {
    dispatch(setPlaylist({playList, playListData, count}));
    dispatch(setIsPlaying(true));
  };
  return (
    <div className={styles.content}>
      <div className={styles.bacground}/>
      {playList.map((item, index) => (
        <SongCard
          key={item.id}
          id={item.id}
          image={item.artworkUrl}
          title={item.title}
          artist={item.publisher ? item.publisher.artist : ''}
          count={index}
          playTrack={playTrack}
          duration={item.durationMs}
          album={item.publisher ? item.publisher.albumTitle || '' : item.caption} />
      ))}
    </div>
  );
};

export default TracksList;