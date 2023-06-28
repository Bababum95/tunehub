import { FC } from 'react';
import styles from './styles/PlayListPreview.module.scss';

interface PlayListPreviewProps {
    image: string
    name: string
    description: string
}

const PlayListPreview: FC<PlayListPreviewProps> = ({ image, name, description }) => {
  return (
    <>
      <div
        className={styles.cover}
        style={{
          // eslint-disable-next-line max-len
          background: `linear-gradient(180deg, rgba(29, 33, 35, 0.80) 0%, #1D2123 70%), url(${image}), lightgray 50%`,
          backgroundPosition: '50% 60%',
          backgroundSize: 'cover',
        }} />
      <div className={styles.content}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default PlayListPreview;