import { createHashRouter } from 'react-router-dom';
import App from './App';
import Player from './views/Player';
import PlayList from './views/playlist/PlayList';
import Profile from './views/Profile';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Home from './views/home/Home';
import SelectPlayList from './views/playlist/SelectPlayList';

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
            path: 'select/:id',
            element: <SelectPlayList />,
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