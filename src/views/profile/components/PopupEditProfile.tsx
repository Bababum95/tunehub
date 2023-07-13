import {FC, useState} from 'react';
import classNames from 'classnames';
import styles from './styles/PopupEditProfile.module.scss';
import avatars from '../utils/avatars';

interface PopupEditProfileProps {
    isOpen: boolean
    isLoading: boolean
    avatar: string
    name: string
    handleSubmit: (displayName: string, photoURL: string) => void
    handleClose: () => void
}

const PopupEditProfile: FC<PopupEditProfileProps> = ({isOpen, avatar, name, handleClose, handleSubmit, isLoading}) => {
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [userName, setUserName] = useState(name);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit(userName,userAvatar);
  };

  return (
    <div
      className={classNames(styles.overlay, {[styles.open]: isOpen})}
      onClick={handleClose}
    >
      <div
        className={styles.popup}
        onClick={evt => evt.stopPropagation()}
      >
        <h2 className={styles.title}>Profile details</h2>
        <h3 className={styles.subtitle}>Choose avatar</h3>
        <img className={styles.avatar} src={userAvatar} alt='curent avatar' />
        <button
          className={styles.close}
          onClick={handleClose}
        >
          <span/>
        </button>
        <div className={styles.container}>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`avatar ${index}`}
              onClick={() => setUserAvatar(avatar)}
            />
          ))}
        </div>
        <h3 className={styles.subtitle}>Write display name</h3>
        <form
          className={styles.form}
          onSubmit={onSubmit}
        >
          <input
            className={styles.input}
            type='text'
            value={userName}
            onChange={(evt) => setUserName(evt.target.value)}
          />
          <button
            className={classNames(styles.submit, {[styles.loading]: isLoading})}
            disabled={isLoading}
          >
              Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupEditProfile;