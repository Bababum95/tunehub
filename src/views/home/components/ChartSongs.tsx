import { FC } from 'react';
import styles from './styles/ChartSongs.module.scss';
import ChartList from './ChartList';


const ChartSongs: FC = ({ }) => {
  return (
    <div >
      <h1 className={styles.title}>Top charts</h1>
      <div className={styles.chart}>
        {/* <div className={styles.mainSong}>
                    <img
                        src={chartList[0].item.header_image_url}
                        alt={`${chartList[0].item.title} cover`}
                        className={styles.mainImage} />
                    <h2 className={styles.name}>{chartList[0].item.title}</h2>
                    <p className={styles.artist}>{chartList[0].item.artist_names}</p>
                    <button className={styles.play} />
                </div>
                <ChartList chartList={chartList.slice(1, 6)} min={2} />
                <ChartList chartList={chartList.slice(6, 11)} min={7} /> */}
      </div>
    </div>
  );
};

export default ChartSongs;