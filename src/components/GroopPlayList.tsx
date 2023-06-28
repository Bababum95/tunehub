import { FC, useEffect, useState } from 'react';
import { IPlaylistst } from '../core/interfeces/spotyfy.interfece';
import CardPlayList from './CardPlayList';
import styles from './styles/GroopPlayList.module.scss';
import { getPlaylistsCategoriey } from '../core/services/spotify.service';

interface GroopPlayListProps {
    id: string
    title: string
}
const GroopPlayList: FC<GroopPlayListProps> = ({ id, title }) => {
  const [playLists, setPlayLists] = useState<IPlaylistst[]>();
  useEffect(() => {
    const fetchPlayList = async () => {
      const toplist = await getPlaylistsCategoriey(id, 5);
      setPlayLists(toplist.playlists.items);
    };
    fetchPlayList();
  }, [id]);
  return (
    <>
      <h2 className={styles.name}>{title}</h2>
      <div className={styles.container}>
        {playLists && playLists.map((item) => (
          <CardPlayList
            key={item.id}
            id={item.id}
            image={item.images[0].url}
            name={item.name}
            description={item.description} />
        ))}
      </div>
    </>
  );
};

export default GroopPlayList;