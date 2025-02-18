import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Communities from "~/pages/communities";
import Explore from "~/pages/explore";
import Grok from "~/pages/grok";
import Home from "~/pages/home";
import FollowingMainHome from "~/pages/home/folwHome";
import Messages from "~/pages/messages";
import Notifications from "~/pages/notifications";
import PageNotFound from "~/pages/pagenotfound";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: 'explore',
        element: <Explore />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'messages',
        element: <Messages />
      },
      {
        path: 'grok',
        element: <Grok />
      },
      {
        path: 'communities',
        element: <Communities />
      },
      {
        path: 'premium',
        element: <Premium />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: '*',
        element: <PageNotFound />
      },
      {
        path: ':slug',
        element: <Profile />
      },
      {
        path: '/home/following',
        element: <FollowingMainHome />
      }
    ]
  },

])

export default routes 