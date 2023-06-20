import { ChangeEvent } from 'react';
import styles from '../styles/Input.module.scss';

interface InputProps {
    type: 'text' | 'email' | 'password'
    name: string
    required: boolean
    title: string
    value?: string
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type, name, required, title, value, handleChange}: InputProps) => {
    return (
        <label className={styles.label}>
            {title}
            <input
                className={styles.input}
                type={type} name={name}
                placeholder={title}
                required={required}
                onChange={handleChange}
                value={value}
                 />
        </label>
    )
}

export default Input