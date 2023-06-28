import {FC} from 'react';
import styles from './styles/ChartList.module.scss';
import SongCard from '../../../components/SongCard';


interface ChartSongsProps {
    min: number
}

const ChartList: FC<ChartSongsProps> = ({ min}) => {
  return (
    <div className={styles.container}>
      {/* {chartList.map((song, index) => (
        <SongCard
          key={song.item.id}
          count={index + min}
          image={song.item.song_art_image_thumbnail_url}
          title={song.item.title}
          artist={song.item.artist_names} />
      ))} */}
    </div>
  );
};

export default ChartList;