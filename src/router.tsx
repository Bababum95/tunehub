import { createHashRouter } from 'react-router-dom';
import App from './App';
import Player from './views/Player';
import PlayList from './views/playlist/PlayList';
import Profile from './views/profile/Profile';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Home from './views/home/Home';
import SelectPlayList from './views/playlist/SelectPlayList';
import CurrentPlayList from 'views/playlist/CurrentPlayList';
import SelectStation from 'views/playlist/SelectStation';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'player',
        element: <Player />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'playlist',
        element: <PlayList />,
        children: [
          {
            path: '/playlist',
            element: <CurrentPlayList />,
          },
          {
            path: 'select/:id',
            element: <SelectPlayList />,
          },
          {
            path: 'station/:id',
            element: <SelectStation />,
          },
        ],
      },
    ],
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
]);

export default router;