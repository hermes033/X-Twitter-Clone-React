import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notifications from "~/pages/notifications";
import PageNotFound from "~/pages/pagenotfound";


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
        element: 'messages component'
      },
      {
        path: 'grok',
        element: 'grok component'
      },
      {
        path: 'communities',
        element: 'communities component'
      },
      {
        path: 'premium',
        element: 'premium component'
      },
      {
        path: 'profile',
        element: 'profile component'
      },
      {
        path: '*',
        element: <PageNotFound />
      },
    ]
  },

])

export default routes 