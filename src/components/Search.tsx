import { SearchIcon } from "./svg"
import styles from './styles/Search.module.scss';

const Search = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <button className={styles.button}>
          <SearchIcon />
        </button>
        <input type="search" className={styles.input} placeholder='Search' />
      </label>
    </form>
  )
}

export default Search