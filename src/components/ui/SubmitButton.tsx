import classNames from 'classnames';
import styles from '../styles/SubmitButton.module.scss';


interface SubmitButtonProps {
  title: string
  disabled?: boolean
  loading?: boolean
}

const SubmitButton = ({ title, disabled, loading }: SubmitButtonProps) => {
  return (
    <button
      className={classNames(styles.button, { [styles.loading]: loading, [styles.disabled]: disabled })}
      disabled={disabled || loading}>
        {title}
    </button>
  )
}

export default SubmitButton