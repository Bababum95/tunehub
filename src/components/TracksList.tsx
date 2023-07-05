import { FC } from 'react';
import { useAppDispatch } from 'core/hooks/redux-hook';
import { setPlaylist } from 'core/store/slices/playlistSlice';
import { IPlaylist } from 'core/interfeces/spotyfy.interfece';
import SongCard from './SongCard';
import styles from './styles/TracksList.module.scss';

interface TracksListProps {
  playList: IPlaylist
}

const TracksList: FC<TracksListProps> = ({ playList }) => {
  const dispatch = useAppDispatch();
  const playTrack = (count: number) => {
    dispatch(setPlaylist({playList, count}));
  };
  return (
    <div className={styles.content}>
      <div className={styles.bacground}/>
      {playList.tracks.items.map((item, index) => (
        <SongCard
          key={item.track.id}
          image={item.track.album.images[2].url}
          title={item.track.name}
          artist={item.track.artists[0].name}
          count={index}
          playTrack={playTrack}
          duration={item.track.duration_ms}
          album={item.track.album.name} />
      ))}
    </div>
  );
};

export default TracksList;