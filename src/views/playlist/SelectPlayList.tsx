import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist } from 'core/services/spotify.service';
import { IPlaylistst } from 'core/interfeces/spotyfy.interfece';
import PlayListPreview from 'components/PlayListPreview';

const SelectPlayList: FC = () => {
  const { id } = useParams();
  const [playListData, setPlayListData] = useState<IPlaylistst>();
  useEffect(() => {
    const fetchCategoriesList = async (id: string) => {
      const data = await getPlaylist(id);
      setPlayListData(data);
      console.log(data);
    };
    id && fetchCategoriesList(id);
  }, [id]);
  return (
    <>
      {playListData &&
        <PlayListPreview
          name={playListData.name}
          image={playListData.images[0].url}
          description={playListData.description} />
      }
    </>
  );
};

export default SelectPlayList;