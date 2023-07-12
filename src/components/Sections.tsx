import { FC } from 'react';
import { IPlaylist, IStation, IUser } from 'core/interfeces/soundcloud.interfece';
import CardPlayList from './CardPlayList';
import styles from './styles/GroopPlayList.module.scss';
import placeholder from 'asets/images/cover.jpg';
import CardStation from './CardStation';
import CardUser from './CardUser';
interface SectionsProps {
  title: string
  data: (IPlaylist | IStation | IUser)[]
}
const Sections: FC<SectionsProps> = ({ title, data }) => {

  return (
    <>
      <h2 className={styles.name}>{title}</h2>
      <div className={styles.container}>
        {data && data.map((item, index) => (
          <>
            {item.type === 'playlist' && (
              <CardPlayList
                key={item.id + index}
                id={item.id}
                image={item.artworkUrl ? item.artworkUrl : placeholder}
                name={item.title}
              />
            )}
            {item.type === 'station' && (
              <CardStation
                key={item.id}
                id={item.id}
                image={item.artworkUrl ? item.artworkUrl : placeholder}
                name={item.title}
                description={item.description}
              />
            )}
            {item.type === 'user' && (
              <CardUser
                key={`user${item.id}`}
                id={item.id}
                image={item.avatarUrl ? item.avatarUrl : placeholder}
                name={item.name}
              />
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Sections;
