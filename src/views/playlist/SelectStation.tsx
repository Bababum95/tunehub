import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPlaylist, ITrack } from 'core/interfeces/soundcloud.interfece';
import { SoundCloudService } from 'core/services/soundcloud.service';
import PlayListPreview from 'components/PlayListPreview';
import TracksList from 'components/TracksList';
import imagePlaceholger from 'asets/images/cover.jpg';

const SelectStation: FC = () => {
  const { id } = useParams();
  const [playListData, setPlayListData] = useState<IPlaylist>();
  const [playList, setPlayList] = useState<ITrack[]>();
  useEffect(() => {
    const fetchCategoriesList = async (id: string) => {
      const data = await SoundCloudService.getStation(id);
      setPlayListData(data);
      setPlayList(data.tracks);
      console.log(data);

    };
    id && fetchCategoriesList(id);
  }, [id]);
  return (
    <>
      {playListData && playList && (
        <PlayListPreview
          name={playListData.title}
          image={playListData.artworkUrl || playList[0].artworkUrl || imagePlaceholger}
          description={playListData.description} />
      )}
      {playList && playListData && (
        <TracksList {...{playList, playListData}} />
      )}
    </>
  );
};

export default SelectStation;