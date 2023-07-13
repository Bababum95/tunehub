import { FC } from 'react';
import styles from './styles/Preview.module.scss';

interface PreviewProps {
    image: string
    bgImage: string
    name: string
    description: string
    handleEditProfile: () => void
}

const Preview: FC<PreviewProps> = ({ image, name, description, bgImage, handleEditProfile }) => {
  return (
    <>
      <div
        className={styles.cover}
        style={{
          // eslint-disable-next-line max-len
          background: `linear-gradient(180deg, rgba(29, 33, 35, 0.40) 0%, #1D2123 80%), url(${bgImage}), lightgray 50%`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 60%',
        }} />
      <div className={styles.content}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.wrapper}>
            <p className={styles.description}>{description}</p>
            <button className={styles.edit} onClick={handleEditProfile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;