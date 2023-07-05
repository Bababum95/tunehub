import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import classNames from 'classnames';
import { Home, PlayList, Profile } from './svg';
import styles from './styles/Navbar.module.scss';
import Player from './svg/Player';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login', {replace: true});
    // eslint-disable-next-line no-console
    }).catch(console.error);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink
        className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
        to='/' end>
        <Home />
      </NavLink>
      <NavLink
        className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
        to='player'>
        <Player />
      </NavLink>
      <NavLink
        className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
        to='playlist'>
        <PlayList />
      </NavLink>
      <div className={styles.user}>
        <NavLink
          className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          to='profile'>
          <Profile />
        </NavLink>
        <div className={styles.spoiler}>
          <div className={styles.container}>
            <NavLink className={styles.profile} to='profile'>Profile</NavLink>
            <button
              className={styles.logout}
              onClick={handleLogout} >
                            Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;