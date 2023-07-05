import { useAppSelector } from 'core/hooks/redux-hook';
import PlayListPreview from 'components/PlayListPreview';
import TracksList from 'components/TracksList';

const CurrentPlayList = () => {
  const playlist = useAppSelector(state => state.playlist);

  return (
    <>
      {playlist.id && (
        <PlayListPreview
          name={playlist.name}
          image={playlist.images[0].url}
          description={playlist.description} />
      )} {playlist.tracks && (
        <TracksList playList={playlist} />
      )}
    </>
  );
};

export default CurrentPlayList;