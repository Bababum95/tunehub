import { createHashRouter } from "react-router-dom";
import App from "./App";
import Player from "./views/Player";
import PlayList from "./views/PlayList";
import Profile from "./views/Profile";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./views/Home";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "player",
              element: <Player />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "playlist",
              element: <PlayList />,
            },
          ],
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
])

export default router;