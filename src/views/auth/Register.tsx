import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormData } from '../../core/interfeces/formData.interfece';
import AuthLayout from './components/AuthLayout';
import AuthForm from './components/AuthForm';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = ({ email, password }: FormData) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        navigate('/', { replace: true });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthLayout title='up'>
      <AuthForm
        {...{ isLoading }}
        buttonText='Sign up'
        handleSubmit={handleRegister} />
      <p>Already have an account?
        <Link style={{ color: '#FACD66' }} to='/login'> Sign in →</Link>
      </p>
    </AuthLayout>
  );
};

export default Register;