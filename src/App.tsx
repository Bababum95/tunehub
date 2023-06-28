import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';

const App = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
      } else {
        navigate('/login', { replace: true });
      }
    });
  }, [auth, navigate]);
  return (
    <div className='body'>
      <Header />
      <Navbar />
      <Outlet />
      <MusicPlayer />
    </div>
  );
};

export default App;