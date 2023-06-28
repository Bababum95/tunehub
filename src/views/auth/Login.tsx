import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormData } from '../../core/interfeces/formData.interfece';
import AuthLayout from './components/AuthLayout';
import AuthForm from './components/AuthForm';


const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = ({ email, password }: FormData) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        navigate('/', { replace: true });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };
  return (
    <AuthLayout title='in'>
      <AuthForm
        {...{ isLoading }}
        buttonText='Sign in'
        handleSubmit={handleLogin} />
      <p>Don't have an account?
        <Link style={{ color: '#FACD66' }} to='/register'> Sign up →</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;