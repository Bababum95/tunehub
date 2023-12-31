import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPlaylist, ITrack } from 'core/interfeces/soundcloud.interfece';
import PlayListPreview from 'components/PlayListPreview';
import TracksList from 'components/TracksList';
import { SoundCloudService } from 'core/services/soundcloud.service';

const SelectPlayList: FC = () => {
  const { id } = useParams();
  const [playListData, setPlayListData] = useState<IPlaylist>();
  const [playList, setPlayList] = useState<ITrack[]>();
  useEffect(() => {
    const fetchCategoriesList = async (id: string) => {
      const data = await SoundCloudService.getPlaylistData(id);
      setPlayListData(data);
      const tracks = await SoundCloudService.getPlaylist(id);
      setPlayList(tracks.tracks.items);
    };
    id && fetchCategoriesList(id);
  }, [id]);
  return (
    <>
      {playListData && (
        <PlayListPreview
          name={playListData.title}
          image={playListData.artworkUrl}
          description={playListData.description} />
      )}
      {playList && playListData && (
        <TracksList {...{playList, playListData}} />
      )}
    </>
  );
};

export default SelectPlayList;