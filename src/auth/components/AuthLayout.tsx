import styles from './AuthLayout.module.scss';
import Logo from '../../components/svg/logo';

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className='body'>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Sign {title} to</h1>
          <Logo />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout