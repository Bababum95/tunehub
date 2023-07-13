import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppSelector } from 'core/hooks/redux-hook';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';

const App = () => {
  const playlist = useAppSelector(state => state.playlist);
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/login', { replace: true });
    });
  }, [auth, navigate]);
  return (
    <div className='body'>
      <Header />
      <Navbar />
      <Outlet />
      {playlist.tracks && (
        <MusicPlayer />
      )}
    </div>
  );
};

export default App;