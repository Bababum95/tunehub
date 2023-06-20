import {useState, FormEvent, FC} from 'react'
import Input from '../../components/ui/Input'
import SubmitButton from '../../components/ui/SubmitButton'
import { FormData } from '../../core/interfeces/formData.interfece'

interface AuthFormProps {
    isLoading: boolean
    buttonText: string
    handleSubmit: (data: FormData) => void
}

const AuthForm: FC<AuthFormProps> = ({isLoading, buttonText, handleSubmit}) => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    })
    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        handleSubmit(formData)
    }
    return (
        <form style={{width: '100%'}} onSubmit={onSubmit}>
            <Input
                name='email'
                title='Email'
                type='email'
                value={formData.email}
                handleChange={(evt) => {setFormData({...formData, email: evt.target.value})}}
                required={true} />
            <Input
                name='password'
                title='Password'
                type='password'
                value={formData.password}
                handleChange={(evt) => {setFormData({...formData, password: evt.target.value})}}
                required={true} />
            <SubmitButton
                title={buttonText}
                loading={isLoading}
                disabled={false} />
        </form>
    )
}

export default AuthForm