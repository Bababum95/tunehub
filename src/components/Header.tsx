import classNames from "classnames";
import Search from "./Search"
import styles from './styles/Header.module.scss';
import Logo from './svg/HederLogo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.logo, styles.dark)}>
        <Logo />
      </div>
      <Search />
    </header>
  )
}

export default Header